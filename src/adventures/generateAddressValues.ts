import { AddressFieldValue } from '@sprucelabs/schema'
import { generateId } from '@sprucelabs/test-utils'

export default function generateAddressValues(): AddressFieldValue {
    return {
        city: generateId(),
        country: generateId(),
        street1: generateId(),
        province: generateId(),
        zip: generateId(),
    }
}
