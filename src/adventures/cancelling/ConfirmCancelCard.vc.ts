import {
    AbstractViewController,
    ViewControllerOptions,
    Card,
    buildForm,
    CardViewController,
    FormViewController,
} from '@sprucelabs/heartwood-view-controllers'
import { assertOptions, buildSchema } from '@sprucelabs/schema'

export default class ConfirmCancelCardViewController extends AbstractViewController<Card> {
    public static id = 'confirm-cancel-card'
    protected formVc: FormViewController<ConfirmCancelFormSchema>
    private cardVc: CardViewController
    protected onCancelHandler: OnCancelCancelHandler
    protected onConfirmHandler: OnConfirmCancelHandler

    public constructor(
        options: ViewControllerOptions & ConfirmCancelCardOptions
    ) {
        super(options)

        const { onCancel, onConfirm } = assertOptions(options, [
            'onConfirm',
            'onCancel',
        ])

        this.onConfirmHandler = onConfirm
        this.onCancelHandler = onCancel
        this.formVc = this.Formvc()
        this.cardVc = this.CardVc()
    }

    private CardVc(): CardViewController {
        return this.Controller('card', {
            header: {
                title: 'Are you sure you want to cancel?',
            },
            body: {
                sections: [
                    {
                        form: this.formVc.render(),
                    },
                ],
            },
        })
    }

    private Formvc() {
        return this.Controller(
            'form',
            buildForm({
                schema: confirmCancelFormSchema,
                sections: [
                    {
                        fields: [{ name: 'message', renderAs: 'textarea' }],
                    },
                ],
                onCancel: this.onCancelHandler,
                submitButtonLabel: 'Cancel this Adventure',
                shouldRenderCancelButton: false,
                onSubmit: async ({ values }) => {
                    this.cardVc.setIsBusy(true)
                    await this.onConfirmHandler(values?.message)
                },
            })
        )
    }

    public render() {
        return this.cardVc.render()
    }
}

type OnConfirmCancelHandler = (
    message: string | undefined | null
) => Promise<void>
type OnCancelCancelHandler = () => Promise<void>

interface ConfirmCancelCardOptions {
    onConfirm: OnConfirmCancelHandler
    onCancel: OnCancelCancelHandler
}

const confirmCancelFormSchema = buildSchema({
    id: 'confirmCancelForm',
    fields: {
        message: {
            type: 'text',
            label: 'Cancel message',
            hint: 'If you leave this blank, no message will be sent.',
        },
    },
})

type ConfirmCancelFormSchema = typeof confirmCancelFormSchema
