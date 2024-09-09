import { buildSchema } from '@sprucelabs/schema'

const updateGroupEmitTargetBuilder = buildSchema({
    id: 'updateGroupEmitTarget',
    fields: {
        id: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default updateGroupEmitTargetBuilder
