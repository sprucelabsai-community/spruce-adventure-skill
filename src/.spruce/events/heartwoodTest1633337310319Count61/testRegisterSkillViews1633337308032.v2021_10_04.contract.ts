import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633337308032EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633337310319Count61/v2021_10_04/testRegisterSkillViews1633337308032EmitTargetAndPayload.schema'
import testRegisterSkillViews1633337308032ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633337310319Count61/v2021_10_04/testRegisterSkillViews1633337308032ResponsePayload.schema'

const testRegisterSkillViews1633337308032EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633337310319-count-61.test-register-skill-views1633337308032::v2021_10_04':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633337308032EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633337308032ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633337308032EmitPermissions',
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
					id: 'testRegisterSkillViews1633337308032ListenPermissions',
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
export default testRegisterSkillViews1633337308032EventContract

export type TestRegisterSkillViews1633337308032EventContract =
	typeof testRegisterSkillViews1633337308032EventContract
