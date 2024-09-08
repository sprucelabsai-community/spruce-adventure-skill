import '#spruce/permissions/permissions.types'
import eventsEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/eventsEmitTargetAndPayload.schema'
import acceptConnectionResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/acceptConnectionResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const eventsEventContract = buildEventContract({
    eventSignatures: {
        'adventure.events::v2022_09_09': {
            isGlobal: true,
            emitPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-accept-connection"]},
            
            emitPayloadSchema: eventsEmitTargetAndPayloadSchema,
            responsePayloadSchema: acceptConnectionResponsePayloadSchema,
            
            
        }
    }
})
export default eventsEventContract

export type EventsEventContract = typeof eventsEventContract