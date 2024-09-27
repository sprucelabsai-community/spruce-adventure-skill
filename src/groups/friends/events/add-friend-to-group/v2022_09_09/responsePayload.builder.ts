import { buildSchema } from '@sprucelabs/schema'

const addFriendToGroupResponsePayloadBuilder = buildSchema({
    id: 'addFriendToGroupResponsePayload',
    fields: {
        success: {
            type: 'boolean',
            isRequired: true,
        },
    },
})

export default addFriendToGroupResponsePayloadBuilder
