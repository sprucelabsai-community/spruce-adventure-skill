import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent<SkillEventContract>
): SpruceEventResponse<ResponsePayload> => {
	const { source, canceller } = event

	const count = await canceller.cancel(source.personId!)

	return {
		totalCancelled: count,
	}
}

type ResponsePayload = SpruceSchemas.Adventure.v2022_09_09.CancelResponsePayload
