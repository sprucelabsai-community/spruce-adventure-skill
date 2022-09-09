import { EventFeatureListener } from '@sprucelabs/spruce-event-utils'

const listeners: EventFeatureListener[] = [
    {
        eventName: 'will-boot',
        eventNamespace: 'skill',
        version: 'v2021_08_03',
        callback: require('../../listeners/skill/will-boot.v2021_08_03.listener').default,
    },
    {
        eventName: 'post-adventure',
        eventNamespace: 'adventure',
        version: 'v2022_09_09',
        callback: require('../../postingAnAdventure/listeners/adventure/post-adventure.v2022_09_09.listener').default,
    },
]

export default listeners