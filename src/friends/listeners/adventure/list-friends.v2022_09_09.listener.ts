import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	_event: SpruceEvent<SkillEventContract>
): SpruceEventResponse<ResponsePayload> => {
	return {
		friends: [],
	}
}

type ResponsePayload =
	SpruceSchemas.Adventure.v2022_09_09.ListFriendsResponsePayload
