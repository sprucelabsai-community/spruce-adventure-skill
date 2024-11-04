import '#spruce/permissions/permissions.types'
import addFriendToGroupEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/addFriendToGroupEmitTargetAndPayload.schema'
import addFriendToGroupResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/addFriendToGroupResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const addFriendToGroupEventContract = buildEventContract({
    eventSignatures: {
        'adventure.add-friend-to-group::v2022_09_09': {
            isGlobal: true,
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-add-friend-to-groups"]},
            
            emitPayloadSchema: addFriendToGroupEmitTargetAndPayloadSchema,
            responsePayloadSchema: addFriendToGroupResponsePayloadSchema,
            
            
        }
    }
})
export default addFriendToGroupEventContract

export type AddFriendToGroupEventContract = typeof addFriendToGroupEventContract