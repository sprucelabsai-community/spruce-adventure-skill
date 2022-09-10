import {
	AbstractSkillViewController,
	Button,
	Card,
	CardViewController,
	Router,
	SkillView,
	SkillViewControllerLoadOptions,
	splitCardsIntoLayouts,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import PostCardViewController from '../posting/PostCard.vc'
import CurrentAdventureCardViewController from './CurrentAdventureCard.vc'

export default class RootSkillViewController extends AbstractSkillViewController {
	private isAnimating = true

	public static id = 'root'
	protected introCardVc: CardViewController
	private shouldRenderIntroCard = true
	protected postCardVc!: PostCardViewController
	protected currentCardVc?: CurrentAdventureCardViewController
	private router!: Router

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.introCardVc = this.IntroCardVc()
	}

	private IntroCardVc(): CardViewController {
		return this.Controller('card', {
			id: 'intro',
			header: {
				title: `Adventure time! ⚔️🧙`,
			},
			body: {
				sections: [
					{
						talkingSprucebot: {
							size: 'medium',
							onComplete: () => {
								this.isAnimating = false
								this.introCardVc.setFooter({
									buttons: this.renderIntroButtons(),
								})
							},
							avatar: {
								stateOfMind: 'chill',
							},
							sentences: [
								{
									words: `Hello there! My name is Sprucebot!`,
								},
								{
									words: `The gang back at HQ built this adventure to demonstrate some of my capabilities.`,
								},
								{
									words:
										"Next you'll get the chance to post your next adventure!!",
								},
								{
									words: `Then, you'll be able to invite some friends!`,
								},
								{
									words: `Lastly, they'll be able to RSVP to your adventure and I'll let you know!`,
								},
								{
									words: 'You ready?',
								},
							],
						},
					},
				],
			},
			footer: {
				shouldRenderBorder: false,
				buttons: this.renderIntroButtons(),
			},
		})
	}

	private renderIntroButtons(): Button[] {
		return [
			{
				label: this.isAnimating ? 'Skip' : `Let's do this! ⚡️`,
				type: this.isAnimating ? 'secondary' : 'primary',
				id: 'next',
				onClick: this.handleClickNextFromIntro.bind(this),
			},
		]
	}

	private async handleClickNextFromIntro() {
		await this.router.redirect('adventure.post')
	}

	public async load({ router }: SkillViewControllerLoadOptions) {
		this.router = router
		const client = await this.connectToApi()

		const [{ adventures }] = await client.emitAndFlattenResponses(
			'adventure.list::v2022_09_09'
		)

		if (adventures.length > 0) {
			this.shouldRenderIntroCard = false
			this.currentCardVc = this.Controller('adventure.current-adventure-card', {
				adventure: adventures[0],
			})
		}

		this.triggerRender()
	}

	public render(): SkillView {
		const cards: Card[] = []
		if (this.shouldRenderIntroCard) {
			cards.push(this.introCardVc.render())
		} else if (this.currentCardVc) {
			cards.push(this.currentCardVc.render())
		}

		return {
			shouldCenterVertically: true,
			layouts: splitCardsIntoLayouts(cards, 2),
		}
	}
}
