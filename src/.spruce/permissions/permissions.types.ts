import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'adventure.adventure': [
			'can-accept-connection','can-list-adventures','can-rsvp','can-cancel-adventure','can-create-connection','can-post-adventure','can-list-friends','can-list-groups','can-create-groups','can-delete-groups','can-leave-groups','can-add-friend-to-groups','can-send-reminders',
		]
		'heartwood.skill-views': [
			'can-get-skill-views','can-register-skill-views','can-listen-to-did-register-skill-views','can-generate-url','can-get-skill-views','can-list-skill-views','can-get-dashboard-cards','can-get-active-theme','can-manage-organization-themes',
		]
		'people.people-contract': [
			'can-get-person','can-search-people','can-register-dashboard-cards','can-see-dashboard-cards','can-message-team',
		]
	}
}


export interface PermissionContractMap {}