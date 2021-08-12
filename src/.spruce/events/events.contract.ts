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
import heartwoodTest1628806438461Count83TestEventEventContract_v2020_01_01, {
	TestEventEventContract as HeartwoodTest1628806438461Count83TestEventEventContract_v2020_01_01,
} from '#spruce/events/heartwoodTest1628806438461Count83/testEvent.v2020_01_01.contract'
import heartwoodTest1628806461547Count69TestRegisterSkillViews1628806460197EventContract_v2021_08_12, {
	TestRegisterSkillViews1628806460197EventContract as HeartwoodTest1628806461547Count69TestRegisterSkillViews1628806460197EventContract_v2021_08_12,
} from '#spruce/events/heartwoodTest1628806461547Count69/testRegisterSkillViews1628806460197.v2021_08_12.contract'

export default [
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodTest1628806438461Count83TestEventEventContract_v2020_01_01,
	heartwoodTest1628806461547Count69TestRegisterSkillViews1628806460197EventContract_v2021_08_12,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']

		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'heartwood-test-1628806438461-count-83.test-event::v2020_01_01': HeartwoodTest1628806438461Count83TestEventEventContract_v2020_01_01['eventSignatures']['heartwood-test-1628806438461-count-83.test-event::v2020_01_01']

		'heartwood-test-1628806461547-count-69.test-register-skill-views1628806460197::v2021_08_12': HeartwoodTest1628806461547Count69TestRegisterSkillViews1628806460197EventContract_v2021_08_12['eventSignatures']['heartwood-test-1628806461547-count-69.test-register-skill-views1628806460197::v2021_08_12']
	}
}
