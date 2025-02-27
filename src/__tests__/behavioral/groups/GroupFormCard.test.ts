import { formAssert, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import {
    FormCardViewController,
    SpyFormCardViewController,
} from '@sprucelabs/spruce-form-utils'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, suite } from '@sprucelabs/test-utils'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import { SpyGroupFormCard } from './SpyGroupFormCard'

@fake.login()
@suite()
export default class GroupFormCardTest extends AbstractAdventureTest {
    private vc!: SpyGroupFormCard

    protected async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.views.setController('adventure.group-form-card', SpyGroupFormCard)
        this.views.setController('forms.card', SpyFormCardViewController)
        this.vc = this.views.Controller('adventure.group-form-card', {
            onCancel: () => {},
            onSubmit: () => {},
        }) as SpyGroupFormCard
    }

    @test()
    protected async rendersAsFormCard() {
        vcAssert.assertRendersAsInstanceOf(this.vc, FormCardViewController)
    }

    @test()
    protected async rendersAForm() {
        formAssert.cardRendersForm(this.vc)
    }

    @test()
    protected async rendersExpectedFields() {
        formAssert.formRendersFields(this.vc.getFormVc(), [
            'title',
            'description',
        ])
    }
}
