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
import heartwoodTest1629038295136Count37TestRegisterSkillViews1629038293611EventContract_v2021_08_15, {
	TestRegisterSkillViews1629038293611EventContract as HeartwoodTest1629038295136Count37TestRegisterSkillViews1629038293611EventContract_v2021_08_15,
} from '#spruce/events/heartwoodTest1629038295136Count37/testRegisterSkillViews1629038293611.v2021_08_15.contract'
import heartwoodTest1629038459032Count86TestEventEventContract_v2020_01_01, {
	TestEventEventContract as HeartwoodTest1629038459032Count86TestEventEventContract_v2020_01_01,
} from '#spruce/events/heartwoodTest1629038459032Count86/testEvent.v2020_01_01.contract'
import mySecondSkill1629038384254Count79MyNewEventEventContract_v2021_08_15, {
	MyNewEventEventContract as MySecondSkill1629038384254Count79MyNewEventEventContract_v2021_08_15,
} from '#spruce/events/mySecondSkill1629038384254Count79/myNewEvent.v2021_08_15.contract'

export default [
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	heartwoodTest1629038295136Count37TestRegisterSkillViews1629038293611EventContract_v2021_08_15,
	mySecondSkill1629038384254Count79MyNewEventEventContract_v2021_08_15,
	heartwoodTest1629038459032Count86TestEventEventContract_v2020_01_01,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']

		'heartwood-test-1629038295136-count-37.test-register-skill-views1629038293611::v2021_08_15': HeartwoodTest1629038295136Count37TestRegisterSkillViews1629038293611EventContract_v2021_08_15['eventSignatures']['heartwood-test-1629038295136-count-37.test-register-skill-views1629038293611::v2021_08_15']

		'my-second-skill-1629038384254-count-79.my-new-event::v2021_08_15': MySecondSkill1629038384254Count79MyNewEventEventContract_v2021_08_15['eventSignatures']['my-second-skill-1629038384254-count-79.my-new-event::v2021_08_15']

		'heartwood-test-1629038459032-count-86.test-event::v2020_01_01': HeartwoodTest1629038459032Count86TestEventEventContract_v2020_01_01['eventSignatures']['heartwood-test-1629038459032-count-86.test-event::v2020_01_01']
	}
}
