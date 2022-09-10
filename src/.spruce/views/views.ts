import EquipSkillViewController from '../../root/Equip.svc'
import ProfileSkillViewController from '../../root/Profile.svc'
import RootSkillViewController from '../../root/Root.svc'
import PostSkillViewController from '../../posting/Post.svc'
import CurrentAdventureCardViewController from '../../root/CurrentAdventureCard.vc'
import PostCardViewController from '../../posting/PostCard.vc'

const vcs = {
    EquipSkillViewController,
    ProfileSkillViewController,
    RootSkillViewController,
    PostSkillViewController,
    CurrentAdventureCardViewController,
    PostCardViewController,
}

type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
		'adventure.post': PostSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'adventure.equip': LoadOptions<Parameters<EquipSkillViewController['load']>>
		'adventure.profile': LoadOptions<Parameters<ProfileSkillViewController['load']>>
		'adventure.root': LoadOptions<Parameters<RootSkillViewController['load']>>
		'adventure.post': LoadOptions<Parameters<PostSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'adventure.current-adventure-card': CurrentAdventureCardViewController
		'adventure.post-card': PostCardViewController
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
		'adventure.post': PostSkillViewController
	}

    interface ViewControllerOptionsMap {
		'adventure.current-adventure-card': ConstructorParameters<typeof CurrentAdventureCardViewController>[0]
		'adventure.post-card': ConstructorParameters<typeof PostCardViewController>[0]
	}
}


//@ts-ignore
if(typeof heartwood === 'function') { heartwood(vcs) }

export default vcs