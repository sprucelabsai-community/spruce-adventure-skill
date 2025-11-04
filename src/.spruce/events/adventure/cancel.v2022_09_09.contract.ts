import '#spruce/permissions/permissions.types'
import cancelEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/cancelEmitTargetAndPayload.schema'
import cancelResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/cancelResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const cancelEventContract = buildEventContract({
    eventSignatures: {
        'adventure.cancel::v2022_09_09': {
            isGlobal: true,
            
            aiInstructions: "Cancel an adventure. Make sure to list adventures and filter out the ones that are mine (using source.personId to compare to my id using the whoami event).",
            
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-cancel-adventure"]},
            
            emitPayloadSchema: cancelEmitTargetAndPayloadSchema,
            responsePayloadSchema: cancelResponsePayloadSchema,
            
            
        }
    }
})
export default cancelEventContract

export type CancelEventContract = typeof cancelEventContract
