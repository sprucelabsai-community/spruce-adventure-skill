import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633014449191EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633014457204Count51/v2021_09_30/testRegisterSkillViews1633014449191EmitTargetAndPayload.schema'
import testRegisterSkillViews1633014449191ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633014457204Count51/v2021_09_30/testRegisterSkillViews1633014449191ResponsePayload.schema'

const testRegisterSkillViews1633014449191EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633014457204-count-51.test-register-skill-views1633014449191::v2021_09_30':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633014449191EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633014449191ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633014449191EmitPermissions',
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
					id: 'testRegisterSkillViews1633014449191ListenPermissions',
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
export default testRegisterSkillViews1633014449191EventContract

export type TestRegisterSkillViews1633014449191EventContract =
	typeof testRegisterSkillViews1633014449191EventContract
