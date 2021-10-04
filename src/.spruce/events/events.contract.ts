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
import formsConvertPdfToFormEventContract_v2021_07_02, {
	ConvertPdfToFormEventContract as FormsConvertPdfToFormEventContract_v2021_07_02,
} from '#spruce/events/forms/convertPdfToForm.v2021_07_02.contract'
import formsConvertPdfToSchemasEventContract_v2021_07_02, {
	ConvertPdfToSchemasEventContract as FormsConvertPdfToSchemasEventContract_v2021_07_02,
} from '#spruce/events/forms/convertPdfToSchemas.v2021_07_02.contract'
import formsCreateFormEventContract_v2021_07_02, {
	CreateFormEventContract as FormsCreateFormEventContract_v2021_07_02,
} from '#spruce/events/forms/createForm.v2021_07_02.contract'
import formsDeleteCompletedFormEventContract_v2021_07_02, {
	DeleteCompletedFormEventContract as FormsDeleteCompletedFormEventContract_v2021_07_02,
} from '#spruce/events/forms/deleteCompletedForm.v2021_07_02.contract'
import formsDidUpdateCompletedFormEventContract_v2021_07_02, {
	DidUpdateCompletedFormEventContract as FormsDidUpdateCompletedFormEventContract_v2021_07_02,
} from '#spruce/events/forms/didUpdateCompletedForm.v2021_07_02.contract'
import formsGetCompletedFormEventContract_v2021_07_02, {
	GetCompletedFormEventContract as FormsGetCompletedFormEventContract_v2021_07_02,
} from '#spruce/events/forms/getCompletedForm.v2021_07_02.contract'
import formsListCompletedFormsEventContract_v2021_07_02, {
	ListCompletedFormsEventContract as FormsListCompletedFormsEventContract_v2021_07_02,
} from '#spruce/events/forms/listCompletedForms.v2021_07_02.contract'
import formsListFormsEventContract_v2021_07_02, {
	ListFormsEventContract as FormsListFormsEventContract_v2021_07_02,
} from '#spruce/events/forms/listForms.v2021_07_02.contract'
import formsUpdateCompletedFormEventContract_v2021_07_02, {
	UpdateCompletedFormEventContract as FormsUpdateCompletedFormEventContract_v2021_07_02,
} from '#spruce/events/forms/updateCompletedForm.v2021_07_02.contract'
import heartwoodDidRegisterSkillViewsEventContract_v2021_02_11, { DidRegisterSkillViewsEventContract as HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11  } from '#spruce/events/heartwood/didRegisterSkillViews.v2021_02_11.contract'
import mySkill16332528192881586MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16332528192881586MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16332528192881586/myCoolEvent.v2021_01_22.contract'
import mySkill16332530846061614MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16332530846061614MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16332530846061614/myCoolEvent.v2021_01_22.contract'
import mySkill16332626393471650MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16332626393471650MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16332626393471650/myCoolEvent.v2021_01_22.contract'
import mySkill16332737747701647MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16332737747701647MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16332737747701647/myCoolEvent.v2021_01_22.contract'
import mySkill16332739881781622MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16332739881781622MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16332739881781622/myCoolEvent.v2021_01_22.contract'
import mySkill16332951592781631MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16332951592781631MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16332951592781631/myCoolEvent.v2021_01_22.contract'
import mySkill16332953927001571MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16332953927001571MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16332953927001571/myCoolEvent.v2021_01_22.contract'
import mySkill16333057024431544MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16333057024431544MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16333057024431544/myCoolEvent.v2021_01_22.contract'
import mySkill16333058669271550MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16333058669271550MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16333058669271550/myCoolEvent.v2021_01_22.contract'
import heartwoodGenerateUrlEventContract_v2021_02_11, {
	GenerateUrlEventContract as HeartwoodGenerateUrlEventContract_v2021_02_11,
} from '#spruce/events/heartwood/generateUrl.v2021_02_11.contract'
import heartwoodGetSkillViewsEventContract_v2021_02_11, {
	GetSkillViewsEventContract as HeartwoodGetSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/getSkillViews.v2021_02_11.contract'
import heartwoodRegisterSkillViewsEventContract_v2021_02_11, {
	RegisterSkillViewsEventContract as HeartwoodRegisterSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/registerSkillViews.v2021_02_11.contract'

export default [
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	calendarCreateCalendarEventTypeEventContract_v2021_05_19,
	calendarListCalendarEventTypesEventContract_v2021_05_19,
	mySkill16332528192881586MyCoolEventEventContract_v2021_01_22,
	mySkill16332530846061614MyCoolEventEventContract_v2021_01_22,
	mySkill16332626393471650MyCoolEventEventContract_v2021_01_22,
	mySkill16332737747701647MyCoolEventEventContract_v2021_01_22,
	mySkill16332739881781622MyCoolEventEventContract_v2021_01_22,
	mySkill16332951592781631MyCoolEventEventContract_v2021_01_22,
	mySkill16332953927001571MyCoolEventEventContract_v2021_01_22,
	mySkill16333057024431544MyCoolEventEventContract_v2021_01_22,
	mySkill16333058669271550MyCoolEventEventContract_v2021_01_22,
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	formsConvertPdfToFormEventContract_v2021_07_02,
	formsConvertPdfToSchemasEventContract_v2021_07_02,
	formsCreateFormEventContract_v2021_07_02,
	formsDeleteCompletedFormEventContract_v2021_07_02,
	formsDidUpdateCompletedFormEventContract_v2021_07_02,
	formsGetCompletedFormEventContract_v2021_07_02,
	formsListCompletedFormsEventContract_v2021_07_02,
	formsListFormsEventContract_v2021_07_02,
	formsUpdateCompletedFormEventContract_v2021_07_02,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']

		'calendar.create-calendar-event-type::v2021_05_19': CalendarCreateCalendarEventTypeEventContract_v2021_05_19['eventSignatures']['calendar.create-calendar-event-type::v2021_05_19']

		'calendar.list-calendar-event-types::v2021_05_19': CalendarListCalendarEventTypesEventContract_v2021_05_19['eventSignatures']['calendar.list-calendar-event-types::v2021_05_19']

		'my-skill-1633252819288-1586.my-cool-event::v2021_01_22': MySkill16332528192881586MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1633252819288-1586.my-cool-event::v2021_01_22']

		'my-skill-1633253084606-1614.my-cool-event::v2021_01_22': MySkill16332530846061614MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1633253084606-1614.my-cool-event::v2021_01_22']

		'my-skill-1633262639347-1650.my-cool-event::v2021_01_22': MySkill16332626393471650MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1633262639347-1650.my-cool-event::v2021_01_22']

		'my-skill-1633273774770-1647.my-cool-event::v2021_01_22': MySkill16332737747701647MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1633273774770-1647.my-cool-event::v2021_01_22']

		'my-skill-1633273988178-1622.my-cool-event::v2021_01_22': MySkill16332739881781622MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1633273988178-1622.my-cool-event::v2021_01_22']

		'my-skill-1633295159278-1631.my-cool-event::v2021_01_22': MySkill16332951592781631MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1633295159278-1631.my-cool-event::v2021_01_22']

		'my-skill-1633295392700-1571.my-cool-event::v2021_01_22': MySkill16332953927001571MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1633295392700-1571.my-cool-event::v2021_01_22']

		'my-skill-1633305702443-1544.my-cool-event::v2021_01_22': MySkill16333057024431544MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1633305702443-1544.my-cool-event::v2021_01_22']

		'my-skill-1633305866927-1550.my-cool-event::v2021_01_22': MySkill16333058669271550MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1633305866927-1550.my-cool-event::v2021_01_22']

		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'forms.convert-pdf-to-form::v2021_07_02': FormsConvertPdfToFormEventContract_v2021_07_02['eventSignatures']['forms.convert-pdf-to-form::v2021_07_02']

		'forms.convert-pdf-to-schemas::v2021_07_02': FormsConvertPdfToSchemasEventContract_v2021_07_02['eventSignatures']['forms.convert-pdf-to-schemas::v2021_07_02']

		'forms.create-form::v2021_07_02': FormsCreateFormEventContract_v2021_07_02['eventSignatures']['forms.create-form::v2021_07_02']

		'forms.delete-completed-form::v2021_07_02': FormsDeleteCompletedFormEventContract_v2021_07_02['eventSignatures']['forms.delete-completed-form::v2021_07_02']

		'forms.did-update-completed-form::v2021_07_02': FormsDidUpdateCompletedFormEventContract_v2021_07_02['eventSignatures']['forms.did-update-completed-form::v2021_07_02']

		'forms.get-completed-form::v2021_07_02': FormsGetCompletedFormEventContract_v2021_07_02['eventSignatures']['forms.get-completed-form::v2021_07_02']

		'forms.list-completed-forms::v2021_07_02': FormsListCompletedFormsEventContract_v2021_07_02['eventSignatures']['forms.list-completed-forms::v2021_07_02']

		'forms.list-forms::v2021_07_02': FormsListFormsEventContract_v2021_07_02['eventSignatures']['forms.list-forms::v2021_07_02']

		'forms.update-completed-form::v2021_07_02': FormsUpdateCompletedFormEventContract_v2021_07_02['eventSignatures']['forms.update-completed-form::v2021_07_02']
	}
}
