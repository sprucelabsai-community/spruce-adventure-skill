import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633079466450EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633079473817Count9.v2021_10_01.TestRegisterSkillViews1633079466450EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633079466450EmitPayload',
	version: 'v2021_10_01',
	namespace: 'HeartwoodTest1633079473817Count9',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633079466450EmitPayloadSchema)

export default testRegisterSkillViews1633079466450EmitPayloadSchema
