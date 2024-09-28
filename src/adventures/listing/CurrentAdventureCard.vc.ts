import {
    AbstractViewController,
    Card,
    CardFooter,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { assertOptions } from '@sprucelabs/schema'
import { ListAdventure } from '../../adventure.types'
import BaseAdventureCardViewController from './BaseAdventureCard.vc'

export default class CurrentAdventureCardViewController extends AbstractViewController<Card> {
    public static id = 'current-adventure-card'
    protected baseAdventureCardVc: BaseAdventureCardViewController
    private didCancelHandler: ClickCancelHandler
    private adventure: ListAdventure

    public constructor(
        options: ViewControllerOptions & CurrentAdventureCardOptions
    ) {
        super(options)

        const { adventure, onDidCancel } = assertOptions(options, [
            'adventure',
            'onDidCancel',
        ])

        this.adventure = adventure
        this.didCancelHandler = onDidCancel
        this.baseAdventureCardVc = this.CardVc()
    }

    private CardVc(): BaseAdventureCardViewController {
        return this.Controller('adventure.base-adventure-card', {
            adventure: this.adventure,
            section: {
                stats: this.Controller('stats', {
                    stats: [
                        {
                            label: 'Total in',
                            value: this.adventure.whosIn.length,
                        },
                        {
                            label: 'Total out',
                            value: this.adventure.whosOut.length,
                        },
                    ],
                }).render(),
            },
            footer: this.renderFooter(),
        })
    }

    private renderFooter(): CardFooter {
        const wasReminderSent = !!this.adventure.wasReminderSent
        return {
            buttons: [
                {
                    id: 'reminder',
                    label: wasReminderSent
                        ? 'Reminder already sent!'
                        : 'Send my one reminder!',
                    isEnabled: !wasReminderSent,
                    onClick: this.handleClickReminder.bind(this),
                },
                {
                    id: 'cancel',
                    type: 'destructive',
                    label: 'Cancel this adventure!',
                    onClick: this.handleClickCancel.bind(this),
                },
            ],
        }
    }

    private async handleClickReminder() {
        const didAccept = await this.confirm({
            title: 'Send Reminder?',
            message:
                'You only get one reminder to send to everyone. Are you sure?',
        })

        if (!didAccept) {
            return
        }

        try {
            const client = await this.connectToApi()
            await client.emitAndFlattenResponses(
                'adventure.send-reminder::v2022_09_09',
                {
                    target: {
                        adventureId: this.adventure.id,
                    },
                }
            )

            this.adventure.wasReminderSent = true
            this.baseAdventureCardVc.setFooter(this.renderFooter())

            await this.alert({
                style: 'success',
                message: 'Your one reminder was sent!',
            })
        } catch (err: any) {
            this.log.error('Failed to send reminder', err)
            await this.alert({
                message: err.message ?? 'I could not send that reminder!',
            })
        }
    }

    private async handleClickCancel() {
        const vc = this.Controller('adventure.confirm-cancel-card', {
            onCancel: async () => {
                await dlgVc.hide()
            },
            onConfirm: async (message) => {
                await this.emitCancelAdventure(message)
            },
        })

        const dlgVc = this.renderInDialog(vc.render())
    }

    private async emitCancelAdventure(message: string | undefined | null) {
        const client = await this.connectToApi()
        await client.emitAndFlattenResponses('adventure.cancel::v2022_09_09', {
            payload: {
                message,
            },
        })

        this.didCancelHandler?.()
    }

    public render() {
        return this.baseAdventureCardVc.render()
    }
}

type ClickCancelHandler = () => void

export interface CurrentAdventureCardOptions {
    adventure: ListAdventure
    onDidCancel: ClickCancelHandler
}
