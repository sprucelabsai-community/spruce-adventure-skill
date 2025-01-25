import {
    buildPermissionReference,
    EventSignature,
} from '@sprucelabs/mercury-types'
import '#spruce/permissions/permissions.types'
import '@sprucelabs/mercury-core-events'

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
        'Allows me to send a single reminder to people invited to my adventure. I only get one shot, so I better make it count!',
    listenPermissions: buildPermissionReference('adventure.adventure', [
        'can-send-reminders',
    ]),
}

export default eventOptions
