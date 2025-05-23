import '#spruce/permissions/permissions.types'
import postEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/postEmitTargetAndPayload.schema'
import postResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/postResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const postEventContract = buildEventContract({
    eventSignatures: {
        'adventure.post::v2022_09_09': {
            isGlobal: true,
            
            aiInstructions: `This allows me to post a new adventure! You will need to lookup what groups I have available to populate groupId in the target.`,
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-post-adventure"]},
            
            emitPayloadSchema: postEmitTargetAndPayloadSchema,
            responsePayloadSchema: postResponsePayloadSchema,
            
            
        }
    }
})
export default postEventContract

export type PostEventContract = typeof postEventContract