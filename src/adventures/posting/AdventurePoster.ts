import { StoreFactory } from '@sprucelabs/data-stores'
import { PostAdventure } from '../../adventure.types'
import GroupsStore from '../../groups/Groups.store'
import { MessageSender } from '../../messaging/MessageSender'
import AdventuresStore from '../Adventures.store'

export default class AdventurePoster {
    private adventures: AdventuresStore
    private messageSender: MessageSender
    private groups: GroupsStore

    protected constructor(options: {
        adventures: AdventuresStore
        messageSender: MessageSender
        groups: GroupsStore
    }) {
        const { adventures, messageSender, groups } = options

        this.groups = groups
        this.adventures = adventures
        this.messageSender = messageSender
    }

    public static async Poster(options: {
        stores: Pick<StoreFactory, 'getStore'>
        messageSender: MessageSender
    }) {
        const { stores, messageSender } = options
        const adventures = await stores.getStore('adventures')
        const groups = await stores.getStore('groups')
        return new this({ adventures, messageSender, groups })
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

        const message = `Hey {{to}}! {{from}} posted a new adventure {{#if groupTitle}}to "{{groupTitle}}"{{/if}}!\n\n"{{what}}" in {{formatDateTimeUntil when}}!`
        const context: Record<string, any> = {
            when: created.when,
            what: created.what,
        }

        const group = await this.groups.findOne(
            { id: groupId },
            { shouldIncludePrivateFields: true }
        )
        let toPeopleIds: string[] | undefined
        if (group) {
            context.groupTitle = group.title
            toPeopleIds = [...group.people, group.source.personId]
        }

        await this.messageSender.sendMessage({
            fromPersonId: personId,
            toPeopleIds,
            message,
            context,
        })

        return created
    }
}

type CreateAdventureOptions = PostAdventure & {
    personId: string
    groupId?: string
}
