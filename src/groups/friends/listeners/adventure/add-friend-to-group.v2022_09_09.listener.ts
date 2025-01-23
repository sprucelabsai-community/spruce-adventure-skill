import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { groupManager, target, source, payload } = event
    const { groupId } = target
    const { personId } = source
    const { friendId } = payload

    await groupManager.addFriendToGroup({
        groupId,
        sourcePersonId: personId!,
        friendId,
    })

    return {
        success: false,
    }
}

type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupResponsePayload
