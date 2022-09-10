import { buildSchema } from '@sprucelabs/schema'
import adventureBuilder from '../../../schemas/v2022_09_09/adventure.builder'

const listResponsePayloadBuilder = buildSchema({
	id: 'listResponsePayload',
	fields: {
		adventures: {
			type: 'schema',
			isRequired: true,
			isArray: true,
			minArrayLength: 0,
			options: {
				schema: adventureBuilder,
			},
		},
	},
})

export default listResponsePayloadBuilder
