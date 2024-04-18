import { buildSchema } from '@sprucelabs/schema'

const rsvpResponsePayloadBuilder = buildSchema({
    id: 'rsvpResponsePayload',
    fields: {
        success: {
            type: 'boolean',
            isRequired: true,
        },
    },
})

export default rsvpResponsePayloadBuilder
