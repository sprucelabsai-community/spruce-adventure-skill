import { buildPermissionContract } from '@sprucelabs/mercury-types'

const postAdventureListenPermissions = buildPermissionContract({
	id: 'postAdventureListenPermissions',
	name: 'Post adventure',
	description: undefined,
	requireAllPermissions: false,
	permissions: [],
})

export default postAdventureListenPermissions
