import AdventuresStore from '../../stores/Adventures.store'
import ConnectionsStore from '../../stores/Connections.store'

declare module '@sprucelabs/data-stores/build/types/stores.types' {
	interface StoreMap {
                adventures: AdventuresStore
                connections: ConnectionsStore
	}

	interface StoreOptionsMap {
                adventures: Omit<Parameters<typeof AdventuresStore['Store']>[0], keyof UniversalStoreOptions>   
                connections: Omit<Parameters<typeof ConnectionsStore['Store']>[0], keyof UniversalStoreOptions>   
        }
}