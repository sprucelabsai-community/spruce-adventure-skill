import { SpruceSchemas } from '@sprucelabs/heartwood-view-controllers'
import { AddressFieldValue } from '@sprucelabs/schema'
import { eventFaker } from '@sprucelabs/spruce-test-fixtures'
import { Adventure, AdventureWithPerson, Friend } from '../../adventure.types'
import generateAddressValues from './generateAddressValues'
import generateAdventureValues from './generateAdventureValues'

export default class EventFaker {
	public async fakePostAdventure(
		cb?: (targetAndPayload: PostTargetAndPayload) => void | Adventure
	) {
		await eventFaker.on(
			'adventure.post::v2022_09_09',

			(targetAndPayload) => {
				return {
					adventure: cb?.(targetAndPayload) ?? this.generateAdventureValues(),
				}
			}
		)
	}

	public async fakeListAdventures(cb?: () => void | AdventureWithPerson[]) {
		await eventFaker.on('adventure.list::v2022_09_09', () => {
			return {
				adventures: cb?.() ?? [],
			}
		})
	}

	public async fakeListFriends(cb?: () => Friend[]) {
		await eventFaker.on('adventure.list-friends::v2022_09_09', () => {
			return {
				friends: cb?.() ?? [],
			}
		})
	}

	public generateAdventureValues() {
		return generateAdventureValues()
	}

	public generateAddressValues(): AddressFieldValue {
		return generateAddressValues()
	}
}
export type PostTargetAndPayload =
	SpruceSchemas.Adventure.v2022_09_09.PostEmitTargetAndPayload
