import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633531947000EmitTargetSchema: SpruceSchemas.HeartwoodTest1633531953810Count56.v2021_10_06.TestRegisterSkillViews1633531947000EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633531947000EmitTarget',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633531953810Count56',
	name: '',
	    fields: {
	            /** Update me. */
	            'aTextField': {
	                label: 'Update me',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633531947000EmitTargetSchema)

export default testRegisterSkillViews1633531947000EmitTargetSchema
