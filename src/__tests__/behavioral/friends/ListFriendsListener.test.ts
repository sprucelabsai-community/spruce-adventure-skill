import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class ListFriendsListenerTest extends AbstractAdventureTest {
	@test()
	protected static async canCreateListFriendsListener() {
		await this.bootSkill()
		await this.fakedClient.emitAndFlattenResponses(
			'adventure.list-friends::v2022_09_09'
		)
	}
}
