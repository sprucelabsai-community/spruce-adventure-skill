import '#spruce/permissions/permissions.types'
import listGroupsResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/listGroupsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listGroupsEventContract = buildEventContract({
    eventSignatures: {
        'adventure.list-groups::v2022_09_09': {
            isGlobal: true,
            
            aiInstructions: "Allows me to see my adventure groups. These are groups of friends and family we use to schedule fun adventures, play dates, etc.",
            
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-list-groups"]},
            
            
            responsePayloadSchema: listGroupsResponsePayloadSchema,
            
            
        }
    }
})
export default listGroupsEventContract

export type ListGroupsEventContract = typeof listGroupsEventContract
