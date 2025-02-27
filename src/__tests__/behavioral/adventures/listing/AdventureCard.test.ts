import { interactor, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import {
    assert,
    errorAssert,
    generateId,
    test,
    suite,
} from '@sprucelabs/test-utils'
import { ListAdventure } from '../../../../adventure.types'
import AdventureCardViewController from '../../../../adventures/listing/AdventureCard.vc'
import BaseAdventureCardViewController from '../../../../adventures/listing/BaseAdventureCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { RsvpTargetAndPayload } from '../../../support/EventFaker'
import generateAdventureWithPersonValues from '../../../support/generateAdventureWithPersonValues'

@fake.login()
@suite()
export default class AdventureCardTest extends AbstractAdventureTest {
    private vc!: AdventureCardViewController
    private adventure!: ListAdventure
    private lastPassedTargetAndPayload!: RsvpTargetAndPayload | undefined

    protected async beforeEach() {
        await super.beforeEach()
        this.adventure = generateAdventureWithPersonValues()
        this.setupVcWithAdventure(this.adventure)
        this.lastPassedTargetAndPayload = undefined
        await this.eventFaker.fakeRsvp((targetAndPayload) => {
            this.lastPassedTargetAndPayload = targetAndPayload
        })
    }

    @test()
    protected async throwsWithMissing() {
        const err = assert.doesThrow(() =>
            //@ts-ignore
            this.views.Controller('adventure.adventure-card', {})
        )

        errorAssert.assertError(err, 'MISSING_PARAMETERS', {
            parameters: ['adventure', 'loggedInPersonId'],
        })
    }

    @test()
    protected async adventureCardRendersBase() {
        vcAssert.assertRendersAsInstanceOf(
            this.vc,
            BaseAdventureCardViewController
        )
    }

    @test()
    protected async adventureCardRendersInOutButtons() {
        vcAssert.assertCardRendersButtons(this.vc, ['in', 'out'])
    }

    @test()
    protected async clickingImInRendersConfirm() {
        await this.assertClickingImInRendersConfirm()
    }

    @test()
    protected async clickingImOutRendersConfirm() {
        await this.assertClickingImOutRendersConfirm()
    }

    @test()
    protected inButtonSelectedIfIn() {
        this.setupVcWithWhosIn([this.fakedPerson.id])
        this.assertImInButtonSelected()
    }

    @test()
    protected inNotSelectedIfPersonNotRsvpd() {
        this.setupVcWithWhosIn([generateId()])
        this.assertNoButtonSelected()
    }

    @test()
    protected knowsIfPersonIsNotFirstRsvp() {
        this.setupVcWithWhosIn([generateId(), this.fakedPerson.id])
        this.assertImInButtonSelected()
    }

    @test()
    protected async outButtonSelectedIfOUt() {
        this.setupVcWithWhosOut([this.fakedPerson.id])
        this.assertImOutButtonSelected()
    }

    @test()
    protected async outButtonMtachesId() {
        this.setupVcWithWhosOut([generateId()])
        this.assertNoButtonSelected()
    }

    @test()
    protected async canMatchOutWhenNotFirst() {
        this.setupVcWithWhosOut([generateId(), this.fakedPerson.id])
        this.assertImOutButtonSelected()
    }

    @test()
    protected async passesExpectedTargetToRsvpListener() {
        const confirmVc = await this.assertClickingImInRendersConfirm()
        await confirmVc.accept()
        this.assertLastCanIMakeItInPayloadEquals(true)
    }

    @test()
    protected async passesExpectedTargetToRsvpListenerWhenOut() {
        const confirmVc = await this.assertClickingImOutRendersConfirm()
        await confirmVc.accept()
        this.assertLastCanIMakeItInPayloadEquals(false)
    }

    @test()
    protected async doesNotRsvpOnDecline() {
        await this.clickImOutAndDecline()
        assert.isUndefined(this.lastPassedTargetAndPayload)
    }

    @test()
    protected async decliningDoesNotSelectAButton() {
        await this.clickImOutAndDecline()
        this.assertNoButtonSelected()
    }

    private async clickImOutAndDecline() {
        const confirmVc = await this.assertClickingImOutRendersConfirm()
        await confirmVc.decline()
    }

    private assertLastCanIMakeItInPayloadEquals(canIMakeIt: boolean) {
        delete this.lastPassedTargetAndPayload?.source
        assert.isEqualDeep(this.lastPassedTargetAndPayload, {
            target: {
                adventureId: this.adventure.id,
            },
            payload: {
                canIMakeIt,
            },
        })
    }

    private setupVcWithWhosIn(whosIn: string[]) {
        const adventure = generateAdventureWithPersonValues()
        adventure.whosIn = whosIn
        this.setupVcWithAdventure(adventure)
    }

    private setupVcWithWhosOut(whosOut: string[]) {
        const adventure = generateAdventureWithPersonValues()
        adventure.whosOut = whosOut
        this.setupVcWithAdventure(adventure)
    }

    private assertImInButtonSelected() {
        const [inVc, outVc] = this.getRsvpButtons()
        assert.isTrue(this.views.render(inVc).isSelected)
        assert.isFalse(this.views.render(outVc).isSelected)
    }

    private assertImOutButtonSelected() {
        const [inVc, outVc] = this.getRsvpButtons()
        assert.isFalse(this.views.render(inVc).isSelected)
        assert.isTrue(this.views.render(outVc).isSelected)
    }

    private assertNoButtonSelected() {
        const [inVc, outVc] = this.getRsvpButtons()
        assert.isFalsy(
            this.views.render(inVc).isSelected,
            "did not expect i'm in to be selected, but it was"
        )
        assert.isFalsy(
            this.views.render(outVc).isSelected,
            "did not expect i'm out to be selected, but it was"
        )
    }

    private async assertClickingImInRendersConfirm() {
        return vcAssert.assertRendersConfirm(this.vc, async () => {
            await interactor.clickButton(this.vc, 'in')
        })
    }

    private getRsvpButtons() {
        return vcAssert.assertCardRendersButtons(this.vc, ['in', 'out'])
    }

    private async assertClickingImOutRendersConfirm() {
        return vcAssert.assertRendersConfirm(this.vc, async () => {
            await interactor.clickButton(this.vc, 'out')
        })
    }

    private setupVcWithAdventure(adventure: ListAdventure) {
        this.vc = this.views.Controller('adventure.adventure-card', {
            adventure,
            loggedInPersonId: this.fakedPerson.id,
        })
    }
}
