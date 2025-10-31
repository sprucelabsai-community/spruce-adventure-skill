import ConnectSkillViewController from '../../friends/connecting/Connect.svc'
import GroupSkillViewController from '../../groups/Group.svc'
import ListSkillViewController from '../../adventures/listing/List.svc'
import PostSkillViewController from '../../adventures/posting/Post.svc'
import RootSkillViewController from '../../root/Root.svc'
import AdventureCardViewController from '../../adventures/listing/AdventureCard.vc'
import BaseAdventureCardViewController from '../../adventures/listing/BaseAdventureCard.vc'
import ConfirmCancelCardViewController from '../../adventures/cancelling/ConfirmCancelCard.vc'
import CurrentAdventureCardViewController from '../../adventures/listing/CurrentAdventureCard.vc'
import FriendsDashboardCardViewController from '../../peopleDashboardCards/FriendsDashboardCard.vc'
import FriendSelectionCardViewController from '../../groups/FriendSelectionCard.vc'
import FriendsListToolViewController from '../../friends/listing/FriendsListTool.vc'
import GroupFormCardViewController from '../../groups/GroupFormCard.vc'
import GroupListCardViewController from '../../groups/listing/GroupListCard.vc'
import PostCardViewController from '../../adventures/posting/PostCard.vc'

import '@sprucelabs/heartwood-view-controllers'

const vcs = {
    AdventureCardViewController,
    BaseAdventureCardViewController,
    ConfirmCancelCardViewController,
    ConnectSkillViewController,
    CurrentAdventureCardViewController,
    FriendsDashboardCardViewController,
    FriendSelectionCardViewController,
    FriendsListToolViewController,
    GroupFormCardViewController,
    GroupListCardViewController,
    GroupSkillViewController,
    ListSkillViewController,
    PostCardViewController,
    PostSkillViewController,
    RootSkillViewController,
}

export const pluginsByName = {
}



type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'adventure.connect': ConnectSkillViewController
		'adventure.group': GroupSkillViewController
		'adventure.list': ListSkillViewController
		'adventure.post': PostSkillViewController
		'adventure.root': RootSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'adventure.connect': LoadOptions<Parameters<ConnectSkillViewController['load']>>
		'adventure.group': LoadOptions<Parameters<GroupSkillViewController['load']>>
		'adventure.list': LoadOptions<Parameters<ListSkillViewController['load']>>
		'adventure.post': LoadOptions<Parameters<PostSkillViewController['load']>>
		'adventure.root': LoadOptions<Parameters<RootSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'adventure.adventure-card': AdventureCardViewController
		'adventure.base-adventure-card': BaseAdventureCardViewController
		'adventure.confirm-cancel-card': ConfirmCancelCardViewController
		'adventure.connect': ConnectSkillViewController
		'adventure.current-adventure-card': CurrentAdventureCardViewController
		'adventure.friends-dashboard-card': FriendsDashboardCardViewController
		'adventure.friend-selection-card': FriendSelectionCardViewController
		'adventure.friends-list-tool': FriendsListToolViewController
		'adventure.group-form-card': GroupFormCardViewController
		'adventure.group-list-card': GroupListCardViewController
		'adventure.group': GroupSkillViewController
		'adventure.list': ListSkillViewController
		'adventure.post-card': PostCardViewController
		'adventure.post': PostSkillViewController
		'adventure.root': RootSkillViewController
	}

    interface ViewControllerOptionsMap {
		'adventure.adventure-card': ConstructorParameters<typeof AdventureCardViewController>[0]
		'adventure.base-adventure-card': ConstructorParameters<typeof BaseAdventureCardViewController>[0]
		'adventure.confirm-cancel-card': ConstructorParameters<typeof ConfirmCancelCardViewController>[0]
		'adventure.current-adventure-card': ConstructorParameters<typeof CurrentAdventureCardViewController>[0]
		'adventure.friends-dashboard-card': ConstructorParameters<typeof FriendsDashboardCardViewController>[0]
		'adventure.friend-selection-card': ConstructorParameters<typeof FriendSelectionCardViewController>[0]
		'adventure.friends-list-tool': ConstructorParameters<typeof FriendsListToolViewController>[0]
		'adventure.group-form-card': ConstructorParameters<typeof GroupFormCardViewController>[0]
		'adventure.group-list-card': ConstructorParameters<typeof GroupListCardViewController>[0]
		'adventure.post-card': ConstructorParameters<typeof PostCardViewController>[0]
	}

	interface ViewControllerPlugins {
	}

	interface AppControllerMap {
	}
}


//@ts-ignore
if(typeof heartwood === 'function') { 
	//@ts-ignore
	heartwood({ vcs, pluginsByName }) 
}

export default vcs


export const App = undefined
