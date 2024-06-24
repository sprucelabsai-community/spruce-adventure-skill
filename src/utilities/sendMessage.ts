import { MercuryClient } from '@sprucelabs/mercury-client'

export async function sendMessage(options: MessageOptions) {
    const { toId, message, url, client, linkLabel, context } = options

    await client.emitAndFlattenResponses('send-message::v2020_12_25', {
        target: {
            personId: toId,
        },
        payload: {
            message: {
                body: message,
                classification: 'transactional',
                context,
                links: url
                    ? [
                          {
                              label: linkLabel ?? 'RSVP Now',
                              uri: url,
                          },
                      ]
                    : undefined,
            },
        },
    })
}
interface MessageOptions {
    toId: string
    message: string
    url?: string
    client: MercuryClient
    linkLabel?: string
    context?: Record<string, any>
}
