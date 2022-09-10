import AdventuresStore from '../../stores/Adventures.store'

declare module '@sprucelabs/data-stores/build/types/stores.types' {
	interface StoreMap {
                adventures: AdventuresStore
	}

	interface StoreOptionsMap {
                adventures: Omit<Parameters<typeof AdventuresStore['Store']>[0], keyof UniversalStoreOptions>   
        }
}