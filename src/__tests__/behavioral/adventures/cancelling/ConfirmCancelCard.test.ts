import { formAssert, interactor } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import {
    test,
    suite,
    assert,
    errorAssert,
    generateId,
} from '@sprucelabs/test-utils'
import ConfirmCancelCardViewController from '../../../../adventures/cancelling/ConfirmCancelCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
@suite()
export default class ConfirmCancelCardTest extends AbstractAdventureTest {
    private vc!: SpyConfirmCancelCard
    private wasOnCancelHit!: boolean
    private onSubmitMessage!: string | undefined | null

    protected async beforeEach(): Promise<void> {
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
    protected async throwsWhenMissingRequired() {
        const err = assert.doesThrow(() =>
            //@ts-ignore
            this.views.Controller('adventure.confirm-cancel-card', {})
        )
        errorAssert.assertError(err, 'MISSING_PARAMETERS', {
            parameters: ['onConfirm', 'onCancel'],
        })
    }

    @test()
    protected async rendersForm() {
        formAssert.cardRendersForm(this.vc)
    }

    @test()
    protected doesNotRenderCancelButton() {
        assert.isFalse(this.formVc.getShouldRenderCancelButton())
    }

    @test()
    protected async formRendersExpectedFields() {
        formAssert.formRendersField(this.formVc, 'message')
    }

    @test()
    protected async messageFieldRendersAsTextArea() {
        formAssert.formFieldRendersAs(this.formVc, 'message', 'textarea')
    }

    @test()
    protected async cancelButtonOnFormInvokesOnCancel() {
        await interactor.cancelForm(this.formVc)
        assert.isTruthy(this.wasOnCancelHit)
    }

    @test()
    protected async submittingFormInvokesOnConfirmWithMessage() {
        const message = generateId()
        await this.formVc.setValue('message', message)
        await interactor.submitForm(this.formVc)
        assert.isEqual(this.onSubmitMessage, message)
    }

    private get formVc() {
        return this.vc.getFormVc()
    }
}

class SpyConfirmCancelCard extends ConfirmCancelCardViewController {
    public getFormVc() {
        return this.formVc
    }
}
