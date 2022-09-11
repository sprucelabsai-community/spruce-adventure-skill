import {
	AbstractViewController,
	ActiveRecordCardViewController,
	buildActiveRecordCard,
	Card,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'

export default class FriendsListToolViewController extends AbstractViewController<Card> {
	public static id = 'friends-list-tool'
	private cardVc: ActiveRecordCardViewController

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.cardVc = this.Controller(
			'activeRecordCard',
			buildActiveRecordCard({
				eventName: 'list-roles::v2020_12_25',
				rowTransformer: () => ({} as any),
				responseKey: 'roles',
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

	public render() {
		return this.cardVc.render()
	}
}
