import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'






export declare namespace SpruceErrors.Adventure {

	
	export interface NotYourGroup {
		
			
			'groupId': string
	}

	export interface NotYourGroupSchema extends SpruceSchema.Schema {
		id: 'notYourGroup',
		namespace: 'Adventure',
		name: 'Not your group',
		    fields: {
		            /** . */
		            'groupId': {
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		    }
	}

	export type NotYourGroupEntity = SchemaEntity<SpruceErrors.Adventure.NotYourGroupSchema>

}


export declare namespace SpruceErrors.Adventure {

	
	export interface NotFound {
		
	}

	export interface NotFoundSchema extends SpruceSchema.Schema {
		id: 'notFound',
		namespace: 'Adventure',
		name: 'Not found',
		    fields: {
		    }
	}

	export type NotFoundEntity = SchemaEntity<SpruceErrors.Adventure.NotFoundSchema>

}




