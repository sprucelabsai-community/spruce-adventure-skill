import {
	AbstractSkillViewController,
	SkillView,
} from '@sprucelabs/heartwood-view-controllers'

export default class ConnectSkillViewController extends AbstractSkillViewController {
	public static id = 'connect'

	public render(): SkillView {
		return {
			layouts: [
				{
					cards: [],
				},
			],
		}
	}
}
