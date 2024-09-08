import { dateUtil } from '@sprucelabs/calendar-utils'
import { Person } from '@sprucelabs/spruce-core-schemas'
import { generateUploadedImageValues } from '@sprucelabs/spruce-image-utils'
import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import AdventureFinder from '../../../../listing/AdventureFinder'
import AbstractFriendsTest from '../../../support/AbstractFriendsTest'

@fake.login()
export default class AdventureFinderTest extends AbstractFriendsTest {
    private static finder: AdventureFinder

    protected static async beforeEach() {
        await super.beforeEach()

        this.finder = await AdventureFinder.Finder({
            stores: this.stores,
            client: this.fakedClient,
            connections: await this.ConnectionManager(),
        })
    }

    @test()
    @seed('locations', 1)
    @seed('teammates', 5)
    protected static async finderReturnsNameOfPoster() {
        for (const teammate of this.fakedTeammates) {
            this.assignAvatarToTeammate(teammate)
            await this.seedAdventure(teammate.id)
            await this.createConnection(this.myId, teammate.id)
        }

        const adventures = await this.findAdventures()

        for (const teammate of this.fakedTeammates) {
            const match = adventures.find(
                (a) => a.source.personId === teammate.id
            )
            assert.isTruthy(
                match,
                `I could not find an adventure for this teammate.`
            )
            assert.isEqual(match.personCasualName, teammate.casualName)
            assert.isEqualDeep(match.personAvatar, teammate.avatar)
        }
    }

    @test()
    protected static async showsAdventures2HoursPast() {
        await this.seedAdventureStartingIn(-3)
        await this.assertTotalAdventures(0)
        await this.seedAdventureStartingIn(-2)
        await this.assertTotalAdventures(1)
    }

    private static async assertTotalAdventures(expected: number) {
        const adventures = await this.findAdventures()
        assert.isLength(adventures, expected)
    }

    private static async seedAdventureStartingIn(hours: number) {
        await this.seedAdventure(this.myId, {
            when: dateUtil.addMinutes(new Date().getTime(), hours * 60),
        })
    }

    private static async findAdventures() {
        return await this.finder.findForPerson(this.myId)
    }

    private static assignAvatarToTeammate(teammate: Person) {
        teammate.avatar = {
            ...generateUploadedImageValues().sizes,
            name: generateId(),
        }
    }
}
