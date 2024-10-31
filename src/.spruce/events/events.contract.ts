import { coreEventContracts } from '@sprucelabs/mercury-core-events'

import adventureAcceptConnectionEventContract_v2022_09_09, { AcceptConnectionEventContract as AdventureAcceptConnectionEventContract_v2022_09_09  } from '#spruce/events/adventure/acceptConnection.v2022_09_09.contract'
import adventureAddFriendToGroupEventContract_v2022_09_09, { AddFriendToGroupEventContract as AdventureAddFriendToGroupEventContract_v2022_09_09  } from '#spruce/events/adventure/addFriendToGroup.v2022_09_09.contract'
import adventureCancelEventContract_v2022_09_09, { CancelEventContract as AdventureCancelEventContract_v2022_09_09  } from '#spruce/events/adventure/cancel.v2022_09_09.contract'
import adventureCreateConnectionEventContract_v2022_09_09, { CreateConnectionEventContract as AdventureCreateConnectionEventContract_v2022_09_09  } from '#spruce/events/adventure/createConnection.v2022_09_09.contract'
import adventureCreateGroupEventContract_v2022_09_09, { CreateGroupEventContract as AdventureCreateGroupEventContract_v2022_09_09  } from '#spruce/events/adventure/createGroup.v2022_09_09.contract'
import adventureDeleteGroupEventContract_v2022_09_09, { DeleteGroupEventContract as AdventureDeleteGroupEventContract_v2022_09_09  } from '#spruce/events/adventure/deleteGroup.v2022_09_09.contract'
import adventureGetGroupEventContract_v2022_09_09, { GetGroupEventContract as AdventureGetGroupEventContract_v2022_09_09  } from '#spruce/events/adventure/getGroup.v2022_09_09.contract'
import adventureLeaveGroupEventContract_v2022_09_09, { LeaveGroupEventContract as AdventureLeaveGroupEventContract_v2022_09_09  } from '#spruce/events/adventure/leaveGroup.v2022_09_09.contract'
import adventureListEventContract_v2022_09_09, { ListEventContract as AdventureListEventContract_v2022_09_09  } from '#spruce/events/adventure/list.v2022_09_09.contract'
import adventureListFriendsEventContract_v2022_09_09, { ListFriendsEventContract as AdventureListFriendsEventContract_v2022_09_09  } from '#spruce/events/adventure/listFriends.v2022_09_09.contract'
import adventureListGroupsEventContract_v2022_09_09, { ListGroupsEventContract as AdventureListGroupsEventContract_v2022_09_09  } from '#spruce/events/adventure/listGroups.v2022_09_09.contract'
import adventurePostEventContract_v2022_09_09, { PostEventContract as AdventurePostEventContract_v2022_09_09  } from '#spruce/events/adventure/post.v2022_09_09.contract'
import adventureRsvpEventContract_v2022_09_09, { RsvpEventContract as AdventureRsvpEventContract_v2022_09_09  } from '#spruce/events/adventure/rsvp.v2022_09_09.contract'
import adventureSendReminderEventContract_v2022_09_09, { SendReminderEventContract as AdventureSendReminderEventContract_v2022_09_09  } from '#spruce/events/adventure/sendReminder.v2022_09_09.contract'
import adventureUpdateGroupEventContract_v2022_09_09, { UpdateGroupEventContract as AdventureUpdateGroupEventContract_v2022_09_09  } from '#spruce/events/adventure/updateGroup.v2022_09_09.contract'

export default [
    adventureAcceptConnectionEventContract_v2022_09_09,
    adventureAddFriendToGroupEventContract_v2022_09_09,
    adventureCancelEventContract_v2022_09_09,
    adventureCreateConnectionEventContract_v2022_09_09,
    adventureCreateGroupEventContract_v2022_09_09,
    adventureDeleteGroupEventContract_v2022_09_09,
    adventureGetGroupEventContract_v2022_09_09,
    adventureLeaveGroupEventContract_v2022_09_09,
    adventureListEventContract_v2022_09_09,
    adventureListFriendsEventContract_v2022_09_09,
    adventureListGroupsEventContract_v2022_09_09,
    adventurePostEventContract_v2022_09_09,
    adventureRsvpEventContract_v2022_09_09,
    adventureSendReminderEventContract_v2022_09_09,
    adventureUpdateGroupEventContract_v2022_09_09,
    ...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
    interface SkillEventSignatures {
    
    'adventure.accept-connection::v2022_09_09': AdventureAcceptConnectionEventContract_v2022_09_09['eventSignatures']['adventure.accept-connection::v2022_09_09'],
    
    
    'adventure.add-friend-to-group::v2022_09_09': AdventureAddFriendToGroupEventContract_v2022_09_09['eventSignatures']['adventure.add-friend-to-group::v2022_09_09'],
    
    
    'adventure.cancel::v2022_09_09': AdventureCancelEventContract_v2022_09_09['eventSignatures']['adventure.cancel::v2022_09_09'],
    
    
    'adventure.create-connection::v2022_09_09': AdventureCreateConnectionEventContract_v2022_09_09['eventSignatures']['adventure.create-connection::v2022_09_09'],
    
    
    'adventure.create-group::v2022_09_09': AdventureCreateGroupEventContract_v2022_09_09['eventSignatures']['adventure.create-group::v2022_09_09'],
    
    
    'adventure.delete-group::v2022_09_09': AdventureDeleteGroupEventContract_v2022_09_09['eventSignatures']['adventure.delete-group::v2022_09_09'],
    
    
    'adventure.get-group::v2022_09_09': AdventureGetGroupEventContract_v2022_09_09['eventSignatures']['adventure.get-group::v2022_09_09'],
    
    
    'adventure.leave-group::v2022_09_09': AdventureLeaveGroupEventContract_v2022_09_09['eventSignatures']['adventure.leave-group::v2022_09_09'],
    
    
    'adventure.list::v2022_09_09': AdventureListEventContract_v2022_09_09['eventSignatures']['adventure.list::v2022_09_09'],
    
    
    'adventure.list-friends::v2022_09_09': AdventureListFriendsEventContract_v2022_09_09['eventSignatures']['adventure.list-friends::v2022_09_09'],
    
    
    'adventure.list-groups::v2022_09_09': AdventureListGroupsEventContract_v2022_09_09['eventSignatures']['adventure.list-groups::v2022_09_09'],
    
    
    'adventure.post::v2022_09_09': AdventurePostEventContract_v2022_09_09['eventSignatures']['adventure.post::v2022_09_09'],
    
    
    'adventure.rsvp::v2022_09_09': AdventureRsvpEventContract_v2022_09_09['eventSignatures']['adventure.rsvp::v2022_09_09'],
    
    
    'adventure.send-reminder::v2022_09_09': AdventureSendReminderEventContract_v2022_09_09['eventSignatures']['adventure.send-reminder::v2022_09_09'],
    
    
    'adventure.update-group::v2022_09_09': AdventureUpdateGroupEventContract_v2022_09_09['eventSignatures']['adventure.update-group::v2022_09_09'],
    
    }
}