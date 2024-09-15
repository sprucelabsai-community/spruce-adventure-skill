import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { target, source, payload, groupManager } = event
    const { id } = target
    const { group } = payload
    const { personId } = source

    const updated = await groupManager.updateGroup({
        groupId: id,
        personId: personId!,
        values: group,
    })

    return {
        group: { ...updated },
    }
}

type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.UpdateGroupResponsePayload
