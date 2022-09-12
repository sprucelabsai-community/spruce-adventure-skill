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

	const adventures = await stores.getStore('adventures')
	const records = await adventures.find(
		{
			//@ts-ignore
			'source.personId': source.personId!,
		},
		{ limit: 1 }
	)

	const [{ auth }] = await client.emitAndFlattenResponses('whoami::v2020_12_25')

	const { casualName = '**missing**', avatar } = auth.person ?? {}

	return {
		adventures: records.map((r) => ({
			...r,
			personCasualName: casualName,
			personAvatar: avatar,
		})),
	}
}

type ResponsePayload = SpruceSchemas.Adventure.v2022_09_09.ListResponsePayload
