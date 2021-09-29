import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632927038091EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632927042665Count33/v2021_09_29/testRegisterSkillViews1632927038091EmitTargetAndPayload.schema'
import testRegisterSkillViews1632927038091ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632927042665Count33/v2021_09_29/testRegisterSkillViews1632927038091ResponsePayload.schema'

const testRegisterSkillViews1632927038091EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632927042665-count-33.test-register-skill-views1632927038091::v2021_09_29':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632927038091EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632927038091ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632927038091EmitPermissions',
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
					id: 'testRegisterSkillViews1632927038091ListenPermissions',
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
export default testRegisterSkillViews1632927038091EventContract

export type TestRegisterSkillViews1632927038091EventContract =
	typeof testRegisterSkillViews1632927038091EventContract
