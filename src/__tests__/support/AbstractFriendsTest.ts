import AbstractAdventureTest from './AbstractAdventureTest'

export default class AbstractFriendsTest extends AbstractAdventureTest {
	protected static async createConnection(
		sourceId: string,
		targetId?: string,
		isConfirmed = true
	) {
		const { id } = await this.connections.createOne({
			source: { personId: sourceId },
			target: targetId ? { personId: targetId } : null,
			isConfirmed,
		})

		return id
	}
}
