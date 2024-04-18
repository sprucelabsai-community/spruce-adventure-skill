import { buildPermissionContract } from '@sprucelabs/mercury-types'

const createConnectionEmitPermissions = buildPermissionContract({
    id: 'createConnectionEmitPermissions',
    name: 'Create connection',
    description: undefined,
    requireAllPermissions: false,
    permissions: [
        {
            id: 'can-create-connection',
            name: 'Can create connection',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
            requireAllStatuses: false,
        },
    ],
})

export default createConnectionEmitPermissions
