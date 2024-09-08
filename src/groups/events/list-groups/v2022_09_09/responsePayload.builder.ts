import { buildSchema } from '@sprucelabs/schema'
import groupBuilder from '../../../../schemas/v2022_09_09/group.builder'

const listGroupsResponsePayloadBuilder = buildSchema({
    id: 'listGroupsResponsePayload',
    fields: {
        groups: {
            type: 'schema',
            isRequired: true,
            isArray: true,
            minArrayLength: 0,
            options: {
                schema: groupBuilder,
            },
        },
    },
})

export default listGroupsResponsePayloadBuilder
