import {DB} from "../database";

const pollMap = {}

export const pollDao = {

    findByIdWithDetails(
        pollId
    ) {
        return new Promise((resolve) => {
            let poll = pollMap[pollId];

            if (poll
                || pollId == 0
            ) {
                resolve(poll)
                return
            }

            poll = DB.polls.filter((poll) => pollId == poll.id)[0]

            for (const pollDimensionDirection of poll.pollsDimensionsDirections) {
                let currentDimensionDirection
                pollDimensionDirection.dimensionDirection = DB.dimensionDirections.filter((dimensionDirection) => {
                    if (dimensionDirection.id === pollDimensionDirection.dimensionDirection.id) {
                        currentDimensionDirection = dimensionDirection
                        return true
                    }
                })[0]

                currentDimensionDirection.dimension = DB.dimensions.filter((dimension) =>
                    dimension.id === currentDimensionDirection.dimension.id
                )[0]

                currentDimensionDirection.direction = DB.directions.filter((direction) =>
                    direction.id === currentDimensionDirection.direction.id
                )[0]
            }

            pollMap[pollId] = poll

            resolve(poll)
        })
    },

    addTemp(
        poll
    ) {
        pollMap[0] = poll
    }

}
