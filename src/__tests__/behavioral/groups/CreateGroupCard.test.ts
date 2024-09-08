import { formAssert, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import {
    FormCardViewController,
    SpyFormCardViewController,
} from '@sprucelabs/spruce-form-utils'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import CreateGroupCardViewController from '../../../viewControllers/CreateGroupCard.vc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class CreateGroupCardTest extends AbstractAdventureTest {
    private static vc: SpyCreateGroupCard

    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.views.setController(
            'adventure.create-group-card',
            SpyCreateGroupCard
        )
        this.views.setController('forms.card', SpyFormCardViewController)
        this.vc = this.views.Controller(
            'adventure.create-group-card',
            {}
        ) as SpyCreateGroupCard
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

class SpyCreateGroupCard extends CreateGroupCardViewController {
    public getFormVc() {
        return (this.formCardVc as SpyFormCardViewController).formVc
    }
}
