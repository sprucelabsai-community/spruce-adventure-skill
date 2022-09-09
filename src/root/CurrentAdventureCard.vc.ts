import {
	AbstractViewController,
	Card,
	CardViewController,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'

export default class CurrentAdventureCardViewController extends AbstractViewController<Card> {
	public static id = 'current-adventure-card'
	private cardVc: CardViewController

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.cardVc = this.Controller('card', {
			id: 'current',
			header: {
				title: 'Your current adventure!!',
			},
		})
	}

	public render() {
		return this.cardVc.render()
	}
}
