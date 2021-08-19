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
import heartwoodTest1629384044184Count58TestRegisterSkillViews1629384042933EventContract_v2021_08_19, {
	TestRegisterSkillViews1629384042933EventContract as HeartwoodTest1629384044184Count58TestRegisterSkillViews1629384042933EventContract_v2021_08_19,
} from '#spruce/events/heartwoodTest1629384044184Count58/testRegisterSkillViews1629384042933.v2021_08_19.contract'
import heartwoodTest1629384182983Count4TestEventEventContract_v2020_01_01, {
	TestEventEventContract as HeartwoodTest1629384182983Count4TestEventEventContract_v2020_01_01,
} from '#spruce/events/heartwoodTest1629384182983Count4/testEvent.v2020_01_01.contract'

export default [
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodTest1629384044184Count58TestRegisterSkillViews1629384042933EventContract_v2021_08_19,
	heartwoodTest1629384182983Count4TestEventEventContract_v2020_01_01,
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'heartwood-test-1629384044184-count-58.test-register-skill-views1629384042933::v2021_08_19': HeartwoodTest1629384044184Count58TestRegisterSkillViews1629384042933EventContract_v2021_08_19['eventSignatures']['heartwood-test-1629384044184-count-58.test-register-skill-views1629384042933::v2021_08_19']

		'heartwood-test-1629384182983-count-4.test-event::v2020_01_01': HeartwoodTest1629384182983Count4TestEventEventContract_v2020_01_01['eventSignatures']['heartwood-test-1629384182983-count-4.test-event::v2020_01_01']

		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']
	}
}
