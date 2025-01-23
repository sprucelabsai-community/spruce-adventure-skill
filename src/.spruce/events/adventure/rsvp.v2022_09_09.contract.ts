import '#spruce/permissions/permissions.types'
import rsvpEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/rsvpEmitTargetAndPayload.schema'
import rsvpResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/rsvpResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const rsvpEventContract = buildEventContract({
    eventSignatures: {
        'adventure.rsvp::v2022_09_09': {
            isGlobal: true,
            
            aiInstructions: `Allows me to RSVP to an adventure! I can't RSVP to my own adventure, so when asking about RSVP, make sure to list adventures and filter out the ones that are mine (using source.personId to compare to my id using the whoami event).`,
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-rsvp"]},
            
            emitPayloadSchema: rsvpEmitTargetAndPayloadSchema,
            responsePayloadSchema: rsvpResponsePayloadSchema,
            
            
        }
    }
})
export default rsvpEventContract

export type RsvpEventContract = typeof rsvpEventContract