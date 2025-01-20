import '#spruce/permissions/permissions.types'
import getEmitTargetAndPayloadSchema from '#spruce/schemas/people/v2022_05_29/getEmitTargetAndPayload.schema'
import getResponsePayloadSchema from '#spruce/schemas/people/v2022_05_29/getResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getEventContract = buildEventContract({
    eventSignatures: {
        'people.get::v2022_05_29': {
            isGlobal: true,
            
            
            emitPermissions: {"contractId":"people.people-contract","permissionIdsAny":["can-get-person","can-search-people"]},
            
            emitPayloadSchema: getEmitTargetAndPayloadSchema,
            responsePayloadSchema: getResponsePayloadSchema,
            
            
        }
    }
})
export default getEventContract

export type GetEventContract = typeof getEventContract