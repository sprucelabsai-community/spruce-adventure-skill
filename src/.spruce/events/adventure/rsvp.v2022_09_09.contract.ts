import '#spruce/permissions/permissions.types'
import rsvpEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/rsvpEmitTargetAndPayload.schema'
import rsvpResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/rsvpResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const rsvpEventContract = buildEventContract({
    eventSignatures: {
        'adventure.rsvp::v2022_09_09': {
            isGlobal: true,
            
            
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-rsvp"]},
            
            emitPayloadSchema: rsvpEmitTargetAndPayloadSchema,
            responsePayloadSchema: rsvpResponsePayloadSchema,
            
            
        }
    }
})
export default rsvpEventContract

export type RsvpEventContract = typeof rsvpEventContract