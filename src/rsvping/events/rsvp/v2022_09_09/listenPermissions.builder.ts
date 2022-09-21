import { buildPermissionContract } from '@sprucelabs/mercury-types'

const rsvpListenPermissions = buildPermissionContract({
	id: 'rsvpListenPermissions',
	name: 'Rsvp',
	description: undefined,
	requireAllPermissions: false,
	permissions: [],
})

export default rsvpListenPermissions
