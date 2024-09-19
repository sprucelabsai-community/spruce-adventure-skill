import { buildSchema } from '@sprucelabs/schema'

const postAdventureEmitTargetBuilder = buildSchema({
    id: 'postEmitTarget',
    fields: {
        groupId: {
            type: 'id',
        },
    },
})

export default postAdventureEmitTargetBuilder
