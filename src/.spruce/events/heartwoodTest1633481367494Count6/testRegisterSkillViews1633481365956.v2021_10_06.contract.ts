import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1633481365956EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633481367494Count6/v2021_10_06/testRegisterSkillViews1633481365956EmitTargetAndPayload.schema'
import testRegisterSkillViews1633481365956ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633481367494Count6/v2021_10_06/testRegisterSkillViews1633481365956ResponsePayload.schema'

const testRegisterSkillViews1633481365956EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1633481367494-count-6.test-register-skill-views1633481365956::v2021_10_06':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1633481365956EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1633481365956ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633481365956EmitPermissions',
					name: 'did book appointment',
					description: null,
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
							requireAllStatuses: false,
							defaults: {
								skill: false,
								owner: null,
								groupManager: null,
								manager: null,
								teammate: null,
								guest: null,
								anonymous: null,
								loggedIn: null,
							},
							can: null,
						},
					],
				}),
				listenPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1633481365956ListenPermissions',
					name: 'did book appointment',
					description: null,
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
							requireAllStatuses: false,
							defaults: {
								skill: false,
								owner: null,
								groupManager: null,
								manager: null,
								teammate: null,
								guest: null,
								anonymous: null,
								loggedIn: null,
							},
							can: null,
						},
					],
				}),
			},
	},
})
export default testRegisterSkillViews1633481365956EventContract

export type TestRegisterSkillViews1633481365956EventContract =
	typeof testRegisterSkillViews1633481365956EventContract
