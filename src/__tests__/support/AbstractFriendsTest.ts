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

	protected static teammateId(idx: number) {
		return this.fakedTeammates[idx].id
	}

	protected static get myId() {
		return this.fakedPerson.id
	}

	protected static async connect(teammateIdx: number) {
		const id = this.teammateId(teammateIdx)
		await this.createConnection(this.myId, id)
		return id
	}
}
