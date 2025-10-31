import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'adventure.adventure': [
			'can-accept-connection','can-add-friend-to-groups','can-cancel-adventure','can-create-connection','can-create-groups','can-delete-groups','can-leave-groups','can-list-adventures','can-list-friends','can-list-groups','can-post-adventure','can-rsvp','can-send-reminders',
		]
		'heartwood.skill-views': [
			'can-generate-url','can-get-active-theme','can-get-dashboard-cards','can-get-skill-views','can-get-skill-views','can-list-skill-views','can-listen-to-did-register-skill-views','can-manage-organization-themes','can-register-skill-views',
		]
		'people.people-contract': [
			'can-get-person','can-message-team','can-register-dashboard-cards','can-search-people','can-see-dashboard-cards',
		]
	}
}


export interface PermissionContractMap {}