import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'adventure',
    name: 'Adventure',
    fields: {
        id: {
            type: 'id',
            isRequired: true,
        },
        what: {
            type: 'text',
            label: 'What are you gonna do?',
            hint: `Describe the adventure! This is what I'll message to your friends! Heads up, you can only have 1 adventure at a time!`,
            isRequired: true,
        },
        when: {
            type: 'dateTime',
            label: 'When are you gonna do it?',
            isRequired: true,
        },
        where: {
            type: 'address',
            label: 'Where are you gonna to do it?',
            isRequired: true,
        },
        whosIn: {
            type: 'id',
            isArray: true,
            label: 'Who is in?',
            minArrayLength: 0,
            isRequired: true,
        },
        whosOut: {
            type: 'id',
            isArray: true,
            label: 'Who is out?',
            minArrayLength: 0,
            isRequired: true,
        },
        target: {
            type: 'schema',
            options: {
                schema: buildSchema({
                    id: 'adventureTarget',
                    fields: {
                        groupId: {
                            type: 'id',
                            isRequired: true,
                        },
                    },
                }),
            },
        },
        source: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: buildSchema({
                    id: 'adventureSource',
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
