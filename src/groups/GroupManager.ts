import { SimpleStoreFactory } from '@sprucelabs/data-stores'
import { MercuryClient } from '@sprucelabs/mercury-client'
import { CreateGroup, Group } from '../adventure.types'
import SpruceError from '../errors/SpruceError'
import GroupFinder from './GroupFinder'
import GroupsStore from './Groups.store'

export default class GroupManagerImpl implements GroupManager {
    public static Class?: new (
        options: GroupManageConstructorOptions
    ) => GroupManager
    private groups: GroupsStore
    private finder: GroupFinder
    private client: MercuryClient
    private peoplesNames: Record<string, Promise<string>> = {}

    protected constructor(options: GroupManageConstructorOptions) {
        const { groups, finder, client } = options
        this.client = client
        this.groups = groups
        this.finder = finder
    }

    public static async Manager(options: {
        stores: SimpleStoreFactory
        finder: GroupFinder
        client: MercuryClient
    }) {
        const { stores, finder, client } = options

        const groups = await stores.getStore('groups')
        return new (this.Class ?? this)({ groups, finder, client })
    }

    public async createGroup(personId: string, values: CreateGroup) {
        const { people, title } = values

        const created = await this.groups.createOne({
            ...values,
            source: { personId: personId! },
        })

        const promises = people.map((to) =>
            this.sendBeenInvitedMessageTo({ toId: to, fromId: personId, title })
        )
        await Promise.all(promises)

        return created as Group
    }

    protected async sendBeenInvitedMessageTo(
        options: SendBeenInvitedMessageOptions
    ) {
        const { toId, fromId, title } = options
        const toName = await this.getPersonsName(toId)
        const fromName = await this.getPersonsName(fromId)

        await this.client.emitAndFlattenResponses('send-message::v2020_12_25', {
            target: {
                personId: toId,
            },
            payload: {
                message: {
                    classification: 'transactional',
                    body: `Hey ${toName}! ${fromName} has added you to join their Adventure Group, "${title}". Anytime you want to invite everyone in the group to your own adventure, use this link: https://adventure.spruce.bot`,
                    context: {
                        title,
                        toName,
                        fromName,
                    },
                },
            },
        })
    }

    private async getPersonsName(personId: string) {
        //@ts-ignore
        if (this.peoplesNames[personId]) {
            return this.peoplesNames[personId]
        }

        this.peoplesNames[personId] = this._getPersonsName(personId)

        return this.peoplesNames[personId]
    }

    private async _getPersonsName(personId: string) {
        const [{ person }] = await this.client.emitAndFlattenResponses(
            'get-person::v2020_12_25',
            {
                target: {
                    personId,
                },
            }
        )
        const toName = person.casualName
        return toName
    }

    public async updateGroup(options: UpdateGroupOptions) {
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
        return updated as Group
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

export interface SendBeenInvitedMessageOptions {
    toId: string
    fromId: string
    title: string
}

export interface GroupManager {
    createGroup(personId: string, values: CreateGroup): Promise<Group>
    updateGroup(options: UpdateGroupOptions): Promise<Group>
    deleteGroup(groupId: string, personId: string): Promise<void>
    leaveGroup(groupId: string, personId: string): Promise<void>
}

interface UpdateGroupOptions {
    personId: string
    groupId: string
    values: CreateGroup
}

export interface GroupManageConstructorOptions {
    groups: GroupsStore
    finder: GroupFinder
    client: MercuryClient
}