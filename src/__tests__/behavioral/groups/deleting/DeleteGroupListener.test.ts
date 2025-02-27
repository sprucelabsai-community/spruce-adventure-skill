import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import {
    test,
    suite,
    assert,
    generateId,
    errorAssert,
} from '@sprucelabs/test-utils'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
@suite()
export default class DeleteGroupListenerTest extends AbstractAdventureTest {
    protected async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    @seed('groups', 1)
    protected async throwsNotFoundIfSentBadGroupId() {
        await this.emitAndAssertNotFound(generateId())
    }

    @test()
    @seed('groups', 1)
    protected async canDeleteGroup() {
        const success = await this.deleteNewestGroup()
        assert.isTrue(success, `delete-group did not return success=true`)
    }

    @test()
    @seed('groups', 1)
    protected async actuallyDeletesGroup() {
        await this.deleteNewestGroup()
        const count = await this.groups.count({})
        assert.isEqual(count, 0, `You did not actually delete the group!`)
    }

    @test()
    @seed('groups', 1)
    protected async throwsIfPersonEmittingIsNotSource() {
        await this.groups.updateOne({}, { source: { personId: generateId() } })
        const group = await this.getFirstGroup()
        await this.emitAndAssertNotFound(group.id)
    }

    private async emitAndAssertNotFound(id: string) {
        const err = await assert.doesThrowAsync(() => this.emitDelete(id))
        errorAssert.assertError(err, 'NOT_FOUND')
    }

    private async deleteNewestGroup() {
        const group = await this.getFirstGroup()
        const success = await this.emitDelete(group.id)
        return success
    }

    private async emitDelete(id: string) {
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
