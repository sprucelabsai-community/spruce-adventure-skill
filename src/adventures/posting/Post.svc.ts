import { durationUtil } from '@sprucelabs/calendar-utils'
import {
    AbstractSkillViewController,
    Router,
    SkillView,
    SkillViewControllerLoadOptions,
    splitCardsIntoLayouts,
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

        const client = await this.connectToApi()
        const [{ adventures }] = await client.emitAndFlattenResponses(
            'adventure.list::v2022_09_09'
        )

        const personId = authenticator.getPerson()?.id
        if (adventures.find((a) => a.source.personId === personId)) {
            await this.router.redirect('adventure.list')
        }
    }

    public async handlePostAdventure() {
        await this.router.redirect('adventure.root')
    }

    public render(): SkillView {
        return {
            layouts: splitCardsIntoLayouts([this.postCardVc.render()], 2),
        }
    }
}
