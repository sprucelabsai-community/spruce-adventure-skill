import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'adventure.adventure': [
			'can-accept-connection','can-list-adventures','can-rsvp','can-cancel-adventure','can-create-connection','can-post-adventure','can-list-friends','can-list-groups','can-create-groups','can-delete-groups','can-leave-groups','can-add-friend-to-groups','can-send-reminders',
		]
	}
}


export interface PermissionContractMap {}