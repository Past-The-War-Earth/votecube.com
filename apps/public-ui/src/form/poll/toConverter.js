import {getRGB} from "../../helpers/general";

export function dtoToForm(
	poll
) {
	const themeDto = poll.theme
	const theme    = {
		id: themeDto.id,
		text: themeDto.name
	}

	const pollsContinents = poll.pollsContinents
		? poll.pollsContinents
		: []
	const pollsCountries  = poll.pollsCountries
		? poll.pollsCountries
		: []
	const pollsStates     = poll.pollsStates
		? poll.pollsStates
		: []
	const pollsTowns      = poll.pollsTowns
		? poll.pollsTowns
		: []

	return {
		factors: {
			first: getDimForm(getPollFactorPositionDtos(poll, 'y')),
			second: getDimForm(getPollFactorPositionDtos(poll, 'z')),
			third: getDimForm(getPollFactorPositionDtos(poll, 'x'))
		},
		labels: poll.pollsLabels.map(pollLabel => ({
			id: pollLabel.label.id,
			text: pollLabel.label.name
		})),
		locations: {
			continents: pollsContinents.map(pollContinent =>
				pollContinent.continent),
			countries: pollsCountries.map(pollCountry =>
				pollCountry.country),
			states: pollsStates.map(pollState =>
				pollState.state),
			cities: pollsTowns.map(pollTown =>
				pollTown.town)
		},
		name: poll.name,
		theme,
		timeframe: {
			endDate: poll.endDate,
			startDate: poll.startDate
		}
	}
}

function getPollFactorPositionDtos(
	poll,
	axis
) {
	return poll.pollsFactorsPositions.filter(pollFactorPosition =>
		axis === pollFactorPosition.axis
	)
}

function getDimForm(
	pollFactorPositions
) {
	const color = pollFactorPositions[0].color
	let bottomPosition, topPosition

	pollFactorPositions.forEach(pollFactorPosition => {
		const position = pollFactorPosition.factorPosition.position
		if (pollFactorPosition.dir === 1) {
			topPosition = position
		} else {
			bottomPosition = position
		}
	})
	return {
		bottomPosition,
		color: {
			picker: {
				...getRGB(pollFactorPositions[0].color),
				name: ''
			}
		},
		name: pollFactorPositions[0].factorPosition.factor.name,
		topPosition
	}
}