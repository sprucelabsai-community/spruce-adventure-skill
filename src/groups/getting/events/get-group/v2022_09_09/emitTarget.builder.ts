import { buildSchema } from '@sprucelabs/schema'

const getGroupEmitTargetBuilder = buildSchema({
    id: 'getGroupEmitTarget',
    fields: {
        id: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default getGroupEmitTargetBuilder
