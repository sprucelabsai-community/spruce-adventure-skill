import { buildPermissionContract } from '@sprucelabs/mercury-types'

const listListenPermissions = buildPermissionContract({
	id: 'listListenPermissions',
	name: 'List',
	description: undefined,
	requireAllPermissions: false,
	permissions: [],
})

export default listListenPermissions
