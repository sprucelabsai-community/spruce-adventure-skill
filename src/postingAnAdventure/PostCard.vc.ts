import {
	AbstractViewController,
	buildForm,
	Card,
	CardViewController,
	FormViewController,
	SpruceSchemas,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { SchemaValues } from '@sprucelabs/schema'
import { randomUtil } from '@sprucelabs/spruce-skill-utils'
import postAdventureSchema from '#spruce/schemas/adventure/v2022_09_09/postAdventure.schema'

type FormSection =
	SpruceSchemas.HeartwoodViewControllers.v2021_02_11.FormSection<AdventureSchema>

export default class PostCardViewController extends AbstractViewController<Card> {
	public static id = 'post-card'
	private cardVc: CardViewController
	protected formVc: FormViewController<AdventureSchema>

	public constructor(options: ViewControllerOptions) {
		super(options)

		this.formVc = this.FormVc()
		this.cardVc = this.CardVc()
	}

	private CardVc(): CardViewController {
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
				sections: [
					{
						form: this.formVc.render(),
					},
				],
			},
		})
	}

	private FormVc() {
		return this.Controller(
			'form',
			buildForm({
				schema: postAdventureSchema,
				shouldShowCancelButton: false,
				shouldShowSubmitControls: false,
				onSubmit: this.handleSubmit.bind(this),
				onChange: this.handleChange.bind(this),
				sections: [this.renderSections()],
			})
		)
	}

	private renderSections(): FormSection {
		const fields: FormSection['fields'] = [
			{ name: 'what', renderAs: 'textarea' },
		]

		if (this.formVc) {
			if (this.hasWhatValue()) {
				fields.push('when')
			}
			if (this.formVc.getValue('when')) {
				fields.push('where')
			}

			if (this.formVc.getValue('where')) {
				this.formVc.showSubmitControls()
			}
		}

		return {
			fields,
		}
	}

	private hasWhatValue() {
		return !!this.formVc.getValue('what')
	}

	private async handleChange() {
		this.formVc.setSection(0, this.renderSections())
	}

	public async handleSubmit() {
		await this.confirm({
			title: 'You ready to rock!?? 🎸',
		})

		const values = this.formVc.getValues() as Adventure
		const client = await this.connectToApi()
		await client.emitAndFlattenResponses(
			'adventure.post-adventure::v2022_09_09',
			{
				payload: {
					adventure: {
						...values,
					},
				},
			}
		)
	}

	public render() {
		return this.cardVc.render()
	}
}

type AdventureSchema = typeof postAdventureSchema
export type Adventure = SchemaValues<AdventureSchema>
