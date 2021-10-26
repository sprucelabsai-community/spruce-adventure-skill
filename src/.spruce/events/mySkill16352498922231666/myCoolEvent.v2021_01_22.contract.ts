import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'

const myCoolEventEventContract = buildEventContract({
	eventSignatures: {
		'my-skill-1635249892223-1666.my-cool-event::v2021_01_22': {
			isGlobal: true,

			emitPermissionContract: buildPermissionContract({
				id: 'anon-can',
				name: 'can anon',
				permissions: [
					{
						id: 'can-emit',
						name: 'can do it!',
						defaults: {
							anonymous: {
								default: true,
							},
						},
					},
				],
			}),
		},
	},
})
export default myCoolEventEventContract

export type MyCoolEventEventContract = typeof myCoolEventEventContract
