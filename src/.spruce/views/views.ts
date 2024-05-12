import ListSkillViewController from '../../listing/List.svc'
import ConnectSkillViewController from '../../friends/Connect.svc'
import EquipSkillViewController from '../../root/Equip.svc'
import ProfileSkillViewController from '../../root/Profile.svc'
import RootSkillViewController from '../../root/Root.svc'
import PostSkillViewController from '../../posting/Post.svc'
import AdventureCardViewController from '../../listing/AdventureCard.vc'
import BaseAdventureCardViewController from '../../listing/BaseAdventureCard.vc'
import CurrentAdventureCardViewController from '../../listing/CurrentAdventureCard.vc'
import FriendsDashboardCardViewController from '../../peopleDashboardCards/FriendsDashboardCard.vc'
import FriendsListToolViewController from '../../friends/FriendsListTool.vc'
import PostCardViewController from '../../posting/PostCard.vc'

import '@sprucelabs/heartwood-view-controllers'

const vcs = {
    ListSkillViewController,
    ConnectSkillViewController,
    EquipSkillViewController,
    ProfileSkillViewController,
    RootSkillViewController,
    PostSkillViewController,
    AdventureCardViewController,
    BaseAdventureCardViewController,
    CurrentAdventureCardViewController,
    FriendsDashboardCardViewController,
    FriendsListToolViewController,
    PostCardViewController,
}

export const pluginsByName = {
}

type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'adventure.list': ListSkillViewController
		'adventure.connect': ConnectSkillViewController
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
		'adventure.post': PostSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'adventure.list': LoadOptions<Parameters<ListSkillViewController['load']>>
		'adventure.connect': LoadOptions<Parameters<ConnectSkillViewController['load']>>
		'adventure.equip': LoadOptions<Parameters<EquipSkillViewController['load']>>
		'adventure.profile': LoadOptions<Parameters<ProfileSkillViewController['load']>>
		'adventure.root': LoadOptions<Parameters<RootSkillViewController['load']>>
		'adventure.post': LoadOptions<Parameters<PostSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'adventure.adventure-card': AdventureCardViewController
		'adventure.base-adventure-card': BaseAdventureCardViewController
		'adventure.current-adventure-card': CurrentAdventureCardViewController
		'adventure.friends-dashboard-card': FriendsDashboardCardViewController
		'adventure.friends-list-tool': FriendsListToolViewController
		'adventure.post-card': PostCardViewController
		'adventure.list': ListSkillViewController
		'adventure.connect': ConnectSkillViewController
		'adventure.equip': EquipSkillViewController
		'adventure.profile': ProfileSkillViewController
		'adventure.root': RootSkillViewController
		'adventure.post': PostSkillViewController
	}

    interface ViewControllerOptionsMap {
		'adventure.adventure-card': ConstructorParameters<typeof AdventureCardViewController>[0]
		'adventure.base-adventure-card': ConstructorParameters<typeof BaseAdventureCardViewController>[0]
		'adventure.current-adventure-card': ConstructorParameters<typeof CurrentAdventureCardViewController>[0]
		'adventure.friends-dashboard-card': ConstructorParameters<typeof FriendsDashboardCardViewController>[0]
		'adventure.friends-list-tool': ConstructorParameters<typeof FriendsListToolViewController>[0]
		'adventure.post-card': ConstructorParameters<typeof PostCardViewController>[0]
	}

	interface ViewControllerPlugins {
	}
}

//@ts-ignore
if(typeof heartwood === 'function') { 
	//@ts-ignore
	heartwood(vcs, pluginsByName) 
}

export default vcs
