/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'





export declare namespace SpruceErrors.Adventure {

	
	export interface AdventureSkillError {
		
			/** First Field. */
			'fieldName1': string
			/** Second Field. A hint */
			'fieldName2': number
	}

	export interface AdventureSkillErrorSchema extends SpruceSchema.Schema {
		id: 'adventureSkillError',
		namespace: 'Adventure',
		name: 'adventure skill error',
		    fields: {
		            /** First Field. */
		            'fieldName1': {
		                label: 'First Field',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** Second Field. A hint */
		            'fieldName2': {
		                label: 'Second Field',
		                type: 'number',
		                isRequired: true,
		                hint: 'A hint',
		                options: undefined
		            },
		    }
	}

	export type AdventureSkillErrorEntity = SchemaEntity<SpruceErrors.Adventure.AdventureSkillErrorSchema>

}




