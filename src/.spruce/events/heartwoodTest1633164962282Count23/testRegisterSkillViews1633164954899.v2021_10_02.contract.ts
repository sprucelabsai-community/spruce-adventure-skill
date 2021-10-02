import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633164954899EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633164962282Count23/v2021_10_02/testRegisterSkillViews1633164954899EmitTargetAndPayload.schema'
import testRegisterSkillViews1633164954899ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633164962282Count23/v2021_10_02/testRegisterSkillViews1633164954899ResponsePayload.schema'

const testRegisterSkillViews1633164954899EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633164962282-count-23.test-register-skill-views1633164954899::v2021_10_02':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633164954899EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633164954899ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633164954899EmitPermissions',
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
					id: 'testRegisterSkillViews1633164954899ListenPermissions',
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
export default testRegisterSkillViews1633164954899EventContract

export type TestRegisterSkillViews1633164954899EventContract =
	typeof testRegisterSkillViews1633164954899EventContract
