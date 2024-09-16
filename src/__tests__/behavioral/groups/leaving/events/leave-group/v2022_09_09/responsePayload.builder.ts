import { buildSchema } from '@sprucelabs/schema'

const leaveGroupResponsePayloadBuilder = buildSchema({
    id: 'leaveGroupResponsePayload',
    fields: {
        success: {
            type: 'boolean',
            isRequired: true,
        },
    },
})

export default leaveGroupResponsePayloadBuilder
