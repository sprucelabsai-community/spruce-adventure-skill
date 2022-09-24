import { MercuryClient } from '@sprucelabs/mercury-client'
import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import AdventureFinder from '../../listing/AdventureFinder'

export default async (
	event: SpruceEvent<SkillEventContract>
): SpruceEventResponse => {
	const { client, stores, skill } = event

	const finder = await AdventureFinder.Finder({
		client: client as MercuryClient,
		stores,
	})

	skill.updateContext('finder', finder)
}
