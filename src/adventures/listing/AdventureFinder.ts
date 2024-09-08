import { dateUtil } from '@sprucelabs/calendar-utils'
import { StoreFactory } from '@sprucelabs/data-stores'
import { MercuryClient } from '@sprucelabs/mercury-client'
import { Adventure } from '../../adventure.types'
import AdventuresStore from '../Adventures.store'
import ConnectionManager from './ConnectionManager'

export default class AdventureFinder {
    private connections: ConnectionManager
    private adventures: AdventuresStore
    private client: MercuryClient

    protected constructor(options: {
        connections: ConnectionManager
        adventures: AdventuresStore
        client: MercuryClient
    }) {
        const { connections, adventures, client } = options

        this.client = client
        this.connections = connections
        this.adventures = adventures
    }

    public static async Finder(options: {
        stores: Pick<StoreFactory, 'getStore'>
        client: MercuryClient
        connections: ConnectionManager
    }) {
        const { stores, client, connections } = options
        const adventures = await stores.getStore('adventures')

        return new this({ connections, adventures, client })
    }

    public async findForPerson(personId: string) {
        const peopleIds = await this.loadConnections(personId)
        const withPerson = await this.loadAdventuresForPeople([
            personId,
            ...peopleIds,
        ])

        return withPerson
    }

    private async loadAdventuresForPeople(peopleIds: string[]) {
        const adventures = await this.adventures.find(
            {
                //@ts-ignore
                'source.personId': { $in: peopleIds },
                when: {
                    $gt: dateUtil.addMinutes(new Date().getTime(), 60 * -3),
                },
            },
            {
                sort: [
                    {
                        field: 'when',
                        direction: 'asc',
                    },
                ],
            }
        )

        const withPerson = await Promise.all(
            adventures.map(async (adventure) => {
                const { casualName, avatar } = await this.loadPoster(adventure)

                return {
                    ...adventure,
                    personCasualName: casualName,
                    personAvatar: avatar,
                }
            })
        )
        return withPerson
    }

    private async loadPoster(adventure: Adventure) {
        const [{ person }] = await this.client.emitAndFlattenResponses(
            'get-person::v2020_12_25',
            {
                target: {
                    personId: adventure.source.personId,
                },
            }
        )
        return person
    }

    private async loadConnections(personId: string) {
        return this.connections.loadConnectionsForPerson(personId)
    }
}
