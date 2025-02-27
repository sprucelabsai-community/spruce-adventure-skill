import { fake, SpruceSchemas } from '@sprucelabs/spruce-test-fixtures'
import { test, suite, assert, generateId } from '@sprucelabs/test-utils'
import { Group } from '../../../../adventure.types'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'

@fake.login()
@suite()
export default class CreateGroupListenerTest extends AbstractAdventureTest {
    protected async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
        await this.eventFaker.fakeSendMessage()
        await this.eventFaker.fakeGetPerson()
    }

    @test()
    protected async skillIsListening() {
        await this.emitCreateGroup()
    }

    @test()
    protected async createsAGroupRecord() {
        await this.emitCreateGroup()
        await this.getFirstGroup()
    }

    @test()
    protected async savesExpectedValues() {
        const values = this.eventFaker.generateCreateGroupValues()
        values.people = [generateId(), generateId()]
        await this.emitCreateGroup(values)
        const expected: Omit<Group, 'id'> = {
            ...values,
            source: {
                personId: this.fakedPerson.id,
            },
        }

        const match = await this.getFirstGroup()
        assert.isEqualDeep(match, { id: match.id, ...expected })
    }

    @test()
    protected async returnsTheGroupThatWasCreated() {
        const group = await this.emitCreateGroup()
        const match = await this.getFirstGroup(false)

        assert.isEqualDeep(group, match)
    }

    private async emitCreateGroup(
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
