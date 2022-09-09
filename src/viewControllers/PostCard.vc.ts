import {
	AbstractViewController,
	buildForm,
	Card,
	CardViewController,
	FormViewController,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { buildSchema } from '@sprucelabs/schema'

export default class PostCardViewController extends AbstractViewController<Card> {
	public static id = 'post-card'
	private cardVc: CardViewController
	protected formVc: FormViewController<PostFormSchema>

	public constructor(options: ViewControllerOptions) {
		super(options)

		this.formVc = this.FormVc()
		this.cardVc = this.CardVc()
	}

	private CardVc(): CardViewController {
		return this.Controller('card', {
			id: 'post',
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
				schema: formSchema,
				sections: [
					{
						fields: ['what', 'when', 'where'],
					},
				],
			})
		)
	}

	public render() {
		return this.cardVc.render()
	}
}

const formSchema = buildSchema({
	id: 'postForm',
	fields: {
		what: {
			type: 'text',
			label: 'What are you gonna do?',
			hint: 'Heads up, you can only have 1 adventure at a time!',
			isRequired: true,
		},
		when: {
			type: 'dateTime',
			label: 'When are you gonna do it?',
			isRequired: true,
		},
		where: {
			type: 'address',
			label: 'Where is it going down?',
			isRequired: true,
		},
	},
})

type PostFormSchema = typeof formSchema
