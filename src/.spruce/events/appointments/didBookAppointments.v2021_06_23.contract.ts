import didBookAppointmentsEmitTargetAndPayloadSchema from '#spruce/schemas/appointments/v2021_06_23/didBookAppointmentsEmitTargetAndPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didBookAppointmentsEventContract = buildEventContract({
    eventSignatures: {
        'appointments.did-book-appointments::v2021_06_23': {
            isGlobal: true,
            emitPayloadSchema: didBookAppointmentsEmitTargetAndPayloadSchema,
            
            
            
        }
    }
})
export default didBookAppointmentsEventContract

export type DidBookAppointmentsEventContract = typeof didBookAppointmentsEventContract