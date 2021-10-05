import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633467209749ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633467211240Count49.v2021_10_05.TestRegisterSkillViews1633467209749ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633467209749ResponsePayload',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633467209749ResponsePayloadSchema)

export default testRegisterSkillViews1633467209749ResponsePayloadSchema
