import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'

import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
    event: SpruceEvent
): SpruceEventResponse<ResponsePayload> => {
    const { source, groupFinder } = event

    const personId = source?.personId
    const all = await groupFinder.findForPerson(personId!)
    return {
        groups: all,
    }
}

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.ListGroupsResponsePayload
