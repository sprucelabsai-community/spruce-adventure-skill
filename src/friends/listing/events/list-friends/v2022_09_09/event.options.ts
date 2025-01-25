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
        "See all friends and family that I'm connected to for hosting Adventures.",
    emitPermissions: buildPermissionReference('adventure.adventure', [
        'can-list-friends',
    ]),
}

export default eventOptions
