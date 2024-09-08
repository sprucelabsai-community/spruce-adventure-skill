import { fake, SpruceSchemas } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import { Group } from '../../../../adventure.types'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
export default class CreateGroupListenerTest extends AbstractAdventureTest {
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
    }

    @test()
    protected static async skillIsListening() {
        await this.emitCreateGroup()
    }

    @test()
    protected static async createsAGroupRecord() {
        await this.emitCreateGroup()
        await this.getNewestGroup()
    }

    @test()
    protected static async savesExpectedValues() {
        const values = this.eventFaker.generateCreateGroupValues()
        values.people = [generateId(), generateId()]
        await this.emitCreateGroup(values)
        const expected: Omit<Group, 'id'> = {
            ...values,
            source: {
                personId: this.fakedPerson.id,
            },
        }

        const match = await this.getNewestGroup()
        assert.isEqualDeep(match, { id: match.id, ...expected })
    }

    @test()
    protected static async returnsTheGroupThatWasCreated() {
        const group = await this.emitCreateGroup()
        const match = await this.getNewestGroup(false)

        assert.isEqualDeep(group, match)
    }

    private static async getNewestGroup(shouldIncludePrivateFields = true) {
        const match = await this.groups.findOne(
            {},
            { shouldIncludePrivateFields }
        )
        assert.isTruthy(match, 'A group was not created')
        return match
    }

    private static async emitCreateGroup(
        values?: SpruceSchemas.Adventure.v2022_09_09.CreateGroup
    ) {
        const [{ group }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.create-group::v2022_09_09',
            {
                payload: {
                    group:
                        values ?? this.eventFaker.generateCreateGroupValues(),
                },
            }
        )

        return group
    }
}
