import {
	AbstractSkillViewController,
	Button,
	CardViewController,
	Router,
	SkillView,
	SkillViewControllerLoadOptions,
	splitCardsIntoLayouts,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'

export default class RootSkillViewController extends AbstractSkillViewController {
	private isAnimating = true

	public static id = 'root'
	protected introCardVc?: CardViewController
	private router!: Router

	public constructor(options: ViewControllerOptions) {
		super(options)
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
								this.introCardVc?.setFooter({
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

	public async load({ router, authenticator }: SkillViewControllerLoadOptions) {
		if (authenticator.isLoggedIn()) {
			await router.redirect('adventure.list')
			return
		}
		this.introCardVc = this.IntroCardVc()
		this.router = router
		this.triggerRender()
	}

	public render(): SkillView {
		return {
			shouldCenterVertically: true,
			layouts: this.introCardVc
				? splitCardsIntoLayouts([this.introCardVc.render()], 2)
				: [],
		}
	}
}
