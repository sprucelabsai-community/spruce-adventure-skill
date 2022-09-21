import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import SpruceError from '../../../errors/SpruceError'

export default async (
	event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
	const { stores, target, source, payload } = event
	const { canIMakeIt } = payload
	const { adventureId } = target
	const { personId: personSource } = source
	const personId = personSource!

	const adventures = await stores.getStore('adventures')
	const key = canIMakeIt ? 'whosIn' : 'whosOut'
	const match = await adventures.findOne({
		id: adventureId,
	})

	if (!match) {
		throw new SpruceError({
			code: 'NOT_FOUND',
			friendlyMessage: `Oh no!! I couldn't find that reservation!`,
		})
	}

	match.whosOut = match.whosOut.filter((i) => i !== personId)
	match.whosIn = match.whosIn.filter((i) => i !== personId)

	match[key].push(personId)

	await adventures.updateOne(
		{},
		{ whosIn: match.whosIn, whosOut: match.whosOut }
	)

	return {
		success: true,
	}
}

type EmitPayload = SpruceSchemas.Adventure.v2022_09_09.RsvpEmitTargetAndPayload
type ResponsePayload = SpruceSchemas.Adventure.v2022_09_09.RsvpResponsePayload
