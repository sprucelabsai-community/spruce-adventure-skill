import { buildEventContract } from '@sprucelabs/mercury-types'

const myNewEventEventContract = buildEventContract({
	eventSignatures: {
		'my-second-skill-1633723396749-count-54.my-new-event::v2021_10_08': {
			isGlobal: true,
		},
	},
})
export default myNewEventEventContract

export type MyNewEventEventContract = typeof myNewEventEventContract
