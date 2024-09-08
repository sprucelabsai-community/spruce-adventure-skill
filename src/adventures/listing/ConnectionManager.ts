import { StoreFactory } from '@sprucelabs/data-stores'
import ConnectionsStore from '../../friends/connecting/Connections.store'

export default class ConnectionManager {
    private connections: ConnectionsStore

    public constructor(options: { connections: ConnectionsStore }) {
        const { connections } = options
        this.connections = connections
    }

    public static async Manager(options: {
        stores: Pick<StoreFactory, 'getStore'>
    }) {
        const { stores } = options
        const connections = await stores.getStore('connections')
        return new this({ connections })
    }

    public async loadConnectionsForPerson(personId: string) {
        const connections = await this.connections.find({
            //@ts-ignore
            $or: [
                { 'source.personId': personId },
                { 'target.personId': personId },
            ],
        })
        const peopleIds: string[] = []

        for (const connection of connections) {
            let id: string | undefined = connection.source.personId
            if (id !== personId) {
                peopleIds.push(id)
            }
            id = connection?.target?.personId
            if (id && id !== personId) {
                peopleIds.push(id)
            }
        }
        return peopleIds
    }
}
