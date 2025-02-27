import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import {
    test,
    suite,
    assert,
    errorAssert,
    generateId,
} from '@sprucelabs/test-utils'
import { Group } from '../../../../adventure.types'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
@suite()
export default class GetGroupListenerTest extends AbstractAdventureTest {
    protected async beforeEach() {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    @seed('groups', 1)
    protected async throwsNotFoundWithBadGroupId() {
        await this.emitAndAssertThrowsNotFound()
    }

    @test()
    @seed('groups', 1)
    protected async canFindOwnGroup() {
        const group = await this.getFirstGroup(false)
        await this.assertGetGroupResultMatches(group, true)
    }

    @test()
    @seed('groups', 1)
    protected async throwsNotFoundIfNotPartOfGroupNorCreator() {
        const group = await this.groups.updateOne(
            {},
            { source: { personId: generateId() } }
        )
        await this.emitAndAssertThrowsNotFound(group.id)
    }

    @test()
    @seed('groups', 1)
    protected async returnsIfImAFriend() {
        const { group, sourcePersonId } =
            await this.setRandomSourcePersonAndAddMeToGroup()

        group.people.push(sourcePersonId)

        await this.assertGetGroupResultMatches(group, false)
    }

    private async setRandomSourcePersonAndAddMeToGroup() {
        const sourcePersonId = generateId()
        const group = await this.groups.updateOne(
            {},
            {
                people: [this.fakedPerson.id],
                source: { personId: sourcePersonId },
            }
        )
        return { group, sourcePersonId }
    }

    private async assertGetGroupResultMatches(
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

    private async emitAndAssertThrowsNotFound(id?: string) {
        const err = await assert.doesThrowAsync(() =>
            this.emitGetGroup(id ?? generateId())
        )

        errorAssert.assertError(err, 'NOT_FOUND')
    }

    private async emitGetGroup(id: string) {
        const [{ group }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.get-group::v2022_09_09',
            { target: { id } }
        )
        return group
    }
}
