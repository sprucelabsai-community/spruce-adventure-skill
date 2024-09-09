import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { stores, source, target = {} } = event

    const connections = await stores.getStore('connections')
    const connection = await connections.createOne({
        source: { personId: source.personId! },
        target,
    })
    return {
        connectionId: connection.id,
    }
}

type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.CreateConnectionEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.CreateConnectionResponsePayload
