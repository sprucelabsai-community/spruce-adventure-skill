import { buildSchema } from '@sprucelabs/schema'

const cancelResponsePayloadBuilder = buildSchema({
    id: 'cancelResponsePayload',
    fields: {
        totalCancelled: {
            type: 'number',
            isRequired: true,
        },
    },
})

export default cancelResponsePayloadBuilder
