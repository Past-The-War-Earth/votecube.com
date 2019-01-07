import {
	gQ,
	iT,
	LM,
	pD
}                 from '../utils/utils'
import {
	Bool,
	IPositionData,
	IValuesOutCallback,
	mouse,
	Move
}                 from './cubeMovement'
import {
	mutationApi,
	MutationApi
}                 from './mutation/MutationApi'
import {viewport} from './Viewport'

export interface IMoveViewportEvent {
	x: number;
	y: number;
}

// document listener map
export const dLM = LM.ad(document)

export function setViewPort(
	forCube: boolean,
	positionData: IPositionData,
	cb?: IValuesOutCallback
): MutationApi {
	viewport.reset()
	viewport.cb = cb
	viewport.pd = positionData

	if (forCube) {
		if (cb) {
			viewport.el = gQ('#cube')
			addCubeAdjustment()
			viewport.moveToDegree()
		} else {
			viewport.el = null
			clearCubeAdjustment()
		}
	}

	return cb ? mutationApi : null
}

export function addCubeAdjustment(): void {
	let moveSpeed = 256
	dLM.ad('keydown', function (ev) {
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
			case 109:
				if (!viewport.el) {
					return
				}
				if (moveSpeed > 128) {
					moveSpeed /= 2
				}
				break
			case 107:
				if (!viewport.el) {
					return
				}
				if (moveSpeed < 4096) {
					moveSpeed *= 2
				}
				break

			default:
				break
		}

	})
	('mousedown', oMdTs)
	('touchstart', oMdTs)
	('mouseup', rmMmTm)
	('touchend', rmMmTm)

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
	if (!viewport.el) {
		return
	}
	rmMmTm()

	delete mouse.last

	// clicks on links, images, or videos
	if (iT(ev.target as Element, 'A')('IFRAME')()) {
		return true
	}

	// ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
	let p: MouseEvent | Touch = (ev as TouchEvent).touches
		? (ev as TouchEvent).touches[0]
		: ev as MouseEvent
	// console.log('---===<<<((( mouse start )))>>>===---')
	mouse.start.x             = p.screenX
	mouse.start.y             = p.screenY
	dLM.ad('mousemove', oMmTm)('touchmove', oMmTm)
}

const TOUCH = document.ontouchmove !== undefined

/**
 * On mousemove or touchmove
 */
function oMmTm(
	ev // event
) {
	if (!viewport.el) {
		return
	}
	let t = ev.touches

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
	if (!viewport.el) {
		return
	}
	dLM.rm('mousemove')('touchmove')
}

let lastMove = 0

function moveViewport(
	event: IMoveViewportEvent // event
) {
	let mouseObject = mouse
	let startCoords = mouseObject.start
	let lastCoords  = mouseObject.last

	let
		dx,
		dy,
		vx: DirectionVector,
		vy: DirectionVector,
		moveX: 0 | 1           = 0,
		xBy: MovementDirection = 0,
		moveY: 0 | 1           = 0,
		yBy: MovementDirection = 0
	// directionChanged = 0

	let now: number = new Date().getTime()

	if (!mouse.last) {
		mouse.last = lastCoords = mouse.start
		lastMove   = now
	}

	vx = directionVector(startCoords.x, event.x)
	vy = directionVector(startCoords.y, event.y)

	dx = vx[1]
	dy = vy[1]

	if (dx >= 4 && dx / 4 > dy) {
		// If general directionVector is in X
		yBy   = vx[0]
		moveY = 1
	} else if (dy >= 4 && dy / 4 > dx) {
		// If general directionVector is in Y
		xBy   = -vy[0] as MovementDirection
		moveX = 1
	} else if (dx >= 4 && dy >= 4) {
		// Otherwise its in both x and y
		xBy   = -vy[0] as MovementDirection
		yBy   = vx[0]
		moveX = 1
		moveY = 1
	}

	if (now - lastMove >= 128) {
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
export type Range = -1 | 1;
export type DirectionVector = [MovementDirection, ChangeInPixels, Range];

function directionVector(
	fromPosition,
	toPosition
): DirectionVector {
	let movementDirection, changeInPixels, range
	if (toPosition >= 0 && fromPosition >= 0) {
		range = 1
		if (toPosition >= fromPosition) {
			movementDirection = 1
			changeInPixels    = toPosition - fromPosition
		} else {
			movementDirection = -1
			changeInPixels    = fromPosition - toPosition
		}
	} else {
		range = -1
		if (toPosition < fromPosition) {
			movementDirection = -1
			changeInPixels    = toPosition - fromPosition
		} else {
			movementDirection = 1
			changeInPixels    = fromPosition - toPosition
		}
	}
	return [movementDirection, changeInPixels, range]
}
