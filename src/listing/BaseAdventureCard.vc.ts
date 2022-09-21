import { durationUtil } from '@sprucelabs/calendar-utils'
import {
	AbstractViewController,
	Button,
	Card,
	CardFooter,
	CardSection,
	CardViewController,
	List,
	MapViewController,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { AdventureWithPerson } from '../adventure.types'

export default class BaseAdventureCardViewController extends AbstractViewController<Card> {
	public static id = 'base-adventure-card'
	private cardVc: CardViewController
	private mapVc: MapViewController
	protected adventure: AdventureWithPerson

	public constructor(
		options: ViewControllerOptions & BaseAdventureCardOptions
	) {
		super(options)

		const { adventure, footer, id, buttons } = options

		durationUtil.dates = this.dates

		this.adventure = adventure
		this.mapVc = this.MapVc()
		this.cardVc = this.CardVc({ footer, id, buttons })
	}

	private CardVc(options: {
		footer?: CardFooter
		id?: string
		buttons?: Button[]
	}): CardViewController {
		const { id, footer, buttons } = options

		const sections: CardSection[] = [
			{
				shouldBePadded: false,
				list: this.renderList(),
			},
			{
				shouldBePadded: false,
				map: this.mapVc.render(),
			},
		]

		if (buttons) {
			sections.push({ buttons })
		}

		return this.Controller('card', {
			id: id ?? 'current',
			body: {
				sections,
			},
			footer,
		})
	}

	private renderList(): List {
		return {
			rows: [
				{
					id: 'one',
					height: 'content',
					cells: [
						{
							avatars: this.adventure.personAvatar
								? [this.adventure.personAvatar.mUri]
								: null,
						},
						{
							text: {
								html: `"<em>${this.adventure.what}</em>" - ${this.adventure.personCasualName}`,
							},
							subText: {
								content: durationUtil.renderDateTimeUntil(
									this.adventure.when,
									this.dates.date(),
									{
										shouldCapitalize: true,
									}
								),
							},
						},
					],
				},
			],
		}
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

export interface BaseAdventureCardOptions {
	adventure: AdventureWithPerson
	footer?: CardFooter
	buttons?: Button[]
	id?: string
}
