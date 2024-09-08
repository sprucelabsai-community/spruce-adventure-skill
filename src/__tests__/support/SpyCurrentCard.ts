import CurrentAdventureCardViewController from '../../listing/CurrentAdventureCard.vc'
import SpyBaseAdventureCard from './SpyBaseAdventureCard'

export class SpyCurrentCard extends CurrentAdventureCardViewController {
    public getAdventure() {
        return (this.baseAdventureCardVc as SpyBaseAdventureCard).adventure
    }
}
