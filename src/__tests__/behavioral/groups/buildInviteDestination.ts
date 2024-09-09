import { buildRouteToCreateInvite } from '@sprucelabs/spruce-invite-utils'
import { ConnectSkillViewArgs } from '../../../friends/connecting/Connect.svc'

export default function buildInviteDestination(connectionId: string) {
    const expectedArgs: ConnectSkillViewArgs = {
        connection: connectionId,
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
