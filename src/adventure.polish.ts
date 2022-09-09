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
]

export default script
