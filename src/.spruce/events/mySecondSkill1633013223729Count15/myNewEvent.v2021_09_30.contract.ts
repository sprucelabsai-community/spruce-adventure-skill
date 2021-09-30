import { buildEventContract } from '@sprucelabs/mercury-types'

const myNewEventEventContract = buildEventContract({
	eventSignatures: {
		'my-second-skill-1633013223729-count-15.my-new-event::v2021_09_30': {
			isGlobal: true,
		},
	},
})
export default myNewEventEventContract

export type MyNewEventEventContract = typeof myNewEventEventContract
