import { SimpleStoreFactory } from '@sprucelabs/data-stores'
import { MercuryClient } from '@sprucelabs/mercury-client'
import { Person } from '../adventure.types'
import ConnectionManager from '../adventures/listing/ConnectionManager'
import GroupsStore from '../groups/Groups.store'
import generateUrl from '../utilities/generateUrl'
import getPerson from '../utilities/getPerson'
import { sendMessage } from '../utilities/sendMessage'

export default class MessageSenderImpl implements MessageSender {
    public static Class?: new (
        options: MessageSenderConstructorOptions
    ) => MessageSender

    private client: MercuryClient
    private connections: ConnectionManager
    private groups: GroupsStore

    private constructor(options: MessageSenderConstructorOptions) {
        const { client, connections, groups } = options
        this.client = client
        this.connections = connections
        this.groups = groups
    }

    public static async Sender(
        options: MessageSenderOptions
    ): Promise<MessageSender> {
        const { stores } = options
        const groups = await stores.getStore('groups')
        return new (this.Class ?? this)({ ...options, groups })
    }

    private async generateUrl() {
        const url = await generateUrl(this.client)
        return url
    }

    public async sendMessage(options: SendMessageOptions) {
        const { fromPersonId, message, context, groupId, skipPersonId } =
            options
        const url = await this.generateUrl()

        const group = await this.groups.findOne(
            { id: groupId },
            { shouldIncludePrivateFields: true }
        )
        let toPeopleIds: string[] | undefined
        if (group) {
            context.groupTitle = group.title
            toPeopleIds = [...group.people, group.source.personId]
        } else {
            toPeopleIds =
                await this.connections.loadConnectionsForPerson(fromPersonId)
        }

        const from = await this.getPerson(fromPersonId)
        const toPeopleExclutingSender = toPeopleIds.filter(
            (id) => id !== fromPersonId && id !== skipPersonId
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
    stores: SimpleStoreFactory
}

interface MessageSenderConstructorOptions {
    client: MercuryClient
    connections: ConnectionManager
    groups: GroupsStore
}

export interface SendMessageOptions {
    fromPersonId: string
    groupId?: string
    message: string
    context: Record<string, any>
    skipPersonId?: string
}

export interface MessageSender {
    sendMessage(options: SendMessageOptions): Promise<void>
}
