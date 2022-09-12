import {
	AbstractViewController,
	ActiveRecordCardViewController,
	buildActiveRecordCard,
	Card,
	ListRow,
	Router,
	SkillViewControllerLoadOptions,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { buildRouteToCreateInvite } from '@sprucelabs/spruce-invite-utils'
import { Friend } from '../adventure.types'

export default class FriendsListToolViewController extends AbstractViewController<Card> {
	public static id = 'friends-list-tool'
	protected activeVc: ActiveRecordCardViewController
	private router!: Router

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.activeVc = this.ActiveRecordVc()
	}

	private ActiveRecordVc(): ActiveRecordCardViewController {
		return this.Controller(
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
							onClick: this.handleClickInvite.bind(this),
						},
					],
				},
			})
		)
	}

	private async handleClickInvite() {
		const [id, args] = buildRouteToCreateInvite({
			destinationAfterCreate: {
				id: 'adventure.root',
			},
			destinationAfterAccept: {
				id: 'adventure.connect',
			},
		})
		await this.router.redirect(id as any, args)
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

	public async load({
		router,
	}: Pick<SkillViewControllerLoadOptions, 'router'>) {
		await this.activeVc.load()
		this.router = router
	}

	public render() {
		return this.activeVc.render()
	}
}
