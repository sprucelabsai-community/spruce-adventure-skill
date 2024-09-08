import { interactor, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, errorAssert, generateId, test } from '@sprucelabs/test-utils'
import { AdventureWithPerson } from '../../../../adventure.types'
import AdventureCardViewController from '../../../../listing/AdventureCard.vc'
import BaseAdventureCardViewController from '../../../../listing/BaseAdventureCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { RsvpTargetAndPayload } from '../../../support/EventFaker'
import generateAdventureWithPersonValues from '../../../support/generateAdventureWithPersonValues'

@fake.login()
export default class AdventureCardTest extends AbstractAdventureTest {
    private static vc: AdventureCardViewController
    private static adventure: AdventureWithPerson
    private static lastPassedTargetAndPayload: RsvpTargetAndPayload | undefined

    protected static async beforeEach() {
        await super.beforeEach()
        this.adventure = generateAdventureWithPersonValues()
        this.setupVcWithAdventure(this.adventure)
        this.lastPassedTargetAndPayload = undefined
        await this.eventFaker.fakeRsvp((targetAndPayload) => {
            this.lastPassedTargetAndPayload = targetAndPayload
        })
    }

    @test()
    protected static async throwsWithMissing() {
        const err = assert.doesThrow(() =>
            //@ts-ignore
            this.views.Controller('adventure.adventure-card', {})
        )

        errorAssert.assertError(err, 'MISSING_PARAMETERS', {
            parameters: ['adventure', 'loggedInPersonId'],
        })
    }

    @test()
    protected static async adventureCardRendersBase() {
        vcAssert.assertRendersAsInstanceOf(
            this.vc,
            BaseAdventureCardViewController
        )
    }

    @test()
    protected static async adventureCardRendersInOutButtons() {
        vcAssert.assertCardRendersButtons(this.vc, ['in', 'out'])
    }

    @test()
    protected static async clickingImInRendersConfirm() {
        await this.assertClickingImInRendersConfirm()
    }

    @test()
    protected static async clickingImOutRendersConfirm() {
        await this.assertClickingImOutRendersConfirm()
    }

    @test()
    protected static inButtonSelectedIfIn() {
        this.setupVcWithWhosIn([this.fakedPerson.id])
        this.assertImInButtonSelected()
    }

    @test()
    protected static inNotSelectedIfPersonNotRsvpd() {
        this.setupVcWithWhosIn([generateId()])
        this.assertNoButtonSelected()
    }

    @test()
    protected static knowsIfPersonIsNotFirstRsvp() {
        this.setupVcWithWhosIn([generateId(), this.fakedPerson.id])
        this.assertImInButtonSelected()
    }

    @test()
    protected static async outButtonSelectedIfOUt() {
        this.setupVcWithWhosOut([this.fakedPerson.id])
        this.assertImOutButtonSelected()
    }

    @test()
    protected static async outButtonMtachesId() {
        this.setupVcWithWhosOut([generateId()])
        this.assertNoButtonSelected()
    }

    @test()
    protected static async canMatchOutWhenNotFirst() {
        this.setupVcWithWhosOut([generateId(), this.fakedPerson.id])
        this.assertImOutButtonSelected()
    }

    @test()
    protected static async passesExpectedTargetToRsvpListener() {
        const confirmVc = await this.assertClickingImInRendersConfirm()
        await confirmVc.accept()
        this.assertLastCanIMakeItInPayloadEquals(true)
    }

    @test()
    protected static async passesExpectedTargetToRsvpListenerWhenOut() {
        const confirmVc = await this.assertClickingImOutRendersConfirm()
        await confirmVc.accept()
        this.assertLastCanIMakeItInPayloadEquals(false)
    }

    @test()
    protected static async doesNotRsvpOnDecline() {
        await this.clickImOutAndDecline()
        assert.isUndefined(this.lastPassedTargetAndPayload)
    }

    @test()
    protected static async decliningDoesNotSelectAButton() {
        await this.clickImOutAndDecline()
        this.assertNoButtonSelected()
    }

    private static async clickImOutAndDecline() {
        const confirmVc = await this.assertClickingImOutRendersConfirm()
        await confirmVc.decline()
    }

    private static assertLastCanIMakeItInPayloadEquals(canIMakeIt: boolean) {
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

    private static setupVcWithWhosIn(whosIn: string[]) {
        const adventure = generateAdventureWithPersonValues()
        adventure.whosIn = whosIn
        this.setupVcWithAdventure(adventure)
    }

    private static setupVcWithWhosOut(whosOut: string[]) {
        const adventure = generateAdventureWithPersonValues()
        adventure.whosOut = whosOut
        this.setupVcWithAdventure(adventure)
    }

    private static assertImInButtonSelected() {
        const [inVc, outVc] = this.getRsvpButtons()
        assert.isTrue(this.views.render(inVc).isSelected)
        assert.isFalse(this.views.render(outVc).isSelected)
    }

    private static assertImOutButtonSelected() {
        const [inVc, outVc] = this.getRsvpButtons()
        assert.isFalse(this.views.render(inVc).isSelected)
        assert.isTrue(this.views.render(outVc).isSelected)
    }

    private static assertNoButtonSelected() {
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

    private static async assertClickingImInRendersConfirm() {
        return vcAssert.assertRendersConfirm(this.vc, async () => {
            await interactor.clickButton(this.vc, 'in')
        })
    }

    private static getRsvpButtons() {
        return vcAssert.assertCardRendersButtons(this.vc, ['in', 'out'])
    }

    private static async assertClickingImOutRendersConfirm() {
        return vcAssert.assertRendersConfirm(this.vc, async () => {
            await interactor.clickButton(this.vc, 'out')
        })
    }

    private static setupVcWithAdventure(adventure: AdventureWithPerson) {
        this.vc = this.views.Controller('adventure.adventure-card', {
            adventure,
            loggedInPersonId: this.fakedPerson.id,
        })
    }
}
