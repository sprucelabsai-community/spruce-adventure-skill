import myEventStoreAmazingEventEmitTargetAndPayloadSchema from '#spruce/schemas/eventStoreTestSkill1634098874592Count44/v2021_10_13/myEventStoreAmazingEventEmitTargetAndPayload.schema'
import myEventStoreAmazingEventResponsePayloadSchema from '#spruce/schemas/eventStoreTestSkill1634098874592Count44/v2021_10_13/myEventStoreAmazingEventResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const myEventStoreAmazingEventEventContract = buildEventContract({
    eventSignatures: {
        'event-store-test-skill-1634098874592-count-44.my-event-store-amazing-event::v2021_10_13': {
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