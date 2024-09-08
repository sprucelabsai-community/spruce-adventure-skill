import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'group',
    name: 'Group',
    fields: {
        id: {
            type: 'id',
            isRequired: true,
        },
        title: {
            type: 'text',
            isRequired: true,
        },
        description: {
            type: 'text',
        },
        people: {
            type: 'id',
            isArray: true,
            isRequired: true,
            minArrayLength: 0,
        },
    },
})
