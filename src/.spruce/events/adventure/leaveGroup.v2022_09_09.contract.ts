import '#spruce/permissions/permissions.types'
import leaveGroupEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/leaveGroupEmitTargetAndPayload.schema'
import leaveGroupResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/leaveGroupResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const leaveGroupEventContract = buildEventContract({
    eventSignatures: {
        'adventure.leave-group::v2022_09_09': {
            isGlobal: true,
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-leave-groups"]},
            
            emitPayloadSchema: leaveGroupEmitTargetAndPayloadSchema,
            responsePayloadSchema: leaveGroupResponsePayloadSchema,
            
            
        }
    }
})
export default leaveGroupEventContract

export type LeaveGroupEventContract = typeof leaveGroupEventContract