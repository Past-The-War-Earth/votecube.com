import {
	Factor_Axis,
	Factor_Number,
	IVote,
	IVoteFactor,
	Position_Dir
}                 from '@votecube/model'
import {
	gQ,
	iT,
	LM,
	pD
}                 from '../utils/utils'
import {
	Bool,
	IFactorToAxisMapping,
	IPosition,
	IUiVote,
	IUiVoteDimension,
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
	viewport.cb = (
		uiVote: IUiVote
	) => {
		populateVoteFactor('x', uiVote)
		populateVoteFactor('y', uiVote)
		populateVoteFactor('z', uiVote)
		cb(uiVote.vote)
	}


	if (forCube) {
		if (cb) {
			addCubeAdjustment()
		} else {
			clearCubeAdjustment()
		}
	}

	return cb ? mutationApi : null
}

function populateVoteFactor(
	axis: Factor_Axis,
	uiVote: IUiVote
): void {
	const vote                    = uiVote.vote
	const voteFactor: IVoteFactor = vote[uiVote.axisToFactorMapping[axis]]
	const voteDimension           = uiVote[axis]
	voteFactor.outcome            = null
	if (voteDimension.dir === 1) {
		voteFactor.outcome = 'A'
	} else if (voteDimension.dir === -1) {
		voteFactor.outcome = 'B'
	}
	voteFactor.value = voteDimension.value
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
	vote: IVote
) {
	if (setPositionData(vote)) {
		viewport.moveToDegree()
	}
}

export function setPositionData(
	vote: IVote,
	factorNumbers: Factor_Number[] = [1, 2, 3]
): boolean {
	const factorToAxisMapping: IFactorToAxisMapping = {
		1: null,
		2: null,
		3: null
	}
	factorToAxisMapping[factorNumbers[0]]           = 'x'
	factorToAxisMapping[factorNumbers[1]]           = 'y'
	factorToAxisMapping[factorNumbers[2]]           = 'z'
	viewport.pd                                     = {
		axisToFactorMapping: {
			x: factorNumbers[0],
			y: factorNumbers[1],
			z: factorNumbers[2]
		},
		factorToAxisMapping,
		vote,
		x: this.getUiVoteDimension(0, 'x', vote[0]),
		y: this.getUiVoteDimension(1, 'y', vote[1]),
		z: this.getUiVoteDimension(2, 'z', vote[2]),
	}

	return !!vote
}

function getUiVoteDimension(
	factorNumber: Factor_Number,
	axis: Factor_Axis,
	voteFactor: IVoteFactor
): IUiVoteDimension {
	let dir: Position_Dir = 0
	if (voteFactor.outcome === 'A') {
		dir = 1
	} else if (voteFactor.outcome === 'B') {
		dir = -1
	}
	return {
		axis,
		dir,
		valid: true,
		value: voteFactor.value
	}
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
	const touches = ev.touches

	// Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
	if (!TOUCH || !(touches && touches.length > 1)) {
		ev.preventDefault()
		const point = touches ? touches[0] : ev
		// Get touch co-ords
		// ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
		// dispatch 'move-viewport' event
		moveViewport({x: point.screenX, y: point.screenY})
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
