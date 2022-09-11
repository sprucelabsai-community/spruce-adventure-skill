import { coreEventContracts } from '@sprucelabs/mercury-core-events'
import adventureListEventContract_v2022_09_09, {
	ListEventContract as AdventureListEventContract_v2022_09_09,
} from '#spruce/events/adventure/list.v2022_09_09.contract'
import adventureListFriendsEventContract_v2022_09_09, {
	ListFriendsEventContract as AdventureListFriendsEventContract_v2022_09_09,
} from '#spruce/events/adventure/listFriends.v2022_09_09.contract'
import adventurePostEventContract_v2022_09_09, {
	PostEventContract as AdventurePostEventContract_v2022_09_09,
} from '#spruce/events/adventure/post.v2022_09_09.contract'
import heartwoodDidRegisterSkillViewsEventContract_v2021_02_11, {
	DidRegisterSkillViewsEventContract as HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/didRegisterSkillViews.v2021_02_11.contract'
import heartwoodGenerateUrlEventContract_v2021_02_11, {
	GenerateUrlEventContract as HeartwoodGenerateUrlEventContract_v2021_02_11,
} from '#spruce/events/heartwood/generateUrl.v2021_02_11.contract'
import heartwoodGetActiveThemeEventContract_v2021_02_11, {
	GetActiveThemeEventContract as HeartwoodGetActiveThemeEventContract_v2021_02_11,
} from '#spruce/events/heartwood/getActiveTheme.v2021_02_11.contract'
import heartwoodGetSkillViewsEventContract_v2021_02_11, {
	GetSkillViewsEventContract as HeartwoodGetSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/getSkillViews.v2021_02_11.contract'
import heartwoodListViewsEventContract_v2021_02_11, {
	ListViewsEventContract as HeartwoodListViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/listViews.v2021_02_11.contract'
import heartwoodRegisterDashboardCardsEventContract_v2021_02_11, {
	RegisterDashboardCardsEventContract as HeartwoodRegisterDashboardCardsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/registerDashboardCards.v2021_02_11.contract'
import heartwoodRegisterSkillViewsEventContract_v2021_02_11, {
	RegisterSkillViewsEventContract as HeartwoodRegisterSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/registerSkillViews.v2021_02_11.contract'
import heartwoodUpsertThemeEventContract_v2021_02_11, {
	UpsertThemeEventContract as HeartwoodUpsertThemeEventContract_v2021_02_11,
} from '#spruce/events/heartwood/upsertTheme.v2021_02_11.contract'

export default [
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodGetActiveThemeEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	adventureListEventContract_v2022_09_09,
	adventureListFriendsEventContract_v2022_09_09,
	heartwoodListViewsEventContract_v2021_02_11,
	adventurePostEventContract_v2022_09_09,
	heartwoodRegisterDashboardCardsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodUpsertThemeEventContract_v2021_02_11,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.get-active-theme::v2021_02_11': HeartwoodGetActiveThemeEventContract_v2021_02_11['eventSignatures']['heartwood.get-active-theme::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'adventure.list::v2022_09_09': AdventureListEventContract_v2022_09_09['eventSignatures']['adventure.list::v2022_09_09']

		'adventure.list-friends::v2022_09_09': AdventureListFriendsEventContract_v2022_09_09['eventSignatures']['adventure.list-friends::v2022_09_09']

		'heartwood.list-views::v2021_02_11': HeartwoodListViewsEventContract_v2021_02_11['eventSignatures']['heartwood.list-views::v2021_02_11']

		'adventure.post::v2022_09_09': AdventurePostEventContract_v2022_09_09['eventSignatures']['adventure.post::v2022_09_09']

		'heartwood.register-dashboard-cards::v2021_02_11': HeartwoodRegisterDashboardCardsEventContract_v2021_02_11['eventSignatures']['heartwood.register-dashboard-cards::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'heartwood.upsert-theme::v2021_02_11': HeartwoodUpsertThemeEventContract_v2021_02_11['eventSignatures']['heartwood.upsert-theme::v2021_02_11']
	}
}
