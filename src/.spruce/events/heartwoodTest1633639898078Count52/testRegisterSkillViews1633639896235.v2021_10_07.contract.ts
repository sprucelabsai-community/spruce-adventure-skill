import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633639896235EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633639898078Count52/v2021_10_07/testRegisterSkillViews1633639896235EmitTargetAndPayload.schema'
import testRegisterSkillViews1633639896235ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633639898078Count52/v2021_10_07/testRegisterSkillViews1633639896235ResponsePayload.schema'

const testRegisterSkillViews1633639896235EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633639898078-count-52.test-register-skill-views1633639896235::v2021_10_07':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633639896235EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633639896235ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633639896235EmitPermissions',
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
					id: 'testRegisterSkillViews1633639896235ListenPermissions',
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
export default testRegisterSkillViews1633639896235EventContract

export type TestRegisterSkillViews1633639896235EventContract =
	typeof testRegisterSkillViews1633639896235EventContract
