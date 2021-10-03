import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633273773977EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633273780105Count2/v2021_10_03/testRegisterSkillViews1633273773977EmitTargetAndPayload.schema'
import testRegisterSkillViews1633273773977ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633273780105Count2/v2021_10_03/testRegisterSkillViews1633273773977ResponsePayload.schema'

const testRegisterSkillViews1633273773977EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633273780105-count-2.test-register-skill-views1633273773977::v2021_10_03':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633273773977EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633273773977ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633273773977EmitPermissions',
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
					id: 'testRegisterSkillViews1633273773977ListenPermissions',
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
export default testRegisterSkillViews1633273773977EventContract

export type TestRegisterSkillViews1633273773977EventContract =
	typeof testRegisterSkillViews1633273773977EventContract
