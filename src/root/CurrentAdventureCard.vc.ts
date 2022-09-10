import {
	AbstractViewController,
	Card,
	CardViewController,
	MapViewController,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { assertOptions } from '@sprucelabs/schema'
import { Adventure } from '../adventure.types'

export default class CurrentAdventureCardViewController extends AbstractViewController<Card> {
	public static id = 'current-adventure-card'
	private cardVc: CardViewController
	private mapVc: MapViewController
	protected adventure: Adventure

	public constructor(
		options: ViewControllerOptions & CurrentAdventureCardOptions
	) {
		super(options)

		const { adventure } = assertOptions(options, ['adventure'])

		this.adventure = adventure
		this.mapVc = this.Controller('map', {
			pins: [
				{
					subtitle: adventure.what,
					address: adventure.where,
				},
			],
		})

		this.cardVc = this.Controller('card', {
			id: 'current',
			body: {
				sections: [
					{
						map: this.mapVc.render(),
					},
				],
			},
			footer: {
				buttons: [
					{
						id: 'cancel',
						type: 'destructive',
					},
				],
			},
		})
	}

	public render() {
		return this.cardVc.render()
	}
}

export interface CurrentAdventureCardOptions {
	adventure: Adventure
}
