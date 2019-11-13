import {DI}        from '@airport/di'
import {
	Factor_Axis,
	Factor_Number,
	IVote,
	IVoteFactor,
	Position_Dir
}                  from '@votecube/model'
import {
	CUBE_EVENT_LISTENER,
	VIEWPORT
}                  from '../diTokens'
import {
	gQ,
	iT,
	LM,
	pD
}                  from '../utils/CubeUtils'
import {
	Bool,
	IFactorToAxisMapping,
	IPosition,
	IUiVote,
	IUiVoteDimension,
	IValuesOutCallback,
	mouse,
	Move
}                  from './CubeMovement'
import {getMove}   from './CubeDirection'
import {
	mutationApi,
	MutationApi
}                  from './mutation/MutationApi'
import {IViewport} from './Viewport'

export type MovementDirection = -1 | 0 | 1;
export type ChangeInPixels = number;
// export type Range = -1 | 1;
export type DirectionVector = [MovementDirection, ChangeInPixels
	// , Range
];

export interface ICubeEventListener {

	addCubeAdjustment(): Promise<void>

	clearCubeAdjustment(): void

	clearView(
		elementId: string
	): Promise<void>

	resumeInteraction(): void

	setPositionData(
		vote: IVote,
		factorNumbers: Factor_Number[]
	): Promise<boolean>

	setPositionDataAndMove(
		vote: IVote
	): Promise<void>

	setView(
		elementId: string
	): Promise<void>

	setViewPort(
		forCube: boolean,
		cb?: IValuesOutCallback
	): Promise<MutationApi>

	suspendInteraction(): void

}

export class CubeEventListener
	implements ICubeEventListener {

	// document listener map
	private dLM       = LM.ad(document)
	private lastMove  = 0
	private suspended = false
	private TOUCH     = document.ontouchmove !== undefined

	async addCubeAdjustment(): Promise<void> {
		// let moveSpeed = 256

		const viewport = await DI.get(VIEWPORT)

		this.dLM.ad('keydown', (ev) => {
			if (this.suspended) {
				return
			}

			this.rmMmTm(viewport)
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
		('mousedown', this.safeOMdTs)
		('touchstart', (
			event
		) => {
			// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
			event.preventDefault()
			this.safeOMdTs(event)
		})
		('mouseup', this.safeRmMmTm)
		('touchend', this.safeRmMmTm)

	}

	clearCubeAdjustment(): void {
		this.dLM.rm('keydown')
		('mousedown')
		('touchstart')
		('mouseup')
		('touchend')
	}

	async clearView(
		elementId: string
	): Promise<void> {
		const viewport = await DI.get(VIEWPORT)

		delete viewport.el[elementId]
	}

	resumeInteraction(): void {
		this.suspended = false
	}

	async setPositionData(
		vote: IVote,
		factorNumbers: Factor_Number[] = [1, 2, 3]
	): Promise<boolean> {
		const factorToAxisMapping: IFactorToAxisMapping = {
			1: null,
			2: null,
			3: null
		}
		factorToAxisMapping[factorNumbers[0]]           = 'x'
		factorToAxisMapping[factorNumbers[1]]           = 'y'
		factorToAxisMapping[factorNumbers[2]]           = 'z'

		const viewport = await DI.get(VIEWPORT)
		viewport.pd    = {
			axisToFactorMapping: {
				x: factorNumbers[0],
				y: factorNumbers[1],
				z: factorNumbers[2]
			},
			factorToAxisMapping,
			vote,
			x: this.getUiVoteDimension(1, 'x', vote
				// , 100
			),
			y: this.getUiVoteDimension(2, 'y', vote),
			z: this.getUiVoteDimension(3, 'z', vote),
		}

		return !!vote
	}

	async setPositionDataAndMove(
		vote: IVote
	): Promise<void> {
		if (await this.setPositionData(vote)) {
			const viewport = await DI.get(VIEWPORT)
			viewport.moveToDegree()
		}
	}

	async setView(
		elementId: string
	): Promise<void> {
		const viewport         = await DI.get(VIEWPORT)
		viewport.el[elementId] = gQ('#' + elementId)
	}

	async setViewPort(
		forCube: boolean,
		cb?: IValuesOutCallback
	): Promise<MutationApi> {
		const viewport = await DI.get(VIEWPORT)

		viewport.reset()
		viewport.cb = (
			uiVote: IUiVote
		) => {
			this.populateVoteFactor('x', uiVote)
			this.populateVoteFactor('y', uiVote)
			this.populateVoteFactor('z', uiVote)
			cb(uiVote.vote)
		}

		if (forCube) {
			if (cb) {
				this.addCubeAdjustment()
			} else {
				this.clearCubeAdjustment()
			}
		}

		return cb ? mutationApi : null
	}

	suspendInteraction(): void {
		this.suspended = true
	}

	private getUiVoteDimension(
		factorNumber: Factor_Number,
		axis: Factor_Axis,
		vote: IVote,
		// value: VoteFactor_Value = 0
	): IUiVoteDimension {
		let dir: Position_Dir = 0

		// if (!vote) {
		// 	return {
		// 		axis,
		// 		dir,
		// 		valid: true,
		// 		value
		// 	}
		// }

		const voteFactor = vote[factorNumber]
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

	private moveViewport(
		event: IPosition, // event
		viewport: IViewport
	): void {
		const mouseObject = mouse
		const startCoords = mouseObject.start
		let lastCoords    = mouseObject.last


		const now: number = new Date().getTime()

		if (!mouse.last) {
			mouse.last    = lastCoords = mouse.start
			this.lastMove = now
		}

		const {moveX, moveY, xBy, yBy} = getMove(startCoords, event)

		if (now - this.lastMove >= 8) {
			startCoords.x = lastCoords.x
			startCoords.y = lastCoords.y
			if (moveX || moveY) {
				viewport.move(moveX, xBy, moveY, yBy)
			}
			this.lastMove = now
		}

		lastCoords.x = event.x
		lastCoords.y = event.y
	}

	/**
	 * On mousedown or touchstart
	 */
	private oMdTs(
		ev: MouseEvent | TouchEvent, // Event
		viewport: IViewport
	): boolean {
		if (!Object.keys(viewport.el).length) {
			return
		}
		this.rmMmTm(viewport)

		delete mouse.last

		// clicks on links, images, or videos
		if (iT(ev.target as Element, 'A')('IFRAME')()) {
			return true
		}

		this.populateStartCoords(ev, mouse.start)
		this.dLM.ad('mousemove', this.oMmTm)('touchmove', this.oMmTm)
	}

	/**
	 * On mousemove or touchmove
	 */
	private oMmTm(
		ev, // event
		viewport: IViewport
	) {
		if (!Object.keys(viewport.el).length) {
			return
		}
		const touches = ev.touches

		// Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
		if (!this.TOUCH || !(touches && touches.length > 1)) {
			ev.preventDefault()
			const point = touches ? touches[0] : ev
			// Get touch co-ords
			// ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
			// dispatch 'move-viewport' event
			this.moveViewport({x: point.screenX, y: point.screenY}, viewport)
		}
	}

	private populateCoords(
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

	private populateEndCoords(
		ev: MouseEvent | TouchEvent, // Event,
		end: IPosition
	): void {
		return this.populateCoords(ev, (ev as TouchEvent).changedTouches, end)
	}

	private populateStartCoords(
		ev: MouseEvent | TouchEvent, // Event,
		start: IPosition
	): void {
		// ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
		return this.populateCoords(ev, (ev as TouchEvent).touches, start)
	}

	private populateVoteFactor(
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

	/**
	 * Remove mousemove or touchmove
	 */
	private rmMmTm(
		viewport: IViewport
	): void {
		if (!Object.keys(viewport.el).length) {
			return
		}
		this.dLM.rm('mousemove')('touchmove')
	}

	private safeOMdTs(
		event: MouseEvent | TouchEvent,
		viewport: IViewport
	): void {
		if (this.suspended) {
			return
		}
		this.oMdTs(event, viewport)
	}

	private safeRmMmTm(
		viewport: IViewport
	): void {
		if (this.suspended) {
			return
		}

		this.rmMmTm(viewport)
	}
}

DI.set(CUBE_EVENT_LISTENER, CubeEventListener)
