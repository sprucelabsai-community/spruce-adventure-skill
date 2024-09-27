import { MercuryClient } from '@sprucelabs/mercury-client'
import { Person } from '../adventure.types'
import ConnectionManager from '../adventures/listing/ConnectionManager'
import generateUrl from '../utilities/generateUrl'
import getPerson from '../utilities/getPerson'
import { sendMessage } from '../utilities/sendMessage'

export default class MessageSenderImpl {
    private client: MercuryClient
    private connections: ConnectionManager
    public static Class?: new (options: MessageSenderOptions) => MessageSender

    private constructor(options: MessageSenderOptions) {
        const { client, connections } = options
        this.client = client
        this.connections = connections
    }

    public static Sender(options: MessageSenderOptions): MessageSender {
        return new (this.Class ?? this)(options)
    }

    private async generateUrl() {
        const url = await generateUrl(this.client)
        return url
    }

    public async sendMessage(options: SendMessageOptions) {
        const { fromPersonId, message, context } = options
        const url = await this.generateUrl()

        const toPeopleIds =
            options.toPeopleIds ??
            (await this.connections.loadConnectionsForPerson(fromPersonId))

        const from = await this.getPerson(fromPersonId)
        const toPeopleExclutingSender = toPeopleIds.filter(
            (id) => id !== fromPersonId
        )

        await Promise.all(
            toPeopleExclutingSender.map((connection) =>
                this.messageConnection({
                    toId: connection,
                    from,
                    message,
                    url,
                    context,
                })
            )
        )
    }

    private async messageConnection(options: {
        toId: string
        from: Person
        message: string
        url: string
        context?: Record<string, any>
    }) {
        const { toId, from, message, context } = options

        const to = await this.getPerson(toId)

        await sendMessage({
            ...options,
            message,
            client: this.client,
            context: {
                ...context,
                from: from.casualName,
                to: to.casualName,
            },
        })
    }

    private async getPerson(personId: string) {
        const person = await getPerson(this.client, personId)
        return person
    }
}
interface MessageSenderOptions {
    client: MercuryClient
    connections: ConnectionManager
}

export interface SendMessageOptions {
    fromPersonId: string
    groupId?: string
    message: string
    context: Record<string, any>
}

export interface MessageSender {
    sendMessage(options: SendMessageOptions): Promise<void>
}
