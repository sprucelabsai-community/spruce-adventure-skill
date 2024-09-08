import { vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import { AdventureWithPerson } from '../../../../adventure.types'
import PostSkillViewController from '../../../../posting/Post.svc'
import PostCardViewController from '../../../../posting/PostCard.vc'
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

        this.views.setController('adventure.post-card', FakePostCard)
        this.views.setController('adventure.post', SpyPostSkillView)
        this.vc = this.views.Controller(
            'adventure.post',
            {}
        ) as SpyPostSkillView

        await this.loadVc()
    }

    @test()
    protected static async requiresLogin() {
        await vcAssert.assertLoginIsRequired(this.vc)
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
        await this.loadVc()
    }

    @test()
    protected static async redirectsToListEvenIfOwnAdventureIsNotFirst() {
        this.pushAdventureByAnother()
        this.pushAdventureByMe()
        await this.assertLoadRedirectsToList()
    }

    private static async assertLoadRedirectsToList() {
        await vcAssert.assertActionRedirects({
            action: () => this.loadVc(),
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

    private static async loadVc() {
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
