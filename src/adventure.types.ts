import { SpruceSchemas } from '@sprucelabs/spruce-core-schemas'
import { AdventureCanceller } from './adventures/cancelling/AdventureCanceller'
import AdventureFinder from './adventures/listing/AdventureFinder'
import AdventurePoster from './adventures/posting/AdventurePoster'
import Rsvper from './adventures/rsvping/Rsvper'

export type Adventure = SpruceSchemas.Adventure.v2022_09_09.Adventure
export type AdventureWithPerson =
    SpruceSchemas.Adventure.v2022_09_09.AdventureWithPerson
export type Friend = SpruceSchemas.Adventure.v2022_09_09.Friend
export type Person = SpruceSchemas.Spruce.v2020_07_22.Person
export type PostAdventure = SpruceSchemas.Adventure.v2022_09_09.PostAdventure
export type Group = SpruceSchemas.Adventure.v2022_09_09.Group
export type PublicGroup = Omit<Group, 'source'>
export type ListGroup = SpruceSchemas.Adventure.v2022_09_09.ListGroup

declare module '@sprucelabs/spruce-skill-utils/build/types/skill.types' {
    interface SkillContext {
        finder: AdventureFinder
        poster: AdventurePoster
        rsvper: Rsvper
        canceller: AdventureCanceller
    }
}
