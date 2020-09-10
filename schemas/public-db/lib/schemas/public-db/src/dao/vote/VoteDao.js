"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../../tokens");
class VoteDao {
    async findMyVoteForPoll(pollId) {
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
        );
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
    getDummy(
    // poll: IPoll
    ) {
        return {
            // poll,
            1: new Vote(1, 'A', 33),
            2: new Vote(2, 'A', 34),
            3: new Vote(3, 'B', 33)
        };
    }
}
exports.VoteDao = VoteDao;
class Vote {
    constructor(factorNumber, _theOutcome, value) {
        this.factorNumber = factorNumber;
        this._theOutcome = _theOutcome;
        this.value = value;
    }
    get outcome() {
        return this._theOutcome;
    }
    set outcome(outcome) {
        this._theOutcome = outcome;
    }
}
di_1.DI.set(tokens_1.VOTE_DAO, VoteDao);
//# sourceMappingURL=VoteDao.js.map