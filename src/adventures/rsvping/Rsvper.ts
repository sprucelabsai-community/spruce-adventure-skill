import { StoreFactory } from '@sprucelabs/data-stores'
import { MercuryClient } from '@sprucelabs/mercury-client'
import { randomUtil } from '@sprucelabs/spruce-skill-utils'
import { Person } from '../../adventure.types'
import SpruceError from '../../errors/SpruceError'
import ConnectionManager from '../listing/ConnectionManager'
import AdventuresStore from '../../stores/Adventures.store'
import generateUrl from '../../utilities/generateUrl'
import getPerson from '../../utilities/getPerson'
import { sendMessage } from '../../utilities/sendMessage'

export default class Rsvper {
    private adventures: AdventuresStore
    private client: MercuryClient
    private connections: ConnectionManager

    protected constructor(options: {
        adventures: AdventuresStore
        client: MercuryClient
        connections: ConnectionManager
    }) {
        const { adventures, client, connections } = options
        this.adventures = adventures
        this.client = client
        this.connections = connections
    }
    public static async Rsvper(options: {
        stores: Pick<StoreFactory, 'getStore'>
        client: MercuryClient
        connections: ConnectionManager
    }) {
        const { stores, client, connections } = options
        const adventures = await stores.getStore('adventures')

        return new this({ adventures, client, connections })
    }

    public async rsvp(options: {
        adventureId: string
        canIMakeIt: boolean
        personId: string
    }) {
        const { adventureId, canIMakeIt, personId } = options

        const updated = await this.updateAdventure(
            canIMakeIt,
            adventureId,
            personId
        )

        const [person, url] = await Promise.all([
            getPerson(this.client, personId),
            generateUrl(this.client),
        ])

        const posterId = updated.source.personId

        await Promise.all([
            (async () => {
                if (canIMakeIt) {
                    await this.messageConnections(posterId, person, url)
                }
            })(),
            this.sendMessageToPoster(person, canIMakeIt, posterId, url),
        ])
    }

    private async messageConnections(
        posterId: string,
        person: Person,
        url: string
    ) {
        const poster = await getPerson(this.client, posterId)
        const connections =
            await this.connections.loadConnectionsForPerson(posterId)
        await Promise.all(
            connections.map(async (connection) => {
                if (connection !== person.id) {
                    await sendMessage({
                        client: this.client,
                        message: `${randomUtil.rand([
                            'Sprucebot adventure update! ⚔️',
                            '🌲🤖⚔️',
                            'Hey hey!',
                        ])}!! ${
                            person.casualName
                        } said they can make it for the adventure posted by ${
                            poster.casualName
                        }!`,
                        toId: connection,
                        linkLabel: 'Adventures',
                        url,
                    })
                }
            })
        )
    }

    private async sendMessageToPoster(
        person: Person,
        canIMakeIt: boolean,
        posterId: string,
        url: string
    ) {
        await sendMessage({
            client: this.client,
            message: `Heads up!! ${person.casualName} said they ${
                canIMakeIt ? 'can' : `can't`
            } make it out for your adventure!`,
            toId: posterId,
            linkLabel: 'Adventures',
            url,
        })
    }

    private async updateAdventure(
        canIMakeIt: boolean,
        adventureId: string,
        personId: string
    ) {
        const key = canIMakeIt ? 'whosIn' : 'whosOut'
        const match = await this.loadAdventure(adventureId)

        match.whosOut = match.whosOut.filter((i) => i !== personId)
        match.whosIn = match.whosIn.filter((i) => i !== personId)

        match[key].push(personId)

        const updated = await this.adventures.updateOne(
            {
                id: adventureId,
            },
            { whosIn: match.whosIn, whosOut: match.whosOut }
        )
        return updated
    }

    private async loadAdventure(adventureId: string) {
        const match = await this.adventures.findOne({
            id: adventureId,
        })

        if (!match) {
            throw new SpruceError({
                code: 'NOT_FOUND',
                friendlyMessage: `Oh no!! I couldn't find that reservation!`,
            })
        }
        return match
    }
}
