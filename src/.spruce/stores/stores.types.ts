import AdventuresStore from '../../stores/Adventures.store'
import ConnectionsStore from '../../stores/Connections.store'
import GroupsStore from '../../stores/Groups.store'

declare module '@sprucelabs/data-stores/build/types/stores.types' {
	interface StoreMap {
                adventures: AdventuresStore
                connections: ConnectionsStore
                groups: GroupsStore
	}

	interface StoreOptionsMap {
                adventures: Omit<Parameters<typeof AdventuresStore['Store']>[0], keyof UniversalStoreOptions>   
                connections: Omit<Parameters<typeof ConnectionsStore['Store']>[0], keyof UniversalStoreOptions>   
                groups: Omit<Parameters<typeof GroupsStore['Store']>[0], keyof UniversalStoreOptions>   
        }
}