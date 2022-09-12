import { buildPermissionContract } from '@sprucelabs/mercury-types'

const createConnectionListenPermissions = buildPermissionContract({
	id: 'createConnectionListenPermissions',
	name: 'Create connection',
	description: undefined,
	requireAllPermissions: false,
	permissions: [],
})

export default createConnectionListenPermissions
