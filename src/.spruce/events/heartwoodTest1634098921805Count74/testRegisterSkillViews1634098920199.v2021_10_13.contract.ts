import testRegisterSkillViews1634098920199EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1634098921805Count74/v2021_10_13/testRegisterSkillViews1634098920199EmitTargetAndPayload.schema'
import testRegisterSkillViews1634098920199ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1634098921805Count74/v2021_10_13/testRegisterSkillViews1634098920199ResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const testRegisterSkillViews1634098920199EventContract = buildEventContract({
    eventSignatures: {
        'heartwood-test-1634098921805-count-74.test-register-skill-views1634098920199::v2021_10_13': {
            isGlobal: true,
            emitPayloadSchema: testRegisterSkillViews1634098920199EmitTargetAndPayloadSchema,
            responsePayloadSchema: testRegisterSkillViews1634098920199ResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
  "id": "testRegisterSkillViews1634098920199EmitPermissions",
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
  "id": "testRegisterSkillViews1634098920199ListenPermissions",
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
export default testRegisterSkillViews1634098920199EventContract

export type TestRegisterSkillViews1634098920199EventContract = typeof testRegisterSkillViews1634098920199EventContract