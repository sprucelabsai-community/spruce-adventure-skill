import {
	AbstractViewController,
	ActiveRecordCardViewController,
	buildActiveRecordCard,
	Button,
	Card,
	CardHeader,
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

	public constructor(options: ViewControllerOptions & FriendsListOptions) {
		super(options)
		const { buttons, header } = options
		this.activeVc = this.ActiveRecordVc({ buttons, header })
	}

	private ActiveRecordVc(options: {
		buttons?: Button[]
		header?: CardHeader
	}): ActiveRecordCardViewController {
		const { buttons, header } = options

		return this.Controller(
			'activeRecordCard',
			buildActiveRecordCard({
				eventName: 'adventure.list-friends::v2022_09_09',
				rowTransformer: this.renderRow.bind(this),
				responseKey: 'friends',
				header: header ?? {
					title: 'Adventure Friends!!',
					subtitle:
						'These are the friends that get messaged everytime you post an adventure! ⚔️',
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
						...(buttons ?? []),
					],
				},
			})
		)
	}

	private async handleClickInvite() {
		const client = await this.connectToApi()
		const [{ connectionId }] = await client.emitAndFlattenResponses(
			'adventure.create-connection::v2022_09_09'
		)
		const [id, args] = buildRouteToCreateInvite({
			destinationAfterCreate: {
				id: 'adventure.root',
			},
			destinationAfterAccept: {
				id: 'adventure.connect',
				args: {
					connection: connectionId,
				},
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
		onNoFriends,
	}: Pick<SkillViewControllerLoadOptions, 'router'> & {
		onNoFriends?: () => void
	}) {
		await this.activeVc.load()
		this.router = router
		if (this.activeVc.getRecords().length === 0) {
			onNoFriends?.()
		}
	}

	public render() {
		return this.activeVc.render()
	}
}

interface FriendsListOptions {
	buttons?: Button[]
	header?: CardHeader
}
