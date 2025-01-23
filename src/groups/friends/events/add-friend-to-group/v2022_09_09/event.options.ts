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
        'Allows me to see my adventure groups. These are groups of friends and family we use to schedule fun adventures, play dates, etc.',
    emitPermissions: buildPermissionReference('adventure.adventure', [
        'can-add-friend-to-groups',
    ]),
}

export default eventOptions
