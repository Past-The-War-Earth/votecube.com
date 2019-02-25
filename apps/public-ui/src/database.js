export const SEQUENCES = {
	colors: 3,
	dimensionDescriptions: 3,
	dimensionDirections: 6,
	dimensions: 3,
	directions: 6,
	directionDescriptions: 6,
	labels: 2,
	polls: 1,
	pollDescriptions: 1,
	pollsDimensionsDirections: 3
}

export const DB = {
	dimensionDirections: [{
		dimension: {
			id: 1,
		},
		direction: {
			id: 1
		},
		id: 1
	}, {
		dimension: {
			id: 1,
		},
		direction: {
			id: 2
		},
		id: 2
	}, {
		dimension: {
			id: 2,
		},
		direction: {
			id: 3
		},
		id: 3
	}, {
		dimension: {
			id: 2,
		},
		direction: {
			id: 4
		},
		id: 4
	}, {
		dimension: {
			id: 3,
		},
		direction: {
			id: 5
		},
		id: 5
	}, {
		dimension: {
			id: 3,
		},
		direction: {
			id: 6
		},
		id: 6
	}],
	dimensions: [{
		id: 1,
		name: 'Security'
	}, {
		id: 2,
		name: 'Economy'
	}, {
		id: 3,
		name: 'Equality',
	}],
	directions: [{
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
				"id": "NorthAmerica"
			}
		}],
		pollsDimensionsDirections: [{
			axis: 'x',
			color: {
				id: 255 * 256 * 256
			},
			dimensionDirection: {
				id: 1,
			},
			dir: 1,
			id: 1
		}, {
			axis: 'x',
			color: {
				id: 255 * 256 * 256
			},
			dimensionDirection: {
				id: 2,
			},
			dir: -1,
			id: 2
		}, {
			axis: 'y',
			color: {
				id: 255 * 256 * 256 + 255 * 256
			},
			dimensionDirection: {
				id: 3,
			},
			dir: 1,
			id: 3
		}, {
			axis: 'y',
			color: {
				id: 255 * 256 * 256 + 255 * 256
			},
			dimensionDirection: {
				id: 4,
			},
			dir: -1,
			id: 4

		}, {
			axis: 'z',
			color: {
				id: 255 * 256
			},
			dimensionDirection: {
				id: 5,
			},
			dir: 1,
			id: 5
		}, {
			axis: 'z',
			color: {
				id: 255 * 256
			},
			dimensionDirection: {
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
