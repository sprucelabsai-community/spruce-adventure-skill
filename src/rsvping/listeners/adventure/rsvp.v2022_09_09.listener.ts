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
	const { stores, target, source } = event
	const { adventureId } = target
	const { personId } = source

	const adventures = await stores.getStore('adventures')

	const total = await adventures.update(
		{
			id: adventureId,
		},
		{
			$push: { whosIn: personId },
		}
	)

	if (total === 0) {
		throw new SpruceError({
			code: 'NOT_FOUND',
			friendlyMessage: `Oh no!! I couldn't find that reservation!`,
		})
	}

	return {
		success: true,
	}
}

type EmitPayload = SpruceSchemas.Adventure.v2022_09_09.RsvpEmitTargetAndPayload
type ResponsePayload = SpruceSchemas.Adventure.v2022_09_09.RsvpResponsePayload
