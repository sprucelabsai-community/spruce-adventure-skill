import { buildPermissionContract } from '@sprucelabs/mercury-types'

const acceptConnectionListenPermissions = buildPermissionContract({
    id: 'acceptConnectionListenPermissions',
    name: 'Accept connection',
    description: undefined,
    requireAllPermissions: false,
    permissions: [],
})

export default acceptConnectionListenPermissions
