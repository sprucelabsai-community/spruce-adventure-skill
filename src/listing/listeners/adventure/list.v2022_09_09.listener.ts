import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent<SkillEventContract>
): SpruceEventResponse<ResponsePayload> => {
	const { stores, source, client } = event

	const connectionsStore = await stores.getStore('connections')
	const personId = source.personId!
	const connections = await connectionsStore.find({
		//@ts-ignore
		$or: [{ 'source.personId': personId }, { 'target.personId': personId }],
	})
	const peopleIds: string[] = [personId]

	for (const connection of connections) {
		peopleIds.push(connection.source.personId)
		if (connection?.target?.personId) {
			peopleIds.push(connection.target.personId)
		}
	}

	const adventuresStore = await stores.getStore('adventures')
	const adventures = await adventuresStore.find({
		//@ts-ignore
		'source.personId': { $in: peopleIds },
	})

	const [{ auth }] = await client.emitAndFlattenResponses('whoami::v2020_12_25')

	const { casualName = '**missing**', avatar } = auth.person ?? {}

	return {
		adventures: adventures.map((r) => ({
			...r,
			personCasualName: casualName,
			personAvatar: avatar,
		})),
	}
}

type ResponsePayload = SpruceSchemas.Adventure.v2022_09_09.ListResponsePayload
