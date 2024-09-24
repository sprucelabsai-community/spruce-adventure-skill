import { durationUtil } from '@sprucelabs/calendar-utils'
import {
    AbstractViewController,
    Button,
    Card,
    CardFooter,
    CardSection,
    CardViewController,
    List,
    MapViewController,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { AdventureWithPerson } from '../../adventure.types'
import { AVATAR_PLACEHOLDER } from '../../root/constants'

export default class BaseAdventureCardViewController extends AbstractViewController<Card> {
    public static id = 'base-adventure-card'
    private cardVc: CardViewController
    private mapVc: MapViewController
    protected adventure: AdventureWithPerson

    public constructor(
        options: ViewControllerOptions & BaseAdventureCardOptions
    ) {
        super(options)

        const { adventure, footer, id, buttons, section } = options

        this.adventure = adventure
        this.mapVc = this.MapVc()
        this.cardVc = this.CardVc({ footer, id, buttons, section })
    }

    private CardVc(options: {
        footer?: CardFooter
        id?: string
        buttons?: Button[]
        section?: CardSection
    }): CardViewController {
        const { id, footer, buttons, section } = options

        const sections: CardSection[] = [
            {
                shouldBePadded: false,
                list: this.renderList(),
            },
            {
                shouldBePadded: false,
                map: this.mapVc.render(),
            },
        ]

        if (section) {
            sections.push(section)
        }

        if (buttons) {
            sections.push({ buttons })
        }

        return this.Controller('card', {
            id: id ?? 'current',
            header: this.adventure.groupTitle
                ? {
                      title: `Posted to "${this.adventure.groupTitle}"`,
                  }
                : undefined,
            body: {
                sections,
            },
            footer,
        })
    }

    private renderList(): List {
        return {
            rows: [
                {
                    id: 'one',
                    height: 'content',
                    cells: [
                        {
                            avatars: this.adventure.personAvatar
                                ? [this.adventure.personAvatar.mUri]
                                : [AVATAR_PLACEHOLDER],
                        },
                        {
                            text: {
                                html: `"<em>${this.adventure.what}</em>" - ${this.adventure.personCasualName}`,
                            },
                            subText: {
                                content: this.renderTimeUntil(),
                            },
                        },
                    ],
                },
            ],
        }
    }

    private renderTimeUntil(): string {
        const until = durationUtil.renderDateTimeUntil(this.adventure.when, {
            shouldCapitalize: true,
        })

        return until
    }

    private MapVc(): MapViewController {
        return this.Controller('map', {
            zoom: 'block',
            pins: [
                {
                    subtitle: this.adventure.what,
                    address: this.adventure.where,
                    buttons: [
                        {
                            id: 'navigation',
                            label: 'Open navigation',
                            type: 'primary',
                            onClick: this.handleClickNavigation.bind(this),
                        },
                    ],
                },
            ],
        })
    }

    public async handleClickNavigation() {
        this.maps.openNavigation({
            to: this.adventure.where,
        })
    }

    public render() {
        return this.cardVc.render()
    }
}

export interface BaseAdventureCardOptions {
    adventure: AdventureWithPerson
    footer?: CardFooter
    buttons?: Button[]
    id?: string
    section?: CardSection
}
