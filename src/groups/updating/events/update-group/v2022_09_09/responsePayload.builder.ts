import { buildSchema, dropPrivateFields } from '@sprucelabs/schema'
import groupBuilder from '../../../../../schemas/v2022_09_09/group.builder'

const updateGroupResponsePayloadBuilder = buildSchema({
    id: 'updateGroupResponsePayload',
    fields: {
        group: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: buildSchema({
                    id: 'updateGroupResponse',
                    fields: {
                        ...dropPrivateFields(groupBuilder.fields),
                    },
                }),
            },
        },
    },
})

export default updateGroupResponsePayloadBuilder
