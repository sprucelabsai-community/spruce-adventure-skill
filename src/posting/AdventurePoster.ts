import {
    dateUtil,
    DateUtilDecorator,
    durationUtil,
    LocaleImpl,
} from '@sprucelabs/calendar-utils'
import { StoreFactory } from '@sprucelabs/data-stores'
import { PostAdventure } from '../adventure.types'
import { MessageSender } from '../messaging/MessageSender'
import AdventuresStore from '../stores/Adventures.store'

export default class AdventurePoster {
    private adventures: AdventuresStore
    private messageSender: MessageSender

    protected constructor(options: {
        adventures: AdventuresStore
        messageSender: MessageSender
    }) {
        const { adventures, messageSender } = options
        this.adventures = adventures
        this.messageSender = messageSender
    }

    public static async Poster(options: {
        stores: Pick<StoreFactory, 'getStore'>
        messageSender: MessageSender
    }) {
        const { stores, messageSender } = options
        const adventures = await stores.getStore('adventures')
        return new this({ adventures, messageSender })
    }

    public async create(values: PostAdventure & { personId: string }) {
        const { personId, ...adventure } = values

        const created = await this.adventures.createOne({
            ...adventure,
            source: {
                personId: personId!,
            },
        })

        const locale = new LocaleImpl()
        await locale.setZoneName('America/Denver')
        durationUtil.dates = new DateUtilDecorator(locale).makeLocaleAware(
            dateUtil
        )
        const when = created.when
        const message = `Hey {{to}}! {{from}} posted a new adventure!\n\n"${
            created.what
        }"\n\n${durationUtil.renderDateTimeUntil(when, new Date().getTime(), {
            shouldCapitalize: true,
        })} Mountain Time`

        await this.messageSender.sendMessage(personId!, message)

        return created
    }
}
