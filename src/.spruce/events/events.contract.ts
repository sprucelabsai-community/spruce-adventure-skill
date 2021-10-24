import { coreEventContracts } from '@sprucelabs/mercury-core-events'
import appointmentsDidBookAppointmentsEventContract_v2021_06_23, {
	DidBookAppointmentsEventContract as AppointmentsDidBookAppointmentsEventContract_v2021_06_23,
} from '#spruce/events/appointments/didBookAppointments.v2021_06_23.contract'
import calendarCreateCalendarEventTypeEventContract_v2021_05_19, {
	CreateCalendarEventTypeEventContract as CalendarCreateCalendarEventTypeEventContract_v2021_05_19,
} from '#spruce/events/calendar/createCalendarEventType.v2021_05_19.contract'
import calendarListCalendarEventTypesEventContract_v2021_05_19, {
	ListCalendarEventTypesEventContract as CalendarListCalendarEventTypesEventContract_v2021_05_19,
} from '#spruce/events/calendar/listCalendarEventTypes.v2021_05_19.contract'
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
import mySkill16349905010951609MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16349905010951609MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16349905010951609/myCoolEvent.v2021_01_22.contract'
import mySkill16349907241111639MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16349907241111639MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16349907241111639/myCoolEvent.v2021_01_22.contract'
import mySkill16350120926401707MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16350120926401707MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16350120926401707/myCoolEvent.v2021_01_22.contract'
import mySkill16350122763851646MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16350122763851646MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16350122763851646/myCoolEvent.v2021_01_22.contract'
import mySkill16350228487561537MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16350228487561537MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16350228487561537/myCoolEvent.v2021_01_22.contract'
import mySkill16350230175611585MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16350230175611585MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16350230175611585/myCoolEvent.v2021_01_22.contract'

export default [
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	mySkill16349905010951609MyCoolEventEventContract_v2021_01_22,
	mySkill16349907241111639MyCoolEventEventContract_v2021_01_22,
	calendarCreateCalendarEventTypeEventContract_v2021_05_19,
	calendarListCalendarEventTypesEventContract_v2021_05_19,
	mySkill16350120926401707MyCoolEventEventContract_v2021_01_22,
	mySkill16350122763851646MyCoolEventEventContract_v2021_01_22,
	mySkill16350228487561537MyCoolEventEventContract_v2021_01_22,
	mySkill16350230175611585MyCoolEventEventContract_v2021_01_22,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']

		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'my-skill-1634990501095-1609.my-cool-event::v2021_01_22': MySkill16349905010951609MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634990501095-1609.my-cool-event::v2021_01_22']

		'my-skill-1634990724111-1639.my-cool-event::v2021_01_22': MySkill16349907241111639MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634990724111-1639.my-cool-event::v2021_01_22']

		'calendar.create-calendar-event-type::v2021_05_19': CalendarCreateCalendarEventTypeEventContract_v2021_05_19['eventSignatures']['calendar.create-calendar-event-type::v2021_05_19']

		'calendar.list-calendar-event-types::v2021_05_19': CalendarListCalendarEventTypesEventContract_v2021_05_19['eventSignatures']['calendar.list-calendar-event-types::v2021_05_19']

		'my-skill-1635012092640-1707.my-cool-event::v2021_01_22': MySkill16350120926401707MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635012092640-1707.my-cool-event::v2021_01_22']

		'my-skill-1635012276385-1646.my-cool-event::v2021_01_22': MySkill16350122763851646MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635012276385-1646.my-cool-event::v2021_01_22']

		'my-skill-1635022848756-1537.my-cool-event::v2021_01_22': MySkill16350228487561537MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635022848756-1537.my-cool-event::v2021_01_22']

		'my-skill-1635023017561-1585.my-cool-event::v2021_01_22': MySkill16350230175611585MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635023017561-1585.my-cool-event::v2021_01_22']
	}
}
