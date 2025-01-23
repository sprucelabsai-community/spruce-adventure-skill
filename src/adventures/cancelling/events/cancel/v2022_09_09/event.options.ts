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
        'Cancel an adventure. Make sure to list adventures and filter out the ones that are mine (using source.personId to compare to my id using the whoami event).',
    emitPermissions: buildPermissionReference('adventure.adventure', [
        'can-cancel-adventure',
    ]),
}

export default eventOptions
