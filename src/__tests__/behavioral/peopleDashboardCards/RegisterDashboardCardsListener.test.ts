import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'

@fake.login()
export default class RegisterDashboardCardsListenerTest extends AbstractAdventureTest {
    @test()
    protected static async registersPeopleDashbardCards() {
        await this.bootSkill()
        const [{ vcIds }] = await this.fakedClient.emitAndFlattenResponses(
            'people.register-dashboard-cards::v2022_05_29'
        )

        assert.isEqualDeep(vcIds, [
            'adventure.friends-dashboard-card',
            'adventure.group-list-card',
        ])
    }
}
