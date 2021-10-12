import testRegisterSkillViews1634049904958EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1634049906948Count12/v2021_10_12/testRegisterSkillViews1634049904958EmitTargetAndPayload.schema'
import testRegisterSkillViews1634049904958ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1634049906948Count12/v2021_10_12/testRegisterSkillViews1634049904958ResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const testRegisterSkillViews1634049904958EventContract = buildEventContract({
    eventSignatures: {
        'heartwood-test-1634049906948-count-12.test-register-skill-views1634049904958::v2021_10_12': {
            isGlobal: true,
            emitPayloadSchema: testRegisterSkillViews1634049904958EmitTargetAndPayloadSchema,
            responsePayloadSchema: testRegisterSkillViews1634049904958ResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
  "id": "testRegisterSkillViews1634049904958EmitPermissions",
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
  "id": "testRegisterSkillViews1634049904958ListenPermissions",
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
export default testRegisterSkillViews1634049904958EventContract

export type TestRegisterSkillViews1634049904958EventContract = typeof testRegisterSkillViews1634049904958EventContract