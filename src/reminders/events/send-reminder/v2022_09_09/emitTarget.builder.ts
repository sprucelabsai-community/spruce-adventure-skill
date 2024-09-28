import { buildSchema } from '@sprucelabs/schema'

const sendReminderEmitTargetBuilder = buildSchema({
    id: 'sendReminderEmitTarget',
    fields: {
        adventureId: {
            type: 'id',
            isRequired: true,
        },
    },
})

export default sendReminderEmitTargetBuilder
