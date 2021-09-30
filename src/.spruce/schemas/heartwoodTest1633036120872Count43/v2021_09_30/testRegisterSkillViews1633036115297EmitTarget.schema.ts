import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633036115297EmitTargetSchema: SpruceSchemas.HeartwoodTest1633036120872Count43.v2021_09_30.TestRegisterSkillViews1633036115297EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633036115297EmitTarget',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1633036120872Count43',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633036115297EmitTargetSchema)

export default testRegisterSkillViews1633036115297EmitTargetSchema
