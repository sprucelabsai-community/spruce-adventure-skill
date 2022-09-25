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
import PostCardViewController from '../posting/PostCard.vc'
import CurrentAdventureCardViewController from './CurrentAdventureCard.vc'

export default class ListSkillViewController extends AbstractSkillViewController {
	public static id = 'list'
	protected currentCardVc?: CurrentAdventureCardViewController
	protected postCardVc: PostCardViewController
	protected friendsToolVc: FriendsListToolViewController
	private toolBeltVc: ToolBeltViewController
	private router!: Router
	protected cards: ViewController<Card>[] = []

	public constructor(options: ViewControllerOptions) {
		super(options)

		this.friendsToolVc = this.FriendsToolVc()
		this.toolBeltVc = this.ToolBeltVc()
		this.postCardVc = this.Controller('adventure.post-card', {})
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

		for (const adventure of adventures) {
			if (adventure.source.personId === person.id) {
				this.currentCardVc = this.Controller(
					'adventure.current-adventure-card',
					{
						adventure,
						onDidCancel: this.onDidCancelCurrentAdventure.bind(this),
					}
				)
			} else {
				this.cards.push(
					this.Controller('adventure.adventure-card', {
						adventure,
						loggedInPersonId: person.id,
					})
				)
			}
		}

		if (!this.currentCardVc) {
			this.cards.push(this.postCardVc)
		}

		this.triggerRender()

		await this.friendsToolVc.load({
			router,
			onNoFriends: () => this.toolBeltVc.focusTool('friends'),
		})
	}

	private async onDidCancelCurrentAdventure() {
		await this.router.redirect('adventure.post')
	}

	public render(): SkillView {
		const cards = this.cards
		if (this.currentCardVc) {
			cards.unshift(this.currentCardVc)
		}
		return {
			layouts: splitCardsIntoLayouts(
				cards.map((c) => c.render()),
				3
			),
		}
	}
}
