import { fake, seed } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import GroupFinder from '../../../groups/GroupFinder'
import GroupManagerImpl, {
    GroupManageConstructorOptions,
    SendBeenInvitedMessageOptions,
} from '../../../groups/GroupManager'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import { SendMessageTargetAndPayload } from '../../support/EventFaker'

@fake.login()
export default class GroupManagerTest extends AbstractAdventureTest {
    private static sendMessageTargets: SendMessageTargetAndPayload['target'][] =
        []
    private static sendMessagePayloads: SendMessageTargetAndPayload['payload'][] =
        []
    private static manager: SpyGroupManager

    @seed('organizations', 1)
    @seed('guests', 1)
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()

        this.sendMessageTargets = []
        this.sendMessagePayloads = []

        await this.eventFaker.fakeSendMessage(({ target, payload }) => {
            this.sendMessageTargets.push(target)
            this.sendMessagePayloads.push(payload)
        })

        const finder = await GroupFinder.Finder({ stores: this.stores })

        GroupManagerImpl.Class = SpyGroupManager
        this.manager = (await GroupManagerImpl.Manager({
            stores: this.stores,
            finder,
            client: this.fakedClient,
        })) as SpyGroupManager
    }

    @test()
    protected static async creatingGroupSendsMessageToPerson() {
        const { title } = await this.createGroup([this.fakedGuests[0].id])

        assert.isEqualDeep(this.sendMessageTargets[0], {
            personId: this.fakedGuests[0].id,
        })

        const { message } = this.sendMessagePayloads[0] ?? {}
        assert.isEqual(message?.classification, 'transactional')
        assert.doesInclude(message?.context, {
            title,
            toName: this.fakedGuests[0].casualName,
            fromName: this.fakedPerson.casualName,
        })
    }

    @test()
    @seed('guests', 1)
    protected static async creatingAGroupSendsToMoreThanOnePerson() {
        await this.createGroup([this.fakedGuests[0].id, this.fakedGuests[1].id])
        assert.isEqualDeep(this.sendMessageTargets, [
            {
                personId: this.fakedGuests[0].id,
            },
            {
                personId: this.fakedGuests[1].id,
            },
        ])
    }

    @test()
    protected static async doesNotTryAndLoadTheSamePersonMoreThanOnce() {
        let hitCount = 0
        await this.eventFaker.fakeGetPerson(() => {
            hitCount++
        })

        await this.sendBeenInvitedMessageTo()
        assert.isEqual(hitCount, 2)
        await this.sendBeenInvitedMessageTo()
        assert.isEqual(hitCount, 3)
    }

    @test()
    protected static async loadingPersonForInviteIsRaceConditionSafe() {
        let hitCount = 0
        await this.eventFaker.fakeGetPerson(() => {
            hitCount++
        })

        const to = generateId()

        await Promise.all([
            this.sendBeenInvitedMessageTo(to),
            this.sendBeenInvitedMessageTo(to),
            this.sendBeenInvitedMessageTo(to),
            this.sendBeenInvitedMessageTo(to),
            this.sendBeenInvitedMessageTo(to),
            this.sendBeenInvitedMessageTo(to),
        ])
        assert.isEqual(hitCount, 2)
    }

    private static async sendBeenInvitedMessageTo(toId?: string) {
        await this.manager.sendBeenInvitedMessageTo({
            toId: toId ?? generateId(),
            fromId: this.fakedPerson.id,
            title: generateId(),
        })
    }

    private static async createGroup(people: string[]) {
        return await this.manager.createGroup(this.fakedPerson.id, {
            title: generateId(),
            people,
        })
    }
}

class SpyGroupManager extends GroupManagerImpl {
    public constructor(options: GroupManageConstructorOptions) {
        super(options)
    }

    public async sendBeenInvitedMessageTo(
        options: SendBeenInvitedMessageOptions
    ) {
        return super.sendBeenInvitedMessageTo(options)
    }
}
