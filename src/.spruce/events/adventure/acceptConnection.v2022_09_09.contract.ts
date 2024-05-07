import '#spruce/permissions/permissions.types'
import acceptConnectionEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/acceptConnectionEmitTargetAndPayload.schema'
import acceptConnectionResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/acceptConnectionResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const acceptConnectionEventContract = buildEventContract({
    eventSignatures: {
        'adventure.accept-connection::v2022_09_09': {
            isGlobal: true,
            
            
            emitPayloadSchema: acceptConnectionEmitTargetAndPayloadSchema,
            responsePayloadSchema: acceptConnectionResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
  "id": "acceptConnectionEmitPermissions",
  "name": "Accept connection",
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-accept-connection",
      "name": "Can accept connection",
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
export default acceptConnectionEventContract

export type AcceptConnectionEventContract = typeof acceptConnectionEventContract