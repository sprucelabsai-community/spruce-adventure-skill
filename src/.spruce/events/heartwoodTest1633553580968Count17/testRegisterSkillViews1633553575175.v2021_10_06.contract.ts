import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633553575175EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633553580968Count17/v2021_10_06/testRegisterSkillViews1633553575175EmitTargetAndPayload.schema'
import testRegisterSkillViews1633553575175ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633553580968Count17/v2021_10_06/testRegisterSkillViews1633553575175ResponsePayload.schema'

const testRegisterSkillViews1633553575175EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633553580968-count-17.test-register-skill-views1633553575175::v2021_10_06':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633553575175EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633553575175ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633553575175EmitPermissions',
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
					id: 'testRegisterSkillViews1633553575175ListenPermissions',
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
export default testRegisterSkillViews1633553575175EventContract

export type TestRegisterSkillViews1633553575175EventContract =
	typeof testRegisterSkillViews1633553575175EventContract
