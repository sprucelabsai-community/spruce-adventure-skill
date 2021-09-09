import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const adventureSkillErrorSchema: SpruceErrors.Adventure.AdventureSkillErrorSchema  = {
	id: 'adventureSkillError',
	namespace: 'Adventure',
	name: 'adventure skill error',
	    fields: {
	            /** First Field. */
	            'fieldName1': {
	                label: 'First Field',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Second Field. A hint */
	            'fieldName2': {
	                label: 'Second Field',
	                type: 'number',
	                isRequired: true,
	                hint: 'A hint',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(adventureSkillErrorSchema)

export default adventureSkillErrorSchema
