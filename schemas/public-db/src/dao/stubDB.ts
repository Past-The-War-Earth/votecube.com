/*
export async function init() {
	await DI.get(AIR_DB)
	const dbManager = await DI.get(DATABASE_MANAGER)
	await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}
*/

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
		// name: 'Future Burden'
		name: 'Security'
	}, {
		id: 2,
		// name: 'Scientific Proof'
		name: 'Economy'
	}, {
		id: 3,
		// name: 'Personal Impact',
		name: 'Equality',
	}],
	positions: [{
		id: 1,
		// name: ' . . . . . X+',
		// name: 'We are shifting the burden to future generations'
		name: `Trumps policies reduce military's over extension and let it focus on the real
		threats.`
	}, {
		id: 2,
		// name: ' . . . . . X-',
		// name: ''
		name: `Trump's policies reduce the trust in our alliances and hurt the stability of the
		world.`
	}, {
		id: 3,
		// name: ' . . . . . Y+'
		// name: 'There is enough evidence that climate change is man-made'
		name: `Trump's policies give profound confidence to companies and are good for the
		economy.`
	}, {
		id: 4,
		// name: ' . . . . . Y-'
		// name: ''
		name: `Trump's policies have no real effect on the economy, it's purely cyclical.`
	}, {
		id: 5,
		// name: ' . . . . . Z+'
		// name: ''
		name: `Trump's policies are better for equality because they are fighting the dominance
		of globalism and are bringing the jobs back.`
	}, {
		id: 6,
		// name: ' . . . . . Z-'
		// name: 'I am personally not yet affected by climate change'
		name: `Trump's policies are tailored with the interests of the wealthy in mind and hurt
		equality.`
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
		// name: 'Act now to slow climate change?',
		name: `The effect of Trump's policies`,
		outcomes: [{
			dir: 1,
			id: 1,
			key: 'A',
			outcome: 'Trump\'s policies are generally beneficial.'
		}, {
			dir: -1,
			id: 2,
			key: 'B',
			outcome: 'Trump\'s policies are generally detrimental.'
		}],
		pollsContinents: [{
			continent: {
				id: 'NorthAmerica'
			}
		}],
		pollsFactorsPositions: [{
			axis: 'x',
			color: {
				id: 255 * 256 * 256 + 255 * 256
			},
			factorPosition: {
				id: 1,
			},
			dir: 1,
			id: 1
		}, {
			axis: 'x',
			color: {
				id: 255 * 256 * 256 + 255 * 256
			},
			factorPosition: {
				id: 2,
			},
			dir: -1,
			id: 2
		}, {
			axis: 'y',
			color: {
				id: 184 * 256 * 256 + 55 * 256 + 200
			},
			factorPosition: {
				id: 3,
			},
			dir: 1,
			id: 3
		}, {
			axis: 'y',
			color: {
				id: 184 * 256 * 256 + 55 * 256 + 200
			},
			factorPosition: {
				id: 4,
			},
			dir: -1,
			id: 4

		}, {
			axis: 'z',
			color: {
				id: 253 * 256 * 256 + 120 * 256 + 15
			},
			factorPosition: {
				id: 5,
			},
			dir: 1,
			id: 5
		}, {
			axis: 'z',
			color: {
				id: 253 * 256 * 256 + 120 * 256 + 15
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
