import { buildSchema } from '@sprucelabs/schema'
import adventureBuilder from '../../../../schemas/v2022_09_09/adventure.builder'

const postAdventureResponsePayloadBuilder = buildSchema({
	id: 'postAdventureResponsePayload',
	fields: {
		adventure: {
			type: 'schema',
			options: {
				schema: adventureBuilder,
			},
		},
	},
})

export default postAdventureResponsePayloadBuilder
