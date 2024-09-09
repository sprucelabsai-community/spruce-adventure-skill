import { buildErrorSchema } from '@sprucelabs/schema'

export default buildErrorSchema({
    id: 'notYourGroup',
    name: 'Not your group',
    fields: {
        groupId: {
            type: 'id',
            isRequired: true,
        },
    },
})
