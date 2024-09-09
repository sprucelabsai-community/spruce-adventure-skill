import { buildSchema, pickFields } from '@sprucelabs/schema'
import groupBuilder from '../../../../../schemas/v2022_09_09/group.builder'

const updateGroupEmitPayloadBuilder = buildSchema({
    id: 'updateGroupEmitPayload',
    fields: {
        group: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: buildSchema({
                    id: 'updateGroup',
                    fields: {
                        ...pickFields(groupBuilder.fields, [
                            'title',
                            'description',
                            'people',
                        ]),
                    },
                }),
            },
        },
    },
})

export default updateGroupEmitPayloadBuilder
