var viewCallback

export function setResizeCllBck(
	resizeCallback,
	store
) {
	viewCallback = resizeCallback

	if (resizeCallback) {
		resize(store)
	}
}

export function startResizeInterval(
	store
) {
	resize(store)

	const checkSizeIntervalId = setInterval(() => {
		if (store.get().resized) {
			resize(store)
		}
	}, 500)

	store.set({checkSizeIntervalId})
}

/*
export function stopResizeInterval(
    store
) {
    clearInterval(store.get().checkSizeIntervalId)
}*/

export function scheduleToResize(
	store
) {
	store.set({
		resized: true
	})
}

function resize(
	store
) {
	const windowWidth  = window.innerWidth
	const portalHeight = window.innerHeight

	let verticalLayout = true
	if (portalHeight < windowWidth && portalHeight < 400) {
		verticalLayout = false
	}

	const isDesktop = windowWidth >= store.get().emInPx * 62
	// let leftMenuFixed = windowWidth >= store.get().emInPx * 58
	// let topMenuInLine = windowWidth >= store.get().emInPx * 62

	store.set({
		// leftMenuFixed,
		isDesktop,
		portalHeight,
		resized: false,
		// topMenuInLine,
		verticalLayout,
		windowWidth
	})

	if (viewCallback) {
		viewCallback(portalHeight, windowWidth, verticalLayout)
	}
}
