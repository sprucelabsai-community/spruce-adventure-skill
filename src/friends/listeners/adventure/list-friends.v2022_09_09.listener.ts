import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { Friend } from '../../../adventure.types'

export default async (
	event: SpruceEvent<SkillEventContract>
): SpruceEventResponse<ResponsePayload> => {
	const { stores, client, source } = event

	const connections = await stores.getStore('connections')
	const matches = await connections.find({
		//@ts-ignore
		$or: [
			{ 'source.personId': source.personId },
			{ 'target.personId': source.personId },
		],
	})

	let friends: Friend[] = []

	if (matches.length > 0) {
		const personIds = [
			...matches.map((m) => m.target.personId),
			...matches.map((m) => m.source.personId),
		].filter((id) => id !== source.personId)

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
		}))
	}

	return {
		friends,
	}
}

type ResponsePayload =
	SpruceSchemas.Adventure.v2022_09_09.ListFriendsResponsePayload
