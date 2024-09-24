import { dateUtil } from '@sprucelabs/calendar-utils'
import { SimpleStoreFactory } from '@sprucelabs/data-stores'
import { MercuryClient } from '@sprucelabs/mercury-client'
import { Adventure } from '../../adventure.types'
import GroupFinder from '../../groups/GroupFinder'
import AdventuresStore from '../Adventures.store'
import ConnectionManager from './ConnectionManager'

export default class AdventureFinder {
    private connections: ConnectionManager
    private adventures: AdventuresStore
    private client: MercuryClient
    private groupFinder: GroupFinder

    protected constructor(options: {
        connections: ConnectionManager
        adventures: AdventuresStore
        client: MercuryClient
        groupFinder: GroupFinder
    }) {
        const { connections, adventures, client, groupFinder } = options

        this.client = client
        this.connections = connections
        this.adventures = adventures
        this.groupFinder = groupFinder
    }

    public static async Finder(options: GroupFinderOptions) {
        const { stores, client, connections, groupFinder } = options
        const adventures = await stores.getStore('adventures')

        return new this({ connections, adventures, client, groupFinder })
    }

    public async findForPerson(personId: string) {
        const peopleIds = await this.loadConnections(personId)
        const groups = await this.groupFinder.findForPerson(personId)
        const groupIds = groups.map((g) => g.id)

        const withPerson = await this.loadAdventures(
            [personId, ...peopleIds],
            groupIds
        )

        return withPerson
    }

    private async loadAdventures(peopleIds: string[], groupIds: string[]) {
        const adventures = await this.adventures.find(
            {
                //@ts-ignore
                $or: [
                    { 'source.personId': { $in: peopleIds } },
                    { 'target.groupId': { $in: groupIds } },
                ],
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

        const withPerson =
            await this.adventuresToAdventurseWithPerson(adventures)

        return withPerson
    }

    private async adventuresToAdventurseWithPerson(adventures: Adventure[]) {
        return await Promise.all(
            adventures.map(async (adventure) => {
                const { casualName, avatar } = await this.loadPoster(adventure)

                return {
                    ...adventure,
                    personCasualName: casualName,
                    personAvatar: avatar,
                }
            })
        )
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

interface GroupFinderOptions {
    stores: SimpleStoreFactory
    client: MercuryClient
    connections: ConnectionManager
    groupFinder: GroupFinder
}
