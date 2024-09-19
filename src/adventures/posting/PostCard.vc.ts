import {
    AbstractViewController,
    BigFormViewController,
    buildBigForm,
    Card,
    CardViewController,
    ListRow,
    ListViewController,
    SpruceSchemas,
    ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { randomUtil } from '@sprucelabs/spruce-skill-utils'
import postAdventureSchema from '#spruce/schemas/adventure/v2022_09_09/postAdventure.schema'
import { Adventure, ListGroup } from '../../adventure.types'

export default class PostCardViewController extends AbstractViewController<Card> {
    public static id = 'post-card'
    private cardVc: CardViewController
    protected formVc: BigFormViewController<PostAdventureSchema>
    private onPostHandler?: OnPostHandler
    protected groupsListVc?: ListViewController
    private shouldIgnoreGroupToggleChanges = false
    private selectedGroup?: string

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
            const target = this.buildPostTarget()
            const [{ adventure }] = await client.emitAndFlattenResponses(
                'adventure.post::v2022_09_09',
                {
                    target,
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

    private buildPostTarget() {
        let target:
            | SpruceSchemas.Adventure.v2022_09_09.PostEmitTarget
            | undefined

        if (this.selectedGroup && this.selectedGroup !== 'friends') {
            target = {
                groupId: this.selectedGroup,
            }
        }
        return target
    }

    public async load() {
        const client = await this.connectToApi()
        const [{ groups }] = await client.emitAndFlattenResponses(
            'adventure.list-groups::v2022_09_09'
        )

        if (groups.length) {
            this.groupsListVc = this.GroupsListVc(groups)
            this.formVc.addSection({
                title: 'Who are you inviting?',
                list: this.groupsListVc.render(),
            })
        }
    }

    private GroupsListVc(groups: ListGroup[]): ListViewController {
        return this.Controller('list', {
            id: 'groups',
            columnWidths: ['fill'],
            rows: [
                this.renderFriendsRow(),
                ...groups.map((group) => this.renderGroupRow(group)),
            ],
        })
    }

    private renderGroupRow(group: ListGroup): ListRow {
        return {
            id: group.id,
            cells: [
                {
                    text: { content: group.title },
                    subText: { content: group.description },
                },
                {
                    toggleInput: {
                        name: 'isSelected',
                        onChange: () => {
                            return this.handleToggle(group.id)
                        },
                    },
                },
            ],
        }
    }

    private renderFriendsRow(): ListRow {
        return {
            id: 'friends',
            cells: [
                {
                    text: { content: 'All your friends!' },
                },
                {
                    toggleInput: {
                        name: 'isSelected',
                        value: true,
                        onChange: () => {
                            return this.handleToggle('friends')
                        },
                    },
                },
            ],
        }
    }

    private async handleToggle(id: 'friends' | string) {
        if (this.shouldIgnoreGroupToggleChanges) {
            return
        }

        this.shouldIgnoreGroupToggleChanges = true

        this.selectedGroup = id

        const rows = this.groupsListVc!.getRowVcs()
        for (const row of rows) {
            await row.setValue('isSelected', row.getId() === id)
        }

        this.shouldIgnoreGroupToggleChanges = false
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
