import { buildSchema } from '@sprucelabs/schema'

const deleteGroupEmitTargetBuilder = buildSchema({
    id: 'deleteGroupEmitTarget',
    fields: {
        groupId: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default deleteGroupEmitTargetBuilder
