import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test, suite } from '@sprucelabs/test-utils'
import { ListGroup } from '../../../../adventure.types'
import { UpdateGroup } from '../../../../groups/Groups.store'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
@suite()
export default class ListGroupsListenerTest extends AbstractAdventureTest {
    protected async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    protected async skillIsListening() {
        await this.emitListGroups()
        await this.assertTotalGroups(0)
    }

    @test()
    @seed('groups', 1)
    protected async returnsOnlyGroupWeCreated() {
        await this.assertTotalGroups(1)
    }

    @test()
    @seed('groups', 1)
    protected async firstGroupMatchesExpected() {
        const [group] = await this.emitListGroups()
        const match = await this.getFirstGroup()
        const expected: ListGroup = {
            id: match.id,
            people: [],
            description: match.description,
            title: match.title,
            isMine: true,
        }

        assert.isEqualDeep(group, expected)
    }

    @test()
    @seed('groups', 2)
    protected async canReturn2Groups() {
        await this.assertTotalGroups(2)
    }

    @test()
    @seed('groups', 1)
    protected async knowsIfGroupIsNotMine() {
        await this.updateGroup({
            people: [this.fakedPerson.id],
            source: {
                personId: generateId(),
            },
        })

        const [group] = await this.emitListGroups()
        assert.isFalse(group.isMine)
    }

    @test()
    @seed('groups', 1)
    protected async alsoReturnsPeople() {
        const people = [generateId(), generateId()]

        await this.updateGroup({
            people,
        })

        const [group] = await this.emitListGroups()
        assert.isEqualDeep(group.people, people)
    }

    @test()
    @seed('groups', 1)
    protected async returnsNoGroupsIfYouDidNotCreateAndAreNotAFriend() {
        await this.updateGroup({
            source: {
                personId: generateId(),
            },
        })

        await this.assertTotalGroups(0)
    }

    private async updateGroup(updates: UpdateGroup) {
        await this.groups.updateOne({}, updates)
    }

    private async assertTotalGroups(expected: number) {
        const groups = await this.emitListGroups()
        assert.isLength(groups, expected)
    }

    private async emitListGroups() {
        const [{ groups }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.list-groups::v2022_09_09'
        )

        return groups
    }
}
