import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
} from '@sprucelabs/heartwood-view-controllers'
import {
    buildFormCard,
    FormCardViewController,
} from '@sprucelabs/spruce-form-utils'
import groupSchema from '#spruce/schemas/adventure/v2022_09_09/group.schema'

export default class GroupFormCardViewController extends AbstractViewController<Card> {
    public static id = 'group-form-card'
    protected formCardVc: FormCardViewController
    private onCancelHandler: () => void

    public constructor(options: ViewControllerOptions & GroupFormCardOptions) {
        super(options)

        const { id, onCancel } = options

        this.onCancelHandler = onCancel
        this.getVcFactory().setController('forms.card', FormCardViewController)
        this.formCardVc = this.FormVc(id)
    }

    private FormVc(id?: string): FormCardViewController<any> {
        return this.Controller(
            'forms.card',
            buildFormCard({
                id,
                header: {
                    title: 'Invite friends to your group!',
                },
                schema: groupSchema,
                onCancel: this.onCancelHandler,
                sections: [
                    {
                        fields: [
                            'title',
                            { name: 'description', renderAs: 'textarea' },
                        ],
                    },
                ],
            })
        )
    }

    public render() {
        return this.formCardVc.render()
    }
}

interface GroupFormCardOptions {
    id?: string
    onCancel: () => void
}
