import { buildPermissionContract } from '@sprucelabs/mercury-types'

const listFriendsListenPermissions = buildPermissionContract({
    id: 'listFriendsListenPermissions',
    name: 'List friends',
    description: undefined,
    requireAllPermissions: false,
    permissions: [],
})

export default listFriendsListenPermissions
