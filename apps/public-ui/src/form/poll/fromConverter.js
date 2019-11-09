export function formToDto(
	formValue,
	// positionMap
) {
	const factors        = formValue.factors
	const formThemeValue = formValue.theme
	// const locations      = formValue.locations
	const outcomes       = formValue.outcomes

	// let ageSuitability = formValue.ageSuitability
	//
	// if (ageSuitability.length > 0) {
	// 	ageSuitability = parseInt(ageSuitability)
	// }

	return {
		// ageSuitability,
		// endDate: formValue.timeframe.endDate,
		id: formValue.id ? formValue.id : 0,
		name: formValue.name,
		// startDate: formValue.timeframe.startDate,
		// pollsContinents: locations.continents.map((continent) => ({
		// 	continent
		// })),
		// pollsCountries: locations.countries.map((country) => ({
		// 	country
		// })),
		pollFactorPositions: [
			...get2PollFactorPositions(1, factors.first),
			...get2PollFactorPositions(2, factors.second),
			...get2PollFactorPositions(3, factors.third)
		],
		// pollsLabels: formValue.labels.map(label => ({
		// 	label: {
		// 		id: label.id,
		// 		name: label.text
		// 	},
		// 	poll: {}
		// })),
		// pollsStates: locations.states.map((state) => ({
		// 	state
		// })),
		// pollsTowns: locations.cities.map((town) => ({
		// 	town
		// })),
		outcomes: [{
			ordinal: 'A',
			outcome: outcomes.A
		}, {
			ordinal: 'B',
			outcome: outcomes.B
		}],
		theme: {
			id: formThemeValue ? formThemeValue.id : null,
			name: formThemeValue ? formThemeValue.text : ''
		}
	}
}

function get2PollFactorPositions(
	factorIndex,
	factorFormValue,
) {
	const {color, factor} = getDimDto(factorFormValue)

	let aDir = factorFormValue.positions.A
	let bDir = factorFormValue.positions.B

	return [
		getPollFactorPositionDto(factorIndex, factor, 'A', aDir, color),
		getPollFactorPositionDto(factorIndex, factor, 'B', bDir, color)
	]
}

function getPollFactorPositionDto(
	factorIndex,
	factor,
	outcome,
	name,
	color,
	// positionMap
) {
	// const position = positionMap[factorIndex][outcome]
	return {
		// axis: position.axis,
		color,
		// dir: position.dir,
		factorIndex,
		factorPosition: {
			factor,
			position: {
				name
			}
		},
		outcome
	}

}

function getDimDto(
	formFactor
) {
	let picker = formFactor.color

	const red   = parseInt(picker.red)
	const green = parseInt(picker.green)
	const blue  = parseInt(picker.blue)

	return {
		color: {
			red,
			green,
			blue
		},
		factor: {
			name: formFactor.name
		}
	}
}
