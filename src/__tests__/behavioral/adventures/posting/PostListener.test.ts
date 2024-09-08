import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import { PostAdventure } from '../../../../adventure.types'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import { generatePostAdventureValues } from './generatePostAdventureValues'

@fake.login()
export default class PostListenerTest extends AbstractAdventureTest {
    @test()
    protected static async postingAdventureSavesUnderCurrentPerson() {
        await this.bootSkill()
        await this.eventFaker.fakeSendMessage()
        await this.eventFaker.fakeGenerateUrl()

        const adventure = this.generatePostAdventureValues()

        const [{ adventure: created }] =
            await this.fakedClient.emitAndFlattenResponses(
                'adventure.post::v2022_09_09',
                {
                    payload: {
                        adventure,
                    },
                }
            )

        const saved = await this.adventures.findOne({})
        assert.doesInclude(saved, {
            ...adventure,
            source: { personId: this.fakedPerson.id },
        })
        assert.isEqualDeep(created, saved)
    }

    private static generatePostAdventureValues(): PostAdventure {
        return generatePostAdventureValues()
    }
}
