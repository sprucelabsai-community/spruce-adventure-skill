import { buildSchema } from '@sprucelabs/schema'
import adventureBuilder from '../../../../../schemas/v2022_09_09/adventure.builder'

const postAdventureResponsePayloadBuilder = buildSchema({
    id: 'postResponsePayload',
    fields: {
        adventure: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: adventureBuilder,
            },
        },
    },
})

export default postAdventureResponsePayloadBuilder
