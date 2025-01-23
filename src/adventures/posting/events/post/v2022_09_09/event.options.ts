import {
    buildPermissionReference,
    EventSignature,
} from '@sprucelabs/mercury-types'

type Options = Omit<
    EventSignature,
    | 'responsePayloadSchema'
    | 'emitPayloadSchema'
    | 'listenPermissionContract'
    | 'emitPermissionContract'
>

const eventOptions: Options = {
    isGlobal: true,
    aiInstructions:
        'This allows me to post a new adventure! You will need to lookup what groups I have available to populate groupId in the target.',
    emitPermissions: buildPermissionReference('adventure.adventure', [
        'can-post-adventure',
    ]),
}

export default eventOptions
