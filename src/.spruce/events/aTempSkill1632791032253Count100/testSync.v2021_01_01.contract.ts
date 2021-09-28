import { buildEventContract } from '@sprucelabs/mercury-types'

const testSyncEventContract = buildEventContract({
	eventSignatures: {
		'a-temp-skill-1632791032253-count-100.test-sync::v2021_01_01': {
			isGlobal: true,
		},
	},
})
export default testSyncEventContract

export type TestSyncEventContract = typeof testSyncEventContract
