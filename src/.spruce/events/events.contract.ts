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
import heartwoodTest1629319275041Count15TestEventEventContract_v2020_01_01, {
	TestEventEventContract as HeartwoodTest1629319275041Count15TestEventEventContract_v2020_01_01,
} from '#spruce/events/heartwoodTest1629319275041Count15/testEvent.v2020_01_01.contract'
import heartwoodTest1629319391615Count64TestRegisterSkillViews1629319389973EventContract_v2021_08_18, {
	TestRegisterSkillViews1629319389973EventContract as HeartwoodTest1629319391615Count64TestRegisterSkillViews1629319389973EventContract_v2021_08_18,
} from '#spruce/events/heartwoodTest1629319391615Count64/testRegisterSkillViews1629319389973.v2021_08_18.contract'
import mySecondSkill1629319299846Count57MyNewEventEventContract_v2021_08_18, {
	MyNewEventEventContract as MySecondSkill1629319299846Count57MyNewEventEventContract_v2021_08_18,
} from '#spruce/events/mySecondSkill1629319299846Count57/myNewEvent.v2021_08_18.contract'

export default [
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	heartwoodTest1629319275041Count15TestEventEventContract_v2020_01_01,
	mySecondSkill1629319299846Count57MyNewEventEventContract_v2021_08_18,
	heartwoodTest1629319391615Count64TestRegisterSkillViews1629319389973EventContract_v2021_08_18,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']

		'heartwood-test-1629319275041-count-15.test-event::v2020_01_01': HeartwoodTest1629319275041Count15TestEventEventContract_v2020_01_01['eventSignatures']['heartwood-test-1629319275041-count-15.test-event::v2020_01_01']

		'my-second-skill-1629319299846-count-57.my-new-event::v2021_08_18': MySecondSkill1629319299846Count57MyNewEventEventContract_v2021_08_18['eventSignatures']['my-second-skill-1629319299846-count-57.my-new-event::v2021_08_18']

		'heartwood-test-1629319391615-count-64.test-register-skill-views1629319389973::v2021_08_18': HeartwoodTest1629319391615Count64TestRegisterSkillViews1629319389973EventContract_v2021_08_18['eventSignatures']['heartwood-test-1629319391615-count-64.test-register-skill-views1629319389973::v2021_08_18']
	}
}
