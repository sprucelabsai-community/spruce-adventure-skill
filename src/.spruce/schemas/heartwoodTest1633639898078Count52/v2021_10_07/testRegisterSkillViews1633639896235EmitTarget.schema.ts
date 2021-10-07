import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633639896235EmitTargetSchema: SpruceSchemas.HeartwoodTest1633639898078Count52.v2021_10_07.TestRegisterSkillViews1633639896235EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633639896235EmitTarget',
	version: 'v2021_10_07',
	namespace: 'HeartwoodTest1633639898078Count52',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633639896235EmitTargetSchema)

export default testRegisterSkillViews1633639896235EmitTargetSchema
