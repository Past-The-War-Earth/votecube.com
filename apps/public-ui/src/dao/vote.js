import {pollDao} from "./poll";

const voteMap = {}

export const voteDao = {

    addTempForPoll(
        poll,
        pollId = poll.id
    ) {
        const tempVote = this.getDummy(poll)

        voteMap[pollId] = tempVote
    },
    findMyVoteForPoll(
        pollId
    ) {
        pollId = parseInt(pollId)
        return new Promise((resolve) => {
            if(!pollId) {
                resolve(null)
                return
            }

            let vote = voteMap[pollId]
            if (vote) {
                resolve(vote)
                return
            }

            return pollDao.findByIdWithDetails(pollId).then(poll => {
                vote = this.getDummy(poll)

                voteMap[pollId] = vote

                resolve(vote)
            })
        })
    },
    getDummy(
        poll
    ) {
        return {
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
    }
}
