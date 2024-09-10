import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    SpruceSchemas,
} from '@sprucelabs/heartwood-view-controllers'
import {
    buildFormCard,
    FormCardViewController,
} from '@sprucelabs/spruce-form-utils'
import groupSchema from '#spruce/schemas/adventure/v2022_09_09/group.schema'
import { Group } from '../adventure.types'

export default class GroupFormCardViewController extends AbstractViewController<Card> {
    public static id = 'group-form-card'
    protected formCardVc: FormCardViewController<GroupSchema>
    private onCancelHandler: OnCancelHandler
    private onSubmitHandler: OnSubmitHandler

    public constructor(options: ViewControllerOptions & GroupFormCardOptions) {
        super(options)

        const { id, onCancel, onSubmit } = options

        this.onCancelHandler = onCancel
        this.onSubmitHandler = onSubmit

        this.getVcFactory().setController('forms.card', FormCardViewController)
        this.formCardVc = this.FormVc(id)
    }

    private FormVc(id?: string) {
        return this.Controller(
            'forms.card',
            buildFormCard({
                id,
                header: {
                    title: 'Create your new group!',
                },
                schema: groupSchema,
                onCancel: this.onCancelHandler,
                onSubmit: async ({ values }) => {
                    this.formCardVc.setIsBusy(true)
                    await this.onSubmitHandler(values as GroupFormValues)
                    this.formCardVc.setIsBusy(false)
                },
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

    public async setValues(group: Partial<Group>) {
        this.formCardVc.setHeaderTitle(group.title!)
        await this.formCardVc.setValues(group)
    }

    public render() {
        return this.formCardVc.render()
    }
}

type OnCancelHandler = () => void
export type GroupFormValues = Pick<Required<Group>, 'title' | 'description'>

type OnSubmitHandler = (values: GroupFormValues) => void | Promise<void>

interface GroupFormCardOptions {
    id?: string
    onCancel: OnCancelHandler
    onSubmit: OnSubmitHandler
}

export type GroupSchema = SpruceSchemas.Adventure.v2022_09_09.GroupSchema
