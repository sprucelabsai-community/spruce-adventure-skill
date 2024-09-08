import { buildSchema } from '@sprucelabs/schema'
import friendBuilder from '../../../../../schemas/v2022_09_09/friend.builder'

const listFriendsResponsePayloadBuilder = buildSchema({
    id: 'listFriendsResponsePayload',
    fields: {
        friends: {
            type: 'schema',
            isRequired: true,
            isArray: true,
            minArrayLength: 0,
            options: {
                schema: friendBuilder,
            },
        },
    },
})

export default listFriendsResponsePayloadBuilder
