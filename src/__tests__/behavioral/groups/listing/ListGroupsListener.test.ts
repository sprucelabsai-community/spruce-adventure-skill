import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import { ListGroup } from '../../../../adventure.types'
import { UpdateGroup } from '../../../../groups/Groups.store'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
export default class ListGroupsListenerTest extends AbstractAdventureTest {
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    protected static async skillIsListening() {
        await this.emitListGroups()
        await this.assertTotalGroups(0)
    }

    @test()
    @seed('groups', 1)
    protected static async returnsOnlyGroupWeCreated() {
        await this.assertTotalGroups(1)
    }

    @test()
    @seed('groups', 1)
    protected static async firstGroupMatchesExpected() {
        const [group] = await this.emitListGroups()
        const match = await this.groups.findOne({})
        assert.isTruthy(match)
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
    protected static async canReturn2Groups() {
        await this.assertTotalGroups(2)
    }

    @test()
    @seed('groups', 1)
    protected static async knowsIfGroupIsNotMine() {
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
    protected static async alsoReturnsPeople() {
        const people = [generateId(), generateId()]

        await this.updateGroup({
            people,
        })

        const [group] = await this.emitListGroups()
        assert.isEqualDeep(group.people, people)
    }

    @test()
    @seed('groups', 1)
    protected static async returnsNoGroupsIfYouDidNotCreateAndAreNotAFriend() {
        await this.updateGroup({
            source: {
                personId: generateId(),
            },
        })

        await this.assertTotalGroups(0)
    }

    private static async updateGroup(updates: UpdateGroup) {
        await this.groups.updateOne({}, updates)
    }

    private static async assertTotalGroups(expected: number) {
        const groups = await this.emitListGroups()
        assert.isLength(groups, expected)
    }

    private static async emitListGroups() {
        const [{ groups }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.list-groups::v2022_09_09'
        )

        return groups
    }
}
