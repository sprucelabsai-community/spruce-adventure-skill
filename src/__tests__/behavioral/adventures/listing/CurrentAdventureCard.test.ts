import {
    interactor,
    mapAssert,
    mapInteractor,
    vcAssert,
    vcDurationAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, suite, assert, generateId } from '@sprucelabs/test-utils'
import { errorAssert } from '@sprucelabs/test-utils'
import { ListAdventure } from '../../../../adventure.types'
import CurrentAdventureCardViewController from '../../../../adventures/listing/CurrentAdventureCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import generateAdventureWithPersonValues from '../../../support/generateAdventureWithPersonValues'
import { assertActionRendersConfirmCancelDialog } from './assertActionRendersConfirmCancelDialog'
import ControlledConfirmCancelCard from './ControlledConfirmCancelCard'

@fake.login()
@suite()
export default class CurrentAdventureCardTest extends AbstractAdventureTest {
    private vc!: CurrentAdventureCardViewController
    private adventure!: ListAdventure
    private didCancelHandlerInvoked!: boolean

    protected async beforeEach() {
        await super.beforeEach()

        vcDurationAssert.beforeEach(this.views.getFactory())
        this.adventure = generateAdventureWithPersonValues()
        this.didCancelHandlerInvoked = false

        this.views.setController(
            'adventure.confirm-cancel-card',
            ControlledConfirmCancelCard
        )

        this.vc = this.views.Controller('adventure.current-adventure-card', {
            adventure: this.adventure,
            onDidCancel: () => {
                this.didCancelHandlerInvoked = true
            },
        })
    }

    @test()
    protected async throwsIfMissingAdventure() {
        const err = assert.doesThrow(() =>
            //@ts-ignore
            this.views.Controller('adventure.current-adventure-card', {})
        )

        errorAssert.assertError(err, 'MISSING_PARAMETERS', {
            parameters: ['adventure', 'onDidCancel'],
        })
    }

    @test()
    protected async rendersMapWithExpectedPin() {
        const mapVc = this.mapVc
        mapAssert.assertMapHasPin(mapVc, {
            address: this.adventure.where,
            buttons: [
                {
                    id: 'navigation',
                },
            ],
        })
    }

    @test()
    protected async clickingNavButtonOnPinOpensNavigation() {
        await mapInteractor.clickButtonOnPin(this.mapVc, 0, 'navigation')
        const maps = this.views.getMaps()
        assert.isEqualDeep(maps.lastOpenNavigationOptions, {
            to: this.mapVc.getPins()![0].address,
        })
    }

    @test()
    protected async assertCurrentCardRendersCancelButton() {
        vcAssert.assertCardRendersButton(this.vc, 'cancel')
    }

    @test()
    protected async clickingCancelRendersConfirm() {
        await this.clickCancelAndAssertConfirm()
    }

    @test()
    protected async confirmingCancelEmitsCancelEvent() {
        let passedMessage: string | undefined | null
        const message = generateId()

        await this.eventFaker.fakeCancelAdventure((payload) => {
            passedMessage = payload?.message
        })

        const { confirmCancelVc: confirm } =
            await this.clickCancelAndAssertConfirm()

        await confirm.accept(message)

        assert.isEqual(passedMessage, message)
    }

    @test()
    protected async decliningCancelDoesNotEmit() {
        let wasHit = false
        await this.eventFaker.fakeCancelAdventure(() => {
            wasHit = true
        })

        const { confirmCancelVc: confirm, dlgVc } =
            await this.clickCancelAndAssertConfirm()

        await confirm.decline()

        vcAssert.assertDialogWasClosed(dlgVc)

        assert.isFalse(wasHit)
        assert.isFalse(this.didCancelHandlerInvoked)
    }

    private get mapVc() {
        return mapAssert.assertCardRendersMap(this.vc)
    }

    private async clickCancelAndAssertConfirm() {
        const action = () => interactor.clickButton(this.vc, 'cancel')
        const vc = this.vc

        const { confirmCancelVc, dlgVc } =
            await assertActionRendersConfirmCancelDialog(vc, action)

        return { confirmCancelVc, dlgVc }
    }
}
