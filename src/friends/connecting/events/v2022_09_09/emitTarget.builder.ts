import { buildSchema } from '@sprucelabs/schema'

const acceptConnectionEmitTargetBuilder = buildSchema({
    id: 'acceptConnectionEmitTarget',
    fields: {
        connectionId: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default acceptConnectionEmitTargetBuilder
