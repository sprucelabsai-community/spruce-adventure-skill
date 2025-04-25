import GroupsStore from '../../groups/Groups.store'
import AdventuresStore from '../../adventures/Adventures.store'
import ConnectionsStore from '../../friends/connecting/Connections.store'

declare module '@sprucelabs/data-stores/build/types/stores.types' {
	interface StoreMap {
                groups: GroupsStore
                adventures: AdventuresStore
                connections: ConnectionsStore
	}

	interface StoreOptionsMap {
                groups: Omit<Parameters<typeof GroupsStore['Store']>[0], keyof UniversalStoreOptions>   
                adventures: Omit<Parameters<typeof AdventuresStore['Store']>[0], keyof UniversalStoreOptions>   
                connections: Omit<Parameters<typeof ConnectionsStore['Store']>[0], keyof UniversalStoreOptions>   
        }
}