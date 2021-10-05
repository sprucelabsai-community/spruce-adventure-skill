import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633423941867EmitTargetSchema: SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05.TestRegisterSkillViews1633423941867EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633423941867EmitTarget',
	version: 'v2021_10_05',
	namespace: 'HeartwoodTest1633423949524Count66',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633423941867EmitTargetSchema)

export default testRegisterSkillViews1633423941867EmitTargetSchema
