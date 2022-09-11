import { buildPermissionContract } from '@sprucelabs/mercury-types'

const listFriendsEmitPermissions = buildPermissionContract({
	id: 'listFriendsEmitPermissions',
	name: 'List friends',
	description: undefined,
	requireAllPermissions: false,
	permissions: [
		{
			id: 'can-list-friends',
			name: 'Can list friends',
			defaults: {
				loggedIn: {
					default: true,
				},
			},
			requireAllStatuses: false,
		},
	],
})

export default listFriendsEmitPermissions
