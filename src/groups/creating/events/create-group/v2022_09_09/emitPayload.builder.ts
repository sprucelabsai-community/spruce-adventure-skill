import { buildSchema, pickFields } from '@sprucelabs/schema'
import groupBuilder from '../../../../../schemas/v2022_09_09/group.builder'

const createGroupEmitPayloadBuilder = buildSchema({
    id: 'createGroupEmitPayload',
    fields: {
        group: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: buildSchema({
                    id: 'createGroup',
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

export default createGroupEmitPayloadBuilder
