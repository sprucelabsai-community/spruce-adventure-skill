import {
	AbstractSkillViewController,
	Card,
	SkillView,
	SkillViewControllerLoadOptions,
	splitCardsIntoLayouts,
} from '@sprucelabs/heartwood-view-controllers'
import CurrentAdventureCardViewController from '../root/CurrentAdventureCard.vc'

export default class ListSkillViewController extends AbstractSkillViewController {
	public static id = 'list'
	protected currentCardVc?: CurrentAdventureCardViewController

	public async getIsLoginRequired() {
		return true
	}

	public async load({ router }: SkillViewControllerLoadOptions) {
		const client = await this.connectToApi()

		const [{ adventures }] = await client.emitAndFlattenResponses(
			'adventure.list::v2022_09_09'
		)

		if (adventures.length === 0) {
			await router.redirect('adventure.post')
			return
		}

		this.currentCardVc = this.Controller('adventure.current-adventure-card', {
			adventure: adventures[0],
		})

		this.triggerRender()
	}

	public render(): SkillView {
		const cards: Card[] = []
		if (this.currentCardVc) {
			cards.push(this.currentCardVc?.render())
		}
		return {
			layouts: splitCardsIntoLayouts(cards, 3),
		}
	}
}
