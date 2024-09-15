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


export declare namespace SpruceErrors.Adventure {

	
	export interface CannotLeaveOwnGroup {
		
	}

	export interface CannotLeaveOwnGroupSchema extends SpruceSchema.Schema {
		id: 'cannotLeaveOwnGroup',
		namespace: 'Adventure',
		name: 'Cannot leave own group',
		    fields: {
		    }
	}

	export type CannotLeaveOwnGroupEntity = SchemaEntity<SpruceErrors.Adventure.CannotLeaveOwnGroupSchema>

}


export declare namespace SpruceErrors.Adventure {

	
	export interface CannotLeaveGroupYouAreNotPartOf {
		
	}

	export interface CannotLeaveGroupYouAreNotPartOfSchema extends SpruceSchema.Schema {
		id: 'cannotLeaveGroupYouAreNotPartOf',
		namespace: 'Adventure',
		name: 'Cannot leave group you are not part of',
		    fields: {
		    }
	}

	export type CannotLeaveGroupYouAreNotPartOfEntity = SchemaEntity<SpruceErrors.Adventure.CannotLeaveGroupYouAreNotPartOfSchema>

}




