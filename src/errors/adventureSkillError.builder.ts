import { buildErrorSchema } from '@sprucelabs/schema'

export default buildErrorSchema({
	id: 'adventureSkillError',
	name: 'adventure skill error',
	fields: {
		fieldName1: {
			type: 'text',
			label: 'First Field',
			isRequired: true,
		},
		fieldName2: {
			type: 'number',
			label: 'Second Field',
			isRequired: true,
			hint: 'A hint',
		},
	},
})
