import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import {
    test,
    suite,
    assert,
    generateId,
    errorAssert,
} from '@sprucelabs/test-utils'
import { Group } from '../../../../adventure.types'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
@suite()
export default class LeaveGroupListenerTest extends AbstractAdventureTest {
    private group!: Group

    @seed('groups', 1)
    protected async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
        this.group = await this.getFirstGroup()
    }

    @test()
    protected async throwsNotFoundWithBadGroupId() {
        const err = await assert.doesThrowAsync(() =>
            this.emitLeaveGroup(generateId())
        )

        errorAssert.assertError(err, 'NOT_FOUND')
    }

    @test()
    protected async cannotLeaveAGroupThatYouBelongTo() {
        const err = await assert.doesThrowAsync(() =>
            this.emitLeaveGroup(this.group.id)
        )

        errorAssert.assertError(err, 'CANNOT_LEAVE_OWN_GROUP')
    }

    @test()
    protected async cannotLeaveGroupYouAreNotPartOf() {
        await this.emitAndAssertNotPartOfGroup([])
    }

    @test()
    protected async cannotLeaveGroupYouAreNotPartOfWithOtherPeople() {
        await this.emitAndAssertNotPartOfGroup([generateId(), generateId()])
    }

    @test()
    protected async doesNotErrorWhenLeavingGroupYouArePartOf() {
        const success = await this.setPeopleAndEmitLeave([this.fakedPerson.id])
        assert.isTrue(success, `Expected success to be true`)
    }

    @test()
    protected async doesNotErrorWhenYouAreSecondPersonInGroup() {
        await this.setPeopleAndEmitLeave([generateId(), this.fakedPerson.id])
    }

    @test()
    protected async actuallyRemovesYouFromGroupWhenOnlyPerson() {
        await this.setPeopleAndEmitLeave([this.fakedPerson.id])
        await this.assertPeopleEqual([])
    }

    @test()
    protected async actuallyRemovesYouFromGroupWhenSecondPerson() {
        const personId = generateId()
        await this.setPeopleAndEmitLeave([personId, this.fakedPerson.id])
        await this.assertPeopleEqual([personId])
    }

    @test()
    protected async actuallyRemovesYouFromGroupWhenFirstPerson() {
        await this.assertRemovesYouFromGroupWhenFirstPerson()
    }

    @test()
    @seed('groups', 1)
    protected async removesForCorrectGroup() {
        const [, second] = await this.groups.find(
            {},
            {},
            { shouldIncludePrivateFields: true }
        )
        this.group = second
        const personId = generateId()
        await this.setPeopleAndEmitLeave([this.fakedPerson.id, personId])
        await this.assertPeopleEqual([personId])
    }

    private async assertRemovesYouFromGroupWhenFirstPerson() {
        const personId = generateId()
        await this.setPeopleAndEmitLeave([this.fakedPerson.id, personId])
        await this.assertPeopleEqual([personId])
    }

    private async assertPeopleEqual(peopleIds: string[]) {
        const match = await this.groups.findOne({ id: this.group.id })
        assert.isTruthy(match)
        assert.isEqualDeep(match.people, peopleIds)
    }

    private async emitAndAssertNotPartOfGroup(people: string[]) {
        const group = await this.updatePeopleForGroupNotMine(people)
        const err = await assert.doesThrowAsync(() =>
            this.emitLeaveGroup(group.id)
        )

        errorAssert.assertError(err, 'CANNOT_LEAVE_GROUP_YOU_ARE_NOT_PART_OF')
    }

    private async setPeopleAndEmitLeave(people: string[]) {
        const group = await this.updatePeopleForGroupNotMine(people)
        return await this.emitLeaveGroup(group.id)
    }

    private async updatePeopleForGroupNotMine(people: string[]) {
        return await this.groups.updateOne(
            { id: this.group.id },
            { source: { personId: generateId() }, people }
        )
    }

    private async emitLeaveGroup(id: string) {
        const [{ success }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.leave-group::v2022_09_09',
            {
                target: {
                    groupId: id,
                },
            }
        )

        return success
    }
}
