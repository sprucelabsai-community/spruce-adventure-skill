import '#spruce/permissions/permissions.types'
import sendReminderEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/sendReminderEmitTargetAndPayload.schema'
import sendReminderResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/sendReminderResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const sendReminderEventContract = buildEventContract({
    eventSignatures: {
        'adventure.send-reminder::v2022_09_09': {
            isGlobal: true,
            
            listenPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-send-reminders"]},
            emitPayloadSchema: sendReminderEmitTargetAndPayloadSchema,
            responsePayloadSchema: sendReminderResponsePayloadSchema,
            
            
        }
    }
})
export default sendReminderEventContract

export type SendReminderEventContract = typeof sendReminderEventContract