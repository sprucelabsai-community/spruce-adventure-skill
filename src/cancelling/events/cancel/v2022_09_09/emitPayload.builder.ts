import { buildSchema } from '@sprucelabs/schema'

const cancelEmitPayloadBuilder = buildSchema({
    id: 'cancelEmitPayload',
    fields: {
        message: {
            type: 'text',
        },
    },
})

export default cancelEmitPayloadBuilder
