/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import '@sprucelabs/spruce-event-utils'
import { SkillViewControllerId } from '@sprucelabs/heartwood-view-controllers'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05 {

		
		interface MyEventStoreAmazingEventEmitTarget {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface MyEventStoreAmazingEventEmitTargetSchema extends SpruceSchema.Schema {
			id: 'myEventStoreAmazingEventEmitTarget',
			version: 'v2021_10_05',
			namespace: 'EventStoreTestSkill1633423736390Count97',
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

		type MyEventStoreAmazingEventEmitTargetEntity = SchemaEntity<SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05.MyEventStoreAmazingEventEmitTargetSchema>

	}


	namespace SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05 {

		
		interface MyEventStoreAmazingEventEmitPayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface MyEventStoreAmazingEventEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'myEventStoreAmazingEventEmitPayload',
			version: 'v2021_10_05',
			namespace: 'EventStoreTestSkill1633423736390Count97',
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

		type MyEventStoreAmazingEventEmitPayloadEntity = SchemaEntity<SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05.MyEventStoreAmazingEventEmitPayloadSchema>

	}


	namespace SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05 {

		
		interface MyEventStoreAmazingEventEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05.MyEventStoreAmazingEventEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05.MyEventStoreAmazingEventEmitPayload| undefined | null
		}

		interface MyEventStoreAmazingEventEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'myEventStoreAmazingEventEmitTargetAndPayload',
			version: 'v2021_10_05',
			namespace: 'EventStoreTestSkill1633423736390Count97',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05.MyEventStoreAmazingEventEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05.MyEventStoreAmazingEventEmitPayloadSchema,}
			            },
			    }
		}

		type MyEventStoreAmazingEventEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05.MyEventStoreAmazingEventEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05 {

		
		interface MyEventStoreAmazingEventResponsePayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface MyEventStoreAmazingEventResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'myEventStoreAmazingEventResponsePayload',
			version: 'v2021_10_05',
			namespace: 'EventStoreTestSkill1633423736390Count97',
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

		type MyEventStoreAmazingEventResponsePayloadEntity = SchemaEntity<SpruceSchemas.EventStoreTestSkill1633423736390Count97.v2021_10_05.MyEventStoreAmazingEventResponsePayloadSchema>

	}


	namespace SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05 {

		
		interface MyEventStoreAmazingEventEmitTarget {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface MyEventStoreAmazingEventEmitTargetSchema extends SpruceSchema.Schema {
			id: 'myEventStoreAmazingEventEmitTarget',
			version: 'v2021_10_05',
			namespace: 'EventStoreTestSkill1633423784824Count98',
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

		type MyEventStoreAmazingEventEmitTargetEntity = SchemaEntity<SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05.MyEventStoreAmazingEventEmitTargetSchema>

	}


	namespace SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05 {

		
		interface MyEventStoreAmazingEventEmitPayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface MyEventStoreAmazingEventEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'myEventStoreAmazingEventEmitPayload',
			version: 'v2021_10_05',
			namespace: 'EventStoreTestSkill1633423784824Count98',
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

		type MyEventStoreAmazingEventEmitPayloadEntity = SchemaEntity<SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05.MyEventStoreAmazingEventEmitPayloadSchema>

	}


	namespace SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05 {

		
		interface MyEventStoreAmazingEventEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05.MyEventStoreAmazingEventEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05.MyEventStoreAmazingEventEmitPayload| undefined | null
		}

		interface MyEventStoreAmazingEventEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'myEventStoreAmazingEventEmitTargetAndPayload',
			version: 'v2021_10_05',
			namespace: 'EventStoreTestSkill1633423784824Count98',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05.MyEventStoreAmazingEventEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05.MyEventStoreAmazingEventEmitPayloadSchema,}
			            },
			    }
		}

		type MyEventStoreAmazingEventEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05.MyEventStoreAmazingEventEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05 {

		
		interface MyEventStoreAmazingEventResponsePayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface MyEventStoreAmazingEventResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'myEventStoreAmazingEventResponsePayload',
			version: 'v2021_10_05',
			namespace: 'EventStoreTestSkill1633423784824Count98',
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

		type MyEventStoreAmazingEventResponsePayloadEntity = SchemaEntity<SpruceSchemas.EventStoreTestSkill1633423784824Count98.v2021_10_05.MyEventStoreAmazingEventResponsePayloadSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05 {

		
		interface TestRegisterSkillViews1633423941867EmitTarget {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface TestRegisterSkillViews1633423941867EmitTargetSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1633423941867EmitTarget',
			version: 'v2021_10_05',
			namespace: 'HeartwoodTest1633423949524Count66',
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

		type TestRegisterSkillViews1633423941867EmitTargetEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05.TestRegisterSkillViews1633423941867EmitTargetSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05 {

		
		interface TestRegisterSkillViews1633423941867EmitPayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface TestRegisterSkillViews1633423941867EmitPayloadSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1633423941867EmitPayload',
			version: 'v2021_10_05',
			namespace: 'HeartwoodTest1633423949524Count66',
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

		type TestRegisterSkillViews1633423941867EmitPayloadEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05.TestRegisterSkillViews1633423941867EmitPayloadSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05 {

		
		interface TestRegisterSkillViews1633423941867EmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05.TestRegisterSkillViews1633423941867EmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05.TestRegisterSkillViews1633423941867EmitPayload| undefined | null
		}

		interface TestRegisterSkillViews1633423941867EmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1633423941867EmitTargetAndPayload',
			version: 'v2021_10_05',
			namespace: 'HeartwoodTest1633423949524Count66',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05.TestRegisterSkillViews1633423941867EmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05.TestRegisterSkillViews1633423941867EmitPayloadSchema,}
			            },
			    }
		}

		type TestRegisterSkillViews1633423941867EmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05.TestRegisterSkillViews1633423941867EmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05 {

		
		interface TestRegisterSkillViews1633423941867ResponsePayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface TestRegisterSkillViews1633423941867ResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1633423941867ResponsePayload',
			version: 'v2021_10_05',
			namespace: 'HeartwoodTest1633423949524Count66',
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

		type TestRegisterSkillViews1633423941867ResponsePayloadEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1633423949524Count66.v2021_10_05.TestRegisterSkillViews1633423941867ResponsePayloadSchema>

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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
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
				
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
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
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
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


	namespace SpruceSchemas.Appointments.v2021_06_23 {

		
		interface DidBookAppointmentsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
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

		
		interface GetSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
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

		
		interface RegisterSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
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


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface ConvertPdfToFormEmitPayload {
			
				/** Contents of PDF to convert to form. */
				'pdfContents': string
		}

		interface ConvertPdfToFormEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'convertPdfToFormEmitPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** Contents of PDF to convert to form. */
			            'pdfContents': {
			                label: 'Contents of PDF to convert to form',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ConvertPdfToFormEmitPayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.ConvertPdfToFormEmitPayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface ConvertPdfToFormEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Forms.v2021_07_02.ConvertPdfToFormEmitPayload
		}

		interface ConvertPdfToFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'convertPdfToFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.ConvertPdfToFormEmitPayloadSchema,}
			            },
			    }
		}

		type ConvertPdfToFormEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.ConvertPdfToFormEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface ConvertPdfToFormResponsePayload {
			
				
				'form'?: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.FormBuilderImportExportObject| undefined | null
		}

		interface ConvertPdfToFormResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'convertPdfToFormResponsePayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'form': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.FormBuilderImportExportObjectSchema,}
			            },
			    }
		}

		type ConvertPdfToFormResponsePayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.ConvertPdfToFormResponsePayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface CreateBuiltForm {
			
				/** Title. */
				'title': string
				/** Subtitle. */
				'subtitle'?: string| undefined | null
				/** Pages. */
				'pages': SpruceSchemas.HeartwoodViewControllers.v2021_02_11.BuilderImportExportPage[]
		}

		interface CreateBuiltFormSchema extends SpruceSchema.Schema {
			id: 'createBuiltForm',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** Title. */
			            'title': {
			                label: 'Title',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Subtitle. */
			            'subtitle': {
			                label: 'Subtitle',
			                type: 'text',
			                options: undefined
			            },
			            /** Pages. */
			            'pages': {
			                label: 'Pages',
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.BuilderImportExportPageSchema,}
			            },
			    }
		}

		type CreateBuiltFormEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.CreateBuiltFormSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface CreateFormEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Forms.v2021_07_02.CreateBuiltForm
		}

		interface CreateFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.CreateBuiltFormSchema,}
			            },
			    }
		}

		type CreateFormEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.CreateFormEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface BuiltForm {
			
				
				'id': string
				
				'dateDeleted'?: number| undefined | null
				/** Title. */
				'title': string
				/** Subtitle. */
				'subtitle'?: string| undefined | null
				/** Pages. */
				'pages': SpruceSchemas.HeartwoodViewControllers.v2021_02_11.BuilderImportExportPage[]
		}

		interface BuiltFormSchema extends SpruceSchema.Schema {
			id: 'builtForm',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Title. */
			            'title': {
			                label: 'Title',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Subtitle. */
			            'subtitle': {
			                label: 'Subtitle',
			                type: 'text',
			                options: undefined
			            },
			            /** Pages. */
			            'pages': {
			                label: 'Pages',
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.BuilderImportExportPageSchema,}
			            },
			    }
		}

		type BuiltFormEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.BuiltFormSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface CreateFormResponsePayload {
			
				
				'form': SpruceSchemas.Forms.v2021_07_02.BuiltForm
				
				'values'?: (Record<string, any>)[]| undefined | null
		}

		interface CreateFormResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createFormResponsePayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'form': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.BuiltFormSchema,}
			            },
			            /** . */
			            'values': {
			                type: 'raw',
			                isArray: true,
			                options: {valueType: `Record<string, any>`,}
			            },
			    }
		}

		type CreateFormResponsePayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.CreateFormResponsePayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface DeleteCompletedFormEmitTarget {
			
				
				'completedFormId': string
		}

		interface DeleteCompletedFormEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteCompletedFormEmitTarget',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'completedFormId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DeleteCompletedFormEmitTargetEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.DeleteCompletedFormEmitTargetSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface DeleteCompletedFormResponsePayload {
			
				
				'totalDeleted': number
		}

		interface DeleteCompletedFormResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteCompletedFormResponsePayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'totalDeleted': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DeleteCompletedFormResponsePayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.DeleteCompletedFormResponsePayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface ConvertPdfToSchemasEmitPayload {
			
				/** Contents of PDF to convert to schemas. */
				'pdfContents': string
		}

		interface ConvertPdfToSchemasEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'convertPdfToSchemasEmitPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** Contents of PDF to convert to schemas. */
			            'pdfContents': {
			                label: 'Contents of PDF to convert to schemas',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ConvertPdfToSchemasEmitPayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.ConvertPdfToSchemasEmitPayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface ConvertPdfToSchemasEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Forms.v2021_07_02.ConvertPdfToSchemasEmitPayload
		}

		interface ConvertPdfToSchemasEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'convertPdfToSchemasEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.ConvertPdfToSchemasEmitPayloadSchema,}
			            },
			    }
		}

		type ConvertPdfToSchemasEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.ConvertPdfToSchemasEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface ConvertPdfToSchemasResponsePayload {
			
				/** Schemas genenerated for PDF. */
				'schemas': (SpruceSchema.Schema)[]
		}

		interface ConvertPdfToSchemasResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'convertPdfToSchemasResponsePayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** Schemas genenerated for PDF. */
			            'schemas': {
			                label: 'Schemas genenerated for PDF',
			                type: 'raw',
			                isRequired: true,
			                isArray: true,
			                options: {valueType: `SpruceSchema.Schema`,}
			            },
			    }
		}

		type ConvertPdfToSchemasResponsePayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.ConvertPdfToSchemasResponsePayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface DidSaveFormEmitPayload {
			
				
				'completedFormId': string
		}

		interface DidSaveFormEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didSaveFormEmitPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'completedFormId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DidSaveFormEmitPayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.DidSaveFormEmitPayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface DidUpdateCompletedFormEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Forms.v2021_07_02.DidSaveFormEmitPayload
		}

		interface DidUpdateCompletedFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdateCompletedFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.DidSaveFormEmitPayloadSchema,}
			            },
			    }
		}

		type DidUpdateCompletedFormEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.DidUpdateCompletedFormEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface GetCompletedFormEmitTarget {
			
				
				'completedFormId': string
		}

		interface GetCompletedFormEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getCompletedFormEmitTarget',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'completedFormId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetCompletedFormEmitTargetEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.GetCompletedFormEmitTargetSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface GetCompletedFormEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Forms.v2021_07_02.GetCompletedFormEmitTarget
		}

		interface GetCompletedFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getCompletedFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.GetCompletedFormEmitTargetSchema,}
			            },
			    }
		}

		type GetCompletedFormEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.GetCompletedFormEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface CompletedFormSourceForm {
			
				
				'id': string
				/** Title. */
				'title': string
				/** Subtitle. */
				'subtitle'?: string| undefined | null
				/** Pages. */
				'pages': SpruceSchemas.HeartwoodViewControllers.v2021_02_11.BuilderImportExportPage[]
		}

		interface CompletedFormSourceFormSchema extends SpruceSchema.Schema {
			id: 'completedFormSourceForm',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Title. */
			            'title': {
			                label: 'Title',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Subtitle. */
			            'subtitle': {
			                label: 'Subtitle',
			                type: 'text',
			                options: undefined
			            },
			            /** Pages. */
			            'pages': {
			                label: 'Pages',
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.BuilderImportExportPageSchema,}
			            },
			    }
		}

		type CompletedFormSourceFormEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.CompletedFormSourceFormSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface GetCompletedFormEventForm {
			
				
				'id': string
				
				'dateCreated': number
				
				'dateUpdated'?: number| undefined | null
				
				'sourceForm': SpruceSchemas.Forms.v2021_07_02.CompletedFormSourceForm
				
				'sourceFormId': string
				
				'personId': string
				
				'values'?: (Record<string, any>)[]| undefined | null
		}

		interface GetCompletedFormEventFormSchema extends SpruceSchema.Schema {
			id: 'getCompletedFormEventForm',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateUpdated': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'sourceForm': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.CompletedFormSourceFormSchema,}
			            },
			            /** . */
			            'sourceFormId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'values': {
			                type: 'raw',
			                isArray: true,
			                options: {valueType: `Record<string, any>`,}
			            },
			    }
		}

		type GetCompletedFormEventFormEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.GetCompletedFormEventFormSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface GetCompletedFormResponsePayload {
			
				
				'completedForm': SpruceSchemas.Forms.v2021_07_02.GetCompletedFormEventForm
		}

		interface GetCompletedFormResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getCompletedFormResponsePayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'completedForm': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.GetCompletedFormEventFormSchema,}
			            },
			    }
		}

		type GetCompletedFormResponsePayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.GetCompletedFormResponsePayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface CompletedFormResponse {
			
				
				'personName': string
				
				'formTitle': string
				
				'completedFormBuilderId': string
				
				'percentComplete': number
		}

		interface CompletedFormResponseSchema extends SpruceSchema.Schema {
			id: 'completedFormResponse',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'personName': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'formTitle': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'completedFormBuilderId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'percentComplete': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type CompletedFormResponseEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.CompletedFormResponseSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface ListCompletedFormsResponsePayload {
			
				
				'completedForms': SpruceSchemas.Forms.v2021_07_02.CompletedFormResponse[]
		}

		interface ListCompletedFormsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listCompletedFormsResponsePayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'completedForms': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.CompletedFormResponseSchema,}
			            },
			    }
		}

		type ListCompletedFormsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.ListCompletedFormsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface ListFormsForm {
			
				
				'id': string
				
				'dateDeleted'?: number| undefined | null
				/** Title. */
				'title': string
				/** Subtitle. */
				'subtitle'?: string| undefined | null
		}

		interface ListFormsFormSchema extends SpruceSchema.Schema {
			id: 'listFormsForm',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Title. */
			            'title': {
			                label: 'Title',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Subtitle. */
			            'subtitle': {
			                label: 'Subtitle',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		type ListFormsFormEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.ListFormsFormSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface ListFormsResponsePayload {
			
				
				'forms': SpruceSchemas.Forms.v2021_07_02.ListFormsForm[]
		}

		interface ListFormsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listFormsResponsePayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'forms': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.ListFormsFormSchema,}
			            },
			    }
		}

		type ListFormsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.ListFormsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface DeleteCompletedFormEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Forms.v2021_07_02.DeleteCompletedFormEmitTarget
		}

		interface DeleteCompletedFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteCompletedFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.DeleteCompletedFormEmitTargetSchema,}
			            },
			    }
		}

		type DeleteCompletedFormEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.DeleteCompletedFormEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface UpdateCompletedFormEmitPayload {
			
				
				'sourceFormId': string
				
				'values'?: (Record<string, any>)[]| undefined | null
		}

		interface UpdateCompletedFormEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateCompletedFormEmitPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'sourceFormId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'values': {
			                type: 'raw',
			                isArray: true,
			                options: {valueType: `Record<string, any>`,}
			            },
			    }
		}

		type UpdateCompletedFormEmitPayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.UpdateCompletedFormEmitPayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface UpdateCompletedFormEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Forms.v2021_07_02.UpdateCompletedFormEmitPayload
		}

		interface UpdateCompletedFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateCompletedFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Forms.v2021_07_02.UpdateCompletedFormEmitPayloadSchema,}
			            },
			    }
		}

		type UpdateCompletedFormEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.UpdateCompletedFormEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Forms.v2021_07_02 {

		
		interface UpdateCompletedFormResponsePayload {
			
				
				'completedFormId': string
		}

		interface UpdateCompletedFormResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateCompletedFormResponsePayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
			            /** . */
			            'completedFormId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UpdateCompletedFormResponsePayloadEntity = SchemaEntity<SpruceSchemas.Forms.v2021_07_02.UpdateCompletedFormResponsePayloadSchema>

	}

}
