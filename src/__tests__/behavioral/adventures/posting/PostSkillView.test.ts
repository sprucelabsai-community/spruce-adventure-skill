import {
    vcAssert,
    vcDurationAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, test, suite } from '@sprucelabs/test-utils'
import { ListAdventure } from '../../../../adventure.types'
import PostSkillViewController from '../../../../adventures/posting/Post.svc'
import PostCardViewController from '../../../../adventures/posting/PostCard.vc'
import AbstractAdventureTest from '../../../support/AbstractAdventureTest'
import FakePostCard from '../../../support/FakePostCard'
import generateAdventureWithPersonValues from '../../../support/generateAdventureWithPersonValues'

@fake.login()
@suite()
export default class PostSkillViewTest extends AbstractAdventureTest {
    private vc!: SpyPostSkillView
    private adventuresWithPerson: ListAdventure[] = []
    private get postCardVc() {
        return this.vc.getPostCard() as FakePostCard
    }

    protected async beforeEach() {
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

    private Vc(): SpyPostSkillView {
        return this.views.Controller('adventure.post', {}) as SpyPostSkillView
    }

    @test()
    protected async requiresLogin() {
        await vcAssert.assertLoginIsRequired(this.vc)
    }

    @test()
    protected async hasDurationUtilConfigured() {
        vcDurationAssert.durationUtilIsConfiguredForVc(this.vc)
    }

    @test()
    protected async rendersPostCard() {
        const postVc = vcAssert.assertSkillViewRendersCard(this.vc, 'post')
        vcAssert.assertRendersAsInstanceOf(postVc, PostCardViewController)
    }

    @test()
    protected async postingAdventureRedirectsToRoot() {
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
    protected async redirectsToRootIfAlreadyHasActiveAdventure() {
        this.pushAdventureByMe()
        await this.assertLoadRedirectsToList()
    }

    @test()
    protected async doesNotRedirectIfNotOwnAdventure() {
        this.pushAdventureByAnother()
        await this.load()
    }

    @test()
    protected async redirectsToListEvenIfOwnAdventureIsNotFirst() {
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
    protected async loadsPostCardOnLoad() {
        await this.load()
        assert.isTrue(this.postCardVc.getIsLoaded(), 'Post card not loaded')
    }

    private async assertLoadRedirectsToList() {
        await vcAssert.assertActionRedirects({
            action: () => this.load(),
            destination: {
                id: 'adventure.list',
            },
            router: this.views.getRouter(),
        })
    }

    private pushAdventureByAnother() {
        const adventure = generateAdventureWithPersonValues()
        this.adventuresWithPerson.push(adventure)
    }

    private async load() {
        await this.views.load(this.vc)
    }

    private pushAdventureByMe() {
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
