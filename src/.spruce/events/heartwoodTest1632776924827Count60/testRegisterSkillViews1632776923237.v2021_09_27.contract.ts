import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import testRegisterSkillViews1632776923237EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1632776924827Count60/v2021_09_27/testRegisterSkillViews1632776923237EmitTargetAndPayload.schema'
import testRegisterSkillViews1632776923237ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1632776924827Count60/v2021_09_27/testRegisterSkillViews1632776923237ResponsePayload.schema'

const testRegisterSkillViews1632776923237EventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632776924827-count-60.test-register-skill-views1632776923237::v2021_09_27':
			{
				isGlobal: true,
				emitPayloadSchema:
					testRegisterSkillViews1632776923237EmitTargetAndPayloadSchema,
				responsePayloadSchema:
					testRegisterSkillViews1632776923237ResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'testRegisterSkillViews1632776923237EmitPermissions',
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
					id: 'testRegisterSkillViews1632776923237ListenPermissions',
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
export default testRegisterSkillViews1632776923237EventContract

export type TestRegisterSkillViews1632776923237EventContract =
	typeof testRegisterSkillViews1632776923237EventContract
