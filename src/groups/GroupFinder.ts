import { SimpleStoreFactory } from '@sprucelabs/data-stores'
import { Group, ListGroup } from '../adventure.types'
import SpruceError from '../errors/SpruceError'
import GroupsStore from './Groups.store'

export default class GroupFinder {
    private constructor(private groups: GroupsStore) {}

    public static async Finder(options: { stores: SimpleStoreFactory }) {
        const { stores } = options
        const groups = await stores.getStore('groups')
        return new this(groups)
    }

    public async findForPerson(personId: string) {
        const all = await this.groups.find(
            this.buildFindQueryForPerson(personId),
            {},
            { shouldIncludePrivateFields: true }
        )

        return all.map((group) => this.mapToListGroup(group, personId))
    }

    private mapToListGroup(
        match: Group,
        loggedInId?: string | null
    ): ListGroup {
        return {
            id: match.id,
            title: match.title,
            description: match.description,
            people: match.people,
            isMine: match.source.personId === loggedInId,
        }
    }

    public async findGroupForPerson(
        groupId: string,
        personId: string
    ): Promise<ListGroup> {
        const match = await this.groups.findOne(
            {
                //@ts-ignore
                $and: [{ id: groupId }, this.buildFindQueryForPerson(personId)],
            },
            { shouldIncludePrivateFields: true }
        )

        if (!match) {
            throw new SpruceError({
                code: 'NOT_FOUND',
                friendlyMessage: `I could not find that group!`,
            })
        }
        return this.mapToListGroup(match, personId)
    }

    private buildFindQueryForPerson(personId: string): Record<string, any> {
        return {
            $or: [{ 'source.personId': personId }, { people: personId }],
        }
    }
}
