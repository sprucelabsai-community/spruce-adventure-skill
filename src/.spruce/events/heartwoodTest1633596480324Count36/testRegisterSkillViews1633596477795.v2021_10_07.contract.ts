import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633596477795EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633596480324Count36/v2021_10_07/testRegisterSkillViews1633596477795EmitTargetAndPayload.schema'
import testRegisterSkillViews1633596477795ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633596480324Count36/v2021_10_07/testRegisterSkillViews1633596477795ResponsePayload.schema'

const testRegisterSkillViews1633596477795EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633596480324-count-36.test-register-skill-views1633596477795::v2021_10_07':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633596477795EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633596477795ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633596477795EmitPermissions',
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
					id: 'testRegisterSkillViews1633596477795ListenPermissions',
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
export default testRegisterSkillViews1633596477795EventContract

export type TestRegisterSkillViews1633596477795EventContract =
	typeof testRegisterSkillViews1633596477795EventContract
