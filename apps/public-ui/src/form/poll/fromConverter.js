export function formToDto(
	formValue
) {
	const factors        = formValue.factors
	const formThemeValue = formValue.theme
	// const locations      = formValue.locations
	const outcomes       = formValue.outcomes

	return {
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
			...get2PollFactorPositions('y', factors.first),
			...get2PollFactorPositions('z', factors.second),
			...get2PollFactorPositions('x', factors.third)
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
			key: 'A',
			outcome: outcomes.A
		}, {
			key: 'B',
			outcome: outcomes.B
		}],
		theme: {
			id: formThemeValue ? formThemeValue.id : null,
			name: formThemeValue ? formThemeValue.text : ''
		}
	}
}

function get2PollFactorPositions(
	axis,
	factorFormValue
) {
	const {color, factor} = getDimDto(factorFormValue)

	let aDir = factorFormValue.positions.A
	let bDir = factorFormValue.positions.B

	return [
		getPollFactorPositionDto(axis, factor, 1, aDir, color, 1),
		getPollFactorPositionDto(axis, factor, -1, bDir, color, -1)
	]
}

function getPollFactorPositionDto(
	axis,
	factor,
	dir,
	name,
	color,
	outcome
) {
	return {
		axis,
		color,
		factorPosition: {
			factor,
			position: {
				name
			}
		},
		dir,
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
			id: red * 256 * 256 + green * 256 + blue,
			red,
			green,
			blue
		},
		factor: {
			name: formFactor.name
		}
	}
}
