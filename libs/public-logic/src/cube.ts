import {
	IEventListenerFile,
	IMutationApi,
	IUiVote,
	IValuesOutCallback
} from '@votecube/cube-logic'

export let cubeListener: IEventListenerFile
export let mutationApi: IMutationApi

export async function loadCubeLogic(
	viewCallback
): Promise<(
	uiVote: IUiVote
) => void> {
	cubeListener =
		      await import('@votecube/cube-logic/lib/cube/eventListener')
	setCubeViewPort(viewCallback)

	return cubeListener.setPositionDataAndMove
}

export function shutDownCubeListener() {
	setCubeViewPort()
	cubeListener.setPositionData(null)
}

export function setCubeAdjustment(
	enableCubeAdjustment: boolean
): void {
	if (enableCubeAdjustment) {
		cubeListener.addCubeAdjustment()
	} else {
		cubeListener.clearCubeAdjustment()
	}
}

function setCubeViewPort(
	callback?: IValuesOutCallback
): void {
	mutationApi = cubeListener.setViewPort(true, callback)
}
