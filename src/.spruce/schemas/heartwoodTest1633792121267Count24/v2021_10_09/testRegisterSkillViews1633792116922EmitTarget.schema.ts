import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633792116922EmitTargetSchema: SpruceSchemas.HeartwoodTest1633792121267Count24.v2021_10_09.TestRegisterSkillViews1633792116922EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633792116922EmitTarget',
	version: 'v2021_10_09',
	namespace: 'HeartwoodTest1633792121267Count24',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633792116922EmitTargetSchema)

export default testRegisterSkillViews1633792116922EmitTargetSchema
