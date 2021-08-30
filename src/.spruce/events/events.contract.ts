import { coreEventContracts } from '@sprucelabs/mercury-types'
import appointmentsDidBookAppointmentsEventContract_v2021_06_23, {
	DidBookAppointmentsEventContract as AppointmentsDidBookAppointmentsEventContract_v2021_06_23,
} from '#spruce/events/appointments/didBookAppointments.v2021_06_23.contract'
import eventStoreTestSkill1630337767591Count68MyEventStoreAmazingEventEventContract_v2021_08_30, {
	MyEventStoreAmazingEventEventContract as EventStoreTestSkill1630337767591Count68MyEventStoreAmazingEventEventContract_v2021_08_30,
} from '#spruce/events/eventStoreTestSkill1630337767591Count68/myEventStoreAmazingEvent.v2021_08_30.contract'
import eventStoreTestSkill1630337819114Count69MyEventStoreAmazingEventEventContract_v2021_08_30, {
	MyEventStoreAmazingEventEventContract as EventStoreTestSkill1630337819114Count69MyEventStoreAmazingEventEventContract_v2021_08_30,
} from '#spruce/events/eventStoreTestSkill1630337819114Count69/myEventStoreAmazingEvent.v2021_08_30.contract'
import heartwoodDidRegisterSkillViewsEventContract_v2021_02_11, {
	DidRegisterSkillViewsEventContract as HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/didRegisterSkillViews.v2021_02_11.contract'
import heartwoodGenerateUrlEventContract_v2021_02_11, {
	GenerateUrlEventContract as HeartwoodGenerateUrlEventContract_v2021_02_11,
} from '#spruce/events/heartwood/generateUrl.v2021_02_11.contract'
import heartwoodGetSkillViewsEventContract_v2021_02_11, {
	GetSkillViewsEventContract as HeartwoodGetSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/getSkillViews.v2021_02_11.contract'
import heartwoodRegisterSkillViewsEventContract_v2021_02_11, {
	RegisterSkillViewsEventContract as HeartwoodRegisterSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/registerSkillViews.v2021_02_11.contract'
import heartwoodTest1630337702398Count38TestRegisterSkillViews1630337700463EventContract_v2021_08_30, {
	TestRegisterSkillViews1630337700463EventContract as HeartwoodTest1630337702398Count38TestRegisterSkillViews1630337700463EventContract_v2021_08_30,
} from '#spruce/events/heartwoodTest1630337702398Count38/testRegisterSkillViews1630337700463.v2021_08_30.contract'

export default [
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	heartwoodTest1630337702398Count38TestRegisterSkillViews1630337700463EventContract_v2021_08_30,
	eventStoreTestSkill1630337767591Count68MyEventStoreAmazingEventEventContract_v2021_08_30,
	eventStoreTestSkill1630337819114Count69MyEventStoreAmazingEventEventContract_v2021_08_30,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']

		'heartwood-test-1630337702398-count-38.test-register-skill-views1630337700463::v2021_08_30': HeartwoodTest1630337702398Count38TestRegisterSkillViews1630337700463EventContract_v2021_08_30['eventSignatures']['heartwood-test-1630337702398-count-38.test-register-skill-views1630337700463::v2021_08_30']

		'event-store-test-skill-1630337767591-count-68.my-event-store-amazing-event::v2021_08_30': EventStoreTestSkill1630337767591Count68MyEventStoreAmazingEventEventContract_v2021_08_30['eventSignatures']['event-store-test-skill-1630337767591-count-68.my-event-store-amazing-event::v2021_08_30']

		'event-store-test-skill-1630337819114-count-69.my-event-store-amazing-event::v2021_08_30': EventStoreTestSkill1630337819114Count69MyEventStoreAmazingEventEventContract_v2021_08_30['eventSignatures']['event-store-test-skill-1630337819114-count-69.my-event-store-amazing-event::v2021_08_30']
	}
}
