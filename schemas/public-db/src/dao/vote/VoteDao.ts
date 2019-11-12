import {DI}      from '@airport/di'
import {PollKey} from '@votecube/model'
import {
	POLL_DAO,
	VOTE_DAO
}                from '../../diTokens'

export interface IVoteDao
	// extends IBaseVoteDao
{

	// findMyVoteForPoll(
	// 	pollKey: Poll_Key
	// ): Promise<IVoteDso>
	//
	// findVoteForPoll(
	// 	pollKey: Poll_Key,
	// 	email: string
	// ): Promise<IVoteDso>
	//
	// save(
	// 	vote: IVoteDso
	// ): Promise<void>

}

export class VoteDao
	// extends BaseVoteDao
	implements IVoteDao {

	// async findMyVoteForPoll(
	// 	pollKey: Poll_Key
	// ): Promise<IVoteDso> {
	// 	// const pollDao = await DI.get(POLL_DAO)
	//
	// 	// const poll = await pollDao.getOriginalDetails(pollId)
	// 	//
	// 	// if (!poll) {
	// 	// 	return null
	// 	// }
	//
	// 	return this.getDummy(
	// 		// poll
	// 	)
	// }
	//
	// async findVoteForPoll(
	// 	pollId: Poll_Key,
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
	// private getDummy(
	// 	// poll: IPoll
	// ): IVoteDso {
	// 	return {
	// 		// poll,
	// 		x: {
	// 			axis: 'x',
	// 			dir: 1,
	// 			value: 33
	// 		},
	// 		y: {
	// 			axis: 'y',
	// 			dir: 1,
	// 			value: 34
	// 		},
	// 		z: {
	// 			axis: 'z',
	// 			dir: -1,
	// 			value: 33
	// 		}
	// 	} as any
	// }

}

DI.set(VOTE_DAO, VoteDao)
