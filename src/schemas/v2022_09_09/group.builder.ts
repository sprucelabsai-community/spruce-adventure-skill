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
            label: 'Name',
            hint: `Give your group a helpful name, like "Besties" or "Work Squad"`,
        },
        description: {
            type: 'text',
            label: 'Description',
        },
        people: {
            type: 'id',
            isArray: true,
            isRequired: true,
            minArrayLength: 0,
        },
        source: {
            type: 'schema',
            isRequired: true,
            isPrivate: true,
            options: {
                schema: buildSchema({
                    id: 'groupSource',
                    fields: {
                        personId: {
                            type: 'id',
                            isRequired: true,
                        },
                    },
                }),
            },
        },
    },
})
