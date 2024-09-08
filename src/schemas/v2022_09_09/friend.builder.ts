import { buildSchema, pickFields } from '@sprucelabs/schema'
import { personSchema } from '@sprucelabs/spruce-core-schemas'

export default buildSchema({
    id: 'friend',
    name: 'Friend',
    fields: {
        ...pickFields(personSchema.fields, ['casualName', 'avatar', 'id']),
        inviteSender: {
            type: 'select',
            isRequired: true,
            options: {
                choices: [
                    {
                        value: 'me',
                        label: 'Me',
                    },
                    {
                        value: 'them',
                        label: 'Them',
                    },
                ],
            },
        },
        isInGroup: {
            type: 'boolean',
        },
    },
})
