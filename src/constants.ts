export interface EquipmentItem {
	image: string
	name: string
	description: string
	id: string
}

export const weapons: EquipmentItem[] = [
	{
		id: 'spear',
		image: 'storybook-support/weapons/1.png',
		name: 'Kryptonian Spear',
		description:
			"Made from Krypton recovered by Lex Luthor which was then stolen by Bruce Wayne and fashioned into a spear. This weapon was fashioned by Mr. Wayne before he was aware Kal El's Earth mother was also named Martha.",
	},
	{
		id: 'stormbreaker',
		image: 'storybook-support/weapons/2.png',
		name: 'Stormbreaker',
		description: `<p>So, Thor let his sister break his last hammer. This one is better because it's a name I can pronounce.</p>
<h3>Strengths:</h3><ol>
<li>Heavy</li>
<li>Lightning Charged ⚡️</li>
<li>Crushes skulls</li>
<ol>
<h3>Weaknesses:</h3>
<ol>
<li>Heavy</li>
<li>Lightning Charged ⚡️</li>
<li>Crushes skulls</li>
<ol>
`,
	},
	{
		id: 'ice-wind',
		image: 'storybook-support/weapons/3.png',
		name: 'The Trident of Ice and Wind',
		description:
			"Use ice and wind to freeze people's ears and then walk up and slap them.",
	},
	{
		id: 'cat',
		image: 'storybook-support/weapons/4.png',
		name: 'The Big, Bad, Cat Back Scratcher',
		description:
			"Pretend that 'cat' means 'bad guy' and 'scratcher' means 'breaker' and you got it!",
	},
	{
		id: 'sword',
		image: 'storybook-support/weapons/5.png',
		name: 'Sword of the Sultan',
		description: "It's ok. Cuts just fine.",
	},
	{
		id: 'ax',
		image: 'storybook-support/weapons/6.png',
		name: 'An Ax',
		description: `It's an ax, what did you expect?`,
	},
]

export const armors: EquipmentItem[] = [
	{
		id: 'cloak',
		name: 'The Purple Cloak of Stealth',
		image: 'storybook-support/armor/1.png',
		description:
			'Put it on and nobody can see you unless they look with both eyes!',
	},
	{
		id: 'inspiration',
		name: 'Jacket of Inspiration',
		image: 'storybook-support/armor/2.png',
		description:
			'Feeling down? This jacket will make you feel like you can crush anything!',
	},
	{
		id: 'armor',
		name: 'Metal Armor',
		image: 'storybook-support/armor/3.png',
		description: 'Keeps you safe from everything but airborn viruses.',
	},
	{
		id: 'gem',
		name: 'Metal Armor with Gem Upgrade',
		image: 'storybook-support/armor/4.png',
		description: 'Keeps you safe from everything including airborn viruses.',
	},
]

export const gems: EquipmentItem[] = [
	{
		id: 'wicked',
		name: 'Wicked Fravor',
		image: 'storybook-support/gems/1.png',
		description: 'So many',
	},
	{
		id: 'lindy',
		name: 'Lindy Hop',
		image: 'storybook-support/gems/2.png',
		description: 'Dance',
	},
	{
		id: 'sprinkle',
		name: 'Unicorn Sprinkle',
		image: 'storybook-support/gems/3.png',
		description: 'Coming soon',
	},
	{
		id: 'grapefruit',
		name: 'Sunshine Grapefruit',
		image: 'storybook-support/gems/4.png',
		description: 'Tacos as well!',
	},
	{
		id: 'gemstone',
		name: 'Another Gemstone!',
		image: 'storybook-support/gems/5.png',
		description: 'Buy one and win the chance to take it home!',
	},
	{
		id: 'necklace',
		name: 'Necklace Face',
		image: 'storybook-support/gems/6.png',
		description: "Don't smell the table!",
	},
]
