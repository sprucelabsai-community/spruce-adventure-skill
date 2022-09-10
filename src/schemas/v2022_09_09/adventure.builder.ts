import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
	id: 'adventure',
	name: 'Adventure',
	fields: {
		id: {
			type: 'id',
			isRequired: true,
		},
		what: {
			type: 'text',
			label: 'What are you gonna do?',
			hint: 'Heads up, you can only have 1 adventure at a time!',
			isRequired: true,
		},
		when: {
			type: 'dateTime',
			label: 'When are you gonna do it?',
			isRequired: true,
		},
		where: {
			type: 'address',
			label: 'Where are you going to do it?',
			isRequired: true,
		},
		source: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: {
					id: 'adventureSource',
					fields: {
						personId: {
							type: 'id',
							isRequired: true,
						},
					},
				},
			},
		},
	},
})
