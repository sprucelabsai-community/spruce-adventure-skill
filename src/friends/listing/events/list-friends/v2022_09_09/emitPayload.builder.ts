import { buildSchema } from '@sprucelabs/schema'

const listFriendsEmitPayloadBuilder = buildSchema({
    id: 'listFriendsEmitPayload',
    fields: {
        filter: {
            type: 'select',
            options: {
                choices: [
                    {
                        value: 'confirmed',
                        label: 'Confirmed',
                    },
                    {
                        value: 'pending',
                        label: 'Pending',
                    },
                ],
            },
        },
        isInGroupId: {
            type: 'id',
        },
    },
})

export default listFriendsEmitPayloadBuilder
