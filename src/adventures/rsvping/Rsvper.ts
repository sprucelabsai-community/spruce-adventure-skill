import { StoreFactory } from '@sprucelabs/data-stores'
import { MercuryClient } from '@sprucelabs/mercury-client'
import { randomUtil } from '@sprucelabs/spruce-skill-utils'
import { Person } from '../../adventure.types'
import SpruceError from '../../errors/SpruceError'
import { MessageSender } from '../../messaging/MessageSender'
import generateUrl from '../../utilities/generateUrl'
import getPerson from '../../utilities/getPerson'
import { sendMessage } from '../../utilities/sendMessage'
import AdventuresStore from '../Adventures.store'

export default class Rsvper {
    private adventures: AdventuresStore
    private client: MercuryClient
    private messageSender: MessageSender

    protected constructor(options: {
        adventures: AdventuresStore
        client: MercuryClient
        messageSender: MessageSender
    }) {
        const { adventures, client, messageSender } = options
        this.adventures = adventures
        this.client = client
        this.messageSender = messageSender
    }

    public static async Rsvper(options: {
        stores: Pick<StoreFactory, 'getStore'>
        client: MercuryClient
        messageSender: MessageSender
    }) {
        const { stores, client, messageSender } = options
        const adventures = await stores.getStore('adventures')

        return new this({ adventures, client, messageSender })
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
                    await this.messageConnections(
                        posterId,
                        person,
                        updated.target?.groupId
                    )
                }
            })(),
            this.sendMessageToPoster(person, canIMakeIt, posterId, url),
        ])
    }

    private async messageConnections(
        posterId: string,
        rsvperPerson: Person,
        groupId?: string
    ) {
        const message = `{{greeting}}!! {{rsvperPerson}} said they can make it for the adventure posted by {{from}}!`

        await this.messageSender.sendMessage({
            fromPersonId: posterId,
            groupId,
            context: {
                greeting: randomUtil.rand([
                    'Sprucebot adventure update!',
                    'Hey hey!',
                ]),
                rsvperPerson: rsvperPerson.casualName,
            },
            message,
            skipPersonId: rsvperPerson.id,
        })
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
