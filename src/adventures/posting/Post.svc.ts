import { durationUtil } from '@sprucelabs/calendar-utils'
import {
    AbstractSkillViewController,
    buildSkillViewLayout,
    Router,
    SkillView,
    SkillViewControllerLoadOptions,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import PostCardViewController from './PostCard.vc'

export default class PostSkillViewController extends AbstractSkillViewController {
    public static id = 'post'
    protected postCardVc: PostCardViewController
    private router!: Router

    public constructor(options: ViewControllerOptions) {
        super(options)

        durationUtil.dates = this.dates
        this.postCardVc = this.PostVc()
    }

    private PostVc(): PostCardViewController {
        return this.Controller('adventure.post-card', {
            onPost: this.handlePostAdventure.bind(this),
        })
    }

    public async getIsLoginRequired() {
        return true
    }

    public async load({
        router,
        authenticator,
    }: SkillViewControllerLoadOptions) {
        this.router = router
        const personId = authenticator.getPerson()!.id
        const hasAdventure = await this.loadHasCurrentAvdenture(personId)

        if (hasAdventure) {
            await this.router.redirect('adventure.list')
            return
        }

        await this.postCardVc.load()
    }

    private async loadHasCurrentAvdenture(loggedInId: string) {
        const client = await this.connectToApi()
        const [{ adventures }] = await client.emitAndFlattenResponses(
            'adventure.list::v2022_09_09'
        )

        const hasAdventure = adventures.find(
            (a) => a.source.personId === loggedInId
        )
        return hasAdventure
    }

    public async handlePostAdventure() {
        await this.router.redirect('adventure.root')
    }

    public render(): SkillView {
        return {
            layouts: [
                buildSkillViewLayout('two-col', {
                    cards: [this.postCardVc.render()],
                }),
            ],
        }
    }
}
