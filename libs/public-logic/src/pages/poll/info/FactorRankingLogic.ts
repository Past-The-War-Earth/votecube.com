import {DI}                   from '@airport/di'
import {
	IVote,
	IVoteFactor,
	OutcomeOrdinal
}                             from '@votecube/model'
import {fly}                  from 'svelte-transitions'
import {FACTOR_RANKING_LOGIC} from '../../../diTokens'
import {transition}           from '../../../helpers/animation'
import {ILogicUtils}          from '../../../LogicUtils'
import {IPageVote}            from '../../../poll/PollManager'

export interface IFactorInfo {

	factorNumber: number;
	factorTd: HTMLElement

}

export interface IInElementOffset {

	topLeft: {
		x: number
		y: number
	}
	x: number
	y: number

}

export interface IInElementOffsetEvent {

	pageX: number
	pageY: number
	target: HTMLElement

}

export interface IFactorRankingLogic {

	addOrRemoveAFactor(
		voteFactors: IVoteFactor[],
		index: number,
		addOrRemove: number,
		vote: IVote,
		component,
		store,
		logicUtils: ILogicUtils
	): {
		numMoved: number,
		placeholder: boolean,
	}

	getAlternateIndex(
		absDy: number,
		dy: number,
		originalIndex: number,
		have3: boolean
	): number

	getFactorInfoAtCoords(
		x: number,
		y: number,
		factorNumberToExclude: number
	): IFactorInfo

	getInElementOffset(
		event: IInElementOffsetEvent
	): IInElementOffset

	moveFactorDown(
		voteFactors: IVoteFactor[],
		vote: IVote,
		originalIndex: number,
		newIndex: number,
		component,
		store,
		logicUtils: ILogicUtils
	): boolean

	moveFactorUp(
		voteFactors: IVoteFactor[],
		vote: IVote,
		originalIndex: number,
		newIndex: number,
		component,
		store,
		logicUtils: ILogicUtils
	): boolean

	setOutcome(
		voteFactors: IVoteFactor[],
		index: number,
		outcome: OutcomeOrdinal,
		// page,
		// adjustRanking = false
	): void

}

export class FactorRankingLogic
	implements IFactorRankingLogic {

	getFactorInfoAtCoords(
		x: number,
		y: number,
		factorNumberToExclude: number
	): IFactorInfo {
		if (!x || !y) {
			return null
		}
		let nodes
		const msDoc = document as any
		if (msDoc.msElementsFromPoint) {
			nodes = msDoc.msElementsFromPoint(
				x,
				y
			)
		} else {
			nodes = document.elementsFromPoint(
				x,
				y
			)
		}

		if (!nodes || !nodes.forEach) {
			return null
		}

		let matchingFactorInfo: IFactorInfo = null
		nodes.forEach(
			node => {
				const factorInfo = this.getFactorInfo(node)
				if (!matchingFactorInfo && factorInfo
					&& factorInfo.factorNumber !== factorNumberToExclude) {
					matchingFactorInfo = factorInfo
				}
			})

		return matchingFactorInfo
	}

	getInElementOffset(
		event: IInElementOffsetEvent
	): IInElementOffset {
		// event (directly for mouse/via touches[0] for touch)
		// 	pageX/Y gives the cursor position on screen at mouse/touchDown

		const cursorPositionX = event.pageX
		const cursorPositionY = event.pageY

		const factorInfoAtCoords = this.getFactorInfoAtCoords(
			cursorPositionX, cursorPositionY, -1)

		if (!factorInfoAtCoords) {
			return null
		}

		// target (directly on event for mouse/via touches[0].target for touch)
		// 	has the information for the top left corner of the element:

		const boundingClientRect = event.target.getBoundingClientRect()
		const elemTopLeftCornerX = boundingClientRect.left
		const elemTopLeftCornerY = boundingClientRect.top


		// factorPosition places the element based on the top left corner
		// so need to know the offset by which to move the picture to top and left:

		return {
			topLeft: {
				x: elemTopLeftCornerX,
				y: elemTopLeftCornerY
			},
			x: cursorPositionX - elemTopLeftCornerX,
			y: cursorPositionY - elemTopLeftCornerY
		}

		// Whereever the cursor is at we need to substract the offsets from it
		// to show the element.
	}

	getAlternateIndex(
		absDy: number,
		dy: number,
		originalIndex: number,
		have3: boolean
	): number {
		switch (originalIndex) {
			case 0: {
				if (dy > 0) {
					if (absDy < 200) {
						return 1
					} else {
						return have3 ? 2 : 1
					}
				}
				break
			}
			case 1: {
				if (dy > 0) {
					return 2
				} else {
					return 0
				}
			}
			case 2: {
				if (dy < 0) {
					if (absDy < 200) {
						return 1
					} else {
						return 0
					}
				}
				break
			}
		}

		return originalIndex
	}

	addOrRemoveAFactor(
		voteFactors: IVoteFactor[],
		index: number,
		addOrRemove: number,
		vote: IPageVote,
		component,
		store,
		logicUtils: ILogicUtils
	): {
		numMoved: number,
		placeholder: boolean,
	} {
		const [_, secondFactor, thirdFactor] = voteFactors
		let numMoved                         = 0
		let placeholder                      = false
		if (index === 0) {
			if (
				// Cannot add the first factor
				addOrRemove > 0
				// Cannot remove the first factor if there are no other factors
				|| (!secondFactor.outcome && !thirdFactor.outcome)) {
				return {
					numMoved,
					placeholder
				}
			}
			placeholder       = true
			// scheduleFactorPlaceholder(page)
			vote.changeMillis = 550

			// Remove first factor
			this.removeFirstFactor(voteFactors, vote, !!thirdFactor.outcome,
				component,
				store,
				logicUtils)
			return {
				numMoved: 1,
				placeholder
			}
		}

		numMoved      = 1
		const outcome = voteFactors[index].outcome
		if (addOrRemove < 0) {
			// remove
			if (!outcome) {
				// Don't remove if it's already removed
				return {
					numMoved: 0,
					placeholder,
				}
			}
			vote.changeMillis = 550
			placeholder       = true
			// scheduleFactorPlaceholder(page, index, direction)
			if (index === 1 && thirdFactor.outcome) {
				this.onMove(1, [2, 1], store)
				this.swapOnRemove(
					// voteFactors,
					vote, secondFactor, thirdFactor,
					null, 2, logicUtils)
				this.moveUpOne(1, component)
			} else {
				this.setOutcome(voteFactors, index, null
					// , page
				)
				this.adjustRanking(voteFactors, index, null
					// , page
				)
			}
		} else {
			// add
			if (outcome) {
				// Don't add if it's already added
				return {
					numMoved: 0,
					placeholder
				}
			}
			vote.changeMillis = 550
			if (index === 2 && !secondFactor.outcome) {
				this.setOutcome(voteFactors, 1, 'A'
					// , page
				)
				this.adjustRanking(voteFactors, 1, 'A'
					// , page, false
				)
				numMoved = 2
			}
			this.setOutcome(voteFactors, index, 'A'
				// , page
			)
			this.adjustRanking(voteFactors, index, 'A'
				// , page
			)
		}

		return {
			numMoved,
			placeholder
		}
	}

	move(
		index: number,
		options,
		component
	): void {
		transition(
			component,
			'factor_' + index,
			fly,
			options
		)
	}

	moveFactorDown(
		voteFactors: IVoteFactor[],
		vote: IPageVote,
		originalIndex: number,
		newIndex: number,
		component,
		store,
		logicUtils: ILogicUtils
	): boolean {
		switch (originalIndex) {
			// Started the move from 1st Factor
			case 0: {
				if (newIndex === 1) {
					this.onMove(1, [0, 1], store)
					vote.changeMillis = 200
					this.setFactorOrder(
						voteFactors,
						originalIndex,
						-1,
						vote,
						logicUtils,
						// page
					)
					this.moveUpOne(0, component)
				} else {
					this.onMove(2, [0, 2], store)
					vote.changeMillis = 600
					this.setFactorOrder(
						voteFactors,
						originalIndex,
						-1,
						vote,
						logicUtils,
						// page,
						voteFactors[0],
						voteFactors[2],
						0
					)
					this.moveUpTwo(0, component)
				}
				return true
			}
			// Started the move from 2nd Factor
			case 1: {
				this.onMove(1, [1, 2], store)
				vote.changeMillis = 200
				this.setFactorOrder(
					voteFactors,
					originalIndex,
					-1,
					vote,
					logicUtils,
					// page
				)
				this.moveUpOne(1, component)
				return true
			}
			// Started the move from 3rd Factor
			// case 2: {
			// Not possible, nothing to do
			// return
			// }
		}
		return false
	}

	moveFactorUp(
		voteFactors: IVoteFactor[],
		vote: IPageVote,
		originalIndex: number,
		newIndex: number,
		component,
		store,
		logicUtils: ILogicUtils
	): boolean {
		switch (originalIndex) {
			// Started the move from 1st Factor
			// case 0: {
			// 	// Not possible, nothing to do
			// 	return
			// }
			// Started the move from 2nd Factor
			case 1: {
				this.onMove(1, [1, 0], component)
				vote.changeMillis = 200
				this.setFactorOrder(
					voteFactors,
					originalIndex,
					1,
					vote,
					logicUtils,
					// page
				)
				this.moveDownOne(1, component)
				return true
			}
			// Started the move from 3rd Factor
			case 2: {
				if (newIndex === 1) {
					this.onMove(1, [2, 1], store)
					vote.changeMillis = 200
					this.setFactorOrder(
						voteFactors,
						originalIndex,
						1,
						vote,
						logicUtils,
						// page
					)
					this.moveDownOne(2, component)
				} else {
					this.onMove(2, [2, 0], store)
					vote.changeMillis = 600
					this.setFactorOrder(
						voteFactors,
						originalIndex,
						1,
						vote,
						logicUtils,
						// page,
						voteFactors[0],
						voteFactors[2],
						0
					)
					this.moveDownTwo(2, component)
				}
				return true
			}
		}
		return false
	}

	setOutcome(
		voteFactors: IVoteFactor[],
		index: number,
		outcome: OutcomeOrdinal,
		// page,
		// adjustRanking = false
	): void {
		voteFactors[index].outcome = outcome
		// if (adjustRanking) {
		// 	page.fire('rankingAdjusted')
		// }
	}

	private adjustRanking(
		voteFactors: IVoteFactor[],
		index: number,
		outcome: OutcomeOrdinal,
		// page,
		// doAdjust = true
	): boolean {
		const [
			      firstVoteFactor,
			      secondVoteFactor,
			      thirdVoteFactor
		      ] = voteFactors
		switch (index) {
			case 0: {
				// firstFactor.dir = dir
				// Don't have to worry about dir === 0 - 1st factor cannot have it as such
				if (
					// If there the 1st factor is present in vote
					this.factorsAt(100, 0, 0, voteFactors)
					// Or its another standard distribution
					|| this.factorsAt(66, 34, 0, voteFactors)
					|| this.factorsAt(55, 30, 15, voteFactors)
				) {
					// Nothing to do, just change direction
				} else {
					// set default distribution
					firstVoteFactor.value  = 55
					secondVoteFactor.value = 30
					thirdVoteFactor.value  = 15
				}
				break
			}
			case 1: {
				// secondFactor.dir = dir
				// If the 2nd factor is being removed from the vote
				if (!outcome) {
					firstVoteFactor.value  = 100
					secondVoteFactor.value = 0
					thirdVoteFactor.value  = 0
					// thirdFactor.dir    = 0
					break
				}
				// Otherwise the 2nd factor is now present in the vote
				if (
					this.factorsAt(55, 30, 15, voteFactors)
					|| this.factorsAt(66, 34, 0, voteFactors)) {
					// Factors are already at reserved values, no need to adjust values
				} else if (
					this.factorsAt(100, 0, 0, voteFactors)
				) {
					// Add the second factor
					firstVoteFactor.value  = 66
					secondVoteFactor.value = 34
				} else {
					// set default distribution
					firstVoteFactor.value  = 55
					secondVoteFactor.value = 30
					thirdVoteFactor.value  = 15
				}
				break
			}
			case 2: {
				// If the 3rd factor is being removed from the vote
				if (!outcome) {
					firstVoteFactor.value  = 66
					secondVoteFactor.value = 34
					thirdVoteFactor.value  = 0
					break
				}
				// Otherwise the 3rd factor is now present in the vote
				if (
					this.factorsAt(55, 30, 15, voteFactors)
				) {
					// Factors are already at reserved values, no need to adjust values
				} else {
					// set default distribution
					firstVoteFactor.value  = 55
					secondVoteFactor.value = 30
					thirdVoteFactor.value  = 15
				}
				break
			}
			default:
				return false
		}

		return true
		// if (doAdjust) {
		// 	page.fire('rankingAdjusted')
		// }
	}

	private swapOnRemove(
		// voteFactors,
		vote,
		removedFactor,
		movedFactor1,
		movedFactor2,
		adjustRankingIndex,
		// page,
		logicUtils: ILogicUtils
	): void {
		if (movedFactor2) {
			movedFactor2.value = movedFactor1.value
		}

		movedFactor1.value  = removedFactor.value
		removedFactor.value = 0
		removedFactor.dir   = 0

		// page.set({factorOrderDelta: page.get().factorOrderDelta + 1})

		if (!adjustRankingIndex) {
			adjustRankingIndex = movedFactor2 ? 2 : 1
		}

		this.adjustRanking(
			logicUtils.getVoteFactorNodesInValueOrder(vote),
			adjustRankingIndex, null
		)
	}

	private removeFirstFactor(
		voteFactors: IVoteFactor[],
		vote: IVote,
		move3: boolean,
		component,
		store,
		logicUtils: ILogicUtils
	): void {
		if (move3) {
			this.onMove(1, [2, 1, 0], store)
		} else {
			this.onMove(1, [1, 0], store)
		}
		const [firstFactor, secondFactor, thirdFactor] = voteFactors
		this.swapOnRemove(
			// voteFactors,
			vote, firstFactor, secondFactor,
			move3 ? thirdFactor : null, 0, logicUtils)
		if (move3) {
			this.moveUpOne(1, component)
		}
		this.moveUpOne(0, component)
	}

	private setFactorOrder(
		voteFactors: IVoteFactor[],
		index: number,
		delta: number,
		vote: IVote,
		logicUtils: ILogicUtils,
		// page,
		oldHigherFactor?: IVoteFactor,
		oldLowerFactor?: IVoteFactor,
		deltaIndex?: number,
	): boolean {
		const [firstVoteFactor, secondVoteFactor, thirdVoteFactor]
			      = voteFactors
		let oldHigherOutcome: OutcomeOrdinal
		let oldHigherValue: number
		if (!oldHigherFactor) {
			switch (index) {
				case 0: {
					// Only Down arrow can be pressed, no need to check delta
					deltaIndex      = 0
					oldHigherFactor = firstVoteFactor
					oldLowerFactor  = secondVoteFactor
					break
				}
				case 1: {
					if (delta > 0) {
						deltaIndex      = 0
						oldHigherFactor = firstVoteFactor
						oldLowerFactor  = secondVoteFactor
					} else {
						deltaIndex      = 1
						oldHigherFactor = secondVoteFactor
						oldLowerFactor  = thirdVoteFactor
					}
					break
				}
				case 2: {
					// Only Up arrow can be pressed, no need to check delta
					deltaIndex      = 1
					oldHigherFactor = secondVoteFactor
					oldLowerFactor  = thirdVoteFactor
					break
				}
			}
		}
		oldHigherOutcome      = oldHigherFactor.outcome
		oldHigherValue        = oldHigherFactor.value
		oldHigherFactor.value = oldLowerFactor.value
		oldLowerFactor.value  = oldHigherValue

		// page.set({factorOrderDelta: page.get().factorOrderDelta + 1})

		return this.adjustRanking(
			logicUtils.getVoteFactorNodesInValueOrder(vote),
			deltaIndex, oldHigherOutcome
			// , page
		)
	}

	private onMove(
		move,
		moved,
		store
	):void {
		store.set({
			cardMove: {
				move,
				moved
			}
		})
	}

	private moveDownOne(
		index,
		component,
		duration = 400
	):void {
		this.move(index, {y: -100, duration}, component)
	}

	private moveDownTwo(
		index,
		component
	):void {
		this.move(index, {y: -200, duration: 800}, component)
	}

	private moveUpOne(
		index,
		component,
		duration = 400
	):void {
		this.move(index, {y: 100, duration}, component)
	}

	private moveUpTwo(
		index,
		component
	):void {
		this.move(index, {y: 200, duration: 800}, component)
	}

	private factorsAt(
		firstFactorValue: number,
		secondFactorValue: number,
		thirdFactorValue: number,
		voteFactors: IVoteFactor[]
	): boolean {
		return voteFactors[0].value === firstFactorValue
			&& voteFactors[1].value === secondFactorValue
			&& voteFactors[2].value === thirdFactorValue
	}

	private getFactorInfo(
		node: HTMLElement | null
	): IFactorInfo | null {
		if (!node) {
			return null
		}
		while (node.getAttribute
		&& !node.getAttribute('factorNumber')
		&& node.parentNode) {
			node = node.parentNode as HTMLElement
		}
		if (node.getAttribute
			&& node.getAttribute('factorNumber')) {
			return {
				factorNumber: parseInt(node.getAttribute('factorNumber')),
				factorTd: node
			}
		}
		return null
	}

}

DI.set(FACTOR_RANKING_LOGIC, FactorRankingLogic)
