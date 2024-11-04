import '#spruce/permissions/permissions.types'
import acceptConnectionEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/acceptConnectionEmitTargetAndPayload.schema'
import acceptConnectionResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/acceptConnectionResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const acceptConnectionEventContract = buildEventContract({
    eventSignatures: {
        'adventure.accept-connection::v2022_09_09': {
            isGlobal: true,
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-accept-connection"]},
            
            emitPayloadSchema: acceptConnectionEmitTargetAndPayloadSchema,
            responsePayloadSchema: acceptConnectionResponsePayloadSchema,
            
            
        }
    }
})
export default acceptConnectionEventContract

export type AcceptConnectionEventContract = typeof acceptConnectionEventContract