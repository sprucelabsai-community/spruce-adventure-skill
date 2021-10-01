import { buildEventContract } from '@sprucelabs/mercury-types'

const myNewEventEventContract = buildEventContract({
	eventSignatures: {
		'my-second-skill-1633121181053-count-98.my-new-event::v2021_10_01': {
			isGlobal: true,
		},
	},
})
export default myNewEventEventContract

export type MyNewEventEventContract = typeof myNewEventEventContract
