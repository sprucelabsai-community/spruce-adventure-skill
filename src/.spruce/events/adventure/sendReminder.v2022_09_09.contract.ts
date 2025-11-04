import '#spruce/permissions/permissions.types'
import sendReminderEmitTargetAndPayloadSchema from '#spruce/schemas/adventure/v2022_09_09/sendReminderEmitTargetAndPayload.schema'
import sendReminderResponsePayloadSchema from '#spruce/schemas/adventure/v2022_09_09/sendReminderResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const sendReminderEventContract = buildEventContract({
    eventSignatures: {
        'adventure.send-reminder::v2022_09_09': {
            isGlobal: true,
            
            aiInstructions: "Allows me to send a single reminder to people invited to my adventure. I only get one shot, so I better make it count!",
            
            
            listenPermissions: {"contractId":"adventure.adventure","permissionIdsAny":["can-send-reminders"]},
            emitPayloadSchema: sendReminderEmitTargetAndPayloadSchema,
            responsePayloadSchema: sendReminderResponsePayloadSchema,
            
            
        }
    }
})
export default sendReminderEventContract

export type SendReminderEventContract = typeof sendReminderEventContract
