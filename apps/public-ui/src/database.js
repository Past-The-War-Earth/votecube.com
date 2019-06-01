import {DI}               from '@airport/di'
import {BOGUS}            from '@airport/tarmaq'
import {DATABASE_MANAGER} from '@airport/terminal'
import {StoreType}        from '@airport/terminal-map'
import {VOTE_DAO}         from '@votecube/public-db'

export async function init() {
	const a         = BOGUS
	const dbManager = await DI.getP(DATABASE_MANAGER)
	await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA)
}

export async function setupCubeView(
	mode,
	pollId,
	page
) {
	const [
		      setPositionDataAndMove,
		      voteDao
	      ] = await Promise.all([
		loadCubeLogic(this, () => {
			page.set({delta: this.get().delta + 1})
		}),
		DI.getP(VOTE_DAO)
	])

	const vote = await voteDao.findMyVoteForPoll(pollId)

	if (!vote) {
		if (pollId === 0) {
			routes.navigateToPage(routes.POLL_INFO_MAIN)
		}
		return
	}
	const poll = vote.poll
	page.set({mode, poll, vote})
	setPositionDataAndMove(vote)

	page.store.set({
		pageTitle: poll.name
	})
}

export const SEQUENCES = {
	colors: 3,
	factorDescriptions: 3,
	factorPositions: 6,
	factors: 3,
	labels: 2,
	pollDescriptions: 1,
	polls: 1,
	pollsFactorsPositions: 3,
	positionDescriptions: 6,
	positions: 6,
}

export const DB = {
	factorPositions: [{
		factor: {
			id: 1,
		},
		position: {
			id: 1
		},
		id: 1
	}, {
		factor: {
			id: 1,
		},
		position: {
			id: 2
		},
		id: 2
	}, {
		factor: {
			id: 2,
		},
		position: {
			id: 3
		},
		id: 3
	}, {
		factor: {
			id: 2,
		},
		position: {
			id: 4
		},
		id: 4
	}, {
		factor: {
			id: 3,
		},
		position: {
			id: 5
		},
		id: 5
	}, {
		factor: {
			id: 3,
		},
		position: {
			id: 6
		},
		id: 6
	}],
	factors: [{
		id: 1,
		name: 'Security'
	}, {
		id: 2,
		name: 'Economy'
	}, {
		id: 3,
		name: 'Equality',
	}],
	positions: [{
		id: 1,
		// name: ' . . . . . X+'
		name: 'Trumps policies reduce military\'s over extension and let it focus on the real threats.'
	}, {
		id: 2,
		// name: ' . . . . . X-'
		name: 'Trump\'s policies reduce the trust in our alliances and hurt the stability of the world.'
	}, {
		id: 3,
		// name: ' . . . . . Y+'
		name: 'Trump\'s policies give profound confidence to companies and are good for the economy.'
	}, {
		id: 4,
		// name: ' . . . . . Y-'
		name: 'Trump\'s policies have no real effect on the economy, it\'s purely cyclical.'
	}, {
		id: 5,
		// name: ' . . . . . Z+'
		name: 'Trump\'s policies are better for equality because they are fighting the dominance of globalism and are bringing the jobs back.'
	}, {
		id: 6,
		// name: ' . . . . . Z-'
		name: 'Trump\'s policies are tailored with the interests of the wealthy in mind and hurt equality.'
	}],
	labels: [{
		id: 1,
		text: 'Integration'
	}, {
		id: 2,
		text: 'Trump'
	}],
	polls: [{
		endDate: new Date(new Date().getTime() + 3600000 * 75),
		id: 1,
		name: 'Trump\'s policies',
		pollsContinents: [{
			continent: {
				'id': 'NorthAmerica'
			}
		}],
		pollsFactorsPositions: [{
			axis: 'x',
			color: {
				id: 255 * 256 * 256
			},
			factorPosition: {
				id: 1,
			},
			dir: 1,
			id: 1
		}, {
			axis: 'x',
			color: {
				id: 255 * 256 * 256
			},
			factorPosition: {
				id: 2,
			},
			dir: -1,
			id: 2
		}, {
			axis: 'y',
			color: {
				id: 255 * 256 * 256 + 255 * 256
			},
			factorPosition: {
				id: 3,
			},
			dir: 1,
			id: 3
		}, {
			axis: 'y',
			color: {
				id: 255 * 256 * 256 + 255 * 256
			},
			factorPosition: {
				id: 4,
			},
			dir: -1,
			id: 4

		}, {
			axis: 'z',
			color: {
				id: 255 * 256
			},
			factorPosition: {
				id: 5,
			},
			dir: 1,
			id: 5
		}, {
			axis: 'z',
			color: {
				id: 255 * 256
			},
			factorPosition: {
				id: 6,
			},
			dir: -1,
			id: 6
		}],
		pollsLabels: [],
		startDate: new Date(new Date().getTime() + 3600000 * 25),
		theme: {
			id: 1,
			name: 'Politics'
		}
	}]
}
