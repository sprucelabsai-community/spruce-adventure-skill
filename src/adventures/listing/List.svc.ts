import { durationUtil } from '@sprucelabs/calendar-utils'
import {
    AbstractSkillViewController,
    buildSkillViewLayout,
    Card,
    Router,
    SkillView,
    SkillViewControllerLoadOptions,
    ToolBelt,
    ToolBeltViewController,
    ViewController,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { Person } from '@sprucelabs/spruce-core-schemas'
import { ListAdventure } from '../../adventure.types'
import FriendsListToolViewController from '../../friends/listing/FriendsListTool.vc'
import GroupListCardViewController from '../../groups/listing/GroupListCard.vc'
import PostCardViewController from '../posting/PostCard.vc'
import CurrentAdventureCardViewController from './CurrentAdventureCard.vc'

export default class ListSkillViewController extends AbstractSkillViewController {
    public static id = 'list'
    protected currentCardVc?: CurrentAdventureCardViewController
    protected postCardVc: PostCardViewController
    protected friendsToolVc: FriendsListToolViewController
    private toolBeltVc: ToolBeltViewController
    private router!: Router
    protected cards: ViewController<Card>[] = []
    protected loadingCardVc: ViewController<Card>
    protected groupsToolVc: GroupListCardViewController

    public constructor(options: ViewControllerOptions) {
        super(options)

        durationUtil.dates = this.dates

        this.groupsToolVc = this.Controller('adventure.group-list-card', {})
        this.friendsToolVc = this.FriendsToolVc()
        this.toolBeltVc = this.ToolBeltVc()
        this.postCardVc = this.PostCardVc()
        this.loadingCardVc = this.LoadingCardVc()
    }

    private LoadingCardVc() {
        return this.Controller('card', {
            id: 'loading',
            body: {
                isBusy: true,
            },
        })
    }

    private PostCardVc(): PostCardViewController {
        return this.Controller('adventure.post-card', {
            onPost: this.handleDidPostAdventure.bind(this),
        })
    }

    private ToolBeltVc(): ToolBeltViewController {
        return this.Controller('tool-belt', {
            tools: [
                {
                    id: 'friends',
                    card: this.friendsToolVc.render(),
                    lineIcon: 'user',
                },
                {
                    id: 'groups',
                    card: this.groupsToolVc.render(),
                    lineIcon: 'users',
                },
            ],
        })
    }

    private FriendsToolVc(): FriendsListToolViewController {
        return this.Controller('adventure.friends-list-tool', {})
    }

    public async getIsLoginRequired() {
        return true
    }

    public renderToolBelt(): ToolBelt {
        return this.toolBeltVc.render()
    }
    private async handleDidPostAdventure() {
        await this.router.redirect('adventure.list')
    }

    public async load(options: SkillViewControllerLoadOptions) {
        const { router, authenticator } = options

        this.router = router
        const person = authenticator.getPerson()!
        const client = await this.connectToApi()

        const [{ adventures }] = await client.emitAndFlattenResponses(
            'adventure.list::v2022_09_09'
        )

        if (adventures.length === 0) {
            await router.redirect('adventure.post')
            return
        }

        this.buildAdventureCards(adventures, person)

        if (!this.currentCardVc) {
            this.cards.push(this.postCardVc)
        }

        this.triggerRender()

        await Promise.all([
            this.friendsToolVc.load({
                router,
                authenticator,
                onNoFriends: () => this.toolBeltVc.focusTool('friends'),
            }),
            this.groupsToolVc.load(options),
        ])
    }

    private buildAdventureCards(
        adventures: ListAdventure[],
        loggedInPerson: Person
    ) {
        for (const adventure of adventures) {
            if (adventure.source.personId === loggedInPerson.id) {
                this.currentCardVc = this.CurrentAdventureCard(adventure)
            } else {
                this.cards.push(this.AdventureCardVc(adventure, loggedInPerson))
            }
        }
    }

    private AdventureCardVc(adventure: ListAdventure, loggedInPerson: Person) {
        return this.Controller('adventure.adventure-card', {
            adventure,
            loggedInPersonId: loggedInPerson.id,
        })
    }

    private CurrentAdventureCard(
        adventure: ListAdventure
    ): CurrentAdventureCardViewController {
        return this.Controller('adventure.current-adventure-card', {
            adventure,
            onDidCancel: this.onDidCancelCurrentAdventure.bind(this),
        })
    }

    private async onDidCancelCurrentAdventure() {
        await this.router.redirect('adventure.list')
    }

    public render(): SkillView {
        const cards = [...this.cards]
        if (this.currentCardVc) {
            cards.unshift(this.currentCardVc)
        }

        if (cards.length === 0) {
            cards.push(this.loadingCardVc)
        }

        return {
            layouts: [
                buildSkillViewLayout('three-col', {
                    cards: cards.map((c) => c.render()),
                }),
            ],
        }
    }
}
