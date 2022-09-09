import { SpruceSchemas } from '@sprucelabs/heartwood-view-controllers'
import { AddressFieldValue } from '@sprucelabs/schema'
import { eventFaker } from '@sprucelabs/spruce-test-fixtures'
import { generateId } from '@sprucelabs/test-utils'
import { Adventure } from '../../adventure.types'

export default class EventFaker {
	public async fakePostAdventure(
		cb?: (targetAndPayload: PostTargetAndPayload) => void | Adventure
	) {
		await eventFaker.on(
			'adventure.post-adventure::v2022_09_09',
			//@ts-ignore
			(targetAndPayload) => {
				return {
					adventure: cb?.(targetAndPayload) ?? this.generateAdventureValues(),
				}
			}
		)
	}
	public generateAdventureValues() {
		return {
			id: generateId(),
			what: generateId(),
			when: new Date().getTime(),
			where: this.generateAddressValues(),
		}
	}

	public generateAddressValues(): AddressFieldValue {
		return {
			city: generateId(),
			country: generateId(),
			street1: generateId(),
			province: generateId(),
			zip: generateId(),
		}
	}
}
export type PostTargetAndPayload =
	SpruceSchemas.Adventure.v2022_09_09.PostAdventureEmitTargetAndPayload
