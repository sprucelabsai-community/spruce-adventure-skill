import { buildEventContract } from '@sprucelabs/mercury-types'

const testEventEventContract = buildEventContract({
	eventSignatures: {
		'heartwood-test-1632776782466-count-98.test-event::v2020_01_01': {
			isGlobal: true,
		},
	},
})
export default testEventEventContract

export type TestEventEventContract = typeof testEventEventContract
