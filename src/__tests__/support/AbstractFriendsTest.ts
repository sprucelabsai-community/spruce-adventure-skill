import { Person } from '@sprucelabs/spruce-core-schemas'
import { Friend } from '../../adventure.types'
import AbstractAdventureTest from './AbstractAdventureTest'
import generateFriendValues from './generateFriendValues'

export default class AbstractFriendsTest extends AbstractAdventureTest {
    protected static async createConnection(
        sourceId: string,
        targetId?: string,
        isConfirmed = true
    ) {
        const { id } = await this.connections.createOne({
            source: { personId: sourceId },
            target: targetId ? { personId: targetId } : null,
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

    protected static generateFriendValues(
        inviteSender: Friend['inviteSender'] = 'me'
    ): Friend {
        return generateFriendValues(inviteSender)
    }
}
