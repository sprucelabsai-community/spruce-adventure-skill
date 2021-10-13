import testRegisterSkillViews1634086724807EmitTargetAndPayloadSchema from '#spruce/schemas/heartwoodTest1634086726243Count39/v2021_10_13/testRegisterSkillViews1634086724807EmitTargetAndPayload.schema'
import testRegisterSkillViews1634086724807ResponsePayloadSchema from '#spruce/schemas/heartwoodTest1634086726243Count39/v2021_10_13/testRegisterSkillViews1634086724807ResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const testRegisterSkillViews1634086724807EventContract = buildEventContract({
    eventSignatures: {
        'heartwood-test-1634086726243-count-39.test-register-skill-views1634086724807::v2021_10_13': {
            isGlobal: true,
            emitPayloadSchema: testRegisterSkillViews1634086724807EmitTargetAndPayloadSchema,
            responsePayloadSchema: testRegisterSkillViews1634086724807ResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
  "id": "testRegisterSkillViews1634086724807EmitPermissions",
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
  "id": "testRegisterSkillViews1634086724807ListenPermissions",
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
export default testRegisterSkillViews1634086724807EventContract

export type TestRegisterSkillViews1634086724807EventContract = typeof testRegisterSkillViews1634086724807EventContract