import '#spruce/permissions/permissions.types'
import createConnectionEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/createConnectionEmitTargetAndPayload.schema'
import createConnectionResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/createConnectionResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const createConnectionEventContract = buildEventContract({
    eventSignatures: {
        'adventure.create-connection::v2022_09_09': {
            isGlobal: true,
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-create-connection"]},
            
            emitPayloadSchema: createConnectionEmitTargetAndPayloadSchema,
            responsePayloadSchema: createConnectionResponsePayloadSchema,
            
            
        }
    }
})
export default createConnectionEventContract

export type CreateConnectionEventContract = typeof createConnectionEventContract