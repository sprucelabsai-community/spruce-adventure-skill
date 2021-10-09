import testRegisterSkillViews1633812365812EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1633812373034Count23/v2021_10_09/testRegisterSkillViews1633812365812EmitTargetAndPayload.schema'
import testRegisterSkillViews1633812365812ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1633812373034Count23/v2021_10_09/testRegisterSkillViews1633812365812ResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const testRegisterSkillViews1633812365812EventContract = buildEventContract({
    eventSignatures: {
        'heartwood-test-1633812373034-count-23.test-register-skill-views1633812365812::v2021_10_09': {
            isGlobal: true,
            emitPayloadSchema: testRegisterSkillViews1633812365812EmitTargetAndPayloadSchema,
            responsePayloadSchema: testRegisterSkillViews1633812365812ResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
  "id": "testRegisterSkillViews1633812365812EmitPermissions",
  "name": "did book appointment",
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-high-five",
      "name": "Can give high five",
      "description": "Will this person be allowed to high five?",
      "defaults": {
        "skill": false
      },
      "requireAllStatuses": false
    }
  ]
}),
            listenPermissionContract: buildPermissionContract({
  "id": "testRegisterSkillViews1633812365812ListenPermissions",
  "name": "did book appointment",
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-high-five",
      "name": "Can give high five",
      "description": "Will this person be allowed to high five?",
      "defaults": {
        "skill": false
      },
      "requireAllStatuses": false
    }
  ]
}),
        }
    }
})
export default testRegisterSkillViews1633812365812EventContract

export type TestRegisterSkillViews1633812365812EventContract = typeof testRegisterSkillViews1633812365812EventContract