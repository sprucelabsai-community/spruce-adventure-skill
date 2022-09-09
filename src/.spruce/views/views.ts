import EquipSkillViewController from '../../root/Equip.svc'
import ProfileSkillViewController from '../../root/Profile.svc'
import RootSkillViewController from '../../root/Root.svc'
import PostCardViewController from '../../postingAnAdventure/PostCard.vc'
import CurrentAdventureCardViewController from '../../root/CurrentAdventureCard.vc'

const vcs = {
    EquipSkillViewController,
    ProfileSkillViewController,
    RootSkillViewController,
    PostCardViewController,
    CurrentAdventureCardViewController,
}

type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'adventure.equip': LoadOptions<Parameters<EquipSkillViewController['load']>>
		'adventure.profile': LoadOptions<Parameters<ProfileSkillViewController['load']>>
		'adventure.root': LoadOptions<Parameters<RootSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'adventure.post-card': PostCardViewController
		'adventure.current-adventure-card': CurrentAdventureCardViewController
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
	}

    interface ViewControllerOptionsMap {
		'adventure.post-card': ConstructorParameters<typeof PostCardViewController>[0]
		'adventure.current-adventure-card': ConstructorParameters<typeof CurrentAdventureCardViewController>[0]
	}
}


//@ts-ignore
if(typeof heartwood === 'function') { heartwood(vcs) }

export default vcs