import { buildSchema } from '@sprucelabs/schema'

const targetSource = buildSchema({
	id: 'connectionTargetSource',
	fields: {
		personId: {
			type: 'id',
			isRequired: true,
		},
	},
})

export default buildSchema({
	id: 'connection',
	name: 'Connection',
	fields: {
		id: {
			type: 'id',
			isRequired: true,
		},
		isConfirmed: {
			type: 'boolean',
		},
		source: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: targetSource,
			},
		},
		target: {
			type: 'schema',
			options: {
				schema: targetSource,
			},
		},
	},
})
