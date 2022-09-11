import { generateUploadedImageValues } from '@sprucelabs/spruce-image-utils'
import { generateId } from '@sprucelabs/test-utils'
import { Adventure, AdventureWithPerson } from '../../adventure.types'
import generateAddressValues from './generateAddressValues'

export default function generateAdventureValues(
	values?: Partial<Adventure>
): Adventure {
	return {
		id: generateId(),
		what: generateId(),
		when: new Date().getTime(),
		where: generateAddressValues(),
		...values,
		source: {
			personId: generateId(),
			...values?.source,
		},
	}
}

export function generateAdventureWithPersonValues(
	values?: Partial<AdventureWithPerson>
): AdventureWithPerson {
	return {
		...generateAdventureValues(values),
		personCasualName: generateId(),
		personAvatar: generateAvatarValues(),
	}
}
export function generateAvatarValues() {
	return {
		name: generateId(),
		...generateUploadedImageValues().sizes,
	}
}
