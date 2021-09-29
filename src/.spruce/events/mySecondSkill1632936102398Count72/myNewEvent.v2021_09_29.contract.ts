import { buildEventContract } from '@sprucelabs/mercury-types'

const myNewEventEventContract = buildEventContract({
	eventSignatures: {
		'my-second-skill-1632936102398-count-72.my-new-event::v2021_09_29': {
			isGlobal: true,
		},
	},
})
export default myNewEventEventContract

export type MyNewEventEventContract = typeof myNewEventEventContract
