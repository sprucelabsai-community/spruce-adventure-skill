declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'people.people-contract': [
			'can-get-person','can-search-people','can-search-people-globally',
		]
		'heartwood.skill-views': [
			'can-get-skill-views','can-register-skill-views','can-listen-to-did-register-skill-views','can-generate-url','can-get-skill-views','can-list-skill-views','can-get-dashboard-cards','can-get-active-theme','can-manage-organization-themes',
		]
		'people.registerDashboardCardsListenPermissions': [
			'can-register-dashboard-cards',
		]
		'people.registerDashboardCardsEmitPermissions': [
			'can-register-dashboard-cards',
		]
	}
}


export interface PermissionContractMap {}