import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { payload, source, groupManager } = event
    const { group } = payload
    const { personId } = source

    const created = await groupManager.createGroup(personId!, group)

    return {
        group: created,
    }
}

type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.CreateGroupEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.CreateGroupResponsePayload
