import '#spruce/permissions/permissions.types'
import updateGroupEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/updateGroupEmitTargetAndPayload.schema'
import updateGroupResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/updateGroupResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const updateGroupEventContract = buildEventContract({
    eventSignatures: {
        'adventure.update-group::v2022_09_09': {
            isGlobal: true,
            
            
            
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-create-groups"]},
            
            emitPayloadSchema: updateGroupEmitTargetAndPayloadSchema,
            responsePayloadSchema: updateGroupResponsePayloadSchema,
            
            
        }
    }
})
export default updateGroupEventContract

export type UpdateGroupEventContract = typeof updateGroupEventContract
