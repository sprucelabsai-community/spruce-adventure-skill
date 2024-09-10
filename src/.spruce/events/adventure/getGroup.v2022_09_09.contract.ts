import '#spruce/permissions/permissions.types'
import getGroupEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/getGroupEmitTargetAndPayload.schema'
import getGroupResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/getGroupResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getGroupEventContract = buildEventContract({
    eventSignatures: {
        'adventure.get-group::v2022_09_09': {
            isGlobal: true,
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-list-groups"]},
            
            emitPayloadSchema: getGroupEmitTargetAndPayloadSchema,
            responsePayloadSchema: getGroupResponsePayloadSchema,
            
            
        }
    }
})
export default getGroupEventContract

export type GetGroupEventContract = typeof getGroupEventContract