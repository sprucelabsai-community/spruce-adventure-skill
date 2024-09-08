import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { Friend } from '../../../../adventure.types'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { stores, source, payload, connectToApiAsSkill } = event
    const { filter = 'confirmed' } = payload ?? {}

    const client = await connectToApiAsSkill()
    const connections = await stores.getStore('connections')
    const matches = await connections.find({
        isConfirmed: filter === 'confirmed',
        //@ts-ignore
        $or: [
            { 'source.personId': source.personId },
            { 'target.personId': source.personId },
        ],
    })

    let friends: Friend[] = []

    if (matches.length > 0) {
        const personIds = [
            ...matches.map((m) => m.target?.personId),
            ...matches.map((m) => m.source.personId),
        ].filter((id) => id && id !== source.personId) as string[]

        const [{ people }] = await client.emitAndFlattenResponses(
            'list-people::v2020_12_25',
            {
                payload: {
                    personIds,
                },
            }
        )

        friends = people.map((p) => ({
            id: p.id,
            casualName: p.casualName,
            avatar: p.avatar,
            inviteSender: matches.find((m) => m.source.personId === p.id)
                ? 'them'
                : 'me',
        }))
    }

    return {
        friends,
    }
}

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.ListFriendsResponsePayload
type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.ListFriendsEmitTargetAndPayload
