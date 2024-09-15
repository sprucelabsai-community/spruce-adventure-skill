import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { source, target, groupManager } = event
    const { groupId } = target
    const { personId } = source

    await groupManager.leaveGroup(groupId, personId!)

    return {
        success: true,
    }
}

type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.LeaveGroupEmitTargetAndPayload
type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.LeaveGroupResponsePayload
