import { buildPermissionContract } from '@sprucelabs/mercury-types'

const acceptConnectionEmitPermissions = buildPermissionContract({
    id: 'acceptConnectionEmitPermissions',
    name: 'Accept connection',
    description: undefined,
    requireAllPermissions: false,
    permissions: [
        {
            id: 'can-accept-connection',
            name: 'Can accept connection',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
            requireAllStatuses: false,
        },
    ],
})

export default acceptConnectionEmitPermissions
