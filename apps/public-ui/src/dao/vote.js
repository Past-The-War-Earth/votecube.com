import {pollDao} from "./poll";

const voteMap = {}

export const voteDao = {

    findMyVoteForPoll(
        pollId
    ) {
        return new Promise((resolve) => {
            let vote = voteMap[pollId]
            if(vote) {
                resolve(vote)
                return
            }

            vote = {
                poll,
                x: {
                    dir: 1,
                    value: 0
                },
                y: {
                    dir: 1,
                    value: 100
                },
                z: {
                    dir: 1,
                    value: 0
                }
            }

            pollDao.findByIdWithDetails(pollId)

            resolve(vote)
        })
    }

}
