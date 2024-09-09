import { SimpleStoreFactory } from '@sprucelabs/data-stores'
import { MercuryClient } from '@sprucelabs/mercury-client'
import { Friend, Person } from '../../adventure.types'
import SpruceError from '../../errors/SpruceError'
import GroupsStore from '../../groups/Groups.store'
import ConnectionsStore, { Connection } from '../connecting/Connections.store'

export default class FriendFinder {
    private client: MercuryClient
    private connections: ConnectionsStore
    private groups: GroupsStore

    private constructor(options: {
        client: MercuryClient
        connections: ConnectionsStore
        groups: GroupsStore
    }) {
        const { client, connections, groups } = options
        this.client = client
        this.connections = connections
        this.groups = groups
    }

    public static async Finder(options: {
        client: MercuryClient
        stores: SimpleStoreFactory
    }) {
        const { client, stores } = options
        const connections = await stores.getStore('connections')
        const groups = await stores.getStore('groups')

        return new this({ client, connections, groups })
    }

    public async findForPerson(options: {
        personId: string
        filter?: 'confirmed' | 'pending' | null
        arePartOfGroupId?: string | null
    }) {
        const { filter = 'confirmed', personId, arePartOfGroupId } = options

        let friendIdsInGroup: string[] | undefined
        if (arePartOfGroupId) {
            const group = await this.loadGroup(arePartOfGroupId)
            friendIdsInGroup = group.people
        }

        const matches = await this.connections.find({
            isConfirmed: filter === 'confirmed',
            //@ts-ignore
            $or: [
                { 'source.personId': personId },
                { 'target.personId': personId },
            ],
        })

        let friends: Friend[] = []

        if (matches.length > 0 || friendIdsInGroup) {
            const personIds = [
                ...matches.map((m) => m.target?.personId),
                ...matches.map((m) => m.source.personId),
                ...(friendIdsInGroup ?? []),
            ].filter((id) => id && id !== personId) as string[]

            const [{ people }] = await this.client.emitAndFlattenResponses(
                'list-people::v2020_12_25',
                {
                    payload: {
                        personIds,
                    },
                }
            )

            friends = people.map((p) =>
                this.personToFriend({
                    person: p,
                    connections: matches,
                    friendIdsInGroup,
                })
            )
        }

        return friends
    }

    private async loadGroup(arePartOfGroupId: string) {
        const group = await this.groups.findOne({
            id: arePartOfGroupId,
        })
        if (!group) {
            throw new SpruceError({
                code: 'NOT_FOUND',
                friendlyMessage: 'I could not find that group!',
            })
        }

        return group
    }

    private personToFriend(options: {
        person: Person
        connections: Connection[]
        friendIdsInGroup?: string[]
    }): Friend {
        const { person: p, connections: matches, friendIdsInGroup } = options
        const friend: Friend = {
            id: p.id,
            casualName: p.casualName,
            avatar: p.avatar,
            inviteSender: matches.find((m) => m.source.personId === p.id)
                ? 'them'
                : 'me',
        }

        if (friendIdsInGroup) {
            friend.isInGroup = friendIdsInGroup.includes(p.id)
        }

        return friend
    }
}
