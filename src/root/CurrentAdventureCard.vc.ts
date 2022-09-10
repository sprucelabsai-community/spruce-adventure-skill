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
		this.mapVc = this.MapVc()
		this.cardVc = this.CardVc()
	}

	private CardVc(): CardViewController {
		return this.Controller('card', {
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
						onClick: this.handleClickCancel.bind(this),
					},
				],
			},
		})
	}

	private async handleClickCancel() {
		await this.confirm({ message: 'You sure you want to cancel?' })
	}

	private MapVc(): MapViewController {
		return this.Controller('map', {
			pins: [
				{
					subtitle: this.adventure.what,
					address: this.adventure.where,
				},
			],
		})
	}

	public render() {
		return this.cardVc.render()
	}
}

export interface CurrentAdventureCardOptions {
	adventure: Adventure
}
