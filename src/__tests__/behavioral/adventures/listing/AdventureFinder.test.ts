import { dateUtil } from '@sprucelabs/calendar-utils'
import { Person } from '@sprucelabs/spruce-core-schemas'
import { generateUploadedImageValues } from '@sprucelabs/spruce-image-utils'
import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import AdventureFinder from '../../../../adventures/listing/AdventureFinder'
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
            groupFinder: await this.GroupFinder(),
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

    @test('shows adventures 2 hours past without group', false)
    @test('shows adventures 2 hours past with group', true)
    @seed('groups', 2, {
        shouldCreateAsFakedPerson: false,
        shouldAddFakedPersonAsMember: true,
    })
    protected static async showsAdventures2HoursPast(
        shouldPostToGroup: boolean
    ) {
        let groupId: string | undefined

        if (shouldPostToGroup) {
            const group = await this.getFirstGroup()
            groupId = group.id
        }
        await this.seedAdventureStartingIn(-3, groupId)
        await this.assertTotalAdventures(0)
        await this.seedAdventureStartingIn(-2, groupId)
        await this.assertTotalAdventures(1)
    }

    @test()
    @seed('groups', 2, {
        shouldCreateAsFakedPerson: false,
        shouldAddFakedPersonAsMember: true,
    })
    protected static async findsAdventurePostedInSecondGroupImPartOf() {
        await this.eventFaker.fakeGetPerson()
        const [group1, group2] = await this.groups.find({})
        await this.seedAdventureTargetingGroup(group1.id)
        await this.seedAdventureTargetingGroup(group2.id)
        await this.assertTotalAdventures(2)
    }

    @test()
    @seed('groups', 2, {
        shouldCreateAsFakedPerson: false,
        shouldAddFakedPersonAsMember: true,
    })
    @seed('adventures', 1, {
        shouldPostAsFakedPerson: false,
        shouldPostToGroup: true,
    })
    @seed('locations', 1)
    @seed('teammates', 1)
    protected static async mixesInAdventuresPostedByFriendAndInGroup() {
        await this.eventFaker.fakeGetPerson()
        const teammate = this.fakedTeammates[0]

        await this.seedAdventure(teammate.id)
        await this.createConnection(this.myId, teammate.id)
        await this.assertTotalAdventures(2)
    }

    private static async seedAdventureTargetingGroup(groupId: string) {
        await this.seedAdventure(generateId(), {
            target: {
                groupId,
            },
        })
    }

    private static async assertTotalAdventures(expected: number) {
        const adventures = await this.findAdventures()
        assert.isLength(
            adventures,
            expected,
            `Didn't get back the right number of adventures!`
        )
    }

    private static async seedAdventureStartingIn(
        hours: number,
        groupId?: string
    ) {
        await this.seedAdventure(this.myId, {
            when: dateUtil.addMinutes(new Date().getTime(), hours * 60),
            target: groupId ? { groupId } : undefined,
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
