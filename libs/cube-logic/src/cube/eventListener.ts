import {
	gQ,
	iT,
	LM,
	pD
}                 from '../utils/utils'
import {
	Bool,
	IPosition,
	IUiVote,
	IValuesOutCallback,
	mouse,
	Move
}                 from './cubeMovement'
import {getMove}  from './direction'
import {
	mutationApi,
	MutationApi
}                 from './mutation/MutationApi'
import {viewport} from './Viewport'

// document listener map
export const dLM = LM.ad(document)

export function setViewPort(
	forCube: boolean,
	cb?: IValuesOutCallback
): MutationApi {
	viewport.reset()
	viewport.cb = cb

	if (forCube) {
		if (cb) {
			addCubeAdjustment()
		} else {
			clearCubeAdjustment()
		}
	}

	return cb ? mutationApi : null
}

export function setView(
	elementId: string
): void {
	viewport.el[elementId] = gQ('#' + elementId)
}

export function clearView(
	elementId: string
): void {
	delete viewport.el[elementId]
}

export function setPositionDataAndMove(
	uiVote: IUiVote
) {
	if (setPositionData(uiVote)) {
		viewport.moveToDegree()
	}
}

export function setPositionData(
	positionData: IUiVote
): boolean {
	viewport.pd = positionData

	return !!positionData
}

let suspended = false

export function suspendInteraction(): void {
	suspended = true
}

export function resumeInteraction(): void {
	suspended = false
}

export function addCubeAdjustment(): void {
	// let moveSpeed = 256
	dLM.ad('keydown', (ev) => {
		if (suspended) {
			return
		}

		rmMmTm()
		switch (ev.keyCode) {
			case 37: // left
				viewport.move(Bool.False, Move.None, Bool.True, Move.Down)
				break

			case 38: // up
				// prevent default
				pD(ev)
				viewport.move(Bool.True, Move.Up)
				break

			case 39: // right
				viewport.move(Bool.False, Move.None, Bool.True, Move.Up)
				break

			case 40: // down
				// prevent default
				pD(ev)
				viewport.move(Bool.True, Move.Down)
				break

			case 27: // esc
				viewport.reset()
				break
			// case 109:
			// 	if (!viewport.el) {
			// 		return
			// 	}
			// 	if (moveSpeed > 128) {
			// 		moveSpeed /= 2
			// 	}
			// 	break
			// case 107:
			// 	if (!viewport.el) {
			// 		return
			// 	}
			// 	if (moveSpeed < 4096) {
			// 		moveSpeed *= 2
			// 	}
			// 	break

			default:
				break
		}

	})
	('mousedown', safeOMdTs)
	('touchstart', (
		event
	) => {
		// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
		event.preventDefault()
		safeOMdTs(event)
	})
	('mouseup', safeRmMmTm)
	('touchend', safeRmMmTm)

}

function safeOMdTs(
	event: MouseEvent | TouchEvent
): void {
	if (suspended) {
		return
	}
	oMdTs(event)
}

function safeRmMmTm(): void {
	if (suspended) {
		return
	}

	rmMmTm()
}

export function clearCubeAdjustment() {
	dLM.rm('keydown')
	('mousedown')
	('touchstart')
	('mouseup')
	('touchend')
}

/**
 * On mousedown or touchstart
 */
function oMdTs(
	ev: MouseEvent | TouchEvent // Event
) {
	if (!Object.keys(viewport.el).length) {
		return
	}
	rmMmTm()

	delete mouse.last

	// clicks on links, images, or videos
	if (iT(ev.target as Element, 'A')('IFRAME')()) {
		return true
	}

	populateStartCoords(ev, mouse.start)
	dLM.ad('mousemove', oMmTm)('touchmove', oMmTm)
}

export function populateStartCoords(
	ev: MouseEvent | TouchEvent, // Event,
	start: IPosition
): void {
	// ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
	return populateCoords(ev, (ev as TouchEvent).touches, start)
}

export function populateEndCoords(
	ev: MouseEvent | TouchEvent, // Event,
	end: IPosition
): void {
	return populateCoords(ev, (ev as TouchEvent).changedTouches, end)
}

export function populateCoords(
	ev: MouseEvent | TouchEvent, // Event,
	touches: TouchList,
	start: IPosition
): void {
	const p: MouseEvent | Touch = touches
		? touches[0]
		: ev as MouseEvent
	start.x                     = p.pageX
	start.y                     = p.pageY
}

export const TOUCH = document.ontouchmove !== undefined

/**
 * On mousemove or touchmove
 */
function oMmTm(
	ev // event
) {
	if (!Object.keys(viewport.el).length) {
		return
	}
	const t = ev.touches

	// Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
	if (!TOUCH || !(t && t.length > 1)) {
		ev.preventDefault()
		let p = t ? t[0] : ev
		// Get touch co-ords
		// ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
		// dispatch 'move-viewport' event
		moveViewport({x: p.screenX, y: p.screenY})
	}
}

/**
 * Remove mousemove or touchmove
 */
function rmMmTm() {
	if (!Object.keys(viewport.el).length) {
		return
	}
	dLM.rm('mousemove')('touchmove')
}

let lastMove = 0

function moveViewport(
	event: IPosition // event
) {
	const mouseObject = mouse
	const startCoords = mouseObject.start
	let lastCoords    = mouseObject.last


	const now: number = new Date().getTime()

	if (!mouse.last) {
		mouse.last = lastCoords = mouse.start
		lastMove   = now
	}

	const {moveX, moveY, xBy, yBy} = getMove(startCoords, event)

	if (now - lastMove >= 8) {
		startCoords.x = lastCoords.x
		startCoords.y = lastCoords.y
		if (moveX || moveY) {
			viewport.move(moveX, xBy, moveY, yBy)
		}
		lastMove = now
	}

	lastCoords.x = event.x
	lastCoords.y = event.y
}

export type MovementDirection = -1 | 0 | 1;
export type ChangeInPixels = number;
// export type Range = -1 | 1;
export type DirectionVector = [MovementDirection, ChangeInPixels
	// , Range
];
