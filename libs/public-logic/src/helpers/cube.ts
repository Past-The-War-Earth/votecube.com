import {
	IPoll,
	PollFactorPositionVariation_Axis
}                                    from '@votecube/public-db'
import {getColorHexString} from './general'

export function getPollFactorPositions(
	poll: IPoll,
	axis: PollFactorPositionVariation_Axis
) {
	return (poll as any).pollsFactorsPositions.filter(
		pollsFactorPosition =>
			pollsFactorPosition.axis === axis
	)
}

/*
export function getFactorPositions(
    poll,
    axis
) {
    return getPollFactorPositions(poll, axis).map((pollFactorPosition) => {
        return pollFactorPosition.factorPosition
    })
}
*/

/*
export function getFactor(
    poll,
    axis
) {
    return getFactorPositions(poll, axis)[0].factor
}
*/

export function getColor(
	delta,
	poll,
	axis: PollFactorPositionVariation_Axis
) {
	return getColorHexString(getPollFactorPositions(poll, axis)[0].color)
}

export function getSideText(
	delta,
	mode,
	poll,
	axis,
	dir
) {
	const pollFactorPositions = getPollFactorPositions(poll, axis)

	const factorPosition = pollFactorPositions.filter(
		pollFactorPosition =>
			pollFactorPosition.dir === dir
	)[0].factorPosition

	switch (mode) {
		case 'confirm':
			return factorPosition.factor.name
		case 'cube':
			return factorPosition.position.name
		default:
			return `${factorPosition.factor.name}: ${factorPosition.position.name}`
	}
}
