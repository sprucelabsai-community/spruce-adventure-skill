import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633394910600EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633394914378Count5/v2021_10_05/testRegisterSkillViews1633394910600EmitTargetAndPayload.schema'
import testRegisterSkillViews1633394910600ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633394914378Count5/v2021_10_05/testRegisterSkillViews1633394910600ResponsePayload.schema'

const testRegisterSkillViews1633394910600EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633394914378-count-5.test-register-skill-views1633394910600::v2021_10_05':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633394910600EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633394910600ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633394910600EmitPermissions',
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
					id: 'testRegisterSkillViews1633394910600ListenPermissions',
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
export default testRegisterSkillViews1633394910600EventContract

export type TestRegisterSkillViews1633394910600EventContract =
	typeof testRegisterSkillViews1633394910600EventContract
