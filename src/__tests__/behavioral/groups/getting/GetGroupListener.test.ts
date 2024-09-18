import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, errorAssert, generateId } from '@sprucelabs/test-utils'
import { Group } from '../../../../adventure.types'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
export default class GetGroupListenerTest extends AbstractAdventureTest {
    protected static async beforeEach() {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    @seed('groups', 1)
    protected static async throwsNotFoundWithBadGroupId() {
        await this.emitAndAssertThrowsNotFound()
    }

    @test()
    @seed('groups', 1)
    protected static async canFindOwnGroup() {
        const group = await this.getFirstGroup(false)
        await this.assertGetGroupResultMatches(group, true)
    }

    @test()
    @seed('groups', 1)
    protected static async throwsNotFoundIfNotPartOfGroupNorCreator() {
        const group = await this.groups.updateOne(
            {},
            { source: { personId: generateId() } }
        )
        await this.emitAndAssertThrowsNotFound(group.id)
    }

    @test()
    @seed('groups', 1)
    protected static async returnsIfImAFriend() {
        const group = await this.groups.updateOne(
            {},
            {
                people: [this.fakedPerson.id],
                source: { personId: generateId() },
            }
        )

        await this.assertGetGroupResultMatches(group, false)
    }

    private static async assertGetGroupResultMatches(
        group: Omit<Group, 'source'>,
        isMine: boolean
    ) {
        const match = await this.emitGetGroup(group.id)
        const expected = {
            ...group,
            isMine,
        }

        assert.isEqualDeep(match, expected)
    }

    private static async emitAndAssertThrowsNotFound(id?: string) {
        const err = await assert.doesThrowAsync(() =>
            this.emitGetGroup(id ?? generateId())
        )

        errorAssert.assertError(err, 'NOT_FOUND')
    }

    private static async emitGetGroup(id: string) {
        const [{ group }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.get-group::v2022_09_09',
            { target: { id } }
        )
        return group
    }
}
