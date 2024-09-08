import ConnectSkillViewController from '../../friends/Connect.svc'
import ListSkillViewController from '../../listing/List.svc'
import PostSkillViewController from '../../posting/Post.svc'
import RootSkillViewController from '../../root/Root.svc'
import ConfirmCancelCardViewController from '../../cancelling/ConfirmCancelCard.vc'
import FriendsListToolViewController from '../../friends/FriendsListTool.vc'
import GroupListCardViewController from '../../groups/GroupListCard.vc'
import AdventureCardViewController from '../../listing/AdventureCard.vc'
import BaseAdventureCardViewController from '../../listing/BaseAdventureCard.vc'
import CurrentAdventureCardViewController from '../../listing/CurrentAdventureCard.vc'
import FriendsDashboardCardViewController from '../../peopleDashboardCards/FriendsDashboardCard.vc'
import PostCardViewController from '../../posting/PostCard.vc'
import CreateGroupCardViewController from '../../viewControllers/CreateGroupCard.vc'

import '@sprucelabs/heartwood-view-controllers'

const vcs = {
    ConnectSkillViewController,
    ListSkillViewController,
    PostSkillViewController,
    RootSkillViewController,
    ConfirmCancelCardViewController,
    FriendsListToolViewController,
    GroupListCardViewController,
    AdventureCardViewController,
    BaseAdventureCardViewController,
    CurrentAdventureCardViewController,
    FriendsDashboardCardViewController,
    PostCardViewController,
    CreateGroupCardViewController,
}

export const pluginsByName = {
}

type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'adventure.connect': ConnectSkillViewController
		'adventure.list': ListSkillViewController
		'adventure.post': PostSkillViewController
		'adventure.root': RootSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'adventure.connect': LoadOptions<Parameters<ConnectSkillViewController['load']>>
		'adventure.list': LoadOptions<Parameters<ListSkillViewController['load']>>
		'adventure.post': LoadOptions<Parameters<PostSkillViewController['load']>>
		'adventure.root': LoadOptions<Parameters<RootSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'adventure.confirm-cancel-card': ConfirmCancelCardViewController
		'adventure.friends-list-tool': FriendsListToolViewController
		'adventure.group-list-card': GroupListCardViewController
		'adventure.adventure-card': AdventureCardViewController
		'adventure.base-adventure-card': BaseAdventureCardViewController
		'adventure.current-adventure-card': CurrentAdventureCardViewController
		'adventure.friends-dashboard-card': FriendsDashboardCardViewController
		'adventure.post-card': PostCardViewController
		'adventure.create-group-card': CreateGroupCardViewController
		'adventure.connect': ConnectSkillViewController
		'adventure.list': ListSkillViewController
		'adventure.post': PostSkillViewController
		'adventure.root': RootSkillViewController
	}

    interface ViewControllerOptionsMap {
		'adventure.confirm-cancel-card': ConstructorParameters<typeof ConfirmCancelCardViewController>[0]
		'adventure.friends-list-tool': ConstructorParameters<typeof FriendsListToolViewController>[0]
		'adventure.group-list-card': ConstructorParameters<typeof GroupListCardViewController>[0]
		'adventure.adventure-card': ConstructorParameters<typeof AdventureCardViewController>[0]
		'adventure.base-adventure-card': ConstructorParameters<typeof BaseAdventureCardViewController>[0]
		'adventure.current-adventure-card': ConstructorParameters<typeof CurrentAdventureCardViewController>[0]
		'adventure.friends-dashboard-card': ConstructorParameters<typeof FriendsDashboardCardViewController>[0]
		'adventure.post-card': ConstructorParameters<typeof PostCardViewController>[0]
		'adventure.create-group-card': ConstructorParameters<typeof CreateGroupCardViewController>[0]
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
