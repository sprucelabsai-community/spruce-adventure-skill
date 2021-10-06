import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633531947000ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633531953810Count56.v2021_10_06.TestRegisterSkillViews1633531947000ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633531947000ResponsePayload',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633531953810Count56',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633531947000ResponsePayloadSchema)

export default testRegisterSkillViews1633531947000ResponsePayloadSchema
