import { MercuryClient } from '@sprucelabs/mercury-client'
import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import AdventureFinder from '../../listing/AdventureFinder'
import ConnectionManager from '../../listing/ConnectionManager'
import AdventurePoster from '../../posting/AdventurePoster'

export default async (
	event: SpruceEvent<SkillEventContract>
): SpruceEventResponse => {
	const { client, stores, skill } = event

	const connections = await ConnectionManager.Manager({ stores })
	const finder = await AdventureFinder.Finder({
		client: client as MercuryClient,
		stores,
		connections,
	})

	const poster = await AdventurePoster.Poster({
		stores,
		connections,
		client: client as MercuryClient,
	})

	skill.updateContext('finder', finder)
	skill.updateContext('poster', poster)
}
