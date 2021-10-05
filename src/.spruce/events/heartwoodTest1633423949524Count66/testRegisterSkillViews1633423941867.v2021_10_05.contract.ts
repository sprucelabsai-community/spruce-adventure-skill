import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633423941867EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633423949524Count66/v2021_10_05/testRegisterSkillViews1633423941867EmitTargetAndPayload.schema'
import testRegisterSkillViews1633423941867ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633423949524Count66/v2021_10_05/testRegisterSkillViews1633423941867ResponsePayload.schema'

const testRegisterSkillViews1633423941867EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633423949524-count-66.test-register-skill-views1633423941867::v2021_10_05':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633423941867EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633423941867ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633423941867EmitPermissions',
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
					id: 'testRegisterSkillViews1633423941867ListenPermissions',
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
export default testRegisterSkillViews1633423941867EventContract

export type TestRegisterSkillViews1633423941867EventContract =
	typeof testRegisterSkillViews1633423941867EventContract
