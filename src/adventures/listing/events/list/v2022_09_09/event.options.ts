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
        'Use this to see what adventures me or my friends have posted!',
    listenPermissions: buildPermissionReference('adventure.adventure', [
        'can-list-adventures',
    ]),
}

export default eventOptions
