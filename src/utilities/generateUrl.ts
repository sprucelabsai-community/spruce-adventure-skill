import { MercuryClient } from '@sprucelabs/mercury-client'

export default async function generateUrl(client: MercuryClient) {
    const [{ url }] = await client.emitAndFlattenResponses(
        'heartwood.generate-url::v2021_02_11',
        {
            target: {
                skillViewId: 'adventure.list',
            },
        }
    )

    return url
}
