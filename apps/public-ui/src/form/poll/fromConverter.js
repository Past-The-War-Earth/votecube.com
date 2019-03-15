export function formToDto(
	formValue
) {
	const factors     = formValue.factors
	const formThemeValue = formValue.theme
	const locations      = formValue.locations

	return {
		endDate: formValue.timeframe.endDate,
		id: formValue.id ? formValue.id : 0,
		name: formValue.name,
		startDate: formValue.timeframe.startDate,
		pollsContinents: locations.continents.map((continent) => ({
			continent
		})),
		pollsCountries: locations.countries.map((country) => ({
			country
		})),
		pollsFactorsPositions: [
			...get2PollFactorPositions('y', factors.first),
			...get2PollFactorPositions('z', factors.second),
			...get2PollFactorPositions('x', factors.third)
		],
		pollsLabels: formValue.labels.map(label => ({
			label: {
				id: label.id,
				name: label.text
			},
			poll: {}
		})),
		pollsStates: locations.states.map((state) => ({
			state
		})),
		pollsTowns: locations.cities.map((town) => ({
			town
		})),
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

	let topDir    = factorFormValue.topPosition
	let bottomDir = factorFormValue.bottomPosition

	return [
		getPollFactorPositionDto(axis, factor, 1, topDir.name, color),
		getPollFactorPositionDto(axis, factor, -1, bottomDir.name, color)
	]
}

function getPollFactorPositionDto(
	axis,
	factor,
	dir,
	name,
	color
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
	}

}

function getDimDto(
	formFactor
) {
	let picker = formFactor.color.picker

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
