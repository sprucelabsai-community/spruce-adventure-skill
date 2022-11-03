import { StoreFactory } from '@sprucelabs/data-stores'
import AdventuresStore from '../stores/Adventures.store'

export default class AdventureCanceller {
	private adventures: AdventuresStore
	private constructor(options: { adventures: AdventuresStore }) {
		this.adventures = options.adventures
	}

	public static async Canceller(options: {
		stores: Pick<StoreFactory, 'getStore'>
	}) {
		const { stores } = options
		const adventures = await stores.getStore('adventures')
		return new this({ adventures })
	}

	public async cancel(posterId: string) {
		const [match] = await this.adventures.find(
			//@ts-ignore
			{ 'source.personId': posterId },
			{ limit: 1, sort: [{ direction: 'desc', field: 'when' }] },
			{
				includeFields: ['id'],
			}
		)
		let count = 0
		if (match) {
			count = await this.adventures.deleteOne({
				id: match.id,
			})
		}

		return count
	}
}
