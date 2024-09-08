import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'

import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { Group, ListGroup } from '../../../../adventure.types'

export default async (
    event: SpruceEvent
): SpruceEventResponse<ResponsePayload> => {
    const { stores, source } = event

    const personId = source?.personId
    const groups = await stores.getStore('groups')
    const all = await groups.find(
        {
            //@ts-ignore
            $or: [{ 'source.personId': personId }, { people: personId }],
        },
        {},
        { shouldIncludePrivateFields: true }
    )

    return {
        groups: all.map((group) => mapToListGroup(group, personId)),
    }
}

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.ListGroupsResponsePayload

function mapToListGroup(match: Group, loggedInId?: string | null): ListGroup {
    return {
        id: match.id,
        title: match.title,
        description: match.description,
        people: match.people,
        isMine: match.source.personId === loggedInId,
    }
}
