import myEventStoreAmazingEventEmitTargetAndPayloadSchema from '#spruce/schemas/eventStoreTestSkill1633812394803Count10/v2021_10_09/myEventStoreAmazingEventEmitTargetAndPayload.schema'
import myEventStoreAmazingEventResponsePayloadSchema from '#spruce/schemas/eventStoreTestSkill1633812394803Count10/v2021_10_09/myEventStoreAmazingEventResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const myEventStoreAmazingEventEventContract = buildEventContract({
    eventSignatures: {
        'event-store-test-skill-1633812359581-count-9.my-event-store-amazing-event::v2021_10_09': {
            isGlobal: true,
            emitPayloadSchema: myEventStoreAmazingEventEmitTargetAndPayloadSchema,
            responsePayloadSchema: myEventStoreAmazingEventResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
  "id": "myEventStoreAmazingEventEmitPermissions",
  "name": "my event store amazing event",
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-high-five",
      "name": "Can give high five",
      "description": "Will this person be allowed to high five?",
      "defaults": {
        "skill": false
      },
      "requireAllStatuses": false
    }
  ]
}),
            listenPermissionContract: buildPermissionContract({
  "id": "myEventStoreAmazingEventListenPermissions",
  "name": "my event store amazing event",
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-high-five",
      "name": "Can give high five",
      "description": "Will this person be allowed to high five?",
      "defaults": {
        "skill": false
      },
      "requireAllStatuses": false
    }
  ]
}),
        }
    }
})
export default myEventStoreAmazingEventEventContract

export type MyEventStoreAmazingEventEventContract = typeof myEventStoreAmazingEventEventContract