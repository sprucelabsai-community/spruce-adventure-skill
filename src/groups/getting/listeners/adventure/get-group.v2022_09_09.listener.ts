import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { groupFinder, target, source } = event
    const { id } = target
    const { personId } = source

    const match = await groupFinder.findGroupForPerson(id, personId!)

    return {
        group: match,
    }
}

type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.GetGroupEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.GetGroupResponsePayload
