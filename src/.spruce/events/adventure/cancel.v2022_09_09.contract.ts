import '#spruce/permissions/permissions.types'
import cancelResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/cancelResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const cancelEventContract = buildEventContract({
    eventSignatures: {
        'adventure.cancel::v2022_09_09': {
            isGlobal: true,
            
            
            
            responsePayloadSchema: cancelResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
  "id": "cancelEmitPermissions",
  "name": "Cancel",
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-cancel-adventure",
      "name": "Can cancel adventure",
      "defaults": {
        "loggedIn": {
          "default": true
        }
      },
      "requireAllStatuses": false
    }
  ]
}),
            
        }
    }
})
export default cancelEventContract

export type CancelEventContract = typeof cancelEventContract