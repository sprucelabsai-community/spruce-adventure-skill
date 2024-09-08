import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent
): SpruceEventResponse<ResponsePayload> => {
    const { stores, source } = event
    const connections = await stores.getStore('connections')
    const connection = await connections.createOne({
        source: { personId: source.personId! },
    })
    return {
        connectionId: connection.id,
    }
}

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.CreateConnectionResponsePayload
