import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import Rsvper from '../../Rsvper'

export default async (
	event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
	const { stores, target, source, payload } = event
	const { canIMakeIt } = payload
	const { adventureId } = target
	const { personId: personSource } = source
	const personId = personSource!

	const rsvp = await Rsvper.Rsvper({
		stores,
	})

	await rsvp.rsvp({
		adventureId,
		canIMakeIt,
		personId,
	})

	return {
		success: true,
	}
}

type EmitPayload = SpruceSchemas.Adventure.v2022_09_09.RsvpEmitTargetAndPayload
type ResponsePayload = SpruceSchemas.Adventure.v2022_09_09.RsvpResponsePayload
