import { buildSchema } from '@sprucelabs/schema'

const addFriendToGroupEmitTargetBuilder = buildSchema({
    id: 'addFriendToGroupEmitTarget',
    fields: {
        groupId: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default addFriendToGroupEmitTargetBuilder
