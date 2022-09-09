import {
	AbstractSkillViewController,
	Card,
	CardViewController,
	SkillView,
	splitCardsIntoLayouts,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import PostCardViewController from '../viewControllers/PostCard.vc'

export default class RootSkillViewController extends AbstractSkillViewController {
	private isAnimating = true

	public static id = 'root'
	protected introCardVc: CardViewController
	private shouldRenderIntroCard = true
	private postCardVc: PostCardViewController

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.introCardVc = this.IntroCardVc()
		this.postCardVc = this.Controller('adventure.post-card', {})
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
								this.triggerRender()
							},
							avatar: {
								stateOfMind: 'chill',
							},
							sentences: [
								{
									words: `Hello there! My name is Sprucebot.`,
								},
								{
									words: `This adventures starts like so many others.`,
								},
								{
									words: `With a hero in the making (that's you!).`,
								},
							],
						},
					},
				],
			},
			footer: {
				shouldRenderBorder: false,
				buttons: [
					{
						label: this.isAnimating ? 'Skip' : `Let's do this! ⚡️`,
						type: this.isAnimating ? 'secondary' : 'primary',
						id: 'next',
						onClick: this.handleClickNextFromIntro.bind(this),
					},
				],
			},
		})
	}

	private handleClickNextFromIntro() {
		this.shouldRenderIntroCard = false
		this.triggerRender()
	}

	public async load() {}

	public render(): SkillView {
		const cards: Card[] = []
		if (this.shouldRenderIntroCard) {
			cards.push(this.introCardVc.render())
		} else {
			cards.push(this.postCardVc.render())
		}

		return {
			shouldCenterVertically: true,
			layouts: splitCardsIntoLayouts(cards, 2),
		}
	}
}
