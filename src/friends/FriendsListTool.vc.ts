import {
	AbstractViewController,
	ActiveRecordCardViewController,
	buildActiveRecordCard,
	Card,
	ListRow,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { Friend } from '../adventure.types'

export default class FriendsListToolViewController extends AbstractViewController<Card> {
	public static id = 'friends-list-tool'
	protected activeVc: ActiveRecordCardViewController

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.activeVc = this.Controller(
			'activeRecordCard',
			buildActiveRecordCard({
				eventName: 'adventure.list-friends::v2022_09_09',
				rowTransformer: this.renderRow.bind(this),
				responseKey: 'friends',
				header: {
					title: 'Friends list',
				},
				noResultsRow: {
					height: 'content',
					cells: [
						{
							text: {
								content: `I have not met any of your friends! Lets invite some now! 👇`,
							},
						},
					],
				},
				footer: {
					buttons: [
						{
							id: 'invite',
							label: 'Invite a friend!',
							type: 'primary',
						},
					],
				},
			})
		)
	}

	private renderRow(friend: Friend): ListRow {
		return {
			id: friend.id,
			cells: [
				{
					avatars: friend.avatar?.mUri ? [friend.avatar.mUri] : [],
				},
				{
					text: {
						content: friend.casualName,
					},
				},
			],
		}
	}

	public async load() {
		await this.activeVc.load()
	}

	public render() {
		return this.activeVc.render()
	}
}
