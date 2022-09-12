import ListSkillViewController from '../../listing/List.svc'
import EquipSkillViewController from '../../root/Equip.svc'
import ProfileSkillViewController from '../../root/Profile.svc'
import RootSkillViewController from '../../root/Root.svc'
import PostSkillViewController from '../../posting/Post.svc'
import ConnectSkillViewController from '../../friends/Connect.svc'
import FriendsListToolViewController from '../../friends/FriendsListTool.vc'
import CurrentAdventureCardViewController from '../../listing/CurrentAdventureCard.vc'
import PostCardViewController from '../../posting/PostCard.vc'

const vcs = {
    ListSkillViewController,
    EquipSkillViewController,
    ProfileSkillViewController,
    RootSkillViewController,
    PostSkillViewController,
    ConnectSkillViewController,
    FriendsListToolViewController,
    CurrentAdventureCardViewController,
    PostCardViewController,
}

type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'adventure.list': ListSkillViewController
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
		'adventure.post': PostSkillViewController
		'adventure.connect': ConnectSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'adventure.list': LoadOptions<Parameters<ListSkillViewController['load']>>
		'adventure.equip': LoadOptions<Parameters<EquipSkillViewController['load']>>
		'adventure.profile': LoadOptions<Parameters<ProfileSkillViewController['load']>>
		'adventure.root': LoadOptions<Parameters<RootSkillViewController['load']>>
		'adventure.post': LoadOptions<Parameters<PostSkillViewController['load']>>
		'adventure.connect': LoadOptions<Parameters<ConnectSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'adventure.friends-list-tool': FriendsListToolViewController
		'adventure.current-adventure-card': CurrentAdventureCardViewController
		'adventure.post-card': PostCardViewController
		'adventure.list': ListSkillViewController
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
		'adventure.post': PostSkillViewController
		'adventure.connect': ConnectSkillViewController
	}

    interface ViewControllerOptionsMap {
		'adventure.friends-list-tool': ConstructorParameters<typeof FriendsListToolViewController>[0]
		'adventure.current-adventure-card': ConstructorParameters<typeof CurrentAdventureCardViewController>[0]
		'adventure.post-card': ConstructorParameters<typeof PostCardViewController>[0]
	}
}


//@ts-ignore
if(typeof heartwood === 'function') { heartwood(vcs) }

export default vcs