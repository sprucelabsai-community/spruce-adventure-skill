import { StoreFactory } from '@sprucelabs/data-stores'
import { MercuryClient } from '@sprucelabs/mercury-client'
import { Adventure } from '../adventure.types'
import AdventuresStore from '../stores/Adventures.store'
import ConnectionsStore from '../stores/Connections.store'

export default class AdventureFinder {
	private connections: ConnectionsStore
	private adventures: AdventuresStore
	private client: MercuryClient

	protected constructor(options: {
		connections: ConnectionsStore
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
	}) {
		const { stores, client } = options
		const connections = await stores.getStore('connections')
		const adventures = await stores.getStore('adventures')

		return new this({ connections, adventures, client })
	}

	public async findForPerson(personId: string) {
		const peopleIds = await this.loadFriends(personId)
		const withPerson = await this.loadAdventuresForPeople(peopleIds)

		return withPerson
	}

	private async loadAdventuresForPeople(peopleIds: string[]) {
		const adventures = await this.adventures.find(
			{
				//@ts-ignore
				'source.personId': { $in: peopleIds },
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

	private async loadFriends(personId: string) {
		const connections = await this.connections.find({
			//@ts-ignore
			$or: [{ 'source.personId': personId }, { 'target.personId': personId }],
		})
		const peopleIds: string[] = [personId]

		for (const connection of connections) {
			peopleIds.push(connection.source.personId)
			if (connection?.target?.personId) {
				peopleIds.push(connection.target.personId)
			}
		}
		return peopleIds
	}
}
