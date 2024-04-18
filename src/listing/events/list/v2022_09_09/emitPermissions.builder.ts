import { buildPermissionContract } from '@sprucelabs/mercury-types'

const listEmitPermissions = buildPermissionContract({
    id: 'listEmitPermissions',
    name: 'List',
    description: undefined,
    requireAllPermissions: false,
    permissions: [
        {
            id: 'can-list-adventures',
            name: 'Can list adventures',
            defaults: {
                loggedIn: { default: true },
            },
            requireAllStatuses: false,
        },
    ],
})

export default listEmitPermissions
