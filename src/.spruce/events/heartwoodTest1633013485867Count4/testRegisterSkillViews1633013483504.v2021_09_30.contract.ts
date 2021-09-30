import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633013483504EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633013485867Count4/v2021_09_30/testRegisterSkillViews1633013483504EmitTargetAndPayload.schema'
import testRegisterSkillViews1633013483504ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633013485867Count4/v2021_09_30/testRegisterSkillViews1633013483504ResponsePayload.schema'

const testRegisterSkillViews1633013483504EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633013485867-count-4.test-register-skill-views1633013483504::v2021_09_30':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633013483504EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633013483504ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633013483504EmitPermissions',
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
					id: 'testRegisterSkillViews1633013483504ListenPermissions',
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
export default testRegisterSkillViews1633013483504EventContract

export type TestRegisterSkillViews1633013483504EventContract =
	typeof testRegisterSkillViews1633013483504EventContract
