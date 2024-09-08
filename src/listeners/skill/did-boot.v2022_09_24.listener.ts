import { MercuryClient } from '@sprucelabs/mercury-client'
import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import AdventureCancellerImpl from '../../adventures/cancelling/AdventureCanceller'
import AdventureFinder from '../../adventures/listing/AdventureFinder'
import ConnectionManager from '../../adventures/listing/ConnectionManager'
import AdventurePoster from '../../adventures/posting/AdventurePoster'
import Rsvper from '../../adventures/rsvping/Rsvper'
import MessageSenderImpl from '../../messaging/MessageSender'

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

    const sender = MessageSenderImpl.Sender({
        client: client as MercuryClient,
        connections,
    })

    const poster = await AdventurePoster.Poster({
        stores,
        messageSender: sender,
    })

    const rsvp = await Rsvper.Rsvper({
        stores,
        client: client as MercuryClient,
        connections,
    })

    const canceller = await AdventureCancellerImpl.Canceller({
        stores,
        messageSender: sender,
    })

    skill.updateContext('canceller', canceller)
    skill.updateContext('finder', finder)
    skill.updateContext('poster', poster)
    skill.updateContext('rsvper', rsvp)
}
