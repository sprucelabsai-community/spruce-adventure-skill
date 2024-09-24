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
import ConnectionAccepter from '../../friends/connecting/ConnectionAccepter'
import FriendFinder from '../../friends/listing/FriendFinder'
import GroupFinder from '../../groups/GroupFinder'
import GroupManagerImpl from '../../groups/GroupManager'
import MessageSenderImpl from '../../messaging/MessageSender'

export default async (
    event: SpruceEvent<SkillEventContract>
): SpruceEventResponse => {
    const { client, stores, skill } = event

    const connections = await ConnectionManager.Manager({ stores })

    const sender = MessageSenderImpl.Sender({
        client,
        connections,
    })

    const poster = await AdventurePoster.Poster({
        stores,
        messageSender: sender,
    })

    const rsvp = await Rsvper.Rsvper({
        stores,
        client,
        connections,
    })

    const canceller = await AdventureCancellerImpl.Canceller({
        stores,
        messageSender: sender,
    })

    const friendFinder = await FriendFinder.Finder({
        client,
        stores,
    })

    const groupFinder = await GroupFinder.Finder({
        stores,
    })

    const groupManager = await GroupManagerImpl.Manager({
        stores,
        finder: groupFinder,
        client,
    })

    const accepter = await ConnectionAccepter.Accepter({ stores })

    const finder = await AdventureFinder.Finder({
        client,
        stores,
        connections,
        groupFinder,
    })

    skill.updateContext('canceller', canceller)
    skill.updateContext('adventureFinder', finder)
    skill.updateContext('poster', poster)
    skill.updateContext('rsvper', rsvp)
    skill.updateContext('friendFiender', friendFinder)
    skill.updateContext('groupFinder', groupFinder)
    skill.updateContext('groupManager', groupManager)
    skill.updateContext('connectionAccepter', accepter)
}
