import {
	AbstractViewController,
	Card,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { AdventureWithPerson } from '../adventure.types'
import BaseAdventureCardViewController from './BaseAdventureCard.vc'

export default class AdventureCardViewController extends AbstractViewController<Card> {
	public static id = 'adventure-card'
	private cardVc: BaseAdventureCardViewController

	public constructor(options: ViewControllerOptions & AdventureCardOptions) {
		super(options)

		const { adventure } = options

		this.cardVc = this.Controller('adventure.base-adventure-card', {
			adventure,
			id: adventure.id,
			buttons: [
				{
					id: 'in',
					label: "I'm in!",
					type: 'primary',
				},
				{
					id: 'out',
					label: "Can't make it!",
					type: 'destructive',
				},
			],
		})
	}

	public render() {
		return this.cardVc.render()
	}
}

export interface AdventureCardOptions {
	adventure: AdventureWithPerson
}
