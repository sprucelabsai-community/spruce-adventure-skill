import { durationUtil } from '@sprucelabs/calendar-utils'
import { StoreFactory } from '@sprucelabs/data-stores'
import { MercuryClient } from '@sprucelabs/mercury-client'
import { Adventure, Person, PostAdventure } from '../adventure.types'
import ConnectionManager from '../listing/ConnectionManager'
import AdventuresStore from '../stores/Adventures.store'
import generateUrl from '../utilities/generateUrl'
import getPerson from '../utilities/getPerson'
import { sendMessage } from '../utilities/sendMessage'

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
				this.messageConnection({ toId: connection, from, created, url })
			)
		)

		return created
	}

	private async generateUrl() {
		const url = await generateUrl(this.client)
		return url
	}

	private async messageConnection(options: {
		toId: string
		from: Person
		created: Adventure
		url: string
	}) {
		const { toId: toId, from, created, url } = options
		const to = await this.getPerson(toId)
		const message = `Hey ${to.casualName}! ${
			from.casualName
		} posted a new adventure!\n\n"${
			created.what
		}"\n\n${durationUtil.renderDateTimeUntil(
			created.when,
			new Date().getTime(),
			{
				shouldCapitalize: true,
			}
		)}`
		await sendMessage({ ...options, client: this.client, message, url })
	}

	private async getPerson(personId: string) {
		const person = await getPerson(this.client, personId)
		return person
	}
}
