import {DI}       from '@airport/di'
import {
	IVote,
	Poll_Id
}                 from '@votecube/model'
import {VOTE_DAO} from '../../tokens'

export interface IVoteDao {

	findMyVoteForPoll(
		pollId: Poll_Id
	): Promise<IVote>

	//
	// findVoteForPoll(
	// 	pollId: Poll_Id,
	// 	email: string
	// ): Promise<IVoteDso>
	//
	// save(
	// 	vote: IVoteDso
	// ): Promise<void>

}

export class VoteDao
	implements IVoteDao {

	async findMyVoteForPoll(
		pollId: Poll_Id
	): Promise<IVote> {
		// 	// const pollDao = await DI.get(POLL_DAO)
		//
		// 	// const poll = await pollDao.getOriginalDetails(pollId)
		// 	//
		// 	// if (!poll) {
		// 		return null
		// 	// }
		//
		return this.getDummy(
			// poll
		)
	}

	//
	// async findVoteForPoll(
	// 	pollId: Poll_Id,
	// 	email: string
	// ): Promise<IVoteDso> {
	// 	return null
	//
	// 	// let a: QActor
	// 	// let u: QUser
	// 	// let v: QVote
	// 	// return await this.db.findOne.graph({
	// 	// 	from: [
	// 	// 		v = this.db.from,
	// 	// 		a = v.actor.innerJoin(),
	// 	// 		u = a.user.innerJoin()
	// 	// 	],
	// 	// 	select: {
	// 	// 		...this.db.duo.select.fields,
	// 	// 		factors: {}
	// 	// 	},
	// 	// 	where: and(
	// 	// 		v.poll.id.equals(pollId),
	// 	// 		u.uniqueId.equals(email)
	// 	// 	)
	// 	// })
	// }
	//
	// async save(
	// 	vote: IVoteDso
	// ): Promise<void> {
	// 	return
	// }
	//
	private getDummy(
		// poll: IPoll
	): IVote {
		return {
			// poll,
			1: new Vote(1, 'A', 33),
			2: new Vote(2, 'A', 34),
			3: new Vote(3, 'B', 33)
		}
	}

}

class Vote {

	constructor(
		public factorNumber,
		public _theOutcome,
		public value
	) {
	}

	get outcome() {
		return this._theOutcome
	}

	set outcome(outcome) {
		this._theOutcome = outcome
	}
}

DI.set(VOTE_DAO, VoteDao)
