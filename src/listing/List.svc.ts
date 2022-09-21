import {
	AbstractSkillViewController,
	Card,
	Router,
	SkillView,
	SkillViewControllerLoadOptions,
	splitCardsIntoLayouts,
	ToolBelt,
	ToolBeltViewController,
	ViewController,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import FriendsListToolViewController from '../friends/FriendsListTool.vc'
import CurrentAdventureCardViewController from './CurrentAdventureCard.vc'

export default class ListSkillViewController extends AbstractSkillViewController {
	public static id = 'list'
	protected currentCardVc?: CurrentAdventureCardViewController
	protected friendsToolVc: FriendsListToolViewController
	private toolBeltVc: ToolBeltViewController
	private router!: Router
	private cards: ViewController<Card>[] = []

	public constructor(options: ViewControllerOptions) {
		super(options)

		this.friendsToolVc = this.FriendsToolVc()
		this.toolBeltVc = this.ToolBeltVc()
	}

	private ToolBeltVc(): ToolBeltViewController {
		return this.Controller('toolBelt', {
			tools: [
				{
					id: 'friends',
					card: this.friendsToolVc.render(),
					lineIcon: 'users',
				},
			],
		})
	}

	private FriendsToolVc(): FriendsListToolViewController {
		return this.Controller('adventure.friends-list-tool', {})
	}

	public async getIsLoginRequired() {
		return true
	}

	public renderToolBelt(): ToolBelt {
		return this.toolBeltVc.render()
	}

	public async load({ router, authenticator }: SkillViewControllerLoadOptions) {
		this.router = router
		const person = authenticator.getPerson()!

		const client = await this.connectToApi()

		const [{ adventures }] = await client.emitAndFlattenResponses(
			'adventure.list::v2022_09_09'
		)

		if (adventures.length === 0) {
			await router.redirect('adventure.post')
			return
		}

		const adventure = adventures[0]

		if (adventure.source.personId === person.id) {
			this.currentCardVc = this.Controller('adventure.current-adventure-card', {
				adventure,
				onDidCancel: this.onDidCancelCurrentAdventure.bind(this),
			})
			this.cards.push(this.currentCardVc)
		} else {
			this.cards.push(
				this.Controller('adventure.adventure-card', {
					adventure,
				})
			)
		}

		this.triggerRender()

		await this.friendsToolVc.load({ router })
	}

	private async onDidCancelCurrentAdventure() {
		await this.router.redirect('adventure.post')
	}

	public render(): SkillView {
		return {
			layouts: splitCardsIntoLayouts(
				this.cards.map((c) => c.render()),
				3
			),
		}
	}
}
