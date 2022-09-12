import { buildPermissionContract } from '@sprucelabs/mercury-types'

const cancelListenPermissions = buildPermissionContract({
	id: 'cancelListenPermissions',
	name: 'Cancel',
	description: undefined,
	requireAllPermissions: false,
	permissions: [],
})

export default cancelListenPermissions
