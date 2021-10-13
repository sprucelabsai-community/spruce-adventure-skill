import { coreEventContracts } from '@sprucelabs/mercury-core-events'

import appointmentsDidBookAppointmentsEventContract_v2021_06_23, { DidBookAppointmentsEventContract as AppointmentsDidBookAppointmentsEventContract_v2021_06_23  } from '#spruce/events/appointments/didBookAppointments.v2021_06_23.contract'
import formsConvertPdfToFormEventContract_v2021_07_02, { ConvertPdfToFormEventContract as FormsConvertPdfToFormEventContract_v2021_07_02  } from '#spruce/events/forms/convertPdfToForm.v2021_07_02.contract'
import formsConvertPdfToSchemasEventContract_v2021_07_02, { ConvertPdfToSchemasEventContract as FormsConvertPdfToSchemasEventContract_v2021_07_02  } from '#spruce/events/forms/convertPdfToSchemas.v2021_07_02.contract'
import formsCreateFormEventContract_v2021_07_02, { CreateFormEventContract as FormsCreateFormEventContract_v2021_07_02  } from '#spruce/events/forms/createForm.v2021_07_02.contract'
import formsDeleteCompletedFormEventContract_v2021_07_02, { DeleteCompletedFormEventContract as FormsDeleteCompletedFormEventContract_v2021_07_02  } from '#spruce/events/forms/deleteCompletedForm.v2021_07_02.contract'
import formsDidUpdateCompletedFormEventContract_v2021_07_02, { DidUpdateCompletedFormEventContract as FormsDidUpdateCompletedFormEventContract_v2021_07_02  } from '#spruce/events/forms/didUpdateCompletedForm.v2021_07_02.contract'
import formsGetCompletedFormEventContract_v2021_07_02, { GetCompletedFormEventContract as FormsGetCompletedFormEventContract_v2021_07_02  } from '#spruce/events/forms/getCompletedForm.v2021_07_02.contract'
import formsListCompletedFormsEventContract_v2021_07_02, { ListCompletedFormsEventContract as FormsListCompletedFormsEventContract_v2021_07_02  } from '#spruce/events/forms/listCompletedForms.v2021_07_02.contract'
import formsListFormsEventContract_v2021_07_02, { ListFormsEventContract as FormsListFormsEventContract_v2021_07_02  } from '#spruce/events/forms/listForms.v2021_07_02.contract'
import formsUpdateCompletedFormEventContract_v2021_07_02, { UpdateCompletedFormEventContract as FormsUpdateCompletedFormEventContract_v2021_07_02  } from '#spruce/events/forms/updateCompletedForm.v2021_07_02.contract'
import heartwoodDidRegisterSkillViewsEventContract_v2021_02_11, { DidRegisterSkillViewsEventContract as HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11  } from '#spruce/events/heartwood/didRegisterSkillViews.v2021_02_11.contract'
import heartwoodGetSkillViewsEventContract_v2021_02_11, { GetSkillViewsEventContract as HeartwoodGetSkillViewsEventContract_v2021_02_11  } from '#spruce/events/heartwood/getSkillViews.v2021_02_11.contract'
import heartwoodRegisterSkillViewsEventContract_v2021_02_11, { RegisterSkillViewsEventContract as HeartwoodRegisterSkillViewsEventContract_v2021_02_11  } from '#spruce/events/heartwood/registerSkillViews.v2021_02_11.contract'
import heartwoodGenerateUrlEventContract_v2021_02_11, { GenerateUrlEventContract as HeartwoodGenerateUrlEventContract_v2021_02_11  } from '#spruce/events/heartwood/generateUrl.v2021_02_11.contract'
import mySkill16340510246601641MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16340510246601641MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16340510246601641/myCoolEvent.v2021_01_22.contract'
import mySkill16340512316921614MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16340512316921614MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16340512316921614/myCoolEvent.v2021_01_22.contract'
import mySkill16340616787851617MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16340616787851617MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16340616787851617/myCoolEvent.v2021_01_22.contract'
import mySkill16340618742321647MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16340618742321647MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16340618742321647/myCoolEvent.v2021_01_22.contract'
import mySkill16340725554051577MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16340725554051577MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16340725554051577/myCoolEvent.v2021_01_22.contract'
import mySkill16340727241551592MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16340727241551592MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16340727241551592/myCoolEvent.v2021_01_22.contract'
import mySkill16340832887811670MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16340832887811670MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16340832887811670/myCoolEvent.v2021_01_22.contract'
import mySkill16340834643141573MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16340834643141573MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16340834643141573/myCoolEvent.v2021_01_22.contract'
import mySkill16340941393941671MyCoolEventEventContract_v2021_01_22, { MyCoolEventEventContract as MySkill16340941393941671MyCoolEventEventContract_v2021_01_22  } from '#spruce/events/mySkill16340941393941671/myCoolEvent.v2021_01_22.contract'
import calendarCreateCalendarEventTypeEventContract_v2021_05_19, { CreateCalendarEventTypeEventContract as CalendarCreateCalendarEventTypeEventContract_v2021_05_19  } from '#spruce/events/calendar/createCalendarEventType.v2021_05_19.contract'
import calendarListCalendarEventTypesEventContract_v2021_05_19, { ListCalendarEventTypesEventContract as CalendarListCalendarEventTypesEventContract_v2021_05_19  } from '#spruce/events/calendar/listCalendarEventTypes.v2021_05_19.contract'
import mySecondSkill1634098075723Count21MyNewEventEventContract_v2021_10_13, { MyNewEventEventContract as MySecondSkill1634098075723Count21MyNewEventEventContract_v2021_10_13  } from '#spruce/events/mySecondSkill1634098075723Count21/myNewEvent.v2021_10_13.contract'
import heartwoodTest1634098079594Count84TestEventEventContract_v2020_01_01, { TestEventEventContract as HeartwoodTest1634098079594Count84TestEventEventContract_v2020_01_01  } from '#spruce/events/heartwoodTest1634098079594Count84/testEvent.v2020_01_01.contract'
import aTempSkill1634098101463Count54TestSyncEventContract_v2021_01_01, { TestSyncEventContract as ATempSkill1634098101463Count54TestSyncEventContract_v2021_01_01  } from '#spruce/events/aTempSkill1634098101463Count54/testSync.v2021_01_01.contract'
import eventStoreTestSkill1634098831152Count43MyEventStoreAmazingEventEventContract_v2021_10_13, { MyEventStoreAmazingEventEventContract as EventStoreTestSkill1634098831152Count43MyEventStoreAmazingEventEventContract_v2021_10_13  } from '#spruce/events/eventStoreTestSkill1634098831152Count43/myEventStoreAmazingEvent.v2021_10_13.contract'
import eventStoreTestSkill1634098874592Count44MyEventStoreAmazingEventEventContract_v2021_10_13, { MyEventStoreAmazingEventEventContract as EventStoreTestSkill1634098874592Count44MyEventStoreAmazingEventEventContract_v2021_10_13  } from '#spruce/events/eventStoreTestSkill1634098874592Count44/myEventStoreAmazingEvent.v2021_10_13.contract'
import heartwoodTest1634098921805Count74TestRegisterSkillViews1634098920199EventContract_v2021_10_13, { TestRegisterSkillViews1634098920199EventContract as HeartwoodTest1634098921805Count74TestRegisterSkillViews1634098920199EventContract_v2021_10_13  } from '#spruce/events/heartwoodTest1634098921805Count74/testRegisterSkillViews1634098920199.v2021_10_13.contract'

export default [
    appointmentsDidBookAppointmentsEventContract_v2021_06_23,
    formsConvertPdfToFormEventContract_v2021_07_02,
    formsConvertPdfToSchemasEventContract_v2021_07_02,
    formsCreateFormEventContract_v2021_07_02,
    formsDeleteCompletedFormEventContract_v2021_07_02,
    formsDidUpdateCompletedFormEventContract_v2021_07_02,
    formsGetCompletedFormEventContract_v2021_07_02,
    formsListCompletedFormsEventContract_v2021_07_02,
    formsListFormsEventContract_v2021_07_02,
    formsUpdateCompletedFormEventContract_v2021_07_02,
    heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
    heartwoodGetSkillViewsEventContract_v2021_02_11,
    heartwoodRegisterSkillViewsEventContract_v2021_02_11,
    heartwoodGenerateUrlEventContract_v2021_02_11,
    mySkill16340510246601641MyCoolEventEventContract_v2021_01_22,
    mySkill16340512316921614MyCoolEventEventContract_v2021_01_22,
    mySkill16340616787851617MyCoolEventEventContract_v2021_01_22,
    mySkill16340618742321647MyCoolEventEventContract_v2021_01_22,
    mySkill16340725554051577MyCoolEventEventContract_v2021_01_22,
    mySkill16340727241551592MyCoolEventEventContract_v2021_01_22,
    mySkill16340832887811670MyCoolEventEventContract_v2021_01_22,
    mySkill16340834643141573MyCoolEventEventContract_v2021_01_22,
    mySkill16340941393941671MyCoolEventEventContract_v2021_01_22,
    calendarCreateCalendarEventTypeEventContract_v2021_05_19,
    calendarListCalendarEventTypesEventContract_v2021_05_19,
    mySecondSkill1634098075723Count21MyNewEventEventContract_v2021_10_13,
    heartwoodTest1634098079594Count84TestEventEventContract_v2020_01_01,
    aTempSkill1634098101463Count54TestSyncEventContract_v2021_01_01,
    eventStoreTestSkill1634098831152Count43MyEventStoreAmazingEventEventContract_v2021_10_13,
    eventStoreTestSkill1634098874592Count44MyEventStoreAmazingEventEventContract_v2021_10_13,
    heartwoodTest1634098921805Count74TestRegisterSkillViews1634098920199EventContract_v2021_10_13,
    ...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
    interface SkillEventSignatures {
    
    'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23'],
    
    
    'forms.convert-pdf-to-form::v2021_07_02': FormsConvertPdfToFormEventContract_v2021_07_02['eventSignatures']['forms.convert-pdf-to-form::v2021_07_02'],
    
    
    'forms.convert-pdf-to-schemas::v2021_07_02': FormsConvertPdfToSchemasEventContract_v2021_07_02['eventSignatures']['forms.convert-pdf-to-schemas::v2021_07_02'],
    
    
    'forms.create-form::v2021_07_02': FormsCreateFormEventContract_v2021_07_02['eventSignatures']['forms.create-form::v2021_07_02'],
    
    
    'forms.delete-completed-form::v2021_07_02': FormsDeleteCompletedFormEventContract_v2021_07_02['eventSignatures']['forms.delete-completed-form::v2021_07_02'],
    
    
    'forms.did-update-completed-form::v2021_07_02': FormsDidUpdateCompletedFormEventContract_v2021_07_02['eventSignatures']['forms.did-update-completed-form::v2021_07_02'],
    
    
    'forms.get-completed-form::v2021_07_02': FormsGetCompletedFormEventContract_v2021_07_02['eventSignatures']['forms.get-completed-form::v2021_07_02'],
    
    
    'forms.list-completed-forms::v2021_07_02': FormsListCompletedFormsEventContract_v2021_07_02['eventSignatures']['forms.list-completed-forms::v2021_07_02'],
    
    
    'forms.list-forms::v2021_07_02': FormsListFormsEventContract_v2021_07_02['eventSignatures']['forms.list-forms::v2021_07_02'],
    
    
    'forms.update-completed-form::v2021_07_02': FormsUpdateCompletedFormEventContract_v2021_07_02['eventSignatures']['forms.update-completed-form::v2021_07_02'],
    
    
    'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11'],
    
    
    'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11'],
    
    
    'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11'],
    
    
    'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11'],
    
    
    'my-skill-1634051024660-1641.my-cool-event::v2021_01_22': MySkill16340510246601641MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634051024660-1641.my-cool-event::v2021_01_22'],
    
    
    'my-skill-1634051231692-1614.my-cool-event::v2021_01_22': MySkill16340512316921614MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634051231692-1614.my-cool-event::v2021_01_22'],
    
    
    'my-skill-1634061678785-1617.my-cool-event::v2021_01_22': MySkill16340616787851617MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634061678785-1617.my-cool-event::v2021_01_22'],
    
    
    'my-skill-1634061874232-1647.my-cool-event::v2021_01_22': MySkill16340618742321647MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634061874232-1647.my-cool-event::v2021_01_22'],
    
    
    'my-skill-1634072555405-1577.my-cool-event::v2021_01_22': MySkill16340725554051577MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634072555405-1577.my-cool-event::v2021_01_22'],
    
    
    'my-skill-1634072724155-1592.my-cool-event::v2021_01_22': MySkill16340727241551592MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634072724155-1592.my-cool-event::v2021_01_22'],
    
    
    'my-skill-1634083288781-1670.my-cool-event::v2021_01_22': MySkill16340832887811670MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634083288781-1670.my-cool-event::v2021_01_22'],
    
    
    'my-skill-1634083464314-1573.my-cool-event::v2021_01_22': MySkill16340834643141573MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634083464314-1573.my-cool-event::v2021_01_22'],
    
    
    'my-skill-1634094139394-1671.my-cool-event::v2021_01_22': MySkill16340941393941671MyCoolEventEventContract_v2021_01_22['eventSignatures']['my-skill-1634094139394-1671.my-cool-event::v2021_01_22'],
    
    
    'calendar.create-calendar-event-type::v2021_05_19': CalendarCreateCalendarEventTypeEventContract_v2021_05_19['eventSignatures']['calendar.create-calendar-event-type::v2021_05_19'],
    
    
    'calendar.list-calendar-event-types::v2021_05_19': CalendarListCalendarEventTypesEventContract_v2021_05_19['eventSignatures']['calendar.list-calendar-event-types::v2021_05_19'],
    
    
    'my-second-skill-1634098075723-count-21.my-new-event::v2021_10_13': MySecondSkill1634098075723Count21MyNewEventEventContract_v2021_10_13['eventSignatures']['my-second-skill-1634098075723-count-21.my-new-event::v2021_10_13'],
    
    
    'heartwood-test-1634098079594-count-84.test-event::v2020_01_01': HeartwoodTest1634098079594Count84TestEventEventContract_v2020_01_01['eventSignatures']['heartwood-test-1634098079594-count-84.test-event::v2020_01_01'],
    
    
    'a-temp-skill-1634098101463-count-54.test-sync::v2021_01_01': ATempSkill1634098101463Count54TestSyncEventContract_v2021_01_01['eventSignatures']['a-temp-skill-1634098101463-count-54.test-sync::v2021_01_01'],
    
    
    'event-store-test-skill-1634098831152-count-43.my-event-store-amazing-event::v2021_10_13': EventStoreTestSkill1634098831152Count43MyEventStoreAmazingEventEventContract_v2021_10_13['eventSignatures']['event-store-test-skill-1634098831152-count-43.my-event-store-amazing-event::v2021_10_13'],
    
    
    'event-store-test-skill-1634098874592-count-44.my-event-store-amazing-event::v2021_10_13': EventStoreTestSkill1634098874592Count44MyEventStoreAmazingEventEventContract_v2021_10_13['eventSignatures']['event-store-test-skill-1634098874592-count-44.my-event-store-amazing-event::v2021_10_13'],
    
    
    'heartwood-test-1634098921805-count-74.test-register-skill-views1634098920199::v2021_10_13': HeartwoodTest1634098921805Count74TestRegisterSkillViews1634098920199EventContract_v2021_10_13['eventSignatures']['heartwood-test-1634098921805-count-74.test-register-skill-views1634098920199::v2021_10_13'],
    
    }
}