import { buildPermissionContract } from '@sprucelabs/mercury-types'

const rsvpEmitPermissions = buildPermissionContract({
	id: 'rsvpEmitPermissions',
	name: 'Rsvp',
	description: undefined,
	requireAllPermissions: false,
	permissions: [
		{
			id: 'can-rsvp',
			name: 'Can rsvp',
			defaults: {
				loggedIn: {
					default: true,
				},
			},
			requireAllStatuses: false,
		},
	],
})

export default rsvpEmitPermissions
