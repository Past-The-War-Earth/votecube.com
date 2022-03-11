import type { IUiFactor, IUiIdea } from "@votecube/model"

export function getIdeaFactors(
	idea: IUiIdea,
	axis: 'x' | 'y' | 'z'
): IUiFactor {
	return [idea.factors[1], idea.factors[2], idea.factors[3]].filter(
		factor =>
			factor.axis === axis
	)[0]
}

/*
export function getFactorPositions(
	idea,
	axis
) {
	return getReasons(idea, axis).map((reason) => {
		return reason.factorPosition
	})
}
*/

/*
export function getFactor(
	idea,
	axis
) {
	return getFactorPositions(idea, axis)[0].factor
}
*/

/*export function getColor(
	delta,
	idea,
	axis
) {
	return getGeneralColor(getReasons(idea, axis)[0].color)
}*/

export function getSideText(
	_delta: number,
	mode,
	sutation: IUiIdea,
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
	const factor = getIdeaFactors(sutation, axis)

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