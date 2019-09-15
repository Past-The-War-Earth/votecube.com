import {and}      from '@airport/air-control'
import {DI}       from '@airport/di'
import {QActor}   from '@airport/holding-pattern'
import {QUser}    from '@airport/travel-document-checkpoint'
import {Poll_Id}  from '../../ddl/ddl'
import {VOTE_DAO} from '../../diTokens'
import {
	BaseVoteDao,
	IBaseVoteDao,
	IVote,
	QVote
}                 from '../../generated/generated'

export interface IVoteDao
	extends IBaseVoteDao {

	findMyVoteForPoll(
		pollId: Poll_Id
	): Promise<IVote>

	findVoteForPoll(
		pollId: Poll_Id,
		email: string
	): Promise<IVote>

}

export class VoteDao
	extends BaseVoteDao
	implements IVoteDao {

	async findMyVoteForPoll(
		pollId: Poll_Id
	): Promise<IVote> {
		return await this.findVoteForPoll(pollId, 'russoturisto@gmail.com')
	}

	async findVoteForPoll(
		pollId: Poll_Id,
		email: string
	): Promise<IVote> {
		let a: QActor
		let u: QUser
		let v: QVote
		return await this.db.findOne.graph({
			from: [
				v = this.db.from,
				a = v.actor.innerJoin(),
				u = a.user.innerJoin()
			],
			select: {
				...this.db.duo.select.fields,
				factors: {}
			},
			where: and(
				v.poll.id.equals(pollId),
				u.uniqueId.equals(email)
			)
		})
	}

}

DI.set(VOTE_DAO, VoteDao)
