import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633553575175ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633553580968Count17.v2021_10_06.TestRegisterSkillViews1633553575175ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633553575175ResponsePayload',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633553580968Count17',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633553575175ResponsePayloadSchema)

export default testRegisterSkillViews1633553575175ResponsePayloadSchema
