import { SpruceEventResponse } from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (): SpruceEventResponse<ResponsePayload> => {
	return { vcIds: ['friends-list-tool'] }
}

type ResponsePayload =
	SpruceSchemas.People.v2022_05_29.RegisterDashboardCardsResponsePayload
