import { generateUploadedImageValues } from '@sprucelabs/spruce-image-utils'
import { generateId } from '@sprucelabs/test-utils'

export function generateAvatarValues() {
    return {
        name: generateId(),
        ...generateUploadedImageValues().sizes,
    }
}
