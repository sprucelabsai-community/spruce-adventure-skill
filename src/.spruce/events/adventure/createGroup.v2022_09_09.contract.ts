import '#spruce/permissions/permissions.types'
import createGroupEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/createGroupEmitTargetAndPayload.schema'
import createGroupResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/createGroupResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const createGroupEventContract = buildEventContract({
    eventSignatures: {
        'adventure.create-group::v2022_09_09': {
            isGlobal: true,
            
            
            emitPayloadSchema: createGroupEmitTargetAndPayloadSchema,
            responsePayloadSchema: createGroupResponsePayloadSchema,
            
            
        }
    }
})
export default createGroupEventContract

export type CreateGroupEventContract = typeof createGroupEventContract