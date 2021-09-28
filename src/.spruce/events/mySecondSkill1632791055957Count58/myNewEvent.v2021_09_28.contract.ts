import { buildEventContract } from '@sprucelabs/mercury-types'

const myNewEventEventContract = buildEventContract({
	eventSignatures: {
		'my-second-skill-1632791055957-count-58.my-new-event::v2021_09_28': {
			isGlobal: true,
		},
	},
})
export default myNewEventEventContract

export type MyNewEventEventContract = typeof myNewEventEventContract
