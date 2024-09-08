import { buildSchema, dropPrivateFields } from '@sprucelabs/schema'
import groupBuilder from '../../../../../schemas/v2022_09_09/group.builder'

const createGroupResponsePayloadBuilder = buildSchema({
    id: 'createGroupResponsePayload',
    fields: {
        group: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: buildSchema({
                    id: 'createGroupResponse',
                    fields: {
                        ...dropPrivateFields(groupBuilder.fields),
                    },
                }),
            },
        },
    },
})

export default createGroupResponsePayloadBuilder
