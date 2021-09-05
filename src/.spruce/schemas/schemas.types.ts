/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import { SkillViewControllerId } from '@sprucelabs/heartwood-view-controllers'

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


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface EventSource {
			
				/** Proxy token. */
				'proxyToken'?: string| undefined | null
		}

		interface EventSourceSchema extends SpruceSchema.Schema {
			id: 'eventSource',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Proxy token. */
			            'proxyToken': {
			                label: 'Proxy token',
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type EventSourceEntity = SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.EventSourceSchema>

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DidBookAppointmentsEmitTarget {
			
				
				'organizationId'?: string| undefined | null
		}

		interface DidBookAppointmentsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didBookAppointmentsEmitTarget',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type DidBookAppointmentsEmitTargetEntity = SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitTargetSchema>

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DidBookAppointmentsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.Appointments.v2021_06_23.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitTarget| undefined | null
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitPayload
		}

		interface DidBookAppointmentsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didBookAppointmentsEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitPayloadSchema,}
			            },
			    }
		}

		type DidBookAppointmentsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface Appointments {
			
				
				'guestId'?: string| undefined | null
		}

		interface AppointmentsSchema extends SpruceSchema.Schema {
			id: 'appointments',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'guestId': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		type AppointmentsEntity = SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.AppointmentsSchema>

	}


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DidBookAppointmentsEmitPayload {
			
				
				'appointments': SpruceSchemas.Appointments.v2021_06_23.Appointments[]
		}

		interface DidBookAppointmentsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didBookAppointmentsEmitPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
			            /** . */
			            'appointments': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Appointments.v2021_06_23.AppointmentsSchema,}
			            },
			    }
		}

		type DidBookAppointmentsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsEmitTarget {
			
				
				'personId'?: string| undefined | null
		}

		interface RegisterSkillViewsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'registerSkillViewsEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type RegisterSkillViewsEmitTargetEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitTargetSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsEmitPayload {
			
				
				'ids': string[]
				
				'source': string
				
				'theme'?: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Theme| undefined | null
		}

		interface RegisterSkillViewsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillViewsEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'ids': {
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'theme': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		type RegisterSkillViewsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsResponsePayload {
			
				/** . Views that were registered. Will match the number of ids you sent. */
				'totalRegistered': number
		}

		interface RegisterSkillViewsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillViewsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . Views that were registered. Will match the number of ids you sent. */
			            'totalRegistered': {
			                type: 'number',
			                isRequired: true,
			                hint: 'Views that were registered. Will match the number of ids you sent.',
			                options: undefined
			            },
			    }
		}

		type RegisterSkillViewsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitTarget {
			
				/** Skill View Id. */
				'skillViewId'?: (SkillViewControllerId)| undefined | null
		}

		interface GenerateUrlEmitTargetSchema extends SpruceSchema.Schema {
			id: 'generateUrlEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			importsWhenRemote: ['import { SkillViewControllerId } from \'@sprucelabs/heartwood-view-controllers\'',],
			    fields: {
			            /** Skill View Id. */
			            'skillViewId': {
			                label: 'Skill View Id',
			                type: 'raw',
			                options: {valueType: `SkillViewControllerId`,}
			            },
			    }
		}

		type GenerateUrlEmitTargetEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitPayload {
			
				/** Load args. */
				'args'?: (Record<string, any>)| undefined | null
		}

		interface GenerateUrlEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'generateUrlEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Load args. */
			            'args': {
			                label: 'Load args',
			                type: 'raw',
			                options: {valueType: `Record<string, any>`,}
			            },
			    }
		}

		type GenerateUrlEmitPayloadEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayloadSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.Heartwood.v2021_02_11.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayload| undefined | null
		}

		interface GenerateUrlEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'generateUrlEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayloadSchema,}
			            },
			    }
		}

		type GenerateUrlEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlResponsePayload {
			
				/** Url. */
				'url': string
		}

		interface GenerateUrlResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'generateUrlResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Url. */
			            'url': {
			                label: 'Url',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GenerateUrlResponsePayloadEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlResponsePayloadSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface EventSource {
			
				/** Proxy token. */
				'proxyToken'?: string| undefined | null
		}

		interface EventSourceSchema extends SpruceSchema.Schema {
			id: 'eventSource',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Proxy token. */
			            'proxyToken': {
			                label: 'Proxy token',
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type EventSourceEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.EventSourceSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.Heartwood.v2021_02_11.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitTarget| undefined | null
				
				'payload': SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayload
		}

		interface RegisterSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayloadSchema,}
			            },
			    }
		}

		type RegisterSkillViewsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.Heartwood.v2021_02_11.EventSource| undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.GetViewControllersEmitTarget
		}

		interface GetSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GetViewControllersEmitTargetSchema,}
			            },
			    }
		}

		type GetSkillViewsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetSkillViewsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface DidRegisterSkillViewsEmitPayload {
			
				/** View namespace. */
				'namespace': string
		}

		interface DidRegisterSkillViewsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didRegisterSkillViewsEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** View namespace. */
			            'namespace': {
			                label: 'View namespace',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DidRegisterSkillViewsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface DidRegisterSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.Heartwood.v2021_02_11.EventSource| undefined | null
				
				'payload': SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayload
		}

		interface DidRegisterSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didRegisterSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayloadSchema,}
			            },
			    }
		}

		type DidRegisterSkillViewsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetViewControllersEmitTarget {
			
				
				'namespace': string
		}

		interface GetViewControllersEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getViewControllersEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'namespace': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetViewControllersEmitTargetEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetViewControllersEmitTargetSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetSkillViewsResponsePayload {
			
				
				'id': string
				
				'ids': string[]
				
				'source': string
				
				'theme'?: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Theme| undefined | null
		}

		interface GetSkillViewsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillViewsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'ids': {
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'theme': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		type GetSkillViewsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetSkillViewsResponsePayloadSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05 {

		
		interface EventSource {
			
				/** Proxy token. */
				'proxyToken'?: string| undefined | null
		}

		interface EventSourceSchema extends SpruceSchema.Schema {
			id: 'eventSource',
			version: 'v2021_09_05',
			namespace: 'HeartwoodTest1630884950133Count47',
			name: '',
			    fields: {
			            /** Proxy token. */
			            'proxyToken': {
			                label: 'Proxy token',
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type EventSourceEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05.EventSourceSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05 {

		
		interface TestRegisterSkillViews1630884948423EmitTarget {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface TestRegisterSkillViews1630884948423EmitTargetSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1630884948423EmitTarget',
			version: 'v2021_09_05',
			namespace: 'HeartwoodTest1630884950133Count47',
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

		type TestRegisterSkillViews1630884948423EmitTargetEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05.TestRegisterSkillViews1630884948423EmitTargetSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05 {

		
		interface TestRegisterSkillViews1630884948423EmitPayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface TestRegisterSkillViews1630884948423EmitPayloadSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1630884948423EmitPayload',
			version: 'v2021_09_05',
			namespace: 'HeartwoodTest1630884950133Count47',
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

		type TestRegisterSkillViews1630884948423EmitPayloadEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05.TestRegisterSkillViews1630884948423EmitPayloadSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05 {

		
		interface TestRegisterSkillViews1630884948423EmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05.EventSource| undefined | null
				
				'target'?: SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05.TestRegisterSkillViews1630884948423EmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05.TestRegisterSkillViews1630884948423EmitPayload| undefined | null
		}

		interface TestRegisterSkillViews1630884948423EmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1630884948423EmitTargetAndPayload',
			version: 'v2021_09_05',
			namespace: 'HeartwoodTest1630884950133Count47',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05.TestRegisterSkillViews1630884948423EmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05.TestRegisterSkillViews1630884948423EmitPayloadSchema,}
			            },
			    }
		}

		type TestRegisterSkillViews1630884948423EmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05.TestRegisterSkillViews1630884948423EmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05 {

		
		interface TestRegisterSkillViews1630884948423ResponsePayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface TestRegisterSkillViews1630884948423ResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1630884948423ResponsePayload',
			version: 'v2021_09_05',
			namespace: 'HeartwoodTest1630884950133Count47',
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

		type TestRegisterSkillViews1630884948423ResponsePayloadEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1630884950133Count47.v2021_09_05.TestRegisterSkillViews1630884948423ResponsePayloadSchema>

	}

}
