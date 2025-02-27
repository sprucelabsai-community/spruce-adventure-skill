import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, suite, assert, generateId } from '@sprucelabs/test-utils'
import { PostAdventure } from '../../../../adventure.types'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { PostTargetAndPayload } from '../../../support/EventFaker'
import { generatePostAdventureValues } from './generatePostAdventureValues'

@fake.login()
@suite()
export default class PostListenerTest extends AbstractAdventureTest {
    protected async beforeEach(): Promise<void> {
        await super.beforeEach()
        await this.bootSkill()
        await this.eventFaker.fakeSendMessage()
        await this.eventFaker.fakeGenerateUrl()
    }

    @test()
    protected async postingAdventureSavesUnderCurrentPerson() {
        const adventure = this.generatePostAdventureValues()
        const created = await this.emitPostAdventure(adventure)

        const saved = await this.getFirstAdventure()
        assert.doesInclude(saved, {
            ...adventure,
            source: { personId: this.fakedPerson.id },
        })
        assert.isEqualDeep(created, saved)
    }

    @test()
    protected async passesGroupIdToThePoster() {
        const groupId = generateId()
        await this.emitPostAdventure(undefined, { groupId })
        const saved = await this.getFirstAdventure()
        assert.isEqualDeep(saved.target, { groupId })
    }

    private async emitPostAdventure(
        values?: PostAdventure,
        target?: PostTargetAndPayload['target']
    ) {
        const [{ adventure }] = await this.fakedClient.emitAndFlattenResponses(
            'adventure.post::v2022_09_09',
            {
                target,
                payload: {
                    adventure: values ?? this.generatePostAdventureValues(),
                },
            }
        )

        return adventure
    }

    private generatePostAdventureValues(): PostAdventure {
        return generatePostAdventureValues()
    }
}
