/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import { SkillViewControllerId } from '@sprucelabs/heartwood-view-controllers'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


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
			
				
				'target'?: SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitTarget| undefined | null
				
				'payload': SpruceSchemas.Appointments.v2021_06_23.DidBookAppointmentsEmitPayload
		}

		interface DidBookAppointmentsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didBookAppointmentsEmitTargetAndPayload',
			version: 'v2021_06_23',
			namespace: 'Appointments',
			name: '',
			    fields: {
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
			
				
				'payload': SpruceSchemas.Forms.v2021_07_02.ConvertPdfToFormEmitPayload
		}

		interface ConvertPdfToFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'convertPdfToFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
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
			
				
				'payload': SpruceSchemas.Forms.v2021_07_02.ConvertPdfToSchemasEmitPayload
		}

		interface ConvertPdfToSchemasEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'convertPdfToSchemasEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
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
			
				
				'payload': SpruceSchemas.Forms.v2021_07_02.CreateBuiltForm
		}

		interface CreateFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
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

		
		interface DeleteCompletedFormEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Forms.v2021_07_02.DeleteCompletedFormEmitTarget
		}

		interface DeleteCompletedFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteCompletedFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
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
			
				
				'payload': SpruceSchemas.Forms.v2021_07_02.DidSaveFormEmitPayload
		}

		interface DidUpdateCompletedFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdateCompletedFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
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
			
				
				'target': SpruceSchemas.Forms.v2021_07_02.GetCompletedFormEmitTarget
		}

		interface GetCompletedFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getCompletedFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
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
			
				
				'payload': SpruceSchemas.Forms.v2021_07_02.UpdateCompletedFormEmitPayload
		}

		interface UpdateCompletedFormEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateCompletedFormEmitTargetAndPayload',
			version: 'v2021_07_02',
			namespace: 'Forms',
			name: '',
			    fields: {
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
			
				
				'payload': SpruceSchemas.Heartwood.v2021_02_11.DidRegisterSkillViewsEmitPayload
		}

		interface DidRegisterSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didRegisterSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
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
			
				
				'target'?: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitPayload| undefined | null
		}

		interface GenerateUrlEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'generateUrlEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
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
			
				
				'target': SpruceSchemas.Heartwood.v2021_02_11.GetViewControllersEmitTarget
		}

		interface GetSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
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

		
		interface ThemeProps {
			
				/** Color 1. Used to color anything overlayed on the background (color1Inverse or color1InverseGradient). */
				'color1'?: string| undefined | null
				/** Color 1 (inverse). Background color of the view if color1InverseGradient is not set */
				'color1Inverse'?: string| undefined | null
				/** Color 1 Gradient (inverse). Background griedent applied to view. */
				'color1InverseGradient'?: string| undefined | null
				/** Color 2. The color of anything overlayed on the background of a card (color2Inverse) */
				'color2'?: string| undefined | null
				/** Color 2. The color of overlays ontop of a card. */
				'color2Transparent'?: string| undefined | null
				/** Color. Background color of cards. */
				'color2Inverse'?: string| undefined | null
				/** Color 2 (inverse with transparency). Background color used when some transparency is needed for context. */
				'color2InverseTransparent'?: string| undefined | null
				/** Color 3. Titles of cards. */
				'color3'?: string| undefined | null
				/** Color 3 (compliment). Subtitles of cards. */
				'color3Compliment'?: string| undefined | null
				/** Color 3 (inverse). Background for headers of cards. */
				'color3Inverse'?: string| undefined | null
				/** Color 4. Foreground for buttons and menu items. */
				'color4'?: string| undefined | null
				/** Color 4 (compliment). Border, outlines and highlights */
				'color4Compliment'?: string| undefined | null
				/** Color 4 (inverse). Background for buttons and menu items. */
				'color4Inverse'?: string| undefined | null
				/** Color (inverse, compliment). Background for buttons and menu items */
				'color4InverseCompliment'?: string| undefined | null
				/** Color. The foreground color of the control bar. */
				'controlBarColor1'?: string| undefined | null
				/** Color. The background color of the control bar. */
				'controlBarColor2'?: string| undefined | null
				/** Color. Errors overlayed on a background colored with errorColor1Inverse. */
				'errorColor1'?: string| undefined | null
				/** Color. The background used when rendering errors. */
				'errorColor1Inverse'?: string| undefined | null
		}

		interface ThemePropsSchema extends SpruceSchema.Schema {
			id: 'themeProps',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
			            /** Color 1. Used to color anything overlayed on the background (color1Inverse or color1InverseGradient). */
			            'color1': {
			                label: 'Color 1',
			                type: 'text',
			                hint: 'Used to color anything overlayed on the background (color1Inverse or color1InverseGradient).',
			                options: undefined
			            },
			            /** Color 1 (inverse). Background color of the view if color1InverseGradient is not set */
			            'color1Inverse': {
			                label: 'Color 1 (inverse)',
			                type: 'text',
			                hint: 'Background color of the view if color1InverseGradient is not set',
			                options: undefined
			            },
			            /** Color 1 Gradient (inverse). Background griedent applied to view. */
			            'color1InverseGradient': {
			                label: 'Color 1 Gradient (inverse)',
			                type: 'text',
			                hint: 'Background griedent applied to view.',
			                options: undefined
			            },
			            /** Color 2. The color of anything overlayed on the background of a card (color2Inverse) */
			            'color2': {
			                label: 'Color 2',
			                type: 'text',
			                hint: 'The color of anything overlayed on the background of a card (color2Inverse)',
			                options: undefined
			            },
			            /** Color 2. The color of overlays ontop of a card. */
			            'color2Transparent': {
			                label: 'Color 2',
			                type: 'text',
			                hint: 'The color of overlays ontop of a card.',
			                options: undefined
			            },
			            /** Color. Background color of cards. */
			            'color2Inverse': {
			                label: 'Color',
			                type: 'text',
			                hint: 'Background color of cards.',
			                options: undefined
			            },
			            /** Color 2 (inverse with transparency). Background color used when some transparency is needed for context. */
			            'color2InverseTransparent': {
			                label: 'Color 2 (inverse with transparency)',
			                type: 'text',
			                hint: 'Background color used when some transparency is needed for context.',
			                options: undefined
			            },
			            /** Color 3. Titles of cards. */
			            'color3': {
			                label: 'Color 3',
			                type: 'text',
			                hint: 'Titles of cards.',
			                options: undefined
			            },
			            /** Color 3 (compliment). Subtitles of cards. */
			            'color3Compliment': {
			                label: 'Color 3 (compliment)',
			                type: 'text',
			                hint: 'Subtitles of cards.',
			                options: undefined
			            },
			            /** Color 3 (inverse). Background for headers of cards. */
			            'color3Inverse': {
			                label: 'Color 3 (inverse)',
			                type: 'text',
			                hint: 'Background for headers of cards.',
			                options: undefined
			            },
			            /** Color 4. Foreground for buttons and menu items. */
			            'color4': {
			                label: 'Color 4',
			                type: 'text',
			                hint: 'Foreground for buttons and menu items.',
			                options: undefined
			            },
			            /** Color 4 (compliment). Border, outlines and highlights */
			            'color4Compliment': {
			                label: 'Color 4 (compliment)',
			                type: 'text',
			                hint: 'Border, outlines and highlights',
			                options: undefined
			            },
			            /** Color 4 (inverse). Background for buttons and menu items. */
			            'color4Inverse': {
			                label: 'Color 4 (inverse)',
			                type: 'text',
			                hint: 'Background for buttons and menu items.',
			                options: undefined
			            },
			            /** Color (inverse, compliment). Background for buttons and menu items */
			            'color4InverseCompliment': {
			                label: 'Color (inverse, compliment)',
			                type: 'text',
			                hint: 'Background for buttons and menu items',
			                options: undefined
			            },
			            /** Color. The foreground color of the control bar. */
			            'controlBarColor1': {
			                label: 'Color',
			                type: 'text',
			                hint: 'The foreground color of the control bar.',
			                options: undefined
			            },
			            /** Color. The background color of the control bar. */
			            'controlBarColor2': {
			                label: 'Color',
			                type: 'text',
			                hint: 'The background color of the control bar.',
			                options: undefined
			            },
			            /** Color. Errors overlayed on a background colored with errorColor1Inverse. */
			            'errorColor1': {
			                label: 'Color',
			                type: 'text',
			                hint: 'Errors overlayed on a background colored with errorColor1Inverse.',
			                options: undefined
			            },
			            /** Color. The background used when rendering errors. */
			            'errorColor1Inverse': {
			                label: 'Color',
			                type: 'text',
			                hint: 'The background used when rendering errors.',
			                options: undefined
			            },
			    }
		}

		type ThemePropsEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.ThemePropsSchema>

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
			
				
				'target'?: SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitTarget| undefined | null
				
				'payload': SpruceSchemas.Heartwood.v2021_02_11.RegisterSkillViewsEmitPayload
		}

		interface RegisterSkillViewsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillViewsEmitTargetAndPayload',
			version: 'v2021_02_11',
			namespace: 'Heartwood',
			name: '',
			    fields: {
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

		
		interface RegisterationTheme {
			
				
				'props': SpruceSchemas.Heartwood.v2021_02_11.ThemeProps
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
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.ThemePropsSchema,}
			            },
			    }
		}

		type RegisterationThemeEntity = SchemaEntity<SpruceSchemas.Heartwood.v2021_02_11.RegisterationThemeSchema>

	}


	namespace SpruceSchemas.Heartwood.v2021_02_11 {

		
		interface RegisterSkillViewsEmitPayload {
			
				
				'ids': string[]
				
				'source': string
				
				'theme'?: SpruceSchemas.Heartwood.v2021_02_11.RegisterationTheme| undefined | null
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
			                options: {schema: SpruceSchemas.Heartwood.v2021_02_11.RegisterationThemeSchema,}
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

}
