import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633122593165EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633122595136Count29/v2021_10_01/testRegisterSkillViews1633122593165EmitTargetAndPayload.schema'
import testRegisterSkillViews1633122593165ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633122595136Count29/v2021_10_01/testRegisterSkillViews1633122593165ResponsePayload.schema'

const testRegisterSkillViews1633122593165EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633122595136-count-29.test-register-skill-views1633122593165::v2021_10_01':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633122593165EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633122593165ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633122593165EmitPermissions',
					name: 'did book appointment',
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
							defaults: {
								skill: false,
							},
							requireAllStatuses: false,
						},
					],
				}),
				listenPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633122593165ListenPermissions',
					name: 'did book appointment',
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
							defaults: {
								skill: false,
							},
							requireAllStatuses: false,
						},
					],
				}),
			},
	},
})
export default testRegisterSkillViews1633122593165EventContract

export type TestRegisterSkillViews1633122593165EventContract =
	typeof testRegisterSkillViews1633122593165EventContract
