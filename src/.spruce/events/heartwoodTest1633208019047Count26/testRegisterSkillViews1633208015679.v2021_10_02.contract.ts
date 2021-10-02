import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633208015679EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633208019047Count26/v2021_10_02/testRegisterSkillViews1633208015679EmitTargetAndPayload.schema'
import testRegisterSkillViews1633208015679ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633208019047Count26/v2021_10_02/testRegisterSkillViews1633208015679ResponsePayload.schema'

const testRegisterSkillViews1633208015679EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633208019047-count-26.test-register-skill-views1633208015679::v2021_10_02':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633208015679EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633208015679ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633208015679EmitPermissions',
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
					id: 'testRegisterSkillViews1633208015679ListenPermissions',
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
export default testRegisterSkillViews1633208015679EventContract

export type TestRegisterSkillViews1633208015679EventContract =
	typeof testRegisterSkillViews1633208015679EventContract
