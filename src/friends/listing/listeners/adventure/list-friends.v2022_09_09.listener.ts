import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { source, payload, friendFiender } = event
    const { filter = 'confirmed', isInGroupId } = payload ?? {}

    const f = await friendFiender.findForPerson({
        arePartOfGroupId: isInGroupId,
        filter,
        personId: source.personId!,
    })

    return {
        friends: f,
    }
}

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.ListFriendsResponsePayload
type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.ListFriendsEmitTargetAndPayload
