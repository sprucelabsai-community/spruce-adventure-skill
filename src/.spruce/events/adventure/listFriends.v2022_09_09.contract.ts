import '#spruce/permissions/permissions.types'
import listFriendsEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/listFriendsEmitTargetAndPayload.schema'
import listFriendsResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/listFriendsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listFriendsEventContract = buildEventContract({
    eventSignatures: {
        'adventure.list-friends::v2022_09_09': {
            isGlobal: true,
            
            aiInstructions: "See all friends and family that I'm connected to for hosting Adventures.",
            
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-list-friends"]},
            
            emitPayloadSchema: listFriendsEmitTargetAndPayloadSchema,
            responsePayloadSchema: listFriendsResponsePayloadSchema,
            
            
        }
    }
})
export default listFriendsEventContract

export type ListFriendsEventContract = typeof listFriendsEventContract
