import { buildSchema } from '@sprucelabs/schema'

const createConnectionResponsePayloadBuilder = buildSchema({
    id: 'createConnectionResponsePayload',
    fields: {
        connectionId: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default createConnectionResponsePayloadBuilder
