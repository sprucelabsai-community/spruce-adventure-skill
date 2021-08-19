/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import { SkillViewControllerId } from '@sprucelabs/heartwood-view-controllers'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


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

		
		interface RegisterationTheme {
			
				
				'props': SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeProps
		}

		interface RegisterationThemeSchema extends SpruceSchema.Schema {
			id: 'registerationTheme',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'props': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemePropsSchema,}
			            },
			    }
		}

		type RegisterationThemeEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterationThemeSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetSkillViewsResponsePayload {
			
				
				'id': string
				
				'ids': string[]
				
				'source': string
				
				'theme'?: SpruceSchemas.Heartwood.v2021_02_11.RegisterationTheme| undefined | null
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
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.RegisterationThemeSchema,}
			            },
			    }
		}

		type GetSkillViewsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetSkillViewsResponsePayloadSchema>

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


	namespace SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19 {

		
		interface EventSource {
			
				/** Proxy token. */
				'proxyToken'?: string| undefined | null
		}

		interface EventSourceSchema extends SpruceSchema.Schema {
			id: 'eventSource',
			version: 'v2021_08_19',
			namespace: 'HeartwoodTest1629384044184Count58',
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

		type EventSourceEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.EventSourceSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19 {

		
		interface TestRegisterSkillViews1629384042933EmitTarget {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface TestRegisterSkillViews1629384042933EmitTargetSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1629384042933EmitTarget',
			version: 'v2021_08_19',
			namespace: 'HeartwoodTest1629384044184Count58',
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

		type TestRegisterSkillViews1629384042933EmitTargetEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.TestRegisterSkillViews1629384042933EmitTargetSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19 {

		
		interface TestRegisterSkillViews1629384042933EmitPayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface TestRegisterSkillViews1629384042933EmitPayloadSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1629384042933EmitPayload',
			version: 'v2021_08_19',
			namespace: 'HeartwoodTest1629384044184Count58',
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

		type TestRegisterSkillViews1629384042933EmitPayloadEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.TestRegisterSkillViews1629384042933EmitPayloadSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19 {

		
		interface TestRegisterSkillViews1629384042933EmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.EventSource| undefined | null
				
				'target'?: SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.TestRegisterSkillViews1629384042933EmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.TestRegisterSkillViews1629384042933EmitPayload| undefined | null
		}

		interface TestRegisterSkillViews1629384042933EmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1629384042933EmitTargetAndPayload',
			version: 'v2021_08_19',
			namespace: 'HeartwoodTest1629384044184Count58',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.TestRegisterSkillViews1629384042933EmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.TestRegisterSkillViews1629384042933EmitPayloadSchema,}
			            },
			    }
		}

		type TestRegisterSkillViews1629384042933EmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.TestRegisterSkillViews1629384042933EmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19 {

		
		interface TestRegisterSkillViews1629384042933ResponsePayload {
			
				/** Update me. */
				'aTextField'?: string| undefined | null
		}

		interface TestRegisterSkillViews1629384042933ResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'testRegisterSkillViews1629384042933ResponsePayload',
			version: 'v2021_08_19',
			namespace: 'HeartwoodTest1629384044184Count58',
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

		type TestRegisterSkillViews1629384042933ResponsePayloadEntity = SchemaEntity<SpruceSchemas.HeartwoodTest1629384044184Count58.v2021_08_19.TestRegisterSkillViews1629384042933ResponsePayloadSchema>

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

}
