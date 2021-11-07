import type { IUiFactor, IUiSituation } from "@votecube/model"

export function getSituationFactors(
	situation: IUiSituation,
	axis: 'x' | 'y' | 'z'
): IUiFactor {
	return [situation.factors[1], situation.factors[2], situation.factors[3]].filter(
		factor =>
			factor.axis === axis
	)[0]
}

/*
export function getFactorPositions(
	situation,
	axis
) {
	return getSituationFactorPositions(situation, axis).map((situationFactorPosition) => {
		return situationFactorPosition.factorPosition
	})
}
*/

/*
export function getFactor(
	situation,
	axis
) {
	return getFactorPositions(situation, axis)[0].factor
}
*/

/*export function getColor(
	delta,
	situation,
	axis
) {
	return getGeneralColor(getSituationFactorPositions(situation, axis)[0].color)
}*/

export function getSideText(
	_delta: number,
	mode,
	sutation: IUiSituation,
	axis: 'x' | 'y' | 'x',
	dir: -1 | 1,
	defaultDir
) {
	if (defaultDir && !dir) {
		dir = defaultDir
	}
	if (!dir) {
		return ''
	}
	const factor = getSituationFactors(sutation, axis)

	const position = [factor.positions.A, factor.positions.B].filter(
		position =>
			position.dir === dir
	)[0]

	switch (mode) {
		case 'confirm':
			return factor.name
		case 'cube':
			return position.name
		default:
			return `${factor.name}: ${position.name}`
	}
}