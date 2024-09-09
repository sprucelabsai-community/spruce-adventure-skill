import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'connection',
    name: 'Connection',
    fields: {
        id: {
            type: 'id',
            isRequired: true,
        },
        isConfirmed: {
            type: 'boolean',
        },
        source: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: buildSchema({
                    id: 'connectionSource',
                    fields: {
                        personId: {
                            type: 'id',
                            isRequired: true,
                        },
                    },
                }),
            },
        },
        target: {
            type: 'schema',
            options: {
                schema: buildSchema({
                    id: 'connectionTarget',
                    fields: {
                        groupId: {
                            type: 'id',
                        },
                        personId: {
                            type: 'id',
                        },
                    },
                }),
            },
        },
    },
})
