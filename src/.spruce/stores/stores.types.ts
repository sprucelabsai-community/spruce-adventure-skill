import AdventuresStore from '../../adventures/Adventures.store'
import GroupsStore from '../../groups/Groups.store'
import ConnectionsStore from '../../friends/connecting/Connections.store'

declare module '@sprucelabs/data-stores/build/types/stores.types' {
	interface StoreMap {
                adventures: AdventuresStore
                groups: GroupsStore
                connections: ConnectionsStore
	}

	interface StoreOptionsMap {
                adventures: Omit<Parameters<typeof AdventuresStore['Store']>[0], keyof UniversalStoreOptions>   
                groups: Omit<Parameters<typeof GroupsStore['Store']>[0], keyof UniversalStoreOptions>   
                connections: Omit<Parameters<typeof ConnectionsStore['Store']>[0], keyof UniversalStoreOptions>   
        }
}