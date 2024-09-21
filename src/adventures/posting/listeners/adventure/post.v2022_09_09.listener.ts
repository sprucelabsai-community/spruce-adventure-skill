import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { payload, source, poster, target } = event
    const { adventure } = payload
    const { personId } = source

    const created = await poster.create({
        ...adventure,
        groupId: target?.groupId ?? undefined,
        personId: personId!,
    })

    return {
        adventure: created,
    }
}

type EmitPayload = SpruceSchemas.Adventure.v2022_09_09.PostEmitTargetAndPayload
type ResponsePayload = SpruceSchemas.Adventure.v2022_09_09.PostResponsePayload
