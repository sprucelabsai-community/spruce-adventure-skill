import { StoreFactory } from '@sprucelabs/data-stores'
import SpruceError from '../errors/SpruceError'
import AdventuresStore from '../stores/Adventures.store'

export default class Rsvper {
	private adventures: AdventuresStore

	protected constructor(options: { adventures: AdventuresStore }) {
		const { adventures } = options
		this.adventures = adventures
	}
	public static async Rsvper(options: {
		stores: Pick<StoreFactory, 'getStore'>
	}) {
		const { stores } = options
		const adventures = await stores.getStore('adventures')

		return new this({ adventures })
	}

	public async rsvp(options: {
		adventureId: string
		canIMakeIt: boolean
		personId: string
	}) {
		const { adventureId, canIMakeIt, personId } = options

		const key = canIMakeIt ? 'whosIn' : 'whosOut'
		const match = await this.adventures.findOne({
			id: adventureId,
		})

		if (!match) {
			throw new SpruceError({
				code: 'NOT_FOUND',
				friendlyMessage: `Oh no!! I couldn't find that reservation!`,
			})
		}

		match.whosOut = match.whosOut.filter((i) => i !== personId)
		match.whosIn = match.whosIn.filter((i) => i !== personId)

		match[key].push(personId)

		await this.adventures.updateOne(
			{},
			{ whosIn: match.whosIn, whosOut: match.whosOut }
		)
	}
}
