import { PolishStep } from '@sprucelabs/heartwood-polish'

const script: PolishStep[] = [
	{
		click: {
			target: [['NavMenu', 'location-pin']],
		},
	},
	{
		click: {
			target: [['NavLink', 'adventure']],
		},
	},
	{
		click: {
			target: ['Card', 'Button'],
		},
	},
	{
		typeText: {
			target: [['Field', 'name']],
			text: 'Panda!',
		},
	},
	{
		assert: {
			target: [['Field', 'name']],
			inputValue: {
				equals: 'Panda!',
			},
		},
	},
	{
		click: {
			target: [['Button', 'primary']],
		},
	},
	{
		click: {
			target: [['Dialog', 'primary']],
		},
	},
	{
		click: {
			target: [['Button', 'info_icon']],
		},
	},
	// {
	// 	assert: {
	// 		target: [['Button', 'info_icon']],
	// 		//element = await page.$('.info_icon.selected span.label span')
	// 		'isEqual': 'Spear'
	// 	},
	// },
	{
		click: {
			target: [
				['SkillView', 'adventure_equip'],
				['Button', 'primary'],
			],
		},
	},
	{
		assert: {
			target: ['Card'],
			presentSlide: {
				titleEquals: 'Select armor',
				slideIdx: 1,
			},
		},
	},
]

export default script
