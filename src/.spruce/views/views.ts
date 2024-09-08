import ConnectSkillViewController from '../../friends/Connect.svc'
import GroupSkillViewController from '../../groups/Group.svc'
import RootSkillViewController from '../../root/Root.svc'
import ListSkillViewController from '../../adventures/listing/List.svc'
import PostSkillViewController from '../../adventures/posting/Post.svc'
import FriendsListToolViewController from '../../friends/FriendsListTool.vc'
import FriendSelectionCardViewController from '../../groups/FriendSelectionCard.vc'
import GroupFormCardViewController from '../../groups/GroupFormCard.vc'
import GroupListCardViewController from '../../groups/GroupListCard.vc'
import FriendsDashboardCardViewController from '../../peopleDashboardCards/FriendsDashboardCard.vc'
import ConfirmCancelCardViewController from '../../adventures/cancelling/ConfirmCancelCard.vc'
import AdventureCardViewController from '../../adventures/listing/AdventureCard.vc'
import BaseAdventureCardViewController from '../../adventures/listing/BaseAdventureCard.vc'
import CurrentAdventureCardViewController from '../../adventures/listing/CurrentAdventureCard.vc'
import PostCardViewController from '../../adventures/posting/PostCard.vc'

import '@sprucelabs/heartwood-view-controllers'

const vcs = {
    ConnectSkillViewController,
    GroupSkillViewController,
    RootSkillViewController,
    ListSkillViewController,
    PostSkillViewController,
    FriendsListToolViewController,
    FriendSelectionCardViewController,
    GroupFormCardViewController,
    GroupListCardViewController,
    FriendsDashboardCardViewController,
    ConfirmCancelCardViewController,
    AdventureCardViewController,
    BaseAdventureCardViewController,
    CurrentAdventureCardViewController,
    PostCardViewController,
}

export const pluginsByName = {
}

type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'adventure.connect': ConnectSkillViewController
		'adventure.group': GroupSkillViewController
		'adventure.root': RootSkillViewController
		'adventure.list': ListSkillViewController
		'adventure.post': PostSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'adventure.connect': LoadOptions<Parameters<ConnectSkillViewController['load']>>
		'adventure.group': LoadOptions<Parameters<GroupSkillViewController['load']>>
		'adventure.root': LoadOptions<Parameters<RootSkillViewController['load']>>
		'adventure.list': LoadOptions<Parameters<ListSkillViewController['load']>>
		'adventure.post': LoadOptions<Parameters<PostSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'adventure.friends-list-tool': FriendsListToolViewController
		'adventure.friend-selection-card': FriendSelectionCardViewController
		'adventure.group-form-card': GroupFormCardViewController
		'adventure.group-list-card': GroupListCardViewController
		'adventure.friends-dashboard-card': FriendsDashboardCardViewController
		'adventure.confirm-cancel-card': ConfirmCancelCardViewController
		'adventure.adventure-card': AdventureCardViewController
		'adventure.base-adventure-card': BaseAdventureCardViewController
		'adventure.current-adventure-card': CurrentAdventureCardViewController
		'adventure.post-card': PostCardViewController
		'adventure.connect': ConnectSkillViewController
		'adventure.group': GroupSkillViewController
		'adventure.root': RootSkillViewController
		'adventure.list': ListSkillViewController
		'adventure.post': PostSkillViewController
	}

    interface ViewControllerOptionsMap {
		'adventure.friends-list-tool': ConstructorParameters<typeof FriendsListToolViewController>[0]
		'adventure.friend-selection-card': ConstructorParameters<typeof FriendSelectionCardViewController>[0]
		'adventure.group-form-card': ConstructorParameters<typeof GroupFormCardViewController>[0]
		'adventure.group-list-card': ConstructorParameters<typeof GroupListCardViewController>[0]
		'adventure.friends-dashboard-card': ConstructorParameters<typeof FriendsDashboardCardViewController>[0]
		'adventure.confirm-cancel-card': ConstructorParameters<typeof ConfirmCancelCardViewController>[0]
		'adventure.adventure-card': ConstructorParameters<typeof AdventureCardViewController>[0]
		'adventure.base-adventure-card': ConstructorParameters<typeof BaseAdventureCardViewController>[0]
		'adventure.current-adventure-card': ConstructorParameters<typeof CurrentAdventureCardViewController>[0]
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
