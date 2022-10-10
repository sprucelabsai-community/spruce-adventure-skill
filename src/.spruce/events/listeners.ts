import { EventFeatureListener } from '@sprucelabs/spruce-event-utils'

const listeners: EventFeatureListener[] = [
    {
        eventName: 'did-boot',
        eventNamespace: 'skill',
        version: 'v2022_09_24',
        callback: require('../../listeners/skill/did-boot.v2022_09_24.listener').default,
    },
    {
        eventName: 'will-boot',
        eventNamespace: 'skill',
        version: 'v2021_08_03',
        callback: require('../../listeners/skill/will-boot.v2021_08_03.listener').default,
    },
    {
        eventName: 'accept-connection',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../friends/listeners/adventure/accept-connection.v2022_09_09.listener').default,
    },
    {
        eventName: 'create-connection',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../friends/listeners/adventure/create-connection.v2022_09_09.listener').default,
    },
    {
        eventName: 'list-friends',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../friends/listeners/adventure/list-friends.v2022_09_09.listener').default,
    },
    {
        eventName: 'cancel',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../cancelling/listeners/adventure/cancel.v2022_09_09.listener').default,
    },
    {
        eventName: 'list',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../listing/listeners/adventure/list.v2022_09_09.listener').default,
    },
    {
        eventName: 'register-dashboard-cards',
        eventNamespace: 'people',
        version: 'v2022_05_29',
        callback: require('../../peopleDashboardCards/listeners/people/register-dashboard-cards.v2022_05_29.listener').default,
    },
    {
        eventName: 'post',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../posting/listeners/adventure/post.v2022_09_09.listener').default,
    },
    {
        eventName: 'rsvp',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../rsvping/listeners/adventure/rsvp.v2022_09_09.listener').default,
    },
]

export default listeners