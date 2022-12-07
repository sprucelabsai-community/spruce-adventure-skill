declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'heartwood.skill-views': [
			'can-get-skill-views','can-register-skill-views','can-listen-to-did-register-skill-views','can-generate-url','can-get-skill-views','can-list-skill-views','can-get-dashboard-cards','can-get-active-theme','can-manage-organization-themes',
		]
		'people.getListenPermissions': [
			'can-high-five',
		]
		'people.getEmitPermissions': [
			'can-get-person',
		]
		'people.registerDashboardCardsEmitPermissions': [
			'can-register-dashboard-cards',
		]
		'people.registerDashboardCardsListenPermissions': [
			'can-register-dashboard-cards',
		]
		'people.searchEmitPermissions': [
			'can-search-people',
		]
	}
}


export interface PermissionContractMap {}