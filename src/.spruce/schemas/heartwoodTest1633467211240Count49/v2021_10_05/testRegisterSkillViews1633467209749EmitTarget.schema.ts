import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633467209749EmitTargetSchema: SpruceSchemas.HeartwoodTest1633467211240Count49.v2021_10_05.TestRegisterSkillViews1633467209749EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633467209749EmitTarget',
	version: 'v2021_10_05',
	namespace: 'HeartwoodTest1633467211240Count49',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633467209749EmitTargetSchema)

export default testRegisterSkillViews1633467209749EmitTargetSchema
