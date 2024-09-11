import { buildSchema } from '@sprucelabs/schema'

const deleteGroupResponsePayloadBuilder = buildSchema({
    id: 'deleteGroupResponsePayload',
    fields: {
        success: {
            type: 'boolean',
            isRequired: true,
        },
    },
})

export default deleteGroupResponsePayloadBuilder
