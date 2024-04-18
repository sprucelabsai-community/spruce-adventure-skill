import {
    Router,
    SkillView,
    SkillViewControllerLoadOptions,
    FormViewController,
    ViewControllerOptions,
    AbstractSkillViewController,
    CardViewController,
    buildForm,
    buildSkillView,
} from '@sprucelabs/heartwood-view-controllers'
import { buildSchema } from '@sprucelabs/schema'

export const characters = {
    ['the-brave']: 'The Brave ⚔️',
    ['the-strong']: 'The Strong 💪',
    ['the-just']: 'The Just ⚖️',
    ['the-wise']: 'The Wise 📖',
    ['the-creator']: 'The Magical 🦄',
}

export type Epithet = keyof typeof characters

const profileSchema = buildSchema({
    id: 'heroName',
    fields: {
        name: { type: 'text', label: 'Name', isRequired: true },
        epithet: {
            type: 'select',
            label: 'Epithet',
            isRequired: true,
            options: {
                choices: Object.keys(characters).map((key) => ({
                    value: key,
                    //@ts-ignore
                    label: characters[key],
                })),
            },
        },
    },
})

type ProfileSchema = typeof profileSchema

export default class ProfileSkillViewController extends AbstractSkillViewController {
    private router?: Router
    private profileFormVc: FormViewController<ProfileSchema>
    private name?: string
    private epithet?: Epithet = 'the-brave'
    private cardVc: CardViewController
    public static id = 'profile'

    public constructor(options: ViewControllerOptions) {
        super(options)

        this.profileFormVc = this.Controller(
            'form',
            buildForm({
                id: 'heroForm',
                onSubmit: this.handleSubmit.bind(this),
                onChange: ({ values, isValid }) => {
                    this.name = values.name ?? undefined
                    this.epithet = values.epithet ?? (undefined as any)
                    this.cardVc.setHeaderTitle(this.getCrewName())
                    this.cardVc.setHeaderSubtitle(this.renderEpithet())
                    this.cardVc.setHeaderImage(this.getHeaderImage())

                    if (isValid) {
                        this.profileFormVc.showSubmitControls()
                    } else {
                        this.profileFormVc.hideSubmitControls()
                    }
                },
                values: {
                    epithet: 'the-brave',
                },
                shouldShowCancelButton: false,
                schema: profileSchema,
                shouldShowSubmitControls: false,
                sections: [
                    {
                        fields: ['name', 'epithet'],
                    },
                ],
            })
        ) as any

        this.cardVc = this.Controller('card', {
            header: {
                title: this.getCrewName(),
                subtitle: this.renderEpithet(),
                image: this.getHeaderImage(),
            },
            body: {
                sections: [
                    {
                        //@ts-ignore
                        form: this.profileFormVc.render(),
                    },
                ],
            },
        })
    }

    private async handleSubmit() {
        const confirm = await this.confirm({ message: 'You sure?' })

        if (confirm && this.name && this.epithet) {
            await this.router?.redirect('adventure.equip', {
                name: this.name,
                epithet: this.epithet,
            })
        }
    }

    private getCrewName() {
        return this.name ?? 'Name your crew'
    }

    private renderEpithet() {
        return this.epithet ? this.getEpithet() : 'And make it something good.'
    }

    public async load({ router }: SkillViewControllerLoadOptions) {
        this.router = router
    }

    private getHeaderImage() {
        return this.epithet
            ? `/storybook-support/characters/${this.epithet}.jpg`
            : null
    }

    private getEpithet() {
        return `${this.epithet ? characters[this.epithet] : ''}`
    }

    public render(): SkillView {
        return buildSkillView({
            shouldCenterVertically: true,
            layouts: [
                {
                    cards: [this.cardVc.render()],
                },
            ],
        })
    }
}
