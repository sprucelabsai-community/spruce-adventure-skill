import { buildSchema, dropPrivateFields } from '@sprucelabs/schema'
import groupBuilder from '../../../../../schemas/v2022_09_09/group.builder'

const getGroupResponsePayloadBuilder = buildSchema({
    id: 'getGroupResponsePayload',
    fields: {
        group: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: buildSchema({
                    id: 'getGroup',
                    fields: {
                        ...dropPrivateFields(groupBuilder.fields),
                        isMine: {
                            type: 'boolean',
                            isRequired: true,
                        },
                    },
                }),
            },
        },
    },
})

export default getGroupResponsePayloadBuilder
