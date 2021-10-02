import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633208015679EmitTargetSchema: SpruceSchemas.HeartwoodTest1633208019047Count26.v2021_10_02.TestRegisterSkillViews1633208015679EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633208015679EmitTarget',
	version: 'v2021_10_02',
	namespace: 'HeartwoodTest1633208019047Count26',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633208015679EmitTargetSchema)

export default testRegisterSkillViews1633208015679EmitTargetSchema
