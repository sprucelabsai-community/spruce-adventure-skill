import {
	AbstractViewController,
	Card,
	CardViewController,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { AdventureWithPerson } from '../adventure.types'

export default class AdventureCardViewController extends AbstractViewController<Card> {
	public static id = 'adventure-card'
	private cardVc: CardViewController

	public constructor(options: ViewControllerOptions & AdventureCardOptions) {
		super(options)

		const { adventure } = options

		this.cardVc = this.Controller('card', {
			id: adventure.id,
		})
	}

	public render() {
		return this.cardVc.render()
	}
}

export interface AdventureCardOptions {
	adventure: AdventureWithPerson
}
