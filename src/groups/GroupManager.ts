import { SimpleStoreFactory } from '@sprucelabs/data-stores'
import { CreateGroup } from '../adventure.types'
import SpruceError from '../errors/SpruceError'
import GroupFinder from './GroupFinder'
import GroupsStore from './Groups.store'

export default class GroupManager {
    private groups: GroupsStore
    private finder: GroupFinder
    private constructor(options: { groups: GroupsStore; finder: GroupFinder }) {
        const { groups, finder } = options
        this.groups = groups
        this.finder = finder
    }

    public static async Manager(options: {
        stores: SimpleStoreFactory
        finder: GroupFinder
    }) {
        const { stores, finder } = options
        const groups = await stores.getStore('groups')
        return new this({ groups, finder })
    }

    public async createGroup(personId: string, values: CreateGroup) {
        const created = await this.groups.createOne({
            ...values,
            source: { personId: personId! },
        })

        return created
    }

    public async updateGroup(options: {
        personId: string
        groupId: string
        values: CreateGroup
    }) {
        const { personId, groupId: id, values } = options
        const match = await this.finder.findGroupForPerson(id, personId!)

        if (!match.isMine) {
            throw new SpruceError({
                code: 'NOT_YOUR_GROUP',
                friendlyMessage:
                    'You cannot update a group that is not yours. You can, however, invite new friends to it or remove yourself from it.',
                groupId: id,
            })
        }

        const updated = await this.groups.updateOne({ id }, { ...values })
        return updated
    }

    public async deleteGroup(groupId: string, personId: string) {
        const total = await this.groups.deleteOne({
            id: groupId,
            //@ts-ignore
            'source.personId': personId,
        })

        if (total === 0) {
            throw new SpruceError({
                code: 'NOT_FOUND',
                friendlyMessage: `I could not find that group!`,
            })
        }
    }

    public async leaveGroup(groupId: string, personId: string) {
        const match = await this.groups.findOne(
            {
                id: groupId,
            },
            { shouldIncludePrivateFields: true }
        )

        if (!match) {
            throw new SpruceError({
                code: 'NOT_FOUND',
                friendlyMessage: `I couldn't find the group you're trying to leave.`,
            })
        }

        if (match.source.personId === personId) {
            throw new SpruceError({
                code: 'CANNOT_LEAVE_OWN_GROUP',
            })
        }

        if (match.people.findIndex((id) => id === personId) === -1) {
            throw new SpruceError({
                code: 'CANNOT_LEAVE_GROUP_YOU_ARE_NOT_PART_OF',
            })
        }

        const people = match.people.filter((id) => id !== personId)

        await this.groups.updateOne(
            {
                id: groupId,
            },
            { people }
        )
    }
}
