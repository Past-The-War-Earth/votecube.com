import {DI}      from '@airport/di'
import {
	POLL_DAO,
	VOTE_DAO
}                from '../../diTokens'
import {
	IPoll,
	IVote
}                from '../../generated/generated'
import {Poll_Id} from '../../../../relational-db/src/types/poll/Poll'

export interface IVoteDao
	// extends IBaseVoteDao
{

	findMyVoteForPoll(
		pollId: Poll_Id
	): Promise<IVote>

	findVoteForPoll(
		pollId: Poll_Id,
		email: string
	): Promise<IVote>

	save(
		vote: IVote
	): Promise<void>

}

export class VoteDao
	// extends BaseVoteDao
	implements IVoteDao {

	async findMyVoteForPoll(
		pollId: Poll_Id
	): Promise<IVote> {
		// const pollDao = await DI.get(POLL_DAO)

		// const poll = await pollDao.getOriginalDetails(pollId)
		//
		// if (!poll) {
		// 	return null
		// }

		return this.getDummy(
			// poll
		)
	}

	async findVoteForPoll(
		pollId: Poll_Id,
		email: string
	): Promise<IVote> {
		return null

		// let a: QActor
		// let u: QUser
		// let v: QVote
		// return await this.db.findOne.graph({
		// 	from: [
		// 		v = this.db.from,
		// 		a = v.actor.innerJoin(),
		// 		u = a.user.innerJoin()
		// 	],
		// 	select: {
		// 		...this.db.duo.select.fields,
		// 		factors: {}
		// 	},
		// 	where: and(
		// 		v.poll.id.equals(pollId),
		// 		u.uniqueId.equals(email)
		// 	)
		// })
	}

	async save(
		vote: IVote
	): Promise<void> {
		return
	}

	private getDummy(
		// poll: IPoll
	): IVote {
		return {
			// poll,
			x: {
				axis: 'x',
				dir: 1,
				value: 33
			},
			y: {
				axis: 'y',
				dir: 1,
				value: 34
			},
			z: {
				axis: 'z',
				dir: -1,
				value: 33
			}
		} as any
	}

}

DI.set(VOTE_DAO, VoteDao)
