import {ValuesOutCallback} from './cube/cubeMovement'
import {MutationApi}       from './cube/mutation/MutationApi'

export async function setViewImport(
	cb?: ValuesOutCallback
): Promise<MutationApi> {
	const eventListener = await import ('./cube/eventListener')

	return eventListener.setViewPort(cb)
}

export {IMutationApi} from './cube/mutation/MutationApi'
export {ZoomIndex}    from './cube/cubeMoveMatrix'
export {
	DimensionPercentages,
	PositionPercentages,
	Direction,
	PositionPercent
}                     from './cube/cubeMovement'
export {
	Dimension
}                     from './cube/Viewport'