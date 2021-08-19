import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1629384042933EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1629384044184Count58/v2021_08_19/testRegisterSkillViews1629384042933EmitTargetAndPayload.schema'
import testRegisterSkillViews1629384042933ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1629384044184Count58/v2021_08_19/testRegisterSkillViews1629384042933ResponsePayload.schema'

const testRegisterSkillViews1629384042933EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1629384044184-count-58.test-register-skill-views1629384042933::v2021_08_19':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1629384042933EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1629384042933ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1629384042933EmitPermissions',
					name: 'did book appointment',
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
						},
					],
				}),
				listenPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1629384042933ListenPermissions',
					name: 'did book appointment',
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
						},
					],
				}),
			},
	},
})
export default testRegisterSkillViews1629384042933EventContract

export type TestRegisterSkillViews1629384042933EventContract =
	typeof testRegisterSkillViews1629384042933EventContract
