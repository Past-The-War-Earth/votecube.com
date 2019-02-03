import {DB} from "../database";

const pollMap = {}

export const pollDao = {

    findByIdWithDetails(
        pollId
    ) {
        return new Promise((resolve) => {
            let poll = pollMap[pollId];

            if (poll) {
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

                dimensionDirection.dimension = DB.dimensions.filter((dimension) =>
                    dimension.id === dimensionDirection.dimension.id
                )[0]

                dimensionDirection.direction = DB.directions.filter((direction) =>
                    direction.id === dimensionDirection.direction.id
                )[0]
            }

            pollMap[pollId] = poll

            resolve(poll)
        })
    }

}
