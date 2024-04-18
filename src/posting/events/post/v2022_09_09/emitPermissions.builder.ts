import { buildPermissionContract } from '@sprucelabs/mercury-types'

const postAdventureEmitPermissions = buildPermissionContract({
    id: 'postEmitPermissions',
    name: 'Post adventure',
    description: undefined,
    requireAllPermissions: false,
    permissions: [
        {
            id: 'can-post-adventure',
            name: 'Can post adventure',

            defaults: {
                loggedIn: {
                    default: true,
                },
            },
            requireAllStatuses: false,
        },
    ],
})

export default postAdventureEmitPermissions
