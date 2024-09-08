import { StoreFactory } from '@sprucelabs/data-stores'
import { assertOptions } from '@sprucelabs/schema'
import { MessageSender } from '../../messaging/MessageSender'
import AdventuresStore from '../../stores/Adventures.store'

export default class AdventureCancellerImpl implements AdventureCanceller {
    private adventures: AdventuresStore
    private messageSender: MessageSender
    private constructor(options: {
        adventures: AdventuresStore
        messageSender: MessageSender
    }) {
        this.adventures = options.adventures
        this.messageSender = options.messageSender
    }

    public static async Canceller(options: CancellerOptions) {
        const { stores, messageSender } = assertOptions(options, [
            'stores',
            'messageSender',
        ])
        const adventures = await stores.getStore('adventures')
        return new this({ adventures, messageSender })
    }

    public async cancel(posterId: string, message?: string) {
        const [match] = await this.adventures.find(
            //@ts-ignore
            { 'source.personId': posterId },
            { limit: 1, sort: [{ direction: 'desc', field: 'when' }] },
            {
                includeFields: ['id'],
            }
        )
        let count = 0
        if (match) {
            count = await this.adventures.deleteOne({
                id: match.id,
            })

            if (message) {
                await this.messageSender.sendMessage(
                    posterId,
                    `Hey {{to}}! {{from}} has cancelled their adventure and sent this message: ${message}`
                )
            }
        }

        return count
    }
}

export interface AdventureCanceller {
    cancel(posterId: string, message?: string): Promise<number>
}

interface CancellerOptions {
    stores: Pick<StoreFactory, 'getStore'>
    messageSender: MessageSender
}
