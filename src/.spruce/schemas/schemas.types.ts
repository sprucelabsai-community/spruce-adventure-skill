/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'


declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Calendar.v2021_05_19 {

		
		interface EventSource {
			
				
				'locationId'?: string| undefined | null
				
				'personId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'skillId'?: string| undefined | null
				
				'roleId'?: string| undefined | null
				/** Proxy token. */
				'proxyToken'?: string| undefined | null
		}

		interface EventSourceSchema extends SpruceSchema.Schema {
			id: 'eventSource',
			version: 'v2021_05_19',
			namespace: 'Calendar',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                options: undefined
			            },
			            /** Proxy token. */
			            'proxyToken': {
			                label: 'Proxy token',
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type EventSourceEntity = SchemaEntity<SpruceSchemas.Calendar.v2021_05_19.EventSourceSchema>

	}


	namespace SpruceSchemas.Calendar.v2021_05_19 {

		
		interface CreateCalendarEventTypeEmitPayload {
			
				
				'name': string
				
				'slug': string
		}

		interface CreateCalendarEventTypeEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createCalendarEventTypeEmitPayload',
			version: 'v2021_05_19',
			namespace: 'Calendar',
			name: '',
			    fields: {
			            /** . */
			            'name': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'slug': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type CreateCalendarEventTypeEmitPayloadEntity = SchemaEntity<SpruceSchemas.Calendar.v2021_05_19.CreateCalendarEventTypeEmitPayloadSchema>

	}


	namespace SpruceSchemas.Calendar.v2021_05_19 {

		
		interface CreateCalendarEventTypeEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.Calendar.v2021_05_19.EventSource| undefined | null
				
				'payload': SpruceSchemas.Calendar.v2021_05_19.CreateCalendarEventTypeEmitPayload
		}

		interface CreateCalendarEventTypeEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createCalendarEventTypeEmitTargetAndPayload',
			version: 'v2021_05_19',
			namespace: 'Calendar',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Calendar.v2021_05_19.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Calendar.v2021_05_19.CreateCalendarEventTypeEmitPayloadSchema,}
			            },
			    }
		}

		type CreateCalendarEventTypeEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Calendar.v2021_05_19.CreateCalendarEventTypeEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Calendar.v2021_05_19 {

		
		interface FullCalendarEventType {
			
				
				'id'?: string| undefined | null
				
				'name': string
				
				'slug': string
				
				'source'?: SpruceSchemas.Calendar.v2021_05_19.EventSource| undefined | null
		}

		interface FullCalendarEventTypeSchema extends SpruceSchema.Schema {
			id: 'fullCalendarEventType',
			version: 'v2021_05_19',
			namespace: 'Calendar',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'name': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'slug': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Calendar.v2021_05_19.EventSourceSchema,}
			            },
			    }
		}

		type FullCalendarEventTypeEntity = SchemaEntity<SpruceSchemas.Calendar.v2021_05_19.FullCalendarEventTypeSchema>

	}


	namespace SpruceSchemas.Calendar.v2021_05_19 {

		
		interface CreateCalendarEventTypeResponsePayload {
			
				
				'calendarEventType': SpruceSchemas.Calendar.v2021_05_19.FullCalendarEventType
		}

		interface CreateCalendarEventTypeResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createCalendarEventTypeResponsePayload',
			version: 'v2021_05_19',
			namespace: 'Calendar',
			name: '',
			    fields: {
			            /** . */
			            'calendarEventType': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Calendar.v2021_05_19.FullCalendarEventTypeSchema,}
			            },
			    }
		}

		type CreateCalendarEventTypeResponsePayloadEntity = SchemaEntity<SpruceSchemas.Calendar.v2021_05_19.CreateCalendarEventTypeResponsePayloadSchema>

	}


	namespace SpruceSchemas.Calendar.v2021_05_19 {

		
		interface ListCalendarEventTypesResponsePayload {
			
				
				'calendarEventTypes': SpruceSchemas.Calendar.v2021_05_19.FullCalendarEventType[]
		}

		interface ListCalendarEventTypesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listCalendarEventTypesResponsePayload',
			version: 'v2021_05_19',
			namespace: 'Calendar',
			name: '',
			    fields: {
			            /** . */
			            'calendarEventTypes': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Calendar.v2021_05_19.FullCalendarEventTypeSchema,}
			            },
			    }
		}

		type ListCalendarEventTypesResponsePayloadEntity = SchemaEntity<SpruceSchemas.Calendar.v2021_05_19.ListCalendarEventTypesResponsePayloadSchema>

	}

}
