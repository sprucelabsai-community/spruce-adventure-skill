import { StoreFactory } from '@sprucelabs/data-stores'
import { MercuryClient } from '@sprucelabs/mercury-client'
import { Adventure, Person, PostAdventure } from '../adventure.types'
import ConnectionManager from '../listing/ConnectionManager'
import AdventuresStore from '../stores/Adventures.store'

export default class AdventurePoster {
	private adventures: AdventuresStore
	private connections: ConnectionManager
	private client: MercuryClient

	protected constructor(options: {
		adventures: AdventuresStore
		connections: ConnectionManager
		client: MercuryClient
	}) {
		const { adventures, connections, client } = options
		this.adventures = adventures
		this.connections = connections
		this.client = client
	}

	public static async Poster(options: {
		stores: Pick<StoreFactory, 'getStore'>
		connections: ConnectionManager
		client: MercuryClient
	}) {
		const { stores, connections, client } = options
		const adventures = await stores.getStore('adventures')
		return new this({ adventures, connections, client })
	}

	public async create(values: PostAdventure & { personId: string }) {
		const { personId, ...adventure } = values

		const created = await this.adventures.createOne({
			...adventure,
			source: {
				personId: personId!,
			},
		})

		const connections = await this.connections.loadConnectionsForPerson(
			personId!
		)

		const url = await this.generateUrl()
		const from = await this.getPerson(personId)

		await Promise.all(
			connections.map((connection) =>
				this.messageConnection({ connection, from, created, url })
			)
		)

		return created
	}

	private async generateUrl() {
		const [{ url }] = await this.client.emitAndFlattenResponses(
			'heartwood.generate-url::v2021_02_11',
			{
				target: {
					skillViewId: 'adventure.list',
				},
			}
		)

		return url
	}

	private async messageConnection(options: {
		connection: string
		from: Person
		created: Adventure
		url: string
	}) {
		const { connection, from, created, url } = options

		const to = await this.getPerson(connection)
		await this.client.emitAndFlattenResponses('send-message::v2020_12_25', {
			target: {
				personId: connection,
			},
			payload: {
				message: {
					body: `Hey ${to.casualName}! ${from.casualName} posted a new adventure!\n\n"${created.what}"`,
					classification: 'transactional',
					links: [
						{
							label: 'RSVP Now',
							uri: url,
						},
					],
				},
			},
		})
	}

	private async getPerson(personId: string) {
		const [{ person }] = await this.client.emitAndFlattenResponses(
			'get-person::v2020_12_25',
			{
				target: {
					personId,
				},
			}
		)

		return person
	}
}
