import { buildSchema } from '@sprucelabs/schema'

const acceptConnectionResponsePayloadBuilder = buildSchema({
    id: 'acceptConnectionResponsePayload',
    fields: {
        success: {
            type: 'boolean',
            isRequired: true,
        },
    },
})

export default acceptConnectionResponsePayloadBuilder
