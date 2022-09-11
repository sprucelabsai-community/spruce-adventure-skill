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
						shouldBePadded: false,
						list: {
							rows: [
								{
									id: 'one',
									height: 'content',
									cells: [
										{
											avatars: [
												'https://s3.us-east-2.amazonaws.com/files.spruce.bot/a5908140-3665-461e-9dad-aacffba7c8e7.jpg',
											],
										},
										{
											text: {
												html: `"<em>${this.adventure.what}</em>" - Tay`,
											},
										},
									],
								},
							],
						},
					},
					{
						shouldBePadded: false,
						map: this.mapVc.render(),
					},
				],
			},
			footer: {
				buttons: [
					{
						id: 'cancel',
						type: 'destructive',
						label: 'Cancel this adventure!',
						onClick: this.handleClickCancel.bind(this),
					},
				],
			},
		})
	}

	private async handleClickCancel() {
		await this.confirm({
			message: 'You sure you want to cancel?',
			isDestructive: true,
		})
	}

	private MapVc(): MapViewController {
		return this.Controller('map', {
			zoom: 'block',
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
