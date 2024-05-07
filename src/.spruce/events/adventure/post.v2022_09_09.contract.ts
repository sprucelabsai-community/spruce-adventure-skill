import '#spruce/permissions/permissions.types'
import postEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/postEmitTargetAndPayload.schema'
import postResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/postResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const postEventContract = buildEventContract({
    eventSignatures: {
        'adventure.post::v2022_09_09': {
            isGlobal: true,
            
            
            emitPayloadSchema: postEmitTargetAndPayloadSchema,
            responsePayloadSchema: postResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
  "id": "postEmitPermissions",
  "name": "Post adventure",
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-post-adventure",
      "name": "Can post adventure",
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
export default postEventContract

export type PostEventContract = typeof postEventContract