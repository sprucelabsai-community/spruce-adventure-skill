import {
	AbstractViewController,
	ButtonGroupViewController,
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
	private adventure: AdventureWithPerson
	private buttonGroupVc: ButtonGroupViewController

	public constructor(options: ViewControllerOptions & AdventureCardOptions) {
		super(options)

		const { adventure, loggedInPersonId } = assertOptions(options, [
			'adventure',
			'loggedInPersonId',
		])

		this.adventure = adventure
		this.loggedInPersonId = loggedInPersonId
		this.buttonGroupVc = this.ButtonGroupVc()
		this.cardVc = this.CardVc()
	}

	private CardVc(): BaseAdventureCardViewController {
		return this.Controller('adventure.base-adventure-card', {
			adventure: this.adventure,
			id: this.adventure.id,
			buttons: this.buttonGroupVc.render(),
		})
	}

	private ButtonGroupVc() {
		const isIn = !!this.adventure.whosIn.find(
			(i) => i === this.loggedInPersonId
		)
		const isOut = !!this.adventure.whosOut.find(
			(i) => i === this.loggedInPersonId
		)

		const selected: string[] = []

		if (isIn) {
			selected.push('in')
		} else if (isOut) {
			selected.push('out')
		}

		const buttonGroupVc = this.Controller('buttonGroup', {
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
		return buttonGroupVc
	}

	private async handleClickButton() {
		const confirm = await this.confirm({ message: 'You sure?' })
		if (!confirm) {
			return
		}

		const client = await this.connectToApi()
		await client.emitAndFlattenResponses('adventure.rsvp::v2022_09_09', {
			target: {
				adventureId: this.adventure.id,
			},
			payload: {
				canIMakeIt:
					this.buttonGroupVc.getSelectedButtons()[0] === 'in' ? true : false,
			},
		})
	}

	public render() {
		return this.cardVc.render()
	}
}

export interface AdventureCardOptions {
	adventure: AdventureWithPerson
	loggedInPersonId: string
}
