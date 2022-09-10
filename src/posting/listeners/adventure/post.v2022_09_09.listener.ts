import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import EventFaker from '../../../__tests__/support/EventFaker'

export default async (
	_event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
	return {
		adventure: new EventFaker().generateAdventureValues(),
	}
}

type EmitPayload = SpruceSchemas.Adventure.v2022_09_09.PostEmitTargetAndPayload
type ResponsePayload = SpruceSchemas.Adventure.v2022_09_09.PostResponsePayload
