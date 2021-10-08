import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633683200043EmitTargetSchema: SpruceSchemas.HeartwoodTest1633683201575Count83.v2021_10_08.TestRegisterSkillViews1633683200043EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633683200043EmitTarget',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633683201575Count83',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633683200043EmitTargetSchema)

export default testRegisterSkillViews1633683200043EmitTargetSchema
