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
		for (const pollFactorPosition of poll.pollsFactorsPositions) {
			let currentFactorPosition
			pollFactorPosition.factorPosition = DB.factorPositions.filter((factorPosition) => {
				if (factorPosition.id === pollFactorPosition.factorPosition.id) {
					currentFactorPosition = factorPosition
					return true
				}
			})[0]

			currentFactorPosition.factor = DB.factors.filter((factor) =>
				factor.id === currentFactorPosition.factor.id
			)[0]

			currentFactorPosition.position = DB.positions.filter((position) =>
				position.id === currentFactorPosition.position.id
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
			poll.pollsFactorsPositions.forEach((
				pollFactorPosition
			) => {
				pollFactorPosition.id       = ++SEQUENCES.pollsFactorsPositions
				const factorPosition        = pollFactorPosition.factorPosition;
				factorPosition.id           = ++SEQUENCES.factorPositions
				factorPosition.factor.id = ++SEQUENCES.factors
				factorPosition.position.id = ++SEQUENCES.positions
			})

			pollMap[poll.id] = poll
			DB.polls.push(poll)
			delete tempPollMap[0]

			resolve(poll)
		})
	}

}
