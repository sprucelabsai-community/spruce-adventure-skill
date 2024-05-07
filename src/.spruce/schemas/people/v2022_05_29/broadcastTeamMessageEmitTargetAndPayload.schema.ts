import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import broadcastTeamMessageEmitTargetSchema_v2022_05_29 from '#spruce/schemas/people/v2022_05_29/broadcastTeamMessageEmitTarget.schema'
import broadcastTeamMessageEmitPayloadSchema_v2022_05_29 from '#spruce/schemas/people/v2022_05_29/broadcastTeamMessageEmitPayload.schema'

const broadcastTeamMessageEmitTargetAndPayloadSchema: SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageEmitTargetAndPayloadSchema  = {
	id: 'broadcastTeamMessageEmitTargetAndPayload',
	version: 'v2022_05_29',
	namespace: 'People',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: broadcastTeamMessageEmitTargetSchema_v2022_05_29,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: broadcastTeamMessageEmitPayloadSchema_v2022_05_29,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(broadcastTeamMessageEmitTargetAndPayloadSchema)

export default broadcastTeamMessageEmitTargetAndPayloadSchema
