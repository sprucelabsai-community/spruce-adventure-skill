import { MercuryClient } from '@sprucelabs/mercury-client'

export async function sendMessage(options: MessageOptions) {
    const { toId, message, url, client, linkLabel } = options

    await client.emitAndFlattenResponses('send-message::v2020_12_25', {
        target: {
            personId: toId,
        },
        payload: {
            message: {
                body: message,
                classification: 'transactional',
                links: [
                    {
                        label: linkLabel ?? 'RSVP Now',
                        uri: url,
                    },
                ],
            },
        },
    })
}
interface MessageOptions {
    toId: string
    message: string
    url: string
    client: MercuryClient
    linkLabel?: string
}
