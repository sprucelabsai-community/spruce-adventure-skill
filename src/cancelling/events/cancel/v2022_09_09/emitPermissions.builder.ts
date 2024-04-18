import { buildPermissionContract } from '@sprucelabs/mercury-types'

const cancelEmitPermissions = buildPermissionContract({
    id: 'cancelEmitPermissions',
    name: 'Cancel',
    description: undefined,
    requireAllPermissions: false,
    permissions: [
        {
            id: 'can-cancel-adventure',
            name: 'Can cancel adventure',
            defaults: {
                loggedIn: { default: true },
            },
            requireAllStatuses: false,
        },
    ],
})

export default cancelEmitPermissions
