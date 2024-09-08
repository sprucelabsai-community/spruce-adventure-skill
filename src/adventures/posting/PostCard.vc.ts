import {
    AbstractViewController,
    BigFormViewController,
    buildBigForm,
    Card,
    CardViewController,
    SpruceSchemas,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { randomUtil } from '@sprucelabs/spruce-skill-utils'
import postAdventureSchema from '#spruce/schemas/adventure/v2022_09_09/postAdventure.schema'
import { Adventure } from '../../adventure.types'

export default class PostCardViewController extends AbstractViewController<Card> {
    public static id = 'post-card'
    private cardVc: CardViewController
    protected formVc: BigFormViewController<PostAdventureSchema>
    private onPostHandler?: OnPostHandler

    public constructor(options: ViewControllerOptions & PostCardOptions) {
        super(options)

        const { onPost, isBusy } = options

        this.formVc = this.FormVc()
        this.cardVc = this.CardVc(isBusy)
        this.onPostHandler = onPost
    }

    public setIsBusy(isBusy: boolean) {
        this.cardVc.setIsBusy(isBusy)
    }

    private CardVc(isBusy = false): CardViewController {
        return this.Controller('card', {
            id: 'post',
            header: {
                title: 'Post your next adventure!',
                subtitle: `After this you'll get to invite some friends!`,
                image:
                    '/storybook-support/adventure/' +
                    randomUtil.rand(['1.png', '2.png', '3.png']),
            },
            body: {
                isBusy,
                sections: [
                    {
                        bigForm: this.formVc.render(),
                    },
                ],
            },
        })
    }

    private FormVc() {
        return this.Controller(
            'bigForm',
            buildBigForm({
                schema: postAdventureSchema,
                onSubmit: this.handleSubmit.bind(this),
                sections: this.renderSections(),
            })
        )
    }

    private renderSections(): FormSection[] {
        const sections: FormSection[] = [
            {
                title: 'What are you gonna do?',
                fields: [{ name: 'what', renderAs: 'textarea' }],
            },
            {
                title: 'When are you gonna do it?',
                fields: ['when'],
            },
            {
                title: 'Where are you gonna to do it?',
                fields: ['where'],
            },
        ]

        return sections
    }

    public async handleSubmit() {
        const accepted = await this.confirm({
            title: 'You ready to rock!?? 🎸',
            message: `I'm going to message all your friends about this Adventure (or have you invite them)!`,
        })

        if (!accepted) {
            return
        }

        this.formVc.setIsBusy(true)

        try {
            const values = this.formVc.getValues() as Adventure
            const client = await this.connectToApi()
            const [{ adventure }] = await client.emitAndFlattenResponses(
                'adventure.post::v2022_09_09',
                {
                    payload: {
                        adventure: {
                            ...values,
                        },
                    },
                }
            )

            await this.onPostHandler?.(adventure)
        } catch (err: any) {
            this.formVc.setIsBusy(false)
            await this.alert({
                message: err.message,
            })
        }
    }

    public render() {
        return this.cardVc.render()
    }
}

type PostAdventureSchema =
    SpruceSchemas.Adventure.v2022_09_09.PostAdventureSchema

type FormSection =
    SpruceSchemas.HeartwoodViewControllers.v2021_02_11.FormSection<PostAdventureSchema>

export type OnPostHandler = (adventure: Adventure) => void | Promise<void>

export interface PostCardOptions {
    onPost?: OnPostHandler
    isBusy?: boolean
}
