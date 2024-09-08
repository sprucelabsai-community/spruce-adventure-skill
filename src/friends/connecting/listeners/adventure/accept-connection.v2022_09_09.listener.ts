import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import SpruceError from '../../../../errors/SpruceError'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { stores, source, target } = event

    const { connectionId } = target

    const connections = await stores.getStore('connections')
    const total = await connections.update(
        { id: connectionId },
        { target: { personId: source.personId! }, isConfirmed: true }
    )
    if (total === 0) {
        throw new SpruceError({
            code: 'NOT_FOUND',
            friendlyMessage: `I could not find the invite to make the connection!`,
        })
    }

    return {
        success: true,
    }
}

type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.AcceptConnectionEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.AcceptConnectionResponsePayload
