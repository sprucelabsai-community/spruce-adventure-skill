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
            await this.seedAdventureAndConnectWithPerson(teammate.id)
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
    @seed('groups', 1, {
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
    @seed('groups', 1, {
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

    @test()
    @seed('groups', 1, {
        shouldCreateAsFakedPerson: false,
        shouldAddFakedPersonAsMember: true,
    })
    @seed('adventures', 1, {
        shouldPostAsFakedPerson: false,
        shouldPostToGroup: true,
    })
    protected static async returnsGroupTitleInSingleResponse() {
        await this.eventFaker.fakeGetPerson()
        const [match] = await this.findAdventures()
        const actual = match.groupTitle
        await this.assertEqualsFirstGroupsTitle(actual)
    }

    @test()
    @seed('groups', 1, {
        shouldCreateAsFakedPerson: false,
        shouldAddFakedPersonAsMember: true,
    })
    @seed('adventures', 1, {
        shouldPostAsFakedPerson: false,
        shouldPostToGroup: true,
    })
    @seed('adventures', 1, {
        shouldPostAsFakedPerson: false,
        shouldPostToGroup: true,
    })
    protected static async returnsGroupTitleInMultipleResponses() {
        await this.eventFaker.fakeGetPerson()
        const [adventure1, adventure2] = await this.findAdventures()
        await this.assertEqualsFirstGroupsTitle(adventure1.groupTitle)
        await this.assertEqualsFirstGroupsTitle(adventure2.groupTitle)
    }

    @test()
    @seed('locations', 1)
    @seed('teammates', 1)
    @seed('groups', 1, {
        shouldCreateAsFakedPerson: false,
        shouldAddFakedPersonAsMember: true,
    })
    @seed('adventures', 1, {
        shouldPostAsFakedPerson: false,
        shouldPostToGroup: true,
    })
    protected static async matchesGroupTitleToAdventureIfOneAdventureIsNotInGroup() {
        await this.eventFaker.fakeGetPerson()
        await this.seedAdventureAndConnectWithPerson(this.fakedTeammates[0].id)
        const [adventure1, adventure2] = await this.findAdventures()
        assert.isFalsy(adventure2.groupTitle)
        await this.assertEqualsFirstGroupsTitle(adventure1.groupTitle)
    }

    @test()
    @seed('groups', 1, {
        shouldCreateAsFakedPerson: false,
        shouldAddFakedPersonAsMember: true,
    })
    @seed('adventures', 1, {
        shouldPostAsFakedPerson: false,
        shouldPostToGroup: true,
    })
    @seed('groups', 1, {
        shouldCreateAsFakedPerson: false,
        shouldAddFakedPersonAsMember: true,
    })
    @seed('adventures', 1, {
        shouldPostAsFakedPerson: false,
        shouldPostToGroup: true,
    })
    protected static async matchesGroupTitleAccrossMultipleGroups() {
        await this.eventFaker.fakeGetPerson()
        const adventures = await this.findAdventures()

        for (const adventure of adventures) {
            const group = await this.groups.findOne({
                id: adventure.target!.groupId,
            })
            assert.isTruthy(group, `Could not find group for adventure!`)
            assert.isEqual(
                adventure.groupTitle,
                group.title,
                `Group title does not match!`
            )
        }
    }

    private static async seedAdventureAndConnectWithPerson(teammateId: string) {
        await this.seedAdventure(teammateId)
        await this.createConnection(this.myId, teammateId)
    }

    private static async assertEqualsFirstGroupsTitle(actual?: string | null) {
        const group = await this.getFirstGroup()
        assert.isEqual(
            actual,
            group.title,
            `Does not match first group's title!`
        )
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
