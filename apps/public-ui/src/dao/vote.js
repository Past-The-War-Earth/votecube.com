import {pollDao} from "./poll";

const voteMap = {}

export const voteDao = {

    findMyVoteForPoll(
        pollId
    ) {
        return new Promise((resolve) => {
            let vote = voteMap[pollId]
            if (vote) {
                resolve(vote)
                return
            }

            return pollDao.findByIdWithDetails(pollId).then(poll => {
                vote = {
                    poll,
                    x: {
                        axis: 'x',
                        dir: 1,
                        value: 0
                    },
                    y: {
                        axis: 'y',
                        dir: 1,
                        value: 100
                    },
                    z: {
                        axis: 'z',
                        dir: 1,
                        value: 0
                    }
                }

                voteMap[pollId] = vote

                resolve(vote)
            })
        })
    }

}
