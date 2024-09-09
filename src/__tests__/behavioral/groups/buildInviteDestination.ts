import { buildRouteToCreateInvite } from '@sprucelabs/spruce-invite-utils'
import { ConnectSkillViewArgs } from '../../../friends/connecting/Connect.svc'

export default function buildInviteDestination(
    connectionId: string,
    groupId?: string
) {
    const expectedArgs: ConnectSkillViewArgs = {
        connection: connectionId,
    }

    if (groupId) {
        expectedArgs.group = groupId
    }

    const [id, args] = buildRouteToCreateInvite({
        destinationAfterCreate: {
            id: 'adventure.root',
        },
        shouldAllowOrganizationSelection: false,
        destinationAfterAccept: {
            id: 'adventure.connect',
            args: expectedArgs,
        },
    })

    const destination = {
        id,
        args,
    }
    return destination
}
