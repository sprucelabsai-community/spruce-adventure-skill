import { buildSchema } from '@sprucelabs/schema'

const addFriendToGroupEmitPayloadBuilder = buildSchema({
    id: 'addFriendToGroupEmitPayload',
    fields: {
        friendId: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default addFriendToGroupEmitPayloadBuilder
