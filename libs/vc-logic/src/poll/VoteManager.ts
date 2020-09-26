import {DI}            from '@airport/di'
import {
	IVote,
	Poll_Id
}                      from '@votecube/ecclesia'
import {APP_CONTAINER} from '../container'
import {
	CONNECTION_MANAGER,
	VOTE_MANAGER
}                      from '../tokens'

export interface IVoteManager {

	getVoteForPoll(
		username: string,
		passwordHash: string,
		pollId: Poll_Id
	): Promise<IVote>

}

export class VoteManager
	implements IVoteManager {

	async getVoteForPoll(
		username: string,
		passwordHash: string,
		pollId: Poll_Id
	): Promise<IVote> {
		const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER)

		return await connectionManager.get('findUserVoteForPoll', {
			passwordHash,
			pollId,
			username
		})
	}

}

DI.set(VOTE_MANAGER, VoteManager)
