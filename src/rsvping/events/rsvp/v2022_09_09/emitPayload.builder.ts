import { buildSchema } from '@sprucelabs/schema'

const rsvpEmitPayloadBuilder = buildSchema({
    id: 'rsvpEmitPayload',
    fields: {
        canIMakeIt: {
            type: 'boolean',
            isRequired: true,
        },
    },
})

export default rsvpEmitPayloadBuilder
