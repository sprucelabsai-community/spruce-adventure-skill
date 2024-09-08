import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    ListViewController,
} from '@sprucelabs/heartwood-view-controllers'
import {
    buildFormCard,
    FormCardViewController,
} from '@sprucelabs/spruce-form-utils'
import groupSchema from '#spruce/schemas/adventure/v2022_09_09/group.schema'

export default class CreateGroupCardViewController extends AbstractViewController<Card> {
    public static id = 'create-group-card'
    protected formCardVc: FormCardViewController
    private listVc: ListViewController

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.getVcFactory().setController('forms.card', FormCardViewController)

        this.listVc = this.Controller('list', {
            id: 'friends',
            rows: [],
        })
        this.formCardVc = this.FormVc()
    }

    private FormVc(): FormCardViewController<any> {
        return this.Controller(
            'forms.card',
            buildFormCard({
                header: {
                    title: 'Invite friends to your group!',
                },
                schema: groupSchema,
                sections: [
                    {
                        fields: [
                            'title',
                            { name: 'description', renderAs: 'textarea' },
                        ],
                    },
                    {
                        list: this.listVc.render(),
                    },
                ],
            })
        )
    }

    public render() {
        return this.formCardVc.render()
    }
}
