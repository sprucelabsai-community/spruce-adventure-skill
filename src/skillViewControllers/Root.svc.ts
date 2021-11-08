import {
	AbstractSkillViewController,
	buildSkillView,
	Router,
	SkillView,
	SkillViewControllerLoadOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { SpruceSchemas } from '@sprucelabs/mercury-types'

type Card = SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Card

export default class RootSkillViewController extends AbstractSkillViewController {
	private router!: Router
	private isAnimating = true

	public static id = 'root'

	public async load({ router }: SkillViewControllerLoadOptions) {
		this.router = router
	}

	private buildIntroCard(): Card {
		return {
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
									words: `Tay, one of my creators, built me to test out my capabilities`,
								},
								{
									words:
										'And to show his people daughters how fun engineering can be!',
								},
								{
									words: `Ok...Are you ready? It's going to be so much fun!`,
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
						onClick: () => {
							void this.router.redirect('adventure.profile')
						},
					},
				],
			},
		}
	}

	public render(): SkillView {
		return buildSkillView({
			shouldCenterVertically: true,
			layouts: [
				{
					cards: [this.buildIntroCard()],
				},
			],
		})
	}
}
