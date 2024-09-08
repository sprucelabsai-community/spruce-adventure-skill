import { formAssert, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import {
    FormCardViewController,
    SpyFormCardViewController,
} from '@sprucelabs/spruce-form-utils'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import { SpyGroupFormCard } from './SpyGroupFormCard'

@fake.login()
export default class GroupFormCardTest extends AbstractAdventureTest {
    private static vc: SpyGroupFormCard

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.views.setController('adventure.group-form-card', SpyGroupFormCard)
        this.views.setController('forms.card', SpyFormCardViewController)
        this.vc = this.views.Controller('adventure.group-form-card', {
            onCancel: () => {},
        }) as SpyGroupFormCard
    }

    @test()
    protected static async rendersAsFormCard() {
        vcAssert.assertRendersAsInstanceOf(this.vc, FormCardViewController)
    }

    @test()
    protected static async rendersAForm() {
        formAssert.cardRendersForm(this.vc)
    }

    @test()
    protected static async rendersExpectedFields() {
        formAssert.formRendersFields(this.vc.getFormVc(), [
            'title',
            'description',
        ])
    }
}
