import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633013483504ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633013485867Count4.v2021_09_30.TestRegisterSkillViews1633013483504ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633013483504ResponsePayload',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1633013485867Count4',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633013483504ResponsePayloadSchema)

export default testRegisterSkillViews1633013483504ResponsePayloadSchema
