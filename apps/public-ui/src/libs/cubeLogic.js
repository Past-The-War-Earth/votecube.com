export async function loadCubeLogic(
	page,
	viewCallback
) {
	const cubeListener = await import('@votecube/cube-logic/lib/cube/eventListener')
	page.set({cubeListener})

	setCubeViewPort(
		cubeListener,
		(
			mutationApi
		) => {
			page.set({mutationApi})
		},
		viewCallback,
	)

	return cubeListener.setPositionDataAndMove
	// startResizeInterval(page, viewCallback)
}

export function shutDownCubeListener(
	cubeListener,
	page
) {
	// stopResizeInterval(page)
	setCubeViewPort(
		cubeListener,
		(
			mutationApi
		) => {
			page.set({mutationApi})
		}
	)
	cubeListener.setPositionData(null)
}

export function setCubeAdjustment(
	cubeListener,
	enableCubeAdjustment
) {
	if (enableCubeAdjustment) {
		cubeListener.addCubeAdjustment()
	} else {
		cubeListener.clearCubeAdjustment()
	}
}

function setCubeViewPort(
	cubeListener,
	setMutationApi,
	callback
) {
	setMutationApi(cubeListener.setViewPort(true, callback))
}
