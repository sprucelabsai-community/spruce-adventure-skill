import { QueryBuilder } from '@sprucelabs/data-stores'
import { Person } from '@sprucelabs/spruce-core-schemas'
import { Friend, Group } from '../../adventure.types'
import AbstractAdventureTest from './AbstractAdventureTest'
import generateFriendValues from './generateFriendValues'

export default class AbstractFriendsTest extends AbstractAdventureTest {
    protected static async createConnection(
        fromPersonId: string,
        toPersonId?: string,
        isConfirmed = true
    ) {
        return this.createConnectionWithGroup({
            fromPersonId,
            toPersonId,
            isConfirmed,
        })
    }

    protected static async createConnectionWithGroup(options: {
        fromPersonId: string
        toPersonId?: string
        groupId?: string
        isConfirmed?: boolean
    }) {
        const {
            fromPersonId,
            toPersonId,
            groupId,
            isConfirmed = true,
        } = options

        const { id } = await this.connections.createOne({
            source: { personId: fromPersonId },
            target:
                toPersonId || groupId
                    ? { personId: toPersonId, groupId }
                    : null,
            isConfirmed,
        })

        return id
    }

    protected static teammateId(idx: number) {
        return this.fakedTeammates[idx].id
    }

    protected static get myId() {
        return this.fakedPerson.id
    }

    protected static async connect(teammateIdx: number) {
        const id = this.teammateId(teammateIdx)
        await this.createConnection(this.myId, id)
        return id
    }

    protected static async fakeListPeople(friends: Friend[]) {
        await this.eventFaker.fakeListPeople(() => {
            const people: Person[] = friends.map((f) => {
                const friend = { ...f }
                //@ts-ignore
                delete friend.inviteSender
                return {
                    ...friend,
                    dateCreated: new Date().getTime(),
                }
            })

            return people
        })
    }

    protected static async setPeopleOnGroup(
        people: string[],
        options?: { sourcePersonId?: string; groupId?: string }
    ) {
        const { sourcePersonId, groupId } = options ?? {}
        const target: QueryBuilder<Group> = {}

        if (groupId) {
            target.id = groupId
        }

        return await this.groups.updateOne(target, {
            people,
            source: { personId: sourcePersonId ?? this.fakedPerson.id },
        })
    }

    protected static generateFriendValues(
        inviteSender: Friend['inviteSender'] = 'me'
    ): Friend {
        return generateFriendValues(inviteSender)
    }
}
