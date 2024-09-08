import { formAssert, interactor } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, errorAssert, generateId } from '@sprucelabs/test-utils'
import ConfirmCancelCardViewController from '../../../../adventures/cancelling/ConfirmCancelCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
export default class ConfirmCancelCardTest extends AbstractAdventureTest {
    private static vc: SpyConfirmCancelCard
    private static wasOnCancelHit: boolean
    private static onSubmitMessage: string | undefined | null

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.wasOnCancelHit = false
        delete this.onSubmitMessage

        this.views.setController(
            'adventure.confirm-cancel-card',
            SpyConfirmCancelCard
        )
        this.vc = this.views.Controller('adventure.confirm-cancel-card', {
            onConfirm: async (message) => {
                this.onSubmitMessage = message
            },
            onCancel: async () => {
                this.wasOnCancelHit = true
            },
        }) as SpyConfirmCancelCard
    }

    @test()
    protected static async throwsWhenMissingRequired() {
        const err = assert.doesThrow(() =>
            //@ts-ignore
            this.views.Controller('adventure.confirm-cancel-card', {})
        )
        errorAssert.assertError(err, 'MISSING_PARAMETERS', {
            parameters: ['onConfirm', 'onCancel'],
        })
    }

    @test()
    protected static async rendersForm() {
        formAssert.cardRendersForm(this.vc)
    }

    @test()
    protected static async formRendersExpectedFields() {
        formAssert.formRendersField(this.formVc, 'message')
    }

    @test()
    protected static async messageFieldRendersAsTextArea() {
        formAssert.formFieldRendersAs(this.formVc, 'message', 'textarea')
    }

    @test()
    protected static async cancelButtonOnFormInvokesOnCancel() {
        await interactor.cancelForm(this.formVc)
        assert.isTruthy(this.wasOnCancelHit)
    }

    @test()
    protected static async submittingFormInvokesOnConfirmWithMessage() {
        const message = generateId()
        await this.formVc.setValue('message', message)
        await interactor.submitForm(this.formVc)
        assert.isEqual(this.onSubmitMessage, message)
    }

    private static get formVc() {
        return this.vc.getFormVc()
    }
}

class SpyConfirmCancelCard extends ConfirmCancelCardViewController {
    public getFormVc() {
        return this.formVc
    }
}
