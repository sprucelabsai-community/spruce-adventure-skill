import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import searchEmitTargetAndPayloadSchema from '#spruce/schemas/people/v2022_05_29/searchEmitTargetAndPayload.schema'
import searchResponsePayloadSchema from '#spruce/schemas/people/v2022_05_29/searchResponsePayload.schema'

const searchEventContract = buildEventContract({
	eventSignatures: {
		'people.search::v2022_05_29': {
			isGlobal: true,

			emitPayloadSchema: searchEmitTargetAndPayloadSchema,
			responsePayloadSchema: searchResponsePayloadSchema,
		},
	},
})
export default searchEventContract

export type SearchEventContract = typeof searchEventContract
