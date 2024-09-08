import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitTargetAndPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { source, canceller, payload } = event
    const { message } = payload ?? {}

    const count = await canceller.cancel(source.personId!, message ?? undefined)

    return {
        totalCancelled: count,
    }
}

type EmitTargetAndPayload =
    SpruceSchemas.Adventure.v2022_09_09.CancelEmitTargetAndPayload
type ResponsePayload = SpruceSchemas.Adventure.v2022_09_09.CancelResponsePayload
