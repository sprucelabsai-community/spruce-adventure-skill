import { coreEventContracts } from '@sprucelabs/mercury-types'
import appointmentsDidBookAppointmentsEventContract_v2021_06_23, {
	DidBookAppointmentsEventContract as AppointmentsDidBookAppointmentsEventContract_v2021_06_23,
} from '#spruce/events/appointments/didBookAppointments.v2021_06_23.contract'
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
import heartwoodTest1629146504667Count22TestRegisterSkillViews1629146499586EventContract_v2021_08_16, {
	TestRegisterSkillViews1629146499586EventContract as HeartwoodTest1629146504667Count22TestRegisterSkillViews1629146499586EventContract_v2021_08_16,
} from '#spruce/events/heartwoodTest1629146504667Count22/testRegisterSkillViews1629146499586.v2021_08_16.contract'
import heartwoodTest1629146562306Count20TestEventEventContract_v2020_01_01, {
	TestEventEventContract as HeartwoodTest1629146562306Count20TestEventEventContract_v2020_01_01,
} from '#spruce/events/heartwoodTest1629146562306Count20/testEvent.v2020_01_01.contract'
import mySecondSkill1629146481778Count23MyNewEventEventContract_v2021_08_16, {
	MyNewEventEventContract as MySecondSkill1629146481778Count23MyNewEventEventContract_v2021_08_16,
} from '#spruce/events/mySecondSkill1629146481778Count23/myNewEvent.v2021_08_16.contract'

export default [
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	mySecondSkill1629146481778Count23MyNewEventEventContract_v2021_08_16,
	heartwoodTest1629146504667Count22TestRegisterSkillViews1629146499586EventContract_v2021_08_16,
	heartwoodTest1629146562306Count20TestEventEventContract_v2020_01_01,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']

		'my-second-skill-1629146481778-count-23.my-new-event::v2021_08_16': MySecondSkill1629146481778Count23MyNewEventEventContract_v2021_08_16['eventSignatures']['my-second-skill-1629146481778-count-23.my-new-event::v2021_08_16']

		'heartwood-test-1629146504667-count-22.test-register-skill-views1629146499586::v2021_08_16': HeartwoodTest1629146504667Count22TestRegisterSkillViews1629146499586EventContract_v2021_08_16['eventSignatures']['heartwood-test-1629146504667-count-22.test-register-skill-views1629146499586::v2021_08_16']

		'heartwood-test-1629146562306-count-20.test-event::v2020_01_01': HeartwoodTest1629146562306Count20TestEventEventContract_v2020_01_01['eventSignatures']['heartwood-test-1629146562306-count-20.test-event::v2020_01_01']
	}
}
