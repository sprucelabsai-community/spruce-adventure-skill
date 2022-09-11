import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent
): SpruceEventResponse<ResponsePayload> => {
	const { stores, source } = event
	const adventures = await stores.getStore('adventures')
	const records = await adventures.find(
		{
			//@ts-ignore
			'source.personId': source.personId!,
		},
		{ limit: 1 }
	)
	return {
		adventures: records,
	}
}

type ResponsePayload = SpruceSchemas.Adventure.v2022_09_09.ListResponsePayload
