import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId, errorAssert } from '@sprucelabs/test-utils'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
export default class DeleteGroupListenerTest extends AbstractAdventureTest {
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    @seed('groups', 1)
    protected static async throwsNotFoundIfSentBadGroupId() {
        await this.emitAndAssertNotFound(generateId())
    }

    @test()
    @seed('groups', 1)
    protected static async canDeleteGroup() {
        const success = await this.deleteNewestGroup()
        assert.isTrue(success, `delete-group did not return success=true`)
    }

    @test()
    @seed('groups', 1)
    protected static async actuallyDeletesGroup() {
        await this.deleteNewestGroup()
        const count = await this.groups.count({})
        assert.isEqual(count, 0, `You did not actually delete the group!`)
    }

    @test()
    @seed('groups', 1)
    protected static async throwsIfPersonEmittingIsNotSource() {
        await this.groups.updateOne({}, { source: { personId: generateId() } })
        const group = await this.getNewestGroup()
        await this.emitAndAssertNotFound(group.id)
    }

    private static async emitAndAssertNotFound(id: string) {
        const err = await assert.doesThrowAsync(() => this.emitDelete(id))
        errorAssert.assertError(err, 'NOT_FOUND')
    }

    private static async deleteNewestGroup() {
        const group = await this.getNewestGroup()
        const success = await this.emitDelete(group.id)
        return success
    }

    private static async emitDelete(id: string) {
        const [{ success }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.delete-group::v2022_09_09',
            {
                target: {
                    groupId: id,
                },
            }
        )

        return success
    }
}
