import { SimpleStoreFactory } from '@sprucelabs/data-stores'
import SpruceError from '../../errors/SpruceError'
import GroupsStore from '../../groups/Groups.store'
import ConnectionsStore from './Connections.store'

export default class ConnectionAccepter {
    private constructor(
        private connections: ConnectionsStore,
        private groups: GroupsStore
    ) {}

    public static async Accepter(options: { stores: SimpleStoreFactory }) {
        const { stores } = options
        const connections = await stores.getStore('connections')
        const groups = await stores.getStore('groups')
        return new this(connections, groups)
    }

    public async acceptConnection(
        connectionId: string,
        sourcePersonId: string
    ) {
        const loadedConnection = await this.connections.findOne({
            id: connectionId,
        })

        if (!loadedConnection) {
            throw new SpruceError({
                code: 'NOT_FOUND',
                friendlyMessage: `I could not find the invite to make the connection!`,
            })
        }

        await this.connections.updateOne(
            { id: connectionId },
            { target: { personId: sourcePersonId }, isConfirmed: true }
        )

        const groupId = loadedConnection.target?.groupId
        if (groupId) {
            await this.groups.updateOne(
                { id: groupId },
                { $push: { people: sourcePersonId } }
            )
        }
    }
}
