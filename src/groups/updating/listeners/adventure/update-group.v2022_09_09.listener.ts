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
    const { groupFinder, target, source, payload, stores } = event
    const { id } = target
    const { group } = payload
    const { personId } = source

    const match = await groupFinder.findGroupForPerson(id, personId!)

    if (!match.isMine) {
        throw new SpruceError({
            code: 'NOT_YOUR_GROUP',
            friendlyMessage:
                'You cannot update a group that is not yours. You can, however, invite new friends to it or remove yourself from it.',
            groupId: id,
        })
    }

    const groups = await stores.getStore('groups')
    const updated = await groups.updateOne({ id }, { ...group })

    return {
        group: { ...updated },
    }
}

type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.UpdateGroupResponsePayload
