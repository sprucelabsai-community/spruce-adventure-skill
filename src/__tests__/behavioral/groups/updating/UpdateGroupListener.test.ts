import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId, errorAssert } from '@sprucelabs/test-utils'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { UpdateGroup } from '../../../support/EventFaker'

@fake.login()
export default class UpdateGroupListenerTest extends AbstractAdventureTest {
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    protected static async throwsNotFoundWithBadId() {
        const err = await assert.doesThrowAsync(() => this.emitUpdateGroup())
        errorAssert.assertError(err, 'NOT_FOUND')
    }

    @test()
    @seed('groups', 1)
    protected static async throwsIfTryingToUpdateGroupThatIsNotMine() {
        const group = await this.groups.updateOne(
            {},
            {
                people: [this.fakedPerson.id],
                source: { personId: generateId() },
            }
        )
        const err = await assert.doesThrowAsync(() =>
            this.emitUpdateGroup(group.id)
        )
        errorAssert.assertError(err, 'NOT_YOUR_GROUP', {
            groupId: group.id,
        })
    }

    @test()
    @seed('groups', 1)
    protected static async canUpdateGroupIfOwn() {
        const updates: UpdateGroup = {
            title: generateId(),
            people: [generateId()],
            description: generateId(),
        }
        const group = await this.getNewestGroup()
        await this.emitUpdateGroup(group.id, updates)

        const updated = await this.getNewestGroup()

        assert.isEqual(updated.title, updates.title)
        assert.isEqual(updated.description, updates.description)
        assert.isEqualDeep(updated.people, updates.people)
    }

    @test()
    @seed('groups', 2)
    protected static async actuallyUpdatesTheCorretGroup() {
        const [group1, group2] = await this.groups.find({})
        const updates: UpdateGroup = {
            title: generateId(),
            people: [generateId()],
            description: generateId(),
        }

        await this.emitUpdateGroup(group1.id, updates)

        const group2Unchanged = await this.groups.findOne({ id: group2.id })
        assert.isTruthy(group2Unchanged)
        assert.isEqualDeep(group2Unchanged, group2)
    }

    @test()
    @seed('groups', 1)
    protected static async retunsTheUpdatedGroup() {
        const updates: UpdateGroup = {
            title: generateId(),
            people: [generateId()],
            description: generateId(),
        }
        const group = await this.getNewestGroup()
        const response = await this.emitUpdateGroup(group.id, updates)

        assert.isEqualDeep(response, {
            id: group.id,
            ...updates,
        })
    }

    private static async emitUpdateGroup(id?: string, values?: UpdateGroup) {
        const [{ group }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.update-group::v2022_09_09',
            {
                target: {
                    id: id ?? generateId(),
                },
                payload: {
                    group: values ?? {
                        description: 'aoeu',
                        people: [],
                        title: 'aoeu',
                    },
                },
            }
        )

        return group
    }
}