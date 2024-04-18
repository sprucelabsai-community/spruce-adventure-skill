import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import createConnectionResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/createConnectionResponsePayload.schema'

const createConnectionEventContract = buildEventContract({
    eventSignatures: {
        'adventure.create-connection::v2022_09_09': {
            isGlobal: true,

            responsePayloadSchema: createConnectionResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
                id: 'createConnectionEmitPermissions',
                name: 'Create connection',
                requireAllPermissions: false,
                permissions: [
                    {
                        id: 'can-create-connection',
                        name: 'Can create connection',
                        defaults: {
                            loggedIn: {
                                default: true,
                            },
                        },
                        requireAllStatuses: false,
                    },
                ],
            }),
        },
    },
})
export default createConnectionEventContract

export type CreateConnectionEventContract = typeof createConnectionEventContract
