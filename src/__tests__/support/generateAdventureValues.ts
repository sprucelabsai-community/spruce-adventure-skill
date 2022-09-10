import { generateId } from '@sprucelabs/test-utils'
import { Adventure } from '../../adventure.types'
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
