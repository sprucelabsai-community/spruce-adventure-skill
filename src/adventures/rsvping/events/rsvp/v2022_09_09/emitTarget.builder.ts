import { buildSchema } from '@sprucelabs/schema'

const rsvpEmitTargetBuilder = buildSchema({
    id: 'rsvpEmitTarget',
    fields: {
        adventureId: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default rsvpEmitTargetBuilder
