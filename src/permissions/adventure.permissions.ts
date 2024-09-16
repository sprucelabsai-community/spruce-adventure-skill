import { buildPermissionContract } from '@sprucelabs/mercury-types'

const adventurePermissions = buildPermissionContract({
    id: 'adventure',
    name: 'Adventure',
    description: '',
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
        {
            id: 'can-list-adventures',
            name: 'Can list adventures',
            defaults: {
                loggedIn: { default: true },
            },
            requireAllStatuses: false,
        },
        {
            id: 'can-rsvp',
            name: 'Can rsvp',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
            requireAllStatuses: false,
        },
        {
            id: 'can-cancel-adventure',
            name: 'Can cancel adventure',
            defaults: {
                loggedIn: { default: true },
            },
            requireAllStatuses: false,
        },
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
        {
            id: 'can-list-friends',
            name: 'Can list friends',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
            requireAllStatuses: false,
        },
        {
            id: 'can-list-groups',
            name: 'Can list groups',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
            requireAllStatuses: false,
        },
        {
            id: 'can-create-groups',
            name: 'Can create groups',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
            requireAllStatuses: false,
        },
        {
            id: 'can-delete-groups',
            name: 'Can delete groups',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
            requireAllStatuses: false,
        },
        {
            id: 'can-leave-groups',
            name: 'Can leave groups',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
            requireAllStatuses: false,
        },
        {
            id: 'can-add-friend-to-groups',
            name: 'Can add friend to groups',
            defaults: {
                loggedIn: {
                    default: true,
                },
            },
            requireAllStatuses: false,
        },
    ],
})

export default adventurePermissions
