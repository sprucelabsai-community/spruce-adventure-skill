import {
    vcAssert,
    vcDurationAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test } from '@sprucelabs/test-utils'
import { AdventureWithPerson } from '../../../../adventure.types'
import PostSkillViewController from '../../../../adventures/posting/Post.svc'
import PostCardViewController from '../../../../adventures/posting/PostCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import FakePostCard from '../../../support/FakePostCard'
import generateAdventureWithPersonValues from '../../../support/generateAdventureWithPersonValues'

@fake.login()
export default class PostSkillViewTest extends AbstractAdventureTest {
    private static vc: SpyPostSkillView
    private static adventuresWithPerson: AdventureWithPerson[] = []
    private static get postCardVc() {
        return this.vc.getPostCard() as FakePostCard
    }

    protected static async beforeEach() {
        await super.beforeEach()

        await this.eventFaker.fakeListAdventures(() => {
            return this.adventuresWithPerson
        })

        this.adventuresWithPerson = []
        await this.eventFaker.fakePostAdventure()
        await this.eventFaker.fakeListGroups()

        this.views.setController('adventure.post-card', FakePostCard)
        this.views.setController('adventure.post', SpyPostSkillView)
        this.vc = this.Vc()

        await this.load()
    }

    private static Vc(): SpyPostSkillView {
        return this.views.Controller('adventure.post', {}) as SpyPostSkillView
    }

    @test()
    protected static async requiresLogin() {
        await vcAssert.assertLoginIsRequired(this.vc)
    }

    @test()
    protected static async hasDurationUtilConfigured() {
        vcDurationAssert.durationUtilIsConfiguredForVc(this.vc)
    }

    @test()
    protected static async rendersPostCard() {
        const postVc = vcAssert.assertSkillViewRendersCard(this.vc, 'post')
        vcAssert.assertRendersAsInstanceOf(postVc, PostCardViewController)
    }

    @test()
    protected static async postingAdventureRedirectsToRoot() {
        await this.postCardVc.fillWithRandomValues()

        await vcAssert.assertActionRedirects({
            action: () => this.postCardVc.submitAndConfirm(),
            router: this.views.getRouter(),
            destination: {
                id: 'adventure.root',
            },
        })
    }

    @test()
    protected static async redirectsToRootIfAlreadyHasActiveAdventure() {
        this.pushAdventureByMe()
        await this.assertLoadRedirectsToList()
    }

    @test()
    protected static async doesNotRedirectIfNotOwnAdventure() {
        this.pushAdventureByAnother()
        await this.load()
    }

    @test()
    protected static async redirectsToListEvenIfOwnAdventureIsNotFirst() {
        this.vc = this.Vc()
        this.pushAdventureByAnother()
        this.pushAdventureByMe()
        await this.assertLoadRedirectsToList()
        assert.isFalse(
            this.postCardVc.getIsLoaded(),
            `Post card should not be loaded`
        )
    }

    @test()
    protected static async loadsPostCardOnLoad() {
        await this.load()
        assert.isTrue(this.postCardVc.getIsLoaded(), 'Post card not loaded')
    }

    private static async assertLoadRedirectsToList() {
        await vcAssert.assertActionRedirects({
            action: () => this.load(),
            destination: {
                id: 'adventure.list',
            },
            router: this.views.getRouter(),
        })
    }

    private static pushAdventureByAnother() {
        const adventure = generateAdventureWithPersonValues()
        this.adventuresWithPerson.push(adventure)
    }

    private static async load() {
        await this.views.load(this.vc)
    }

    private static pushAdventureByMe() {
        const adventure = generateAdventureWithPersonValues()
        adventure.source.personId = this.fakedPerson.id
        this.adventuresWithPerson.push(adventure)
    }
}

class SpyPostSkillView extends PostSkillViewController {
    public getPostCard() {
        return this.postCardVc
    }
}
