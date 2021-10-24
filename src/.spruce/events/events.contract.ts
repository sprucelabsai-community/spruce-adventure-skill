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
import mySkill16350661507851609MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16350661507851609MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16350661507851609/myCoolEvent.v2021_01_22.contract'
import mySkill16350663289831598MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16350663289831598MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16350663289831598/myCoolEvent.v2021_01_22.contract'
import mySkill16350768822561610MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16350768822561610MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16350768822561610/myCoolEvent.v2021_01_22.contract'
import mySkill16350771082241588MyCoolEventEventContract_v2021_01_22, {
	MyCoolEventEventContract as MySkill16350771082241588MyCoolEventEventContract_v2021_01_22,
} from '#spruce/events/mySkill16350771082241588/myCoolEvent.v2021_01_22.contract'

export default [
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	calendarCreateCalendarEventTypeEventContract_v2021_05_19,
	calendarListCalendarEventTypesEventContract_v2021_05_19,
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	mySkill16350661507851609MyCoolEventEventContract_v2021_01_22,
	mySkill16350663289831598MyCoolEventEventContract_v2021_01_22,
	mySkill16350768822561610MyCoolEventEventContract_v2021_01_22,
	mySkill16350771082241588MyCoolEventEventContract_v2021_01_22,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']

		'calendar.create-calendar-event-type::v2021_05_19': CalendarCreateCalendarEventTypeEventContract_v2021_05_19['eventSignatures']['calendar.create-calendar-event-type::v2021_05_19']

		'calendar.list-calendar-event-types::v2021_05_19': CalendarListCalendarEventTypesEventContract_v2021_05_19['eventSignatures']['calendar.list-calendar-event-types::v2021_05_19']

		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'my-skill-1635066150785-1609.my-cool-event::v2021_01_22': MySkill16350661507851609MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635066150785-1609.my-cool-event::v2021_01_22']

		'my-skill-1635066328983-1598.my-cool-event::v2021_01_22': MySkill16350663289831598MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635066328983-1598.my-cool-event::v2021_01_22']

		'my-skill-1635076882256-1610.my-cool-event::v2021_01_22': MySkill16350768822561610MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635076882256-1610.my-cool-event::v2021_01_22']

		'my-skill-1635077108224-1588.my-cool-event::v2021_01_22': MySkill16350771082241588MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1635077108224-1588.my-cool-event::v2021_01_22']
	}
}
