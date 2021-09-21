import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632243320237EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632243322159Count85/v2021_09_21/testRegisterSkillViews1632243320237EmitTargetAndPayload.schema'
import testRegisterSkillViews1632243320237ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632243322159Count85/v2021_09_21/testRegisterSkillViews1632243320237ResponsePayload.schema'

const testRegisterSkillViews1632243320237EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632243322159-count-85.test-register-skill-views1632243320237::v2021_09_21':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632243320237EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632243320237ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632243320237EmitPermissions',
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
					id: 'testRegisterSkillViews1632243320237ListenPermissions',
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
export default testRegisterSkillViews1632243320237EventContract

export type TestRegisterSkillViews1632243320237EventContract =
	typeof testRegisterSkillViews1632243320237EventContract
