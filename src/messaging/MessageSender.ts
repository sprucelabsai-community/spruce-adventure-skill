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

    public async sendMessage(
        fromPersonId: string,
        message: string,
        context?: Record<string, any>
    ) {
        const url = await this.generateUrl()

        const connections =
            await this.connections.loadConnectionsForPerson(fromPersonId)

        const from = await this.getPerson(fromPersonId)

        await Promise.all(
            connections.map((connection) =>
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

        let updatedMessage = message
            .replaceAll('{{to}}', to.casualName)
            .replaceAll('{{from}}', from.casualName)

        await sendMessage({
            ...options,
            message: updatedMessage,
            client: this.client,
            context,
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

export interface MessageSender {
    sendMessage(
        fromPersonId: string,
        message: string,
        context?: Record<string, any>
    ): Promise<void>
}
