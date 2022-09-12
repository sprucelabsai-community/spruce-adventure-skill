import { generateId } from '@sprucelabs/test-utils'
import { Friend } from '../../adventure.types'
import { generateAvatarValues } from './generateAdventureValues'

export default function generateFriendValues(
	inviteSender: Friend['inviteSender'] = 'me'
): Friend {
	return {
		id: generateId(),
		casualName: generateId(),
		avatar: generateAvatarValues(),
		inviteSender,
	}
}
