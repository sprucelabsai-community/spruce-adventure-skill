import { coreEventContracts } from '@sprucelabs/mercury-core-events'

import peopleBroadcastTeamMessageEventContract_v2022_05_29, { BroadcastTeamMessageEventContract as PeopleBroadcastTeamMessageEventContract_v2022_05_29  } from '#spruce/events/people/broadcastTeamMessage.v2022_05_29.contract'
import heartwoodDidRegisterSkillViewsEventContract_v2021_02_11, { DidRegisterSkillViewsEventContract as HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11  } from '#spruce/events/heartwood/didRegisterSkillViews.v2021_02_11.contract'
import heartwoodGenerateUrlEventContract_v2021_02_11, { GenerateUrlEventContract as HeartwoodGenerateUrlEventContract_v2021_02_11  } from '#spruce/events/heartwood/generateUrl.v2021_02_11.contract'
import peopleGetEventContract_v2022_05_29, { GetEventContract as PeopleGetEventContract_v2022_05_29  } from '#spruce/events/people/get.v2022_05_29.contract'
import heartwoodGetActiveThemeEventContract_v2021_02_11, { GetActiveThemeEventContract as HeartwoodGetActiveThemeEventContract_v2021_02_11  } from '#spruce/events/heartwood/getActiveTheme.v2021_02_11.contract'
import heartwoodGetSkillViewsEventContract_v2021_02_11, { GetSkillViewsEventContract as HeartwoodGetSkillViewsEventContract_v2021_02_11  } from '#spruce/events/heartwood/getSkillViews.v2021_02_11.contract'
import heartwoodListViewsEventContract_v2021_02_11, { ListViewsEventContract as HeartwoodListViewsEventContract_v2021_02_11  } from '#spruce/events/heartwood/listViews.v2021_02_11.contract'
import heartwoodRegisterDashboardCardsEventContract_v2021_02_11, { RegisterDashboardCardsEventContract as HeartwoodRegisterDashboardCardsEventContract_v2021_02_11  } from '#spruce/events/heartwood/registerDashboardCards.v2021_02_11.contract'
import peopleRegisterDashboardCardsEventContract_v2022_05_29, { RegisterDashboardCardsEventContract as PeopleRegisterDashboardCardsEventContract_v2022_05_29  } from '#spruce/events/people/registerDashboardCards.v2022_05_29.contract'
import heartwoodRegisterSkillViewsEventContract_v2021_02_11, { RegisterSkillViewsEventContract as HeartwoodRegisterSkillViewsEventContract_v2021_02_11  } from '#spruce/events/heartwood/registerSkillViews.v2021_02_11.contract'
import peopleSearchEventContract_v2022_05_29, { SearchEventContract as PeopleSearchEventContract_v2022_05_29  } from '#spruce/events/people/search.v2022_05_29.contract'
import heartwoodUpsertThemeEventContract_v2021_02_11, { UpsertThemeEventContract as HeartwoodUpsertThemeEventContract_v2021_02_11  } from '#spruce/events/heartwood/upsertTheme.v2021_02_11.contract'

export default [
    peopleBroadcastTeamMessageEventContract_v2022_05_29,
    heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
    heartwoodGenerateUrlEventContract_v2021_02_11,
    peopleGetEventContract_v2022_05_29,
    heartwoodGetActiveThemeEventContract_v2021_02_11,
    heartwoodGetSkillViewsEventContract_v2021_02_11,
    heartwoodListViewsEventContract_v2021_02_11,
    heartwoodRegisterDashboardCardsEventContract_v2021_02_11,
    peopleRegisterDashboardCardsEventContract_v2022_05_29,
    heartwoodRegisterSkillViewsEventContract_v2021_02_11,
    peopleSearchEventContract_v2022_05_29,
    heartwoodUpsertThemeEventContract_v2021_02_11,
    ...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
    interface SkillEventSignatures {
    
    'people.broadcast-team-message::v2022_05_29': PeopleBroadcastTeamMessageEventContract_v2022_05_29['eventSignatures']['people.broadcast-team-message::v2022_05_29'],
    
    
    'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11'],
    
    
    'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11'],
    
    
    'people.get::v2022_05_29': PeopleGetEventContract_v2022_05_29['eventSignatures']['people.get::v2022_05_29'],
    
    
    'heartwood.get-active-theme::v2021_02_11': HeartwoodGetActiveThemeEventContract_v2021_02_11['eventSignatures']['heartwood.get-active-theme::v2021_02_11'],
    
    
    'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11'],
    
    
    'heartwood.list-views::v2021_02_11': HeartwoodListViewsEventContract_v2021_02_11['eventSignatures']['heartwood.list-views::v2021_02_11'],
    
    
    'heartwood.register-dashboard-cards::v2021_02_11': HeartwoodRegisterDashboardCardsEventContract_v2021_02_11['eventSignatures']['heartwood.register-dashboard-cards::v2021_02_11'],
    
    
    'people.register-dashboard-cards::v2022_05_29': PeopleRegisterDashboardCardsEventContract_v2022_05_29['eventSignatures']['people.register-dashboard-cards::v2022_05_29'],
    
    
    'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11'],
    
    
    'people.search::v2022_05_29': PeopleSearchEventContract_v2022_05_29['eventSignatures']['people.search::v2022_05_29'],
    
    
    'heartwood.upsert-theme::v2021_02_11': HeartwoodUpsertThemeEventContract_v2021_02_11['eventSignatures']['heartwood.upsert-theme::v2021_02_11'],
    
    }
}