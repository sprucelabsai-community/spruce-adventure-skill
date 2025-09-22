/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import '@sprucelabs/spruce-event-utils'
import { SkillViewControllerId } from '@sprucelabs/heartwood-view-controllers'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface DidRegisterSkillViewsEmitTarget {
			
				
				'personId': string
		}

		interface DidRegisterSkillViewsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didRegisterSkillViewsEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidRegisterSkillViewsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTargetSchema> {}

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

		interface DidRegisterSkillViewsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface DidRegisterSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTarget
				
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
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayloadSchema,}
			            },
			    }
		}

		interface DidRegisterSkillViewsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitTarget {
			
				/** Skill View Id. */
				'skillViewId'?: (SkillViewControllerId) | undefined | null
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

		interface GenerateUrlEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitPayload {
			
				/** Load args. */
				'args'?: (Record<string, any>) | undefined | null
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

		interface GenerateUrlEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GenerateUrlEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTarget | undefined | null
				
				'payload'?: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayload | undefined | null
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

		interface GenerateUrlEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetAndPayloadSchema> {}

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

		interface GenerateUrlResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetActiveThemeEmitTarget {
			
				
				'organizationId': string
		}

		interface GetActiveThemeEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getActiveThemeEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetActiveThemeEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetActiveThemeEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTarget
		}

		interface GetActiveThemeEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getActiveThemeEmitTargetAndPayload',
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
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTargetSchema,}
			            },
			    }
		}

		interface GetActiveThemeEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetActiveThemeResponsePayload {
			
				
				'theme'?: SpruceSchemas.Heartwood.v2021_02_11.Theme | undefined | null
		}

		interface GetActiveThemeResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getActiveThemeResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'theme': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface GetActiveThemeResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetActiveThemeResponsePayloadSchema> {}

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

		interface GetViewControllersEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetViewControllersEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
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

		interface GetSkillViewsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetSkillViewsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface GetSkillViewsResponsePayload {
			
				
				'id': string
				
				'ids': string[]
				
				'source'?: string | undefined | null
				
				'sourceUrl'?: string | undefined | null
				
				'theme'?: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Theme | undefined | null
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
			                options: undefined
			            },
			            /** . */
			            'sourceUrl': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'theme': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface GetSkillViewsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.GetSkillViewsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface ListViewsResult {
			
				
				'namespace': string
				/** Skill view ids. For now this is every view, but soon will be only skill views */
				'svcIds': string[]
				/** View ids. For now this is every view, but soon will be only views (not skill views) */
				'vcIds': string[]
		}

		interface ListViewsResultSchema extends SpruceSchema.Schema {
			id: 'listViewsResult',
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
			            /** Skill view ids. For now this is every view, but soon will be only skill views */
			            'svcIds': {
			                label: 'Skill view ids',
			                type: 'id',
			                isRequired: true,
			                hint: 'For now this is every view, but soon will be only skill views',
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** View ids. For now this is every view, but soon will be only views (not skill views) */
			            'vcIds': {
			                label: 'View ids',
			                type: 'id',
			                isRequired: true,
			                hint: 'For now this is every view, but soon will be only views (not skill views)',
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface ListViewsResultEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.ListViewsResultSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface ListViewsResponsePayload {
			
				
				'views': SpruceSchemas.Heartwood.v2021_02_11.ListViewsResult[]
		}

		interface ListViewsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listViewsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'views': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ListViewsResultSchema,}
			            },
			    }
		}

		interface ListViewsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.ListViewsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterDashboardCardsResponsePayload {
			
				
				'vcIds': string[]
		}

		interface RegisterDashboardCardsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerDashboardCardsResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'vcIds': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface RegisterDashboardCardsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterDashboardCardsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsEmitPayload {
			
				
				'ids': string[]
				
				'source'?: string | undefined | null
				
				'sourceUrl'?: string | undefined | null
				
				'theme'?: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Theme | undefined | null
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
			                options: undefined
			            },
			            /** . */
			            'sourceUrl': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'theme': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface RegisterSkillViewsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
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
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayloadSchema,}
			            },
			    }
		}

		interface RegisterSkillViewsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitTargetAndPayloadSchema> {}

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

		interface RegisterSkillViewsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeEmitTarget {
			
				
				'organizationId': string
		}

		interface UpsertThemeEmitTargetSchema extends SpruceSchema.Schema {
			id: 'upsertThemeEmitTarget',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpsertThemeEmitTargetEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTarget
				
				'payload': SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitPayload
		}

		interface UpsertThemeEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'upsertThemeEmitTargetAndPayload',
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
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitPayloadSchema,}
			            },
			    }
		}

		interface UpsertThemeEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface Theme {
			
				
				'slug': string
				
				'name': string
				
				'props': SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeProps
		}

		interface ThemeSchema extends SpruceSchema.Schema {
			id: 'theme',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: 'Theme',
			    fields: {
			            /** . */
			            'slug': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'name': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'props': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemePropsSchema,}
			            },
			    }
		}

		interface ThemeEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeEmitPayload {
			
				
				'theme': SpruceSchemas.Heartwood.v2021_02_11.Theme
		}

		interface UpsertThemeEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'upsertThemeEmitPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'theme': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface UpsertThemeEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface UpsertThemeResponsePayload {
			
				
				'theme': SpruceSchemas.Heartwood.v2021_02_11.Theme
		}

		interface UpsertThemeResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'upsertThemeResponsePayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** . */
			            'theme': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ThemeSchema,}
			            },
			    }
		}

		interface UpsertThemeResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.UpsertThemeResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface BroadcastTeamMessageEmitTarget {
			
				
				'locationId': string
		}

		interface BroadcastTeamMessageEmitTargetSchema extends SpruceSchema.Schema {
			id: 'broadcastTeamMessageEmitTarget',
			version: 'v2022_05_29',
			namespace: 'People',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface BroadcastTeamMessageEmitTargetEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageEmitTargetSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface BroadcastTeamMessageEmitPayload {
			
				
				'message': string
		}

		interface BroadcastTeamMessageEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'broadcastTeamMessageEmitPayload',
			version: 'v2022_05_29',
			namespace: 'People',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface BroadcastTeamMessageEmitPayloadEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface BroadcastTeamMessageEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageEmitTarget
				
				'payload': SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageEmitPayload
		}

		interface BroadcastTeamMessageEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'broadcastTeamMessageEmitTargetAndPayload',
			version: 'v2022_05_29',
			namespace: 'People',
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
			                options: {schema: SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageEmitPayloadSchema,}
			            },
			    }
		}

		interface BroadcastTeamMessageEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface BroadcastTeamMessageResponsePayload {
			
				
				'success': boolean
		}

		interface BroadcastTeamMessageResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'broadcastTeamMessageResponsePayload',
			version: 'v2022_05_29',
			namespace: 'People',
			name: '',
			    fields: {
			            /** . */
			            'success': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface BroadcastTeamMessageResponsePayloadEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.BroadcastTeamMessageResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface GetEmitTarget {
			
				
				'organizationId'?: string | undefined | null
				
				'locationId'?: string | undefined | null
				
				'searchPersonId': string
		}

		interface GetEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getEmitTarget',
			version: 'v2022_05_29',
			namespace: 'People',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'searchPersonId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetEmitTargetEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.GetEmitTargetSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface GetEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.People.v2022_05_29.GetEmitTarget
		}

		interface GetEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getEmitTargetAndPayload',
			version: 'v2022_05_29',
			namespace: 'People',
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
			                options: {schema: SpruceSchemas.People.v2022_05_29.GetEmitTargetSchema,}
			            },
			    }
		}

		interface GetEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.GetEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface RegisterDashboardCardsResponsePayload {
			
				
				'vcIds': string[]
		}

		interface RegisterDashboardCardsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerDashboardCardsResponsePayload',
			version: 'v2022_05_29',
			namespace: 'People',
			name: '',
			    fields: {
			            /** . */
			            'vcIds': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface RegisterDashboardCardsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.RegisterDashboardCardsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface SearchEmitTarget {
			
				
				'organizationId'?: string | undefined | null
				
				'locationId'?: string | undefined | null
		}

		interface SearchEmitTargetSchema extends SpruceSchema.Schema {
			id: 'searchEmitTarget',
			version: 'v2022_05_29',
			namespace: 'People',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface SearchEmitTargetEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.SearchEmitTargetSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface SearchEmitPayload {
			
				
				'query': string
		}

		interface SearchEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'searchEmitPayload',
			version: 'v2022_05_29',
			namespace: 'People',
			name: '',
			    fields: {
			            /** . */
			            'query': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface SearchEmitPayloadEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.SearchEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface SearchEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.People.v2022_05_29.SearchEmitTarget | undefined | null
				
				'payload': SpruceSchemas.People.v2022_05_29.SearchEmitPayload
		}

		interface SearchEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'searchEmitTargetAndPayload',
			version: 'v2022_05_29',
			namespace: 'People',
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
			                options: {schema: SpruceSchemas.People.v2022_05_29.SearchEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.People.v2022_05_29.SearchEmitPayloadSchema,}
			            },
			    }
		}

		interface SearchEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.SearchEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface SearchPerson {
			
				
				'id': string
				
				'fullName': string
				
				'phone'?: string | undefined | null
		}

		interface SearchPersonSchema extends SpruceSchema.Schema {
			id: 'searchPerson',
			version: 'v2022_05_29',
			namespace: 'People',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'fullName': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'phone': {
			                type: 'phone',
			                options: undefined
			            },
			    }
		}

		interface SearchPersonEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.SearchPersonSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface GetResponsePayload {
			
				
				'person': SpruceSchemas.People.v2022_05_29.SearchPerson
		}

		interface GetResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getResponsePayload',
			version: 'v2022_05_29',
			namespace: 'People',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.People.v2022_05_29.SearchPersonSchema,}
			            },
			    }
		}

		interface GetResponsePayloadEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.GetResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.People.v2022_05_29 {

		
		interface SearchResponsePayload {
			
				
				'people': SpruceSchemas.People.v2022_05_29.SearchPerson[]
		}

		interface SearchResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'searchResponsePayload',
			version: 'v2022_05_29',
			namespace: 'People',
			name: '',
			    fields: {
			            /** . */
			            'people': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.People.v2022_05_29.SearchPersonSchema,}
			            },
			    }
		}

		interface SearchResponsePayloadEntity extends SchemaEntity<SpruceSchemas.People.v2022_05_29.SearchResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface SendReminderEmitTarget {
			
				
				'adventureId': string
		}

		interface SendReminderEmitTargetSchema extends SpruceSchema.Schema {
			id: 'sendReminderEmitTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'adventureId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface SendReminderEmitTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.SendReminderEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface SendReminderEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Adventure.v2022_09_09.SendReminderEmitTarget
		}

		interface SendReminderEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'sendReminderEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.SendReminderEmitTargetSchema,}
			            },
			    }
		}

		interface SendReminderEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.SendReminderEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface SendReminderResponsePayload {
			
				
				'success': boolean
		}

		interface SendReminderResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'sendReminderResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'success': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface SendReminderResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.SendReminderResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface CancelEmitPayload {
			
				
				'message'?: string | undefined | null
		}

		interface CancelEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'cancelEmitPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface CancelEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.CancelEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface CancelEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload'?: SpruceSchemas.Adventure.v2022_09_09.CancelEmitPayload | undefined | null
		}

		interface CancelEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'cancelEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.CancelEmitPayloadSchema,}
			            },
			    }
		}

		interface CancelEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.CancelEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface CancelResponsePayload {
			
				
				'totalCancelled': number
		}

		interface CancelResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'cancelResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'totalCancelled': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CancelResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.CancelResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface ListAdventure {
			
				
				'id': string
				/** What are you gonna do?. Describe the adventure! This is what I'll message to your friends! Heads up, you can only have 1 adventure at a time! */
				'what': string
				/** When are you gonna do it?. */
				'when': SpruceSchema.DateTimeFieldValue
				/** Where are you gonna to do it?. */
				'where': SpruceSchema.AddressFieldValue
				/** Who is in?. */
				'whosIn': string[]
				/** Who is out?. */
				'whosOut': string[]
				
				'wasReminderSent'?: boolean | undefined | null
				
				'target'?: SpruceSchemas.Adventure.v2022_09_09.AdventureTarget | undefined | null
				
				'source': SpruceSchemas.Adventure.v2022_09_09.AdventureSource
				
				'personCasualName': string
				
				'personAvatar'?: SpruceSchema.ImageFieldValue | undefined | null
				
				'groupTitle'?: string | undefined | null
		}

		interface ListAdventureSchema extends SpruceSchema.Schema {
			id: 'listAdventure',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** What are you gonna do?. Describe the adventure! This is what I'll message to your friends! Heads up, you can only have 1 adventure at a time! */
			            'what': {
			                label: 'What are you gonna do?',
			                type: 'text',
			                isRequired: true,
			                hint: 'Describe the adventure! This is what I\'ll message to your friends! Heads up, you can only have 1 adventure at a time!',
			                options: undefined
			            },
			            /** When are you gonna do it?. */
			            'when': {
			                label: 'When are you gonna do it?',
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** Where are you gonna to do it?. */
			            'where': {
			                label: 'Where are you gonna to do it?',
			                type: 'address',
			                isRequired: true,
			                options: undefined
			            },
			            /** Who is in?. */
			            'whosIn': {
			                label: 'Who is in?',
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** Who is out?. */
			            'whosOut': {
			                label: 'Who is out?',
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** . */
			            'wasReminderSent': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.AdventureTargetSchema,}
			            },
			            /** . */
			            'source': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.AdventureSourceSchema,}
			            },
			            /** . */
			            'personCasualName': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'personAvatar': {
			                type: 'image',
			                options: undefined
			            },
			            /** . */
			            'groupTitle': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface ListAdventureEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.ListAdventureSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface ListResponsePayload {
			
				
				'adventures': SpruceSchemas.Adventure.v2022_09_09.ListAdventure[]
		}

		interface ListResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'adventures': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.ListAdventureSchema,}
			            },
			    }
		}

		interface ListResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.ListResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface PostEmitTarget {
			
				
				'groupId'?: string | undefined | null
		}

		interface PostEmitTargetSchema extends SpruceSchema.Schema {
			id: 'postEmitTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'groupId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface PostEmitTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.PostEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface PostAdventure {
			
				/** What are you gonna do?. Describe the adventure! This is what I'll message to your friends! Heads up, you can only have 1 adventure at a time! */
				'what': string
				/** When are you gonna do it?. */
				'when': SpruceSchema.DateTimeFieldValue
				/** Where are you gonna to do it?. */
				'where': SpruceSchema.AddressFieldValue
		}

		interface PostAdventureSchema extends SpruceSchema.Schema {
			id: 'postAdventure',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** What are you gonna do?. Describe the adventure! This is what I'll message to your friends! Heads up, you can only have 1 adventure at a time! */
			            'what': {
			                label: 'What are you gonna do?',
			                type: 'text',
			                isRequired: true,
			                hint: 'Describe the adventure! This is what I\'ll message to your friends! Heads up, you can only have 1 adventure at a time!',
			                options: undefined
			            },
			            /** When are you gonna do it?. */
			            'when': {
			                label: 'When are you gonna do it?',
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** Where are you gonna to do it?. */
			            'where': {
			                label: 'Where are you gonna to do it?',
			                type: 'address',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface PostAdventureEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.PostAdventureSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface PostEmitPayload {
			
				
				'adventure': SpruceSchemas.Adventure.v2022_09_09.PostAdventure
		}

		interface PostEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'postEmitPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'adventure': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.PostAdventureSchema,}
			            },
			    }
		}

		interface PostEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.PostEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface PostEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Adventure.v2022_09_09.PostEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Adventure.v2022_09_09.PostEmitPayload
		}

		interface PostEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'postEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.PostEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.PostEmitPayloadSchema,}
			            },
			    }
		}

		interface PostEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.PostEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface PostResponsePayload {
			
				
				'adventure': SpruceSchemas.Adventure.v2022_09_09.Adventure
		}

		interface PostResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'postResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'adventure': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.AdventureSchema,}
			            },
			    }
		}

		interface PostResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.PostResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface RsvpEmitTarget {
			
				
				'adventureId': string
		}

		interface RsvpEmitTargetSchema extends SpruceSchema.Schema {
			id: 'rsvpEmitTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'adventureId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface RsvpEmitTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.RsvpEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface RsvpEmitPayload {
			
				
				'canIMakeIt': boolean
		}

		interface RsvpEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'rsvpEmitPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'canIMakeIt': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface RsvpEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.RsvpEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface RsvpEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Adventure.v2022_09_09.RsvpEmitTarget
				
				'payload': SpruceSchemas.Adventure.v2022_09_09.RsvpEmitPayload
		}

		interface RsvpEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'rsvpEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.RsvpEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.RsvpEmitPayloadSchema,}
			            },
			    }
		}

		interface RsvpEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.RsvpEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface RsvpResponsePayload {
			
				
				'success': boolean
		}

		interface RsvpResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'rsvpResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'success': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface RsvpResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.RsvpResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface AcceptConnectionEmitTarget {
			
				
				'connectionId': string
		}

		interface AcceptConnectionEmitTargetSchema extends SpruceSchema.Schema {
			id: 'acceptConnectionEmitTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'connectionId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface AcceptConnectionEmitTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.AcceptConnectionEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface AcceptConnectionEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Adventure.v2022_09_09.AcceptConnectionEmitTarget
		}

		interface AcceptConnectionEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'acceptConnectionEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.AcceptConnectionEmitTargetSchema,}
			            },
			    }
		}

		interface AcceptConnectionEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.AcceptConnectionEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface AcceptConnectionResponsePayload {
			
				
				'success': boolean
		}

		interface AcceptConnectionResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'acceptConnectionResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'success': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface AcceptConnectionResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.AcceptConnectionResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface CreateConnectionEmitTarget {
			
				
				'groupId'?: string | undefined | null
		}

		interface CreateConnectionEmitTargetSchema extends SpruceSchema.Schema {
			id: 'createConnectionEmitTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'groupId': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface CreateConnectionEmitTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.CreateConnectionEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface CreateConnectionEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Adventure.v2022_09_09.CreateConnectionEmitTarget | undefined | null
		}

		interface CreateConnectionEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createConnectionEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.CreateConnectionEmitTargetSchema,}
			            },
			    }
		}

		interface CreateConnectionEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.CreateConnectionEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface CreateConnectionResponsePayload {
			
				
				'connectionId': string
		}

		interface CreateConnectionResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createConnectionResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'connectionId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CreateConnectionResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.CreateConnectionResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface CreateGroup {
			
				/** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
				'title': string
				/** Description. */
				'description'?: string | undefined | null
				
				'people': string[]
		}

		interface CreateGroupSchema extends SpruceSchema.Schema {
			id: 'createGroup',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
			            'title': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Give your group a helpful name, like "Besties" or "Work Squad"',
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'people': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface CreateGroupEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.CreateGroupSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface CreateGroupEmitPayload {
			
				
				'group': SpruceSchemas.Adventure.v2022_09_09.CreateGroup
		}

		interface CreateGroupEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createGroupEmitPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'group': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.CreateGroupSchema,}
			            },
			    }
		}

		interface CreateGroupEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.CreateGroupEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface CreateGroupEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Adventure.v2022_09_09.CreateGroupEmitPayload
		}

		interface CreateGroupEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createGroupEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.CreateGroupEmitPayloadSchema,}
			            },
			    }
		}

		interface CreateGroupEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.CreateGroupEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface CreateGroupResponse {
			
				
				'id': string
				/** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
				'title': string
				/** Description. */
				'description'?: string | undefined | null
				
				'people': string[]
		}

		interface CreateGroupResponseSchema extends SpruceSchema.Schema {
			id: 'createGroupResponse',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
			            'title': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Give your group a helpful name, like "Besties" or "Work Squad"',
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'people': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface CreateGroupResponseEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.CreateGroupResponseSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface CreateGroupResponsePayload {
			
				
				'group': SpruceSchemas.Adventure.v2022_09_09.CreateGroupResponse
		}

		interface CreateGroupResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createGroupResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'group': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.CreateGroupResponseSchema,}
			            },
			    }
		}

		interface CreateGroupResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.CreateGroupResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface ListFriendsEmitPayload {
			
				
				'filter'?: ("confirmed" | "pending") | undefined | null
				
				'isInGroupId'?: string | undefined | null
		}

		interface ListFriendsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listFriendsEmitPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'filter': {
			                type: 'select',
			                options: {choices: [{"value":"confirmed","label":"Confirmed"},{"value":"pending","label":"Pending"}],}
			            },
			            /** . */
			            'isInGroupId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface ListFriendsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.ListFriendsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface ListFriendsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload'?: SpruceSchemas.Adventure.v2022_09_09.ListFriendsEmitPayload | undefined | null
		}

		interface ListFriendsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listFriendsEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.ListFriendsEmitPayloadSchema,}
			            },
			    }
		}

		interface ListFriendsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.ListFriendsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface ListFriendsResponsePayload {
			
				
				'friends': SpruceSchemas.Adventure.v2022_09_09.Friend[]
		}

		interface ListFriendsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listFriendsResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'friends': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.FriendSchema,}
			            },
			    }
		}

		interface ListFriendsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.ListFriendsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface DeleteGroupEmitTarget {
			
				
				'groupId': string
		}

		interface DeleteGroupEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteGroupEmitTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'groupId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteGroupEmitTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.DeleteGroupEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface DeleteGroupEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Adventure.v2022_09_09.DeleteGroupEmitTarget
		}

		interface DeleteGroupEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteGroupEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.DeleteGroupEmitTargetSchema,}
			            },
			    }
		}

		interface DeleteGroupEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.DeleteGroupEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface DeleteGroupResponsePayload {
			
				
				'success': boolean
		}

		interface DeleteGroupResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteGroupResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'success': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteGroupResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.DeleteGroupResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface GetGroupEmitTarget {
			
				
				'id': string
		}

		interface GetGroupEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getGroupEmitTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetGroupEmitTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.GetGroupEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface GetGroupEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Adventure.v2022_09_09.GetGroupEmitTarget
		}

		interface GetGroupEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getGroupEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.GetGroupEmitTargetSchema,}
			            },
			    }
		}

		interface GetGroupEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.GetGroupEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface GetGroup {
			
				
				'id': string
				/** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
				'title': string
				/** Description. */
				'description'?: string | undefined | null
				
				'people': string[]
				
				'isMine': boolean
		}

		interface GetGroupSchema extends SpruceSchema.Schema {
			id: 'getGroup',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
			            'title': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Give your group a helpful name, like "Besties" or "Work Squad"',
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'people': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** . */
			            'isMine': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetGroupEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.GetGroupSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface GetGroupResponsePayload {
			
				
				'group': SpruceSchemas.Adventure.v2022_09_09.GetGroup
		}

		interface GetGroupResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getGroupResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'group': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.GetGroupSchema,}
			            },
			    }
		}

		interface GetGroupResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.GetGroupResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface AddFriendToGroupEmitTarget {
			
				
				'groupId': string
		}

		interface AddFriendToGroupEmitTargetSchema extends SpruceSchema.Schema {
			id: 'addFriendToGroupEmitTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'groupId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface AddFriendToGroupEmitTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface AddFriendToGroupEmitPayload {
			
				
				'friendId': string
		}

		interface AddFriendToGroupEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'addFriendToGroupEmitPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'friendId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface AddFriendToGroupEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface AddFriendToGroupResponsePayload {
			
				
				'success': boolean
		}

		interface AddFriendToGroupResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'addFriendToGroupResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'success': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface AddFriendToGroupResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface LeaveGroupEmitTarget {
			
				
				'groupId': string
		}

		interface LeaveGroupEmitTargetSchema extends SpruceSchema.Schema {
			id: 'leaveGroupEmitTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'groupId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface LeaveGroupEmitTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.LeaveGroupEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface LeaveGroupEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Adventure.v2022_09_09.LeaveGroupEmitTarget
		}

		interface LeaveGroupEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'leaveGroupEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.LeaveGroupEmitTargetSchema,}
			            },
			    }
		}

		interface LeaveGroupEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.LeaveGroupEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface LeaveGroupResponsePayload {
			
				
				'success': boolean
		}

		interface LeaveGroupResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'leaveGroupResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'success': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface LeaveGroupResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.LeaveGroupResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface ListGroup {
			
				
				'id': string
				/** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
				'title': string
				/** Description. */
				'description'?: string | undefined | null
				
				'people': string[]
				
				'isMine': boolean
		}

		interface ListGroupSchema extends SpruceSchema.Schema {
			id: 'listGroup',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
			            'title': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Give your group a helpful name, like "Besties" or "Work Squad"',
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'people': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** . */
			            'isMine': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ListGroupEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.ListGroupSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface ListGroupsResponsePayload {
			
				
				'groups': SpruceSchemas.Adventure.v2022_09_09.ListGroup[]
		}

		interface ListGroupsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listGroupsResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'groups': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.ListGroupSchema,}
			            },
			    }
		}

		interface ListGroupsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.ListGroupsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface AddFriendToGroupEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupEmitTarget
				
				'payload': SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupEmitPayload
		}

		interface AddFriendToGroupEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'addFriendToGroupEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupEmitPayloadSchema,}
			            },
			    }
		}

		interface AddFriendToGroupEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.AddFriendToGroupEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface UpdateGroupEmitTarget {
			
				
				'id': string
		}

		interface UpdateGroupEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateGroupEmitTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateGroupEmitTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface UpdateGroupEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitTarget
				
				'payload': SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitPayload
		}

		interface UpdateGroupEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateGroupEmitTargetAndPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
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
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdateGroupEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface UpdateGroup {
			
				/** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
				'title': string
				/** Description. */
				'description'?: string | undefined | null
				
				'people': string[]
		}

		interface UpdateGroupSchema extends SpruceSchema.Schema {
			id: 'updateGroup',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
			            'title': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Give your group a helpful name, like "Besties" or "Work Squad"',
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'people': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface UpdateGroupEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.UpdateGroupSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface UpdateGroupEmitPayload {
			
				
				'group': SpruceSchemas.Adventure.v2022_09_09.UpdateGroup
		}

		interface UpdateGroupEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateGroupEmitPayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'group': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.UpdateGroupSchema,}
			            },
			    }
		}

		interface UpdateGroupEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface UpdateGroupResponse {
			
				
				'id': string
				/** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
				'title': string
				/** Description. */
				'description'?: string | undefined | null
				
				'people': string[]
		}

		interface UpdateGroupResponseSchema extends SpruceSchema.Schema {
			id: 'updateGroupResponse',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
			            'title': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Give your group a helpful name, like "Besties" or "Work Squad"',
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'people': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface UpdateGroupResponseEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.UpdateGroupResponseSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface UpdateGroupResponsePayload {
			
				
				'group': SpruceSchemas.Adventure.v2022_09_09.UpdateGroupResponse
		}

		interface UpdateGroupResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateGroupResponsePayload',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'group': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.UpdateGroupResponseSchema,}
			            },
			    }
		}

		interface UpdateGroupResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.UpdateGroupResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface GroupSource {
			
				
				'personId': string
		}

		interface GroupSourceSchema extends SpruceSchema.Schema {
			id: 'groupSource',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GroupSourceEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.GroupSourceSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface Group {
			
				
				'id': string
				/** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
				'title': string
				/** Description. */
				'description'?: string | undefined | null
				
				'people': string[]
				
				'source': SpruceSchemas.Adventure.v2022_09_09.GroupSource
		}

		interface GroupSchema extends SpruceSchema.Schema {
			id: 'group',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: 'Group',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. Give your group a helpful name, like "Besties" or "Work Squad" */
			            'title': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Give your group a helpful name, like "Besties" or "Work Squad"',
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'people': {
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'schema',
			                isPrivate: true,
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.GroupSourceSchema,}
			            },
			    }
		}

		interface GroupEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.GroupSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface Friend {
			
				/** Casual name. The name you can use when talking to this person. */
				'casualName': string
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue | undefined | null
				/** Id. */
				'id': string
				
				'inviteSender': ("me" | "them")
				
				'isInGroup'?: boolean | undefined | null
		}

		interface FriendSchema extends SpruceSchema.Schema {
			id: 'friend',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: 'Friend',
			    fields: {
			            /** Casual name. The name you can use when talking to this person. */
			            'casualName': {
			                label: 'Casual name',
			                type: 'text',
			                isRequired: true,
			                hint: 'The name you can use when talking to this person.',
			                options: undefined
			            },
			            /** Avatar src. */
			            'avatar': {
			                label: 'Avatar src',
			                type: 'image',
			                options: {requiredSizes: ["*"],}
			            },
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'inviteSender': {
			                type: 'select',
			                isRequired: true,
			                options: {choices: [{"value":"me","label":"Me"},{"value":"them","label":"Them"}],}
			            },
			            /** . */
			            'isInGroup': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface FriendEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.FriendSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface ConnectionTarget {
			
				
				'groupId'?: string | undefined | null
				
				'personId'?: string | undefined | null
		}

		interface ConnectionTargetSchema extends SpruceSchema.Schema {
			id: 'connectionTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'groupId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface ConnectionTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.ConnectionTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface ConnectionSource {
			
				
				'personId': string
		}

		interface ConnectionSourceSchema extends SpruceSchema.Schema {
			id: 'connectionSource',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ConnectionSourceEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.ConnectionSourceSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface Connection {
			
				
				'id': string
				
				'isConfirmed'?: boolean | undefined | null
				
				'source': SpruceSchemas.Adventure.v2022_09_09.ConnectionSource
				
				'target'?: SpruceSchemas.Adventure.v2022_09_09.ConnectionTarget | undefined | null
		}

		interface ConnectionSchema extends SpruceSchema.Schema {
			id: 'connection',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: 'Connection',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'isConfirmed': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.ConnectionSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.ConnectionTargetSchema,}
			            },
			    }
		}

		interface ConnectionEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.ConnectionSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface AdventureSource {
			
				
				'personId': string
		}

		interface AdventureSourceSchema extends SpruceSchema.Schema {
			id: 'adventureSource',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface AdventureSourceEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.AdventureSourceSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface AdventureTarget {
			
				
				'groupId': string
		}

		interface AdventureTargetSchema extends SpruceSchema.Schema {
			id: 'adventureTarget',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: '',
			    fields: {
			            /** . */
			            'groupId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface AdventureTargetEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.AdventureTargetSchema> {}

	}


	namespace SpruceSchemas.Adventure.v2022_09_09 {

		
		interface Adventure {
			
				
				'id': string
				/** What are you gonna do?. Describe the adventure! This is what I'll message to your friends! Heads up, you can only have 1 adventure at a time! */
				'what': string
				/** When are you gonna do it?. */
				'when': SpruceSchema.DateTimeFieldValue
				/** Where are you gonna to do it?. */
				'where': SpruceSchema.AddressFieldValue
				/** Who is in?. */
				'whosIn': string[]
				/** Who is out?. */
				'whosOut': string[]
				
				'wasReminderSent'?: boolean | undefined | null
				
				'target'?: SpruceSchemas.Adventure.v2022_09_09.AdventureTarget | undefined | null
				
				'source': SpruceSchemas.Adventure.v2022_09_09.AdventureSource
		}

		interface AdventureSchema extends SpruceSchema.Schema {
			id: 'adventure',
			version: 'v2022_09_09',
			namespace: 'Adventure',
			name: 'Adventure',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** What are you gonna do?. Describe the adventure! This is what I'll message to your friends! Heads up, you can only have 1 adventure at a time! */
			            'what': {
			                label: 'What are you gonna do?',
			                type: 'text',
			                isRequired: true,
			                hint: 'Describe the adventure! This is what I\'ll message to your friends! Heads up, you can only have 1 adventure at a time!',
			                options: undefined
			            },
			            /** When are you gonna do it?. */
			            'when': {
			                label: 'When are you gonna do it?',
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** Where are you gonna to do it?. */
			            'where': {
			                label: 'Where are you gonna to do it?',
			                type: 'address',
			                isRequired: true,
			                options: undefined
			            },
			            /** Who is in?. */
			            'whosIn': {
			                label: 'Who is in?',
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** Who is out?. */
			            'whosOut': {
			                label: 'Who is out?',
			                type: 'id',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** . */
			            'wasReminderSent': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.AdventureTargetSchema,}
			            },
			            /** . */
			            'source': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Adventure.v2022_09_09.AdventureSourceSchema,}
			            },
			    }
		}

		interface AdventureEntity extends SchemaEntity<SpruceSchemas.Adventure.v2022_09_09.AdventureSchema> {}

	}

}
