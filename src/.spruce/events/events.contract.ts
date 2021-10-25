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
import mySkill16351525014481600MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16351525014481600MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16351525014481600/myCoolEvent.v2021_01_22.contract'
import mySkill16351527670761629MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16351527670761629MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16351527670761629/myCoolEvent.v2021_01_22.contract'
import mySkill16351632900631626MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16351632900631626MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16351632900631626/myCoolEvent.v2021_01_22.contract'
import mySkill16351635579051716MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16351635579051716MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16351635579051716/myCoolEvent.v2021_01_22.contract'
import mySkill16351740924441641MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16351740924441641MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16351740924441641/myCoolEvent.v2021_01_22.contract'
import mySkill16351849783941585MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16351849783941585MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16351849783941585/myCoolEvent.v2021_01_22.contract'
import mySkill16351957149451618MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16351957149451618MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16351957149451618/myCoolEvent.v2021_01_22.contract'
import mySkill16351959110401619MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16351959110401619MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16351959110401619/myCoolEvent.v2021_01_22.contract'

export default [
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	calendarCreateCalendarEventTypeEventContract_v2021_05_19,
	calendarListCalendarEventTypesEventContract_v2021_05_19,
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	mySkill16351525014481600MyCoolEventEventContract_v2021_01_22,
	mySkill16351527670761629MyCoolEventEventContract_v2021_01_22,
	mySkill16351632900631626MyCoolEventEventContract_v2021_01_22,
	mySkill16351635579051716MyCoolEventEventContract_v2021_01_22,
	mySkill16351740924441641MyCoolEventEventContract_v2021_01_22,
	mySkill16351849783941585MyCoolEventEventContract_v2021_01_22,
	mySkill16351957149451618MyCoolEventEventContract_v2021_01_22,
	mySkill16351959110401619MyCoolEventEventContract_v2021_01_22,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']

		'calendar.create-calendar-event-type::v2021_05_19': CalendarCreateCalendarEventTypeEventContract_v2021_05_19['eventSignatures']['calendar.create-calendar-event-type::v2021_05_19']

		'calendar.list-calendar-event-types::v2021_05_19': CalendarListCalendarEventTypesEventContract_v2021_05_19['eventSignatures']['calendar.list-calendar-event-types::v2021_05_19']

		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'my-skill-1635152501448-1600.my-cool-event::v2021_01_22': MySkill16351525014481600MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635152501448-1600.my-cool-event::v2021_01_22']

		'my-skill-1635152767076-1629.my-cool-event::v2021_01_22': MySkill16351527670761629MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635152767076-1629.my-cool-event::v2021_01_22']

		'my-skill-1635163290063-1626.my-cool-event::v2021_01_22': MySkill16351632900631626MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635163290063-1626.my-cool-event::v2021_01_22']

		'my-skill-1635163557905-1716.my-cool-event::v2021_01_22': MySkill16351635579051716MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635163557905-1716.my-cool-event::v2021_01_22']

		'my-skill-1635174092444-1641.my-cool-event::v2021_01_22': MySkill16351740924441641MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635174092444-1641.my-cool-event::v2021_01_22']

		'my-skill-1635184978394-1585.my-cool-event::v2021_01_22': MySkill16351849783941585MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635184978394-1585.my-cool-event::v2021_01_22']

		'my-skill-1635195714945-1618.my-cool-event::v2021_01_22': MySkill16351957149451618MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635195714945-1618.my-cool-event::v2021_01_22']

		'my-skill-1635195911040-1619.my-cool-event::v2021_01_22': MySkill16351959110401619MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635195911040-1619.my-cool-event::v2021_01_22']
	}
}
