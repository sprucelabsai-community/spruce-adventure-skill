import {
	AbstractSkillViewController,
	ButtonGroupViewController,
	Router,
	SkillViewControllerLoadOptions,
	SwipeViewController,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import { SpruceSchemas } from '@sprucelabs/mercury-types'
import { armors, EquipmentItem, gems, weapons } from '../constants'
import { characters, Epithet } from './Profile.svc'

type Button = SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Button

export const weaponButtons: Button[] = weapons.map((w) => ({
	image: w.image,
	label: w.name,
	shouldShowHintIcon: !!w.description,
}))

export const armorButtons: Button[] = armors.map((w) => ({
	image: w.image,
	label: w.name,
	shouldShowHintIcon: !!w.description,
}))

interface Args {
	name: string
	epithet: Epithet
}

export default class EquipSkillViewController extends AbstractSkillViewController<Args> {
	private router!: Router
	private swipeVc: SwipeViewController
	private weaponButtonGroupVc: ButtonGroupViewController
	private armorButtonGroupVc: ButtonGroupViewController
	private gemButtonGroupVc: ButtonGroupViewController
	private selectedArmors: number[] = []
	private selectedWeapons: number[] = []
	private selectedGems: number[] = []
	private name!: string
	private epithet!: Epithet

	public static id = 'equip'
	public constructor(options: ViewControllerOptions) {
		super(options)

		this.weaponButtonGroupVc = this.Controller('buttonGroup', {
			onSelectionChange: this.handleWeaponSelectionChange.bind(this),
			onClickHintIcon: this.handleClickWeaponHint.bind(this),
			buttons: weaponButtons,
		})

		this.armorButtonGroupVc = this.Controller('buttonGroup', {
			onSelectionChange: this.handleArmorSelectionChange.bind(this),
			onClickHintIcon: this.handleClickArmorHint.bind(this),
			buttons: armorButtons,
		})

		this.gemButtonGroupVc = this.Controller('buttonGroup', {
			onSelectionChange: this.handleGemSelectionChange.bind(this),
			onClickHintIcon: this.handleClickGemHint.bind(this),
			buttons: gems,
		})

		this.swipeVc = this.Controller('swipe', {
			header: {
				title: `...`,
				subtitle: 'Equip her wisely!',
				closeHandler: () => {
					void this.router.back()
				},
			},
			footer: this.buildCardFooter(),
			onSlideChange: this.handleSlideChange.bind(this),
			slides: [
				{
					title: 'Select a weapon',
					shouldRenderContentsAsGrid: true,
					buttons: this.weaponButtonGroupVc.render(),
				},
				{
					title: 'Select armor',
					shouldRenderContentsAsGrid: true,
					buttons: this.armorButtonGroupVc.render(),
				},
				{
					title: 'Select a gem',
					shouldRenderContentsAsGrid: true,
					buttons: this.gemButtonGroupVc.render(),
				},
				{
					title: 'Begin adventure',
					talkingSprucebot: {
						avatar: {
							stateOfMind: 'chill',
						},
						size: 'medium',
						sentences: [
							{
								words: `I'm seriously not sure what is supposed to happen next.`,
							},
						],
					},
				},
			],
		})
	}

	private handleSlideChange() {
		this.updateFooter()
	}

	private updateFooter() {
		this.swipeVc.setFooter(this.buildCardFooter())
	}

	private buildCardFooter(): SpruceSchemas.HeartwoodViewControllers.v2021_02_11.CardFooter {
		const labels = [
			'Confirm Weapon',
			'Confirm Armor',
			'Confirm Gem',
			'Take me out of here!',
		]
		const enabled = [
			this.selectedWeapons.length > 0,
			this.selectedArmors.length > 0,
			this.selectedGems.length > 0,
			true,
		]

		const slide = this.swipeVc?.getPresentSlide() ?? 0
		const label = labels[slide]
		const isEnabled = enabled[slide] ?? false

		const buttons: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.Button[] =
			[
				{
					label,
					type: 'primary',
					onClick: this.handleSubmit.bind(this),
				},
			]

		if (this.swipeVc) {
			if (slide === this.swipeVc.getTotalSlides() - 1) {
				buttons.push({
					label: 'I want more!',
					onClick: this.handleVoteForMore.bind(this),
				})
			}
		}

		return {
			isEnabled,
			buttons,
		}
	}

	private async handleVoteForMore() {
		await this.askForAVote({
			featureKey: 'more-adventure',
			skillNamespace: 'adventure',
			howCoolWouldItBeIf:
				'you and I could keep playing!?? Maybe even invite some friends and go an a real world adventure together?',
		})

		await this.router?.redirect('heartwood.root')
	}

	private async handleSubmit() {
		if (this.swipeVc.getPresentSlide() === this.swipeVc.getTotalSlides() - 1) {
			await this.router?.redirect('heartwood.root')
			return
		}

		const nextSlide = this.swipeVc.getPresentSlide() + 1
		await this.swipeVc.jumpToSlide(nextSlide)
	}

	private handleWeaponSelectionChange(idxs: number[]) {
		this.selectedWeapons = idxs
		const slide = this.swipeVc.getSlide(0)
		this.swipeVc.setSlide(0, {
			...slide,
			buttons: this.weaponButtonGroupVc.render(),
		})
		this.swipeVc.setFooter(this.buildCardFooter())
	}

	private handleArmorSelectionChange(idxs: number[]) {
		this.selectedArmors = idxs
		this.swipeVc.setSlide(1, {
			...this.swipeVc.getSlide(1),
			buttons: this.armorButtonGroupVc.render(),
		})
		this.swipeVc.setFooter(this.buildCardFooter())
	}

	private handleGemSelectionChange(idxs: number[]) {
		this.selectedGems = idxs
		this.swipeVc.setSlide(2, {
			...this.swipeVc.getSlide(2),
			buttons: this.gemButtonGroupVc.render(),
		})
		this.swipeVc.setFooter(this.buildCardFooter())
	}

	public async load(options: SkillViewControllerLoadOptions<Args>) {
		const { router } = options
		const { name, epithet } = options.args ?? {
			name: 'Missing',
			epithet: 'missing',
		}

		this.router = router

		this.name = name
		this.epithet = epithet

		this.swipeVc.setHeaderTitle(this.name + ' ' + this.getEpithet())
	}

	private getEpithet() {
		if (!this.epithet) {
			return 'The missing 🤷‍♂️'
		}
		return `${this.epithet ? characters[this.epithet] : ''}`
	}

	public render() {
		return {
			layouts: [
				{
					cards: [this.swipeVc.render()],
				},
			],
		}
	}

	private handleClickWeaponHint(idx: number) {
		const weapon = weapons[idx]
		if (!weapon) {
			return
		}
		this.renderEquipmentDialog(weapon)
	}

	private handleClickArmorHint(idx: number) {
		const armor = armors[idx]
		if (!armor) {
			return
		}
		this.renderEquipmentDialog(armor)
	}

	private handleClickGemHint(idx: number) {
		const gem = gems[idx]
		if (!gem) {
			return
		}
		this.renderEquipmentDialog(gem)
	}

	private renderEquipmentDialog(weapon: EquipmentItem) {
		this.renderInDialog({
			header: {
				image: weapon.image,
				imageSize: 'contain',
			},
			body: {
				sections: [
					{
						text: {
							html: `<h2>${weapon.name}</h2>${weapon.description}`,
						},
					},
				],
			},
			footer: {
				buttons: [
					{
						label: 'Okey dokey',
						type: 'primary',
						onClick: () => {
							void this.hideDialog()
						},
					},
				],
			},
		})
	}
}
