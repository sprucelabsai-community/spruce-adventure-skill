import {
	AbstractViewController,
	Card,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { assertOptions } from '@sprucelabs/schema'
import { AdventureWithPerson } from '../adventure.types'
import BaseAdventureCardViewController from './BaseAdventureCard.vc'

export default class CurrentAdventureCardViewController extends AbstractViewController<Card> {
	public static id = 'current-adventure-card'
	protected baseAdventureCardVc: BaseAdventureCardViewController
	private didCancelHandler: ClickCancelHandler

	public constructor(
		options: ViewControllerOptions & CurrentAdventureCardOptions
	) {
		super(options)

		const { adventure, onDidCancel } = assertOptions(options, [
			'adventure',
			'onDidCancel',
		])

		this.baseAdventureCardVc = this.CardVc(adventure)
		this.didCancelHandler = onDidCancel
	}

	private CardVc(
		adventure: AdventureWithPerson
	): BaseAdventureCardViewController {
		return this.Controller('adventure.base-adventure-card', {
			adventure,
			section: {
				stats: this.Controller('stats', {
					stats: [
						{
							label: 'Total in',
							value: adventure.whosIn.length,
						},
						{
							label: 'Total out',
							value: adventure.whosOut.length,
						},
					],
				}).render(),
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
		const confirm = await this.confirm({
			message: 'You sure you wanna cancel?',
			isDestructive: true,
		})

		if (!confirm) {
			return
		}

		const client = await this.connectToApi()
		await client.emitAndFlattenResponses('adventure.cancel::v2022_09_09')

		this.didCancelHandler?.()
	}

	public render() {
		return this.baseAdventureCardVc.render()
	}
}

type ClickCancelHandler = () => void

export interface CurrentAdventureCardOptions {
	adventure: AdventureWithPerson
	onDidCancel: ClickCancelHandler
}
