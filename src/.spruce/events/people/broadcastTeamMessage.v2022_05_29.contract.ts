import '#spruce/permissions/permissions.types'
import broadcastTeamMessageEmitTargetAndPayloadSchema from '#spruce/schemas/people/v2022_05_29/broadcastTeamMessageEmitTargetAndPayload.schema'
import broadcastTeamMessageResponsePayloadSchema from '#spruce/schemas/people/v2022_05_29/broadcastTeamMessageResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const broadcastTeamMessageEventContract = buildEventContract({
    eventSignatures: {
        'people.broadcast-team-message::v2022_05_29': {
            
            
            
            emitPermissions: {"contractId":"people.people-contract","permissionIdsAny":["can-message-team"]},
            
            emitPayloadSchema: broadcastTeamMessageEmitTargetAndPayloadSchema,
            responsePayloadSchema: broadcastTeamMessageResponsePayloadSchema,
            
            
        }
    }
})
export default broadcastTeamMessageEventContract

export type BroadcastTeamMessageEventContract = typeof broadcastTeamMessageEventContract