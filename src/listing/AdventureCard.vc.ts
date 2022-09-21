import {
	AbstractViewController,
	Card,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { assertOptions } from '@sprucelabs/schema'
import { AdventureWithPerson } from '../adventure.types'
import BaseAdventureCardViewController from './BaseAdventureCard.vc'

export default class AdventureCardViewController extends AbstractViewController<Card> {
	public static id = 'adventure-card'
	private cardVc: BaseAdventureCardViewController
	private loggedInPersonId: string

	public constructor(options: ViewControllerOptions & AdventureCardOptions) {
		super(options)

		const { adventure, loggedInPersonId } = assertOptions(options, [
			'adventure',
			'loggedInPersonId',
		])

		this.loggedInPersonId = loggedInPersonId
		this.cardVc = this.CardVc(adventure)
	}

	private CardVc(
		adventure: AdventureWithPerson
	): BaseAdventureCardViewController {
		const isIn = !!adventure.whosIn.find((i) => i === this.loggedInPersonId)
		const isOut = !!adventure.whosOut.find((i) => i === this.loggedInPersonId)

		const selected: string[] = []

		if (isIn) {
			selected.push('in')
		} else if (isOut) {
			selected.push('out')
		}

		const groupVc = this.Controller('buttonGroup', {
			selected,
			onSelectionChange: this.handleClickButton.bind(this),
			buttons: [
				{
					id: 'in',
					label: "I'm in!",
					type: 'primary',
					isSelected: isIn,
				},
				{
					id: 'out',
					label: "Can't make it!",
					type: 'destructive',
					isSelected: isOut,
				},
			],
		})
		return this.Controller('adventure.base-adventure-card', {
			adventure,
			id: adventure.id,
			buttons: groupVc.render(),
		})
	}

	private async handleClickButton() {
		await this.confirm({ message: 'You sure?' })
	}

	public render() {
		return this.cardVc.render()
	}
}

export interface AdventureCardOptions {
	adventure: AdventureWithPerson
	loggedInPersonId: string
}
