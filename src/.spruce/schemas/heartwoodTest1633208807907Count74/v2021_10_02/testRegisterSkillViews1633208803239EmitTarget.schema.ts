import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633208803239EmitTargetSchema: SpruceSchemas.HeartwoodTest1633208807907Count74.v2021_10_02.TestRegisterSkillViews1633208803239EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633208803239EmitTarget',
	version: 'v2021_10_02',
	namespace: 'HeartwoodTest1633208807907Count74',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633208803239EmitTargetSchema)

export default testRegisterSkillViews1633208803239EmitTargetSchema
