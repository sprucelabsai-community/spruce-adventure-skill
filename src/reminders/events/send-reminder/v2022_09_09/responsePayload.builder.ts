import { buildSchema } from '@sprucelabs/schema'

const sendReminderResponsePayloadBuilder = buildSchema({
    id: 'sendReminderResponsePayload',
    fields: {
        success: {
            type: 'boolean',
            isRequired: true,
        },
    },
})

export default sendReminderResponsePayloadBuilder
