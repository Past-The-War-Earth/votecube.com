import {DI}            from '@airport/di'
import {
	IPoll,
	IVote,
	Poll_Id
} from '@votecube/ecclesia'
import {IVote as UIVote} from '@votecube/model'
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
	): Promise<UIVote>

	saveVote(
		poll: IPoll
	): Promise<void>

}

export class VoteManager
	implements IVoteManager {

	async getVoteForPoll(
		username: string,
		passwordHash: string,
		pollId: Poll_Id
	): Promise<UIVote> {
		const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER)

		if(!pollId) {
			return this.getStubVote()
		}

		return await connectionManager.get('findUserVoteForPoll', {
			passwordHash,
			pollId,
			username
		})
	}

	async saveVote(
		poll: IPoll
	): Promise<void> {

	}

	private getStubVote(): UIVote {
		return {
			1: {
				factorNumber: 1,
				outcome: 'A',
				value: 33
			},
			2: {
				factorNumber: 2,
				outcome: 'A',
				value: 33
			},
			3: {
				factorNumber: 2,
				outcome: 'B',
				value: 34
			}
		}
	}

	private dbToUi(
		vote: IVote
	): UIVote {
		return null
	}

	private uiToDb(
		vote: UIVote
	): IVote {
		return null
	}

}

DI.set(VOTE_MANAGER, VoteManager)
