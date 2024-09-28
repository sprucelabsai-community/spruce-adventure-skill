import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
    SpruceEvent,
    SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'

import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import SpruceError from '#spruce/../errors/SpruceError'

export default async (
    event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
    const { stores, target, messageSender, source } = event
    const { adventureId } = target
    const { personId } = source
    const adventures = await stores.getStore('adventures')
    const match = await adventures.findOne({ id: adventureId })

    await adventures.update({ id: adventureId }, { wasReminderSent: true })

    if (!match) {
        throw new SpruceError({
            code: 'NOT_FOUND',
            friendlyMessage: `You can't send a reminder unless you have a current adventure.`,
        })
    }

    await messageSender.sendMessage({
        fromPersonId: personId!,
        groupId: match.target?.groupId,
        message:
            'Hey {{to}}! {{from}} wanted to remind you about their adventure!\n\n"{{what}}" at {{formatDateTimeUntil when}}!',
        context: {
            what: match.what,
            when: match.when,
        },
    })

    return {
        success: true,
    }
}

type EmitPayload =
    SpruceSchemas.Adventure.v2022_09_09.SendReminderEmitTargetAndPayload

type ResponsePayload =
    SpruceSchemas.Adventure.v2022_09_09.SendReminderResponsePayload
