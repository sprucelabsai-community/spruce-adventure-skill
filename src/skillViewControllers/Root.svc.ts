import {
	AbstractSkillViewController,
	buildSkillView,
	Router,
	SkillView,
	SkillViewControllerLoadOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { SpruceSchemas } from '@sprucelabs/mercury-types'
import { buildDuration } from '@sprucelabs/schema'

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
									endDelay: buildDuration(3000),
								},
								{
									words: `Tay, one of my creators, built this adventure for his people daughters as a way to get them engaged in engineering and also to test out my capabilities.`,
									endDelay: buildDuration(6000),
								},
								{
									words: `Are you ready? It's going to be so much fun!`,
									endDelay: buildDuration(3000),
								},
								{
									words: `This adventures starts like so many others.`,
									endDelay: buildDuration(3000),
								},
								{
									words: `With a hero in the making (that's you!).`,
									endDelay: buildDuration(3000),
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
