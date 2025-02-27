import {
    Authenticator,
    interactor,
    vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, suite } from '@sprucelabs/test-utils'
import RootSkillViewController from '../../../root/Root.svc'
import AbstractAdventureTest from '../../support/AbstractAdventureTest'
import { SpyCurrentCard } from '../../support/SpyCurrentCard'

@fake.login()
@suite()
export default class RootSkillViewTest extends AbstractAdventureTest {
    private vc!: SpyRootViewController

    private sessionToken!: string
    private auth!: Authenticator

    protected async beforeEach() {
        await super.beforeEach()

        this.views.setController('adventure.root', SpyRootViewController)
        this.views.setController(
            'adventure.current-adventure-card',
            SpyCurrentCard as any
        )

        this.auth = this.views.getAuthenticator()
        this.sessionToken = this.auth.getSessionToken()!
        await this.auth.clearSession()
        await this.reload()
    }

    @test()
    protected async rendersLoadingIntroCardToStart() {
        this.vc = this.Vc()
        const cardVc = this.assertRendersCard('intro')
        vcAssert.assertCardIsBusy(cardVc)
        vcAssert.assertCardDoesNotRenderTalkingSprucebot(cardVc)
    }

    @test()
    protected async rendersIntroCardWithTalkingSprucebotAfterLoad() {
        this.assertDoesNotRenderCard('post')
        const cardVc = this.assertRendersCard('intro')
        vcAssert.assertCardRendersTalkingSprucebot(cardVc)
        vcAssert.assertCardIsNotBusy(cardVc)
    }

    @test()
    protected async loadTriggersRender() {
        this.vc = this.Vc()
        await this.loadVc()
        vcAssert.assertTriggerRenderCount(this.vc, 1)
    }

    @test()
    protected async redirectToListIfLoggedIn() {
        this.auth.setSessionToken(this.sessionToken, this.fakedPerson)
        await vcAssert.assertActionRedirects({
            action: () => this.reload(),
            destination: {
                id: 'adventure.list',
            },
            router: this.views.getRouter(),
        })
    }

    @test()
    protected async clickingSkipRedirectsToList() {
        await vcAssert.assertActionRedirects({
            action: () => this.clickNextOnIntro(),
            router: this.views.getRouter(),
            destination: {
                id: 'adventure.list',
            },
        })
    }

    private async reload() {
        this.vc = this.Vc()
        await this.loadVc()
    }

    private Vc(): SpyRootViewController {
        return this.views.Controller(
            'adventure.root',
            {}
        ) as SpyRootViewController
    }

    private async loadVc() {
        await this.views.load(this.vc)
    }

    private assertDoesNotRenderCard(id: string) {
        vcAssert.assertSkillViewDoesNotRenderCard(this.vc, id)
    }

    private assertRendersCard(id: string) {
        return vcAssert.assertSkillViewRendersCard(this.vc, id)
    }

    private async clickNextOnIntro() {
        await interactor.clickButton(this.vc.getIntroCard()!, 'next')
    }
}

class SpyRootViewController extends RootSkillViewController {
    public getIntroCard() {
        return this.introCardVc
    }
}
