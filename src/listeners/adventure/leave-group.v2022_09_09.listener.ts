import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import SpruceError from '#spruce/../errors/SpruceError'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { stores, source, target } = event
    const { groupId } = target
    const { personId } = source

    const groups = await stores.getStore('groups')
    const match = await groups.findOne(
        {
            id: groupId,
        },
        { shouldIncludePrivateFields: true }
    )

    if (!match) {
        throw new SpruceError({
            code: 'NOT_FOUND',
            friendlyMessage: `I couldn't find the group you're trying to leave.`,
        })
    }

    if (match.source.personId === personId) {
        throw new SpruceError({
            code: 'CANNOT_LEAVE_OWN_GROUP',
        })
    }

    if (match.people.findIndex((id) => id === personId) === -1) {
        throw new SpruceError({
            code: 'CANNOT_LEAVE_GROUP_YOU_ARE_NOT_PART_OF',
        })
    }

    const people = match.people.filter((id) => id !== personId)

    await groups.updateOne(
        {
            id: groupId,
        },
        { people }
    )

    return {
        success: true,
    }
}

type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.LeaveGroupEmitTargetAndPayload
type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.LeaveGroupResponsePayload
