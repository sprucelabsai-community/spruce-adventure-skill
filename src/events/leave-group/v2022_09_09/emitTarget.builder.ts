import { buildSchema } from '@sprucelabs/schema'

const leaveGroupEmitTargetBuilder = buildSchema({
    id: 'leaveGroupEmitTarget',
    fields: {
        groupId: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default leaveGroupEmitTargetBuilder
