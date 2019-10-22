export function dtoToForm(
	poll,
	// positionMap
) {
	const themeDto = poll.theme
	const theme    = {
		id: themeDto.id,
		text: themeDto.name
	}

	const outcomes = poll.outcomes

	// const pollsContinents = poll.pollsContinents
	// 	? poll.pollsContinents
	// 	: []
	// const pollsCountries  = poll.pollsCountries
	// 	? poll.pollsCountries
	// 	: []
	// const pollsStates     = poll.pollsStates
	// 	? poll.pollsStates
	// 	: []
	// const pollsTowns      = poll.pollsTowns
	// 	? poll.pollsTowns
	// 	: []

	outcomes.sort((
		outcome1,
		outcome2
	) => outcome1.key > outcome2.key)

	return {
		// ageSuitability: poll.ageSuitability,
		factors: {
			first: getDimForm(getPollFactorPositionDtos(poll, 1)
				// , positionMap
			),
			second: getDimForm(getPollFactorPositionDtos(poll, 2)
				// , positionMap
			),
			third: getDimForm(getPollFactorPositionDtos(poll, 3)
				// , positionMap
			)
		},
		// labels: poll.pollsLabels.map(pollLabel => ({
		// 	id: pollLabel.label.id,
		// 	text: pollLabel.label.name
		// })),
		// locations: {
		// 	continents: pollsContinents.map(pollContinent =>
		// 		pollContinent.continent),
		// 	countries: pollsCountries.map(pollCountry =>
		// 		pollCountry.country),
		// 	states: pollsStates.map(pollState =>
		// 		pollState.state),
		// 	cities: pollsTowns.map(pollTown =>
		// 		pollTown.town)
		// },
		name: poll.name,
		outcomes: {
			A: outcomes.length ? outcomes[0].outcome : '',
			B: outcomes.length ? outcomes[1].outcome : '',
		},
		theme,
		// timeframe: {
		// 	endDate: poll.endDate,
		// 	startDate: poll.startDate
		// }
	}
}

function getPollFactorPositionDtos(
	poll,
	factorIndex
) {
	return poll.pollFactorPositions.filter(
		pollFactorPosition =>
			// FIXME: dto factorIndex (from DB) is a string, convert to number
			factorIndex == pollFactorPosition.factorIndex
	)
}

function getDimForm(
	pollFactorPositions,
	// positionMap
) {
	const color = pollFactorPositions[0].color
	let positionA,
	    positionB

	pollFactorPositions.forEach(
		pollFactorPosition => {
			const position = pollFactorPosition.factorPosition.position
			if (pollFactorPosition.outcome === 'A') {
				positionA = position.name
			} else {
				positionB = position.name
			}
			// positionMap[pollFactorPosition.factorIndex][pollFactorPosition.outcome] = {
			// 	dir: pollFactorPosition.dir,
			// 	axis: pollFactorPosition.axis
			// }
		})
	return {
		color: {
			...color,
			name: ''
		},
		name: pollFactorPositions[0].factorPosition.factor.name,
		positions: {
			A: positionA,
			B: positionB,
		}
	}
}