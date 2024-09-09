import { SpruceSchemas } from '@sprucelabs/heartwood-view-controllers'
import { AddressFieldValue } from '@sprucelabs/schema'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { generateId } from '@sprucelabs/test-utils'
import {
    Adventure,
    AdventureWithPerson,
    Friend,
    GetGroup,
    Group,
    ListGroup,
    Person,
} from '../../adventure.types'
import generateAddressValues from './generateAddressValues'
import generateAdventureValues from './generateAdventureValues'
import generateFriendValues from './generateFriendValues'

export default class EventFaker {
    public fakedFriends: Friend[] = []

    public async fakeGetGroup(
        cb?: (targetAndPayload: GetGroupTargetAndPayload) => void | GetGroup
    ) {
        await eventFaker.on(
            'adventure.get-group::v2022_09_09',
            (targetAndPayload) => {
                return {
                    group: cb?.(targetAndPayload) ?? {
                        ...this.generateListGroupValues(),
                    },
                }
            }
        )
    }

    public async fakeCreateGroup(
        cb?: (targetAndPayload: CreateGroupTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'adventure.create-group::v2022_09_09',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
                return {
                    group: {
                        id: generateId(),
                        ...this.generateCreateGroupValues(),
                    },
                }
            }
        )
    }

    public async fakeUpdateGroup(
        cb?: (targetAndPayload: UpdateGroupTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'adventure.update-group::v2022_09_09',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
                return {
                    group: {
                        id: generateId(),
                        ...this.generateCreateGroupValues(),
                    },
                }
            }
        )
    }

    public generateCreateGroupValues(): SpruceSchemas.Adventure.v2022_09_09.CreateGroup {
        return {
            people: [],
            title: generateId(),
            description: generateId(),
        }
    }

    public async fakeListGroups(cb?: () => void | ListGroup[]) {
        await eventFaker.on('adventure.list-groups::v2022_09_09', () => {
            return {
                groups: cb?.() ?? [],
            }
        })
    }

    public generateGroupValues(): Group {
        return {
            id: generateId(),
            people: [],
            title: generateId(),
            source: {
                personId: generateId(),
            },
        }
    }

    public generateListGroupValues(group?: Partial<ListGroup>): ListGroup {
        return {
            id: generateId(),
            people: [],
            title: generateId(),
            isMine: true,
            description: generateId(),
            ...group,
        }
    }

    public async fakeSendMessage(
        cb?: (targetAndPayload: SendMessageTargetAndPayload) => void
    ) {
        await eventFaker.on('send-message::v2020_12_25', (targetAndPayload) => {
            cb?.(targetAndPayload)

            return {
                message: {
                    body: generateId(),
                    classification: 'transactional' as const,
                    id: generateId(),
                    dateCreated: new Date().getTime(),
                    source: {},
                    target: {
                        personId: generateId(),
                    },
                },
            }
        })
    }

    public async fakeGenerateUrl(
        cb?: (targetAndPayload: GenerateUrlTargetAndPayload) => string | void
    ) {
        await eventFaker.on(
            'heartwood.generate-url::v2021_02_11',
            (targetAndPayload) => {
                return {
                    url: cb?.(targetAndPayload) ?? generateId(),
                }
            }
        )
    }

    public async fakeGetPerson(
        cb?: () => SpruceSchemas.Spruce.v2020_07_22.Person
    ) {
        await eventFaker.on('get-person::v2020_12_25', () => {
            return {
                person: cb?.() ?? fake.getPerson(),
            }
        })
    }

    public async fakePostAdventure(
        cb?: (targetAndPayload: PostTargetAndPayload) => void | Adventure
    ) {
        await eventFaker.on(
            'adventure.post::v2022_09_09',

            (targetAndPayload) => {
                return {
                    adventure:
                        cb?.(targetAndPayload) ??
                        this.generateAdventureValues(),
                }
            }
        )
    }

    public async fakeListAdventures(cb?: () => void | AdventureWithPerson[]) {
        await eventFaker.on('adventure.list::v2022_09_09', () => {
            return {
                adventures: cb?.() ?? [],
            }
        })
    }

    public async fakeListPeople(
        cb?: (targetAndPayload: ListPeopleTargetAndPayload) => Person[] | void
    ) {
        await eventFaker.on('list-people::v2020_12_25', (targetAndPayload) => {
            return {
                people: cb?.(targetAndPayload) ?? [],
            }
        })
    }

    public async fakeCreateConnection(
        cb?: (
            targetAndPayload: CreateConnectionTargetAndPayload
        ) => void | string
    ) {
        await eventFaker.on(
            'adventure.create-connection::v2022_09_09',
            (targetAndPayload) => {
                return {
                    connectionId: cb?.(targetAndPayload) ?? generateId(),
                }
            }
        )
    }

    public generatePendingConnectionValues() {
        return {
            id: generateId(),
            source: {
                personId: generateId(),
            },
            target: {},
        }
    }

    public async fakeListFriends(
        cb?: (targetAndPayload: ListFriendsTargetAndPayload) => Friend[] | void
    ) {
        await eventFaker.on(
            'adventure.list-friends::v2022_09_09',
            (targetAndPayload) => {
                return {
                    friends: cb?.(targetAndPayload) ?? this.fakedFriends,
                }
            }
        )
    }

    public seedFriend(friend?: Friend) {
        const f = friend ?? this.generateFriendValues()
        this.fakedFriends.push(f)
        return f
    }

    public generateFriendValues() {
        return generateFriendValues()
    }

    public async fakeAcceptConnection(
        cb?: (targetAndPayload: AcceptConnectionTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'adventure.accept-connection::v2022_09_09',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
                return {
                    success: true,
                }
            }
        )
    }

    public async fakeRsvp(
        cb?: (targetAndPayload: RsvpTargetAndPayload) => void
    ) {
        await eventFaker.on(
            'adventure.rsvp::v2022_09_09',
            (targetAndPayload) => {
                cb?.(targetAndPayload)
                return {
                    success: true,
                }
            }
        )
    }

    public async fakeCancelAdventure(
        cb?: (payload?: CancelPayload | null) => void
    ) {
        await eventFaker.on('adventure.cancel::v2022_09_09', ({ payload }) => {
            cb?.(payload)
            return {
                totalCancelled: 1,
            }
        })
    }

    public generateAdventureValues() {
        return generateAdventureValues()
    }

    public generateAddressValues(): AddressFieldValue {
        return generateAddressValues()
    }
}
export type PostTargetAndPayload =
    SpruceSchemas.Adventure.v2022_09_09.PostEmitTargetAndPayload

export type ListPeopleTargetAndPayload =
    SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTargetAndPayload

export type ListFriendsTargetAndPayload =
    SpruceSchemas.Adventure.v2022_09_09.ListFriendsEmitTargetAndPayload

export type AcceptConnectionTargetAndPayload =
    SpruceSchemas.Adventure.v2022_09_09.AcceptConnectionEmitTargetAndPayload

export type RsvpTargetAndPayload =
    SpruceSchemas.Adventure.v2022_09_09.RsvpEmitTargetAndPayload

export type SendMessageTargetAndPayload =
    SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitTargetAndPayload

export type GenerateUrlTargetAndPayload =
    SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetAndPayload

export type CancelPayload =
    SpruceSchemas.Adventure.v2022_09_09.CancelEmitPayload

export type CreateGroupTargetAndPayload =
    SpruceSchemas.Adventure.v2022_09_09.CreateGroupEmitTargetAndPayload

export type GetGroupTargetAndPayload =
    SpruceSchemas.Adventure.v2022_09_09.GetGroupEmitTargetAndPayload

export type UpdateGroupTargetAndPayload =
    SpruceSchemas.Adventure.v2022_09_09.UpdateGroupEmitTargetAndPayload

export type UpdateGroup = SpruceSchemas.Adventure.v2022_09_09.UpdateGroup

export type CreateConnectionTargetAndPayload =
    SpruceSchemas.Adventure.v2022_09_09.CreateConnectionEmitTargetAndPayload
