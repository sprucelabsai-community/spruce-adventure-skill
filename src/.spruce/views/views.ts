import PostSkillViewController from '../../posting/Post.svc'
import ListSkillViewController from '../../listing/List.svc'
import EquipSkillViewController from '../../root/Equip.svc'
import ProfileSkillViewController from '../../root/Profile.svc'
import RootSkillViewController from '../../root/Root.svc'
import CurrentAdventureCardViewController from '../../listing/CurrentAdventureCard.vc'
import PostCardViewController from '../../posting/PostCard.vc'
import FriendsListToolViewController from '../../friends/FriendsListTool.vc'

const vcs = {
    PostSkillViewController,
    ListSkillViewController,
    EquipSkillViewController,
    ProfileSkillViewController,
    RootSkillViewController,
    CurrentAdventureCardViewController,
    PostCardViewController,
    FriendsListToolViewController,
}

type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'adventure.post': PostSkillViewController
		'adventure.list': ListSkillViewController
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'adventure.post': LoadOptions<Parameters<PostSkillViewController['load']>>
		'adventure.list': LoadOptions<Parameters<ListSkillViewController['load']>>
		'adventure.equip': LoadOptions<Parameters<EquipSkillViewController['load']>>
		'adventure.profile': LoadOptions<Parameters<ProfileSkillViewController['load']>>
		'adventure.root': LoadOptions<Parameters<RootSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'adventure.current-adventure-card': CurrentAdventureCardViewController
		'adventure.post-card': PostCardViewController
		'adventure.friends-list-tool': FriendsListToolViewController
		'adventure.post': PostSkillViewController
		'adventure.list': ListSkillViewController
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
	}

    interface ViewControllerOptionsMap {
		'adventure.current-adventure-card': ConstructorParameters<typeof CurrentAdventureCardViewController>[0]
		'adventure.post-card': ConstructorParameters<typeof PostCardViewController>[0]
		'adventure.friends-list-tool': ConstructorParameters<typeof FriendsListToolViewController>[0]
	}
}


//@ts-ignore
if(typeof heartwood === 'function') { heartwood(vcs) }

export default vcs