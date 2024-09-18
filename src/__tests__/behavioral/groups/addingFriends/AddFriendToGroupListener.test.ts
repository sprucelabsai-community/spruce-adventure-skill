import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, errorAssert, generateId } from '@sprucelabs/test-utils'
import { Group } from '../../../../adventure.types'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
export default class AddFriendToGroupListenerTest extends AbstractAdventureTest {
    private static group: Group

    @seed('groups', 1)
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
        this.group = await this.getFirstGroup()
        await this.eventFaker.fakeSendMessage()
        await this.eventFaker.fakeGetPerson()
    }

    @test()
    protected static async throwsWhenGroupNotFound() {
        this.group.id = generateId()
        await this.emitAndAssertThrows('NOT_FOUND')
    }

    @test()
    protected static async throwsWhenNotPartOfGroup() {
        await this.groups.update({}, { source: { personId: generateId() } })
        await this.emitAndAssertThrows(
            'CANNOT_ADD_FRIEND_TO_GROUP_YOU_ARE_NOT_PART_OF'
        )
    }

    @test()
    protected static async canAddFriendToGroup() {
        const friendId = generateId()
        await this.emitAddFriend(friendId)
        const updated = await this.getFirstGroup()
        assert.isEqualDeep(updated.people, [friendId])
    }

    private static async emitAndAssertThrows(code: string) {
        const err = await assert.doesThrowAsync(() => this.emitAddFriend())
        errorAssert.assertError(err, code)
    }

    private static async emitAddFriend(friendId?: string) {
        return this.fakedClient.emitAndFlattenResponses(
            'adventure.add-friend-to-group::v2022_09_09',
            {
                target: {
                    groupId: this.group.id,
                },
                payload: {
                    friendId: friendId ?? generateId(),
                },
            }
        )
    }
}
