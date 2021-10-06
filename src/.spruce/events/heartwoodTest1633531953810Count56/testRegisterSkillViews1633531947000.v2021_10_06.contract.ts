import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633531947000EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633531953810Count56/v2021_10_06/testRegisterSkillViews1633531947000EmitTargetAndPayload.schema'
import testRegisterSkillViews1633531947000ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633531953810Count56/v2021_10_06/testRegisterSkillViews1633531947000ResponsePayload.schema'

const testRegisterSkillViews1633531947000EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633531953810-count-56.test-register-skill-views1633531947000::v2021_10_06':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633531947000EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633531947000ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633531947000EmitPermissions',
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
					id: 'testRegisterSkillViews1633531947000ListenPermissions',
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
export default testRegisterSkillViews1633531947000EventContract

export type TestRegisterSkillViews1633531947000EventContract =
	typeof testRegisterSkillViews1633531947000EventContract
