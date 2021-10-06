import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633548864466EmitTargetSchema: SpruceSchemas.HeartwoodTest1633548866312Count47.v2021_10_06.TestRegisterSkillViews1633548864466EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633548864466EmitTarget',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633548866312Count47',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633548864466EmitTargetSchema)

export default testRegisterSkillViews1633548864466EmitTargetSchema
