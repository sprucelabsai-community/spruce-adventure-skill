import { SimpleStoreFactory } from '@sprucelabs/data-stores'
import { CreateGroup } from '../adventure.types'
import GroupsStore from './Groups.store'

export default class GroupManager {
    private constructor(private readonly groups: GroupsStore) {}

    public static async Manager(stores: SimpleStoreFactory) {
        const groups = await stores.getStore('groups')
        return new this(groups)
    }

    public async createGroup(personId: string, values: CreateGroup) {
        const created = await this.groups.createOne({
            ...values,
            source: { personId: personId! },
        })

        return created
    }
}
