import { buildEventContract } from '@sprucelabs/mercury-types'


const testSyncEventContract = buildEventContract({
    eventSignatures: {
        'a-temp-skill-1634071528146-count-6.test-sync::v2021_01_01': {
            isGlobal: true,
            
            
            
            
        }
    }
})
export default testSyncEventContract

export type TestSyncEventContract = typeof testSyncEventContract