import testRegisterSkillViews1634072237723EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1634072239317Count18/v2021_10_12/testRegisterSkillViews1634072237723EmitTargetAndPayload.schema'
import testRegisterSkillViews1634072237723ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1634072239317Count18/v2021_10_12/testRegisterSkillViews1634072237723ResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const testRegisterSkillViews1634072237723EventContract = buildEventContract({
    eventSignatures: {
        'heartwood-test-1634072239317-count-18.test-register-skill-views1634072237723::v2021_10_12': {
            isGlobal: true,
            emitPayloadSchema: testRegisterSkillViews1634072237723EmitTargetAndPayloadSchema,
            responsePayloadSchema: testRegisterSkillViews1634072237723ResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
  "id": "testRegisterSkillViews1634072237723EmitPermissions",
  "name": "did book appointment",
  "description": null,
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-high-five",
      "name": "Can give high five",
      "description": "Will this person be allowed to high five?",
      "requireAllStatuses": false,
      "defaults": {
        "skill": false,
        "owner": null,
        "groupManager": null,
        "manager": null,
        "teammate": null,
        "guest": null,
        "anonymous": null,
        "loggedIn": null
      },
      "can": null
    }
  ]
}),
            listenPermissionContract: buildPermissionContract({
  "id": "testRegisterSkillViews1634072237723ListenPermissions",
  "name": "did book appointment",
  "description": null,
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-high-five",
      "name": "Can give high five",
      "description": "Will this person be allowed to high five?",
      "requireAllStatuses": false,
      "defaults": {
        "skill": false,
        "owner": null,
        "groupManager": null,
        "manager": null,
        "teammate": null,
        "guest": null,
        "anonymous": null,
        "loggedIn": null
      },
      "can": null
    }
  ]
}),
        }
    }
})
export default testRegisterSkillViews1634072237723EventContract

export type TestRegisterSkillViews1634072237723EventContract = typeof testRegisterSkillViews1634072237723EventContract