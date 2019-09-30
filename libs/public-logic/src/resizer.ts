import {get} from 'svelte/store'
import {
	checkSizeIntervalId,
	emInPx,
	isDesktop,
	portalHeight,
	resized,
	verticalLayout,
	windowWidth
}            from './store'

let viewCallback

export function setResizeCllBck(
	resizeCallback
) {
	viewCallback = resizeCallback

	if (resizeCallback) {
		resize()
	}
}

export function startResizeInterval() {
	resize()

	const $checkSizeIntervalId = setInterval(() => {
		if (get(resized)) {
			resize()
		}
	}, 500)

	checkSizeIntervalId.set($checkSizeIntervalId)
}

/*
export function stopResizeInterval(
    store
) {
    clearInterval(store.get().checkSizeIntervalId)
}*/

function resize(): void {
	const $windowWidth  = window.innerWidth
	const $portalHeight = window.innerHeight

	let $verticalLayout = true
	if ($portalHeight < $windowWidth && $portalHeight < 400) {
		$verticalLayout = false
	}

	const $isDesktop = $windowWidth >= get(emInPx) * 62
	// let leftMenuFixed = windowWidth >= store.get().emInPx * 58
	// let topMenuInLine = windowWidth >= store.get().emInPx * 62

	isDesktop.set($isDesktop)
	portalHeight.set($portalHeight)
	resized.set(false)
	verticalLayout.set($verticalLayout)
	windowWidth.set($windowWidth)

	if (viewCallback) {
		viewCallback($portalHeight, $windowWidth, $verticalLayout)
	}
}
