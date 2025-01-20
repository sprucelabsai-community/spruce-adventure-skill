import '#spruce/permissions/permissions.types'
import cancelEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/cancelEmitTargetAndPayload.schema'
import cancelResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/cancelResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const cancelEventContract = buildEventContract({
    eventSignatures: {
        'adventure.cancel::v2022_09_09': {
            isGlobal: true,
            
            
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-cancel-adventure"]},
            
            emitPayloadSchema: cancelEmitTargetAndPayloadSchema,
            responsePayloadSchema: cancelResponsePayloadSchema,
            
            
        }
    }
})
export default cancelEventContract

export type CancelEventContract = typeof cancelEventContract