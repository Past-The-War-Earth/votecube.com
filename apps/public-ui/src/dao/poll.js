import {
	DB,
	SEQUENCES
} from "../database";

const pollMap     = {}
const tempPollMap = {}

export const pollDao = {

	addTemp(
		poll,
		pollId = poll.id
	) {
		tempPollMap[pollId] = poll
	},

	cachePoll(poll) {
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

		pollMap[poll.id] = poll

		return poll
	},

	getAll() {
		return new Promise(resolve => {
			resolve(DB.polls.map(poll => {
				if (pollMap[poll.id]) {
					return poll
				}

				return this.cachePoll(poll)
			}).filter(poll => poll.id))
		})
	},

	findByIdWithDetails(
		pollId
	) {
		pollId = parseInt(pollId)
		return new Promise((resolve) => {
			if (!pollId) {
				resolve(null)
				return
			}
			let poll = pollMap[pollId];

			if (poll) {
				resolve(poll)
				return
			}

			poll = DB.polls.filter((poll) => pollId == poll.id)[0]

			resolve(this.cachePoll(poll))
		})
	},

	getTempPoll(
		pollId
	) {
		return tempPollMap[pollId]
	},

	save(
		poll
	) {
		return new Promise((resolve) => {
			poll.id = ++SEQUENCES.polls
			poll.pollsDimensionsDirections.forEach((
				pollDimensionDirection
			) => {
				pollDimensionDirection.id       = ++SEQUENCES.pollsDimensionsDirections
				const dimensionDirection        = pollDimensionDirection.dimensionDirection;
				dimensionDirection.id           = ++SEQUENCES.dimensionDirections
				dimensionDirection.dimension.id = ++SEQUENCES.dimensions
				dimensionDirection.direction.id = ++SEQUENCES.directions
			})

			pollMap[poll.id] = poll
			DB.polls.push(poll)
			delete tempPollMap[0]

			resolve(poll)
		})
	}

}
