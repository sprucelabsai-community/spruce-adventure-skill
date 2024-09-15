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
    const { stores, target, source } = event
    const { groupId } = target
    const { personId } = source

    const groups = await stores.getStore('groups')
    const total = await groups.deleteOne({
        id: groupId,
        //@ts-ignore
        'source.personId': personId,
    })

    if (total === 0) {
        throw new SpruceError({
            code: 'NOT_FOUND',
            friendlyMessage: `I could not find that group!`,
        })
    }

    return {
        success: true,
    }
}

type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.DeleteGroupEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.DeleteGroupResponsePayload
