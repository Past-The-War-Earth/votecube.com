import {DB} from "../database";

export const pollDao = {

    findByIdWithDetails(
        pollId
    ) {
        return new Promise((resolve) => {

            const poll = DB.polls.filter((poll) => pollId == poll.id)[0]

            const dimensions = []
            for (const pollDimension of poll.pollDimensions) {
                pollDimension.dimension = DB.dimensions.filter((dimension) =>
                    pollDimension.dimension.id === dimension.id)[0]
            }

            resolve(poll)
        })
    }

}
