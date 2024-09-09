import { buildSchema } from '@sprucelabs/schema'

const createConnectionEmitTargetBuilder = buildSchema({
    id: 'createConnectionEmitTarget',
    fields: {
        groupId: {
            type: 'text',
        },
    },
})

export default createConnectionEmitTargetBuilder
