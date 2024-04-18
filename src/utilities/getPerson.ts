import { MercuryClient } from '@sprucelabs/mercury-client'

export default async function getPerson(
    client: MercuryClient,
    personId: string
) {
    const [{ person }] = await client.emitAndFlattenResponses(
        'get-person::v2020_12_25',
        {
            target: {
                personId,
            },
        }
    )

    return person
}
