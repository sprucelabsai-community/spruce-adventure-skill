import { coreEventContracts } from '@sprucelabs/mercury-core-events'
import appointmentsDidBookAppointmentsEventContract_v2021_06_23, {
	DidBookAppointmentsEventContract as AppointmentsDidBookAppointmentsEventContract_v2021_06_23,
} from '#spruce/events/appointments/didBookAppointments.v2021_06_23.contract'
import aTempSkill1634979471901Count82TestSyncEventContract_v2021_01_01, {
	TestSyncEventContract as ATempSkill1634979471901Count82TestSyncEventContract_v2021_01_01,
} from '#spruce/events/aTempSkill1634979471901Count82/testSync.v2021_01_01.contract'
import calendarCreateCalendarEventTypeEventContract_v2021_05_19, {
	CreateCalendarEventTypeEventContract as CalendarCreateCalendarEventTypeEventContract_v2021_05_19,
} from '#spruce/events/calendar/createCalendarEventType.v2021_05_19.contract'
import calendarListCalendarEventTypesEventContract_v2021_05_19, {
	ListCalendarEventTypesEventContract as CalendarListCalendarEventTypesEventContract_v2021_05_19,
} from '#spruce/events/calendar/listCalendarEventTypes.v2021_05_19.contract'
import eventStoreTestSkill1634979584355Count20MyEventStoreAmazingEventEventContract_v2021_10_23, {
	MyEventStoreAmazingEventEventContract as EventStoreTestSkill1634979584355Count20MyEventStoreAmazingEventEventContract_v2021_10_23,
} from '#spruce/events/eventStoreTestSkill1634979584355Count20/myEventStoreAmazingEvent.v2021_10_23.contract'
import eventStoreTestSkill1634979620250Count21MyEventStoreAmazingEventEventContract_v2021_10_23, {
	MyEventStoreAmazingEventEventContract as EventStoreTestSkill1634979620250Count21MyEventStoreAmazingEventEventContract_v2021_10_23,
} from '#spruce/events/eventStoreTestSkill1634979620250Count21/myEventStoreAmazingEvent.v2021_10_23.contract'
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
import heartwoodTest1634979560030Count32TestRegisterSkillViews1634979555960EventContract_v2021_10_23, {
	TestRegisterSkillViews1634979555960EventContract as HeartwoodTest1634979560030Count32TestRegisterSkillViews1634979555960EventContract_v2021_10_23,
} from '#spruce/events/heartwoodTest1634979560030Count32/testRegisterSkillViews1634979555960.v2021_10_23.contract'
import heartwoodTest1634979646719Count75TestEventEventContract_v2020_01_01, {
	TestEventEventContract as HeartwoodTest1634979646719Count75TestEventEventContract_v2020_01_01,
} from '#spruce/events/heartwoodTest1634979646719Count75/testEvent.v2020_01_01.contract'
import mySecondSkill1634979481422Count79MyNewEventEventContract_v2021_10_23, {
	MyNewEventEventContract as MySecondSkill1634979481422Count79MyNewEventEventContract_v2021_10_23,
} from '#spruce/events/mySecondSkill1634979481422Count79/myNewEvent.v2021_10_23.contract'
import mySkill16349905010951609MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16349905010951609MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16349905010951609/myCoolEvent.v2021_01_22.contract'
import mySkill16349907241111639MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16349907241111639MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16349907241111639/myCoolEvent.v2021_01_22.contract'

export default [
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	aTempSkill1634979471901Count82TestSyncEventContract_v2021_01_01,
	mySecondSkill1634979481422Count79MyNewEventEventContract_v2021_10_23,
	heartwoodTest1634979560030Count32TestRegisterSkillViews1634979555960EventContract_v2021_10_23,
	eventStoreTestSkill1634979584355Count20MyEventStoreAmazingEventEventContract_v2021_10_23,
	heartwoodTest1634979646719Count75TestEventEventContract_v2020_01_01,
	eventStoreTestSkill1634979620250Count21MyEventStoreAmazingEventEventContract_v2021_10_23,
	mySkill16349905010951609MyCoolEventEventContract_v2021_01_22,
	mySkill16349907241111639MyCoolEventEventContract_v2021_01_22,
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	calendarCreateCalendarEventTypeEventContract_v2021_05_19,
	calendarListCalendarEventTypesEventContract_v2021_05_19,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'a-temp-skill-1634979471901-count-82.test-sync::v2021_01_01': ATempSkill1634979471901Count82TestSyncEventContract_v2021_01_01['eventSignatures']['a-temp-skill-1634979471901-count-82.test-sync::v2021_01_01']

		'my-second-skill-1634979481422-count-79.my-new-event::v2021_10_23': MySecondSkill1634979481422Count79MyNewEventEventContract_v2021_10_23['eventSignatures']['my-second-skill-1634979481422-count-79.my-new-event::v2021_10_23']

		'heartwood-test-1634979560030-count-32.test-register-skill-views1634979555960::v2021_10_23': HeartwoodTest1634979560030Count32TestRegisterSkillViews1634979555960EventContract_v2021_10_23['eventSignatures']['heartwood-test-1634979560030-count-32.test-register-skill-views1634979555960::v2021_10_23']

		'event-store-test-skill-1634979584355-count-20.my-event-store-amazing-event::v2021_10_23': EventStoreTestSkill1634979584355Count20MyEventStoreAmazingEventEventContract_v2021_10_23['eventSignatures']['event-store-test-skill-1634979584355-count-20.my-event-store-amazing-event::v2021_10_23']

		'heartwood-test-1634979646719-count-75.test-event::v2020_01_01': HeartwoodTest1634979646719Count75TestEventEventContract_v2020_01_01['eventSignatures']['heartwood-test-1634979646719-count-75.test-event::v2020_01_01']

		'event-store-test-skill-1634979620250-count-21.my-event-store-amazing-event::v2021_10_23': EventStoreTestSkill1634979620250Count21MyEventStoreAmazingEventEventContract_v2021_10_23['eventSignatures']['event-store-test-skill-1634979620250-count-21.my-event-store-amazing-event::v2021_10_23']

		'my-skill-1634990501095-1609.my-cool-event::v2021_01_22': MySkill16349905010951609MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634990501095-1609.my-cool-event::v2021_01_22']

		'my-skill-1634990724111-1639.my-cool-event::v2021_01_22': MySkill16349907241111639MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634990724111-1639.my-cool-event::v2021_01_22']

		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']

		'calendar.create-calendar-event-type::v2021_05_19': CalendarCreateCalendarEventTypeEventContract_v2021_05_19['eventSignatures']['calendar.create-calendar-event-type::v2021_05_19']

		'calendar.list-calendar-event-types::v2021_05_19': CalendarListCalendarEventTypesEventContract_v2021_05_19['eventSignatures']['calendar.list-calendar-event-types::v2021_05_19']
	}
}
