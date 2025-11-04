import '#spruce/permissions/permissions.types'
import listResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/listResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listEventContract = buildEventContract({
    eventSignatures: {
        'adventure.list::v2022_09_09': {
            isGlobal: true,
            
            aiInstructions: "Use this to see what adventures me or my friends have posted!",
            
            
            listenPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-list-adventures"]},
            
            responsePayloadSchema: listResponsePayloadSchema,
            
            
        }
    }
})
export default listEventContract

export type ListEventContract = typeof listEventContract
