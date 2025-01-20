import '#spruce/permissions/permissions.types'
import deleteGroupEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/deleteGroupEmitTargetAndPayload.schema'
import deleteGroupResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/deleteGroupResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const deleteGroupEventContract = buildEventContract({
    eventSignatures: {
        'adventure.delete-group::v2022_09_09': {
            isGlobal: true,
            
            
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-delete-groups"]},
            
            emitPayloadSchema: deleteGroupEmitTargetAndPayloadSchema,
            responsePayloadSchema: deleteGroupResponsePayloadSchema,
            
            
        }
    }
})
export default deleteGroupEventContract

export type DeleteGroupEventContract = typeof deleteGroupEventContract