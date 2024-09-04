import { EventFeatureListener } from '@sprucelabs/spruce-event-utils'

const listeners: EventFeatureListener[] = [
    {
        eventName: 'did-boot',
        eventNamespace: 'skill',
        version: 'v2022_09_24',
        callback: require('../../listeners/skill/did-boot.v2022_09_24.listener').default,
        isGlobal: require('../../listeners/skill/did-boot.v2022_09_24.listener').isGlobal,
    },
    {
        eventName: 'will-boot',
        eventNamespace: 'skill',
        version: 'v2021_08_03',
        callback: require('../../listeners/skill/will-boot.v2021_08_03.listener').default,
        isGlobal: require('../../listeners/skill/will-boot.v2021_08_03.listener').isGlobal,
    },
    {
        eventName: 'cancel',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../cancelling/listeners/adventure/cancel.v2022_09_09.listener').default,
        isGlobal: require('../../cancelling/listeners/adventure/cancel.v2022_09_09.listener').isGlobal,
    },
    {
        eventName: 'accept-connection',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../friends/listeners/adventure/accept-connection.v2022_09_09.listener').default,
        isGlobal: require('../../friends/listeners/adventure/accept-connection.v2022_09_09.listener').isGlobal,
    },
    {
        eventName: 'create-connection',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../friends/listeners/adventure/create-connection.v2022_09_09.listener').default,
        isGlobal: require('../../friends/listeners/adventure/create-connection.v2022_09_09.listener').isGlobal,
    },
    {
        eventName: 'list-friends',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../friends/listeners/adventure/list-friends.v2022_09_09.listener').default,
        isGlobal: require('../../friends/listeners/adventure/list-friends.v2022_09_09.listener').isGlobal,
    },
    {
        eventName: 'register-dashboard-cards',
        eventNamespace: 'people',
        version: 'v2022_05_29',
        callback: require('../../peopleDashboardCards/listeners/people/register-dashboard-cards.v2022_05_29.listener').default,
        isGlobal: require('../../peopleDashboardCards/listeners/people/register-dashboard-cards.v2022_05_29.listener').isGlobal,
    },
    {
        eventName: 'post',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../posting/listeners/adventure/post.v2022_09_09.listener').default,
        isGlobal: require('../../posting/listeners/adventure/post.v2022_09_09.listener').isGlobal,
    },
    {
        eventName: 'list',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../listing/listeners/adventure/list.v2022_09_09.listener').default,
        isGlobal: require('../../listing/listeners/adventure/list.v2022_09_09.listener').isGlobal,
    },
    {
        eventName: 'rsvp',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../rsvping/listeners/adventure/rsvp.v2022_09_09.listener').default,
        isGlobal: require('../../rsvping/listeners/adventure/rsvp.v2022_09_09.listener').isGlobal,
    },
]

export default listeners
