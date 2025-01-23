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
        "Allows me to RSVP to an adventure! I can't RSVP to my own adventure, so when asking about RSVP, make sure to list adventures and filter out the ones that are mine (using source.personId to compare to my id using the whoami event).",
    emitPermissions: buildPermissionReference('adventure.adventure', [
        'can-rsvp',
    ]),
}

export default eventOptions
