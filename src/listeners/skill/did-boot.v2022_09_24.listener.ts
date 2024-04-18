import { MercuryClient } from '@sprucelabs/mercury-client'
import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import AdventureCanceller from '../../cancelling/AdventureCanceller'
import AdventureFinder from '../../listing/AdventureFinder'
import ConnectionManager from '../../listing/ConnectionManager'
import AdventurePoster from '../../posting/AdventurePoster'
import Rsvper from '../../rsvping/Rsvper'

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

    const rsvp = await Rsvper.Rsvper({
        stores,
        client: client as MercuryClient,
        connections,
    })

    const canceller = await AdventureCanceller.Canceller({ stores })

    skill.updateContext('canceller', canceller)
    skill.updateContext('finder', finder)
    skill.updateContext('poster', poster)
    skill.updateContext('rsvper', rsvp)
}
