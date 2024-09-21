import { StoreFactory } from '@sprucelabs/data-stores'
import { PostAdventure } from '../../adventure.types'
import { MessageSender } from '../../messaging/MessageSender'
import AdventuresStore from '../Adventures.store'

export default class AdventurePoster {
    private adventures: AdventuresStore
    private messageSender: MessageSender

    protected constructor(options: {
        adventures: AdventuresStore
        messageSender: MessageSender
    }) {
        const { adventures, messageSender } = options
        this.adventures = adventures
        this.messageSender = messageSender
    }

    public static async Poster(options: {
        stores: Pick<StoreFactory, 'getStore'>
        messageSender: MessageSender
    }) {
        const { stores, messageSender } = options
        const adventures = await stores.getStore('adventures')
        return new this({ adventures, messageSender })
    }

    public async create(values: CreateAdventureOptions) {
        const { personId, groupId, ...adventure } = values

        const created = await this.adventures.createOne({
            ...adventure,
            target: groupId ? { groupId } : undefined,
            source: {
                personId: personId!,
            },
        })

        const message = `Hey {{to}}! {{from}} posted a new adventure!\n\n"${
            created.what
        }" in {{formatDateTimeUntil when}}!`

        await this.messageSender.sendMessage({
            fromPersonId: personId,
            message,
            context: { when: created.when },
        })

        return created
    }
}

type CreateAdventureOptions = PostAdventure & {
    personId: string
    groupId?: string
}
