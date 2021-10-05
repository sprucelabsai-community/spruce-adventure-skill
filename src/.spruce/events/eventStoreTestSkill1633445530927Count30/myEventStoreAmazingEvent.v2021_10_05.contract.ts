import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import myEventStoreAmazingEventEmitTargetAndPayloadSchema from '#spruce/schemas/eventStoreTestSkill1633445580235Count31/v2021_10_05/myEventStoreAmazingEventEmitTargetAndPayload.schema'
import myEventStoreAmazingEventResponsePayloadSchema from '#spruce/schemas/eventStoreTestSkill1633445580235Count31/v2021_10_05/myEventStoreAmazingEventResponsePayload.schema'

const myEventStoreAmazingEventEventContract = buildEventContract({
	eventSignatures: {
		'event-store-test-skill-1633445530927-count-30.my-event-store-amazing-event::v2021_10_05':
			{
				isGlobal: true,
				emitPayloadSchema: myEventStoreAmazingEventEmitTargetAndPayloadSchema,
				responsePayloadSchema: myEventStoreAmazingEventResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'myEventStoreAmazingEventEmitPermissions',
					name: 'my event store amazing event',
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
							defaults: {
								skill: false,
							},
							requireAllStatuses: false,
						},
					],
				}),
				listenPermissionContract: buildPermissionContract({
					id: 'myEventStoreAmazingEventListenPermissions',
					name: 'my event store amazing event',
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
							defaults: {
								skill: false,
							},
							requireAllStatuses: false,
						},
					],
				}),
			},
	},
})
export default myEventStoreAmazingEventEventContract

export type MyEventStoreAmazingEventEventContract =
	typeof myEventStoreAmazingEventEventContract
