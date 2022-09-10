import { buildSchema, dropFields } from '@sprucelabs/schema'
import adventureBuilder from '../../../../schemas/v2022_09_09/adventure.builder'

const postAdventureEmitPayloadBuilder = buildSchema({
	id: 'postEmitPayload',
	fields: {
		adventure: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: {
					id: 'postAdventure',
					fields: {
						...dropFields(adventureBuilder.fields, ['id', 'source']),
					},
				},
			},
		},
	},
})

export default postAdventureEmitPayloadBuilder
