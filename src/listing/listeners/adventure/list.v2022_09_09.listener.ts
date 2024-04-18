import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent<SkillEventContract>
): SpruceEventResponse<ResponsePayload> => {
    const { source, finder } = event
    const personId = source.personId!
    const adventures = await finder.findForPerson(personId)

    return {
        adventures,
    }
}

type ResponsePayload = SpruceSchemas.Adventure.v2022_09_09.ListResponsePayload
