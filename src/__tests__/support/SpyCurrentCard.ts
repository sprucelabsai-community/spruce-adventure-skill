import CurrentAdventureCardViewController from '../../listing/CurrentAdventureCard.vc'

export class SpyCurrentCard extends CurrentAdventureCardViewController {
	public getAdventure() {
		//@ts-ignore
		return this.baseAdventureCardVc.adventure
	}
}
