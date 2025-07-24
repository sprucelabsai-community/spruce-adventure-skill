import {
    AbstractSkillViewController,
    buildSkillViewLayout,
    Button,
    CardSection,
    CardViewController,
    Router,
    SkillView,
    SkillViewControllerLoadOptions,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'

export default class RootSkillViewController extends AbstractSkillViewController {
    private isAnimating = true

    public static id = 'root'
    protected introCardVc?: CardViewController
    private router!: Router

    public constructor(options: ViewControllerOptions) {
        super(options)
        this.introCardVc = this.IntroCardVc()
    }

    private IntroCardVc(): CardViewController {
        return this.Controller('card', {
            id: 'intro',
            header: {
                title: `Adventure time! ⚔️🧙`,
            },
            body: {
                isBusy: true,
            },
            footer: {
                shouldRenderBorder: false,
                buttons: this.renderIntroButtons(),
            },
        })
    }

    private renderTalkingSection(): CardSection {
        return {
            talkingSprucebot: {
                size: 'medium',
                onComplete: () => {
                    this.isAnimating = false
                    this.introCardVc?.setFooter({
                        buttons: this.renderIntroButtons(),
                    })
                },
                avatar: {
                    stateOfMind: 'chill',
                },
                sentences: [
                    {
                        words: `Hello there! My name is Sprucebot!`,
                    },
                    {
                        words: `Tay, one of my creators, built this Adventure Skill to help him schedule last minute play dates for his people daughters.`,
                    },
                    {
                        words: "Here's how it works...",
                    },
                    {
                        words: `You, or your friends (who you can invite later) can post an "Adventure".`,
                    },
                    {
                        words: `An Adventure is comprised of a what, when, and where...`,
                    },
                    {
                        words: "After you post an Adventure, I'll message all your friends who can RSVP.",
                    },
                    {
                        words: "There's one catch, however...",
                    },
                    {
                        words: 'You can only have one Adventure at a time!',
                    },
                    {
                        words: 'You ready?',
                    },
                ],
            },
        }
    }

    private renderIntroButtons(): Button[] {
        return [
            {
                label: this.isAnimating ? 'Skip' : `Let's do this! ⚡️`,
                type: this.isAnimating ? 'secondary' : 'primary',
                id: 'next',
                onClick: this.handleClickNextFromIntro.bind(this),
            },
        ]
    }

    private async handleClickNextFromIntro() {
        await this.router.redirect('adventure.list')
    }

    public async load({
        router,
        authenticator,
    }: SkillViewControllerLoadOptions) {
        if (authenticator.isLoggedIn()) {
            await router.redirect('adventure.list')
            return
        }

        this.introCardVc?.addSection(this.renderTalkingSection())
        this.introCardVc?.setIsBusy(false)
        this.router = router
        this.triggerRender()
    }

    public render(): SkillView {
        return {
            shouldCenterVertically: true,
            layouts: this.introCardVc
                ? [
                      buildSkillViewLayout('one-col', {
                          cards: [this.introCardVc.render()],
                      }),
                  ]
                : [],
        }
    }
}
