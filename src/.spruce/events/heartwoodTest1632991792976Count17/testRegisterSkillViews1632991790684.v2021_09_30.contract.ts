import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632991790684EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632991792976Count17/v2021_09_30/testRegisterSkillViews1632991790684EmitTargetAndPayload.schema'
import testRegisterSkillViews1632991790684ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632991792976Count17/v2021_09_30/testRegisterSkillViews1632991790684ResponsePayload.schema'

const testRegisterSkillViews1632991790684EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632991792976-count-17.test-register-skill-views1632991790684::v2021_09_30':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632991790684EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632991790684ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632991790684EmitPermissions',
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
					id: 'testRegisterSkillViews1632991790684ListenPermissions',
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
export default testRegisterSkillViews1632991790684EventContract

export type TestRegisterSkillViews1632991790684EventContract =
	typeof testRegisterSkillViews1632991790684EventContract
