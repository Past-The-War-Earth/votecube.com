<script lang="ts">
	import {DI}            from '@airport/di'
	import {TOUCH}         from '@votecube/cube-logic'
import type { IUiSituation, IUiSolution, IUiSolutionFactor } from '@votecube/model';
	import {
		FACTOR_RANKING_LOGIC,
		LOGIC_UTILS,
		windowWidth
	}                      from '@votecube/vc-logic'
	import {
		createEventDispatcher,
		onDestroy,
		onMount
	}                      from 'svelte'
	import {fly}           from 'svelte/transition'
	import CharacterButton from '../../common/control/button/CharacterButton.svelte'
	import MoveButton      from '../../common/control/button/MoveButton.svelte'

	export let delta: number
	export let situation: IUiSituation
	// export let verticalLayout
	export let solution: IUiSolution
	export let solutionFactors: IUiSolutionFactor[] = []

	let container
	let factorOrderDelta      = 0
	let lastMoveStart
	let movingSolutionFactor
	let movingSolutionFactorDelta = 0
	let removeCount           = 0
	let removeDoneCount       = 0
	let showTransition        = true
	let switchingOutcome      = false
	let timeoutHandle

	const dispatch = createEventDispatcher()

	onMount(() => {
		container = DI.ui('FactorRanking')
	})

	onDestroy(() => {
		DI.remove(container)
	})

	function canRemove(
		solutionFactors: IUiSolutionFactor[],
		index,
		_delta: number
	) {
		return index ? true : solutionFactors[1].outcome
	}

	function factorHighlight(
		movingSolutionFactor,
		index,
		_movingSolutionFactorDelta,
		_container?
	) {
		if (!movingSolutionFactor || index === movingSolutionFactor.index || !container) {
			return ''
		}

		const factorInfo = container.getSync(FACTOR_RANKING_LOGIC).getFactorInfoAtCoords(
			movingSolutionFactor.originalX, movingSolutionFactor.pageY, movingSolutionFactor.index)

		return factorInfo && factorInfo.factorNumber === index ? 'highlighted' : ''
	}

	function factorPosition(
		$windowWidth,
		movingSolutionFactor,
		_movingSolutionFactorDelta: number
	) {
		if (!movingSolutionFactor.moving || !movingSolutionFactor.outcome) {
			return ''
		}
		// let left = Math.ceil(movingSolutionFactor.offset.topLeft.x)
		// let left = movingSolutionFactor.pageX
		let top = movingSolutionFactor.pageY
		if (movingSolutionFactor.offset) {
			// left -= movingSolutionFactor.offset.x
			top -= movingSolutionFactor.offset.y
		}
		const xChange    = movingSolutionFactor.originalX - movingSolutionFactor.pageX
		const absXChange = Math.abs(xChange)
		const absYChange = Math.abs(movingSolutionFactor.originalY - movingSolutionFactor.pageY)

		if (movingSolutionFactor.index > 0
			&& xChange > 0
			&& absXChange > absYChange
		) {
			if (movingSolutionFactor.originalTopLeftY) {
				top = movingSolutionFactor.originalTopLeftY
			}
		}
		const topOffset = $windowWidth > 320 ? 189 : 153

		// left: ${left}px;
		return `position: absolute;
					top: ${top - topOffset}px;
					width: ${movingSolutionFactor.width}px;
					z-index: 5000`
	}

	function flyX(
		solutionFactor: IUiSolutionFactor,
		// cubeTransition
	) {
		return solutionFactor.outcome === 'A' ? -200 : 200
	}

	// cubeTransition ? 0 : solutionFactor.outcome === 'A' ? -200 : 200,
	function getColor(
		color,
		container,
		_delta: number
	) {
		if (!container) {
			return 'FFF'
		}
		return container.getSync(LOGIC_UTILS).getColor(color)
	}

	function getTextColor(
		color,
		container,
		_delta: number
	) {
		if (!container) {
			return '000'
		}
		return container.getSync(LOGIC_UTILS).getTextColor(color)
	}

	function isB(
		solutionFactor,
		_delta: number
	) {
		return solutionFactor.outcome === 'B'
	}

	function showPlaceholder(
		removeCount,
		removeDoneCount
	) {
		return removeCount === removeDoneCount
	}

	function showMovePlaceholder(
		movingSolutionFactor,
		index,
		_movingSolutionFactorDelta
	) {
		return movingSolutionFactor && movingSolutionFactor.moving
			&& index === movingSolutionFactor.index
	}

	function showPosition(
		solutionFactor: IUiSolutionFactor,
		_movingSolutionFactor, 
		_movingSolutionFactorDelta
	) {
		return solutionFactor.value
	}

	function sideMatch(
		solutionFactor: IUiSolutionFactor,
		outcome,
		switchingOutcome
	) {
		return switchingOutcome || outcome === solutionFactor.outcome
	}

	function transitionStyle(
		showTransition
		// ) => showTransition ? 'transition: transform 1000ms linear;' : ''
	) {
		return 'transition: left 700ms, opacity 700ms'
			+ (showTransition ? ', transform 1000ms linear;' : ';')
	}

	function moveEnd(
		movingSolutionFactor,
		solution,
		solutionFactors,
		index,
		event
	) {
		if (!container) {
			return
		}
		try {
			stopMoveEventListening()

			if (!lastMoveStart
				||
				// Already added the factor in
				!movingSolutionFactor) {
				return
			}

			const usefulEvent                      = event.changedTouches && event.changedTouches[0]
				? event.changedTouches[0] : event
			const [factorRankingLogic, logicUtils] =
				      container.getSync(FACTOR_RANKING_LOGIC, LOGIC_UTILS)
			const factorInfo                       = factorRankingLogic
				.getFactorInfoAtCoords(solutionFactors[index].originalX, usefulEvent.pageY, index)
			if (factorInfo && factorInfo.factorNumber >= 0) {
				index = factorInfo.factorNumber
			}

			let dx      = movingSolutionFactor.pageX - movingSolutionFactor.originalX
			let dy      = movingSolutionFactor.pageY - movingSolutionFactor.originalY
			const absDx = Math.abs(dx)
			const absDy = Math.abs(dy)

			// console.log('moving: ' + index)
			// console.log(event)

			const originalIndex     = lastMoveStart.index
			const upButtonClickMove = lastMoveStart.move
			const addOrRemove       = lastMoveStart.addOrRemove

			if (!upButtonClickMove && originalIndex === index) {
				singleFactorChange(absDx, absDy, addOrRemove, dx, dy, index,
					originalIndex, upButtonClickMove, solution,
					solutionFactors, factorRankingLogic, logicUtils)
			} else {
				multiFactorChange(absDx, absDy, dy, index,
					originalIndex, upButtonClickMove, solution,
					solutionFactors, factorRankingLogic, logicUtils)
			}
		} finally {
			stopSolutionFactorMovement(movingSolutionFactor)
		}
	}

	function moveStart(
		solutionFactors,
		index,
		event
	) {
		let time         = new Date().getTime()
		movingSolutionFactor = solutionFactors[index]

		const usefulEvent       = event.touches ? event.touches[0] : event
		movingSolutionFactor.index  = index
		// Offset is only recorded once
		movingSolutionFactor.offset = container.getSync(FACTOR_RANKING_LOGIC)
			.getInElementOffset(usefulEvent)
		positionMovingSolutionFactor(movingSolutionFactor, usefulEvent)
		movingSolutionFactor.originalX = movingSolutionFactor.pageX
		movingSolutionFactor.originalY = movingSolutionFactor.pageY

		const move        = event.factorButtonMove
		const addOrRemove = event.factorButtonAddOrRemove
		if (addOrRemove || move) {
			movingSolutionFactor.moving = true
		}
		movingSolutionFactor.width = document.getElementById('factorPlace_' + index).clientWidth

		lastMoveStart = {
			index: event.factorButtonMove ? event.factorButtonIndex : index,
			move,
			addOrRemove,
			time
		}
		incMovingDelta()

		if (!addOrRemove) {
			document.addEventListener('mousemove', onFactorMove)
			document.addEventListener('touchmove', onFactorMove)
			solutionFactors[index].moving = true
		}
		// console.log('moveStart: ' + index)
		// console.log(event)
	}

	function addOrRemove(
		operation,
		event
	) {
		event.factorButtonAddOrRemove = operation
	}

	function touchStart(
		solutionFactors: IUiSolutionFactor[],
		index,
		event,
	) {
		// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
		event.preventDefault()
		moveStart(solutionFactors, index, event)
	}

	function upStart(
		index,
		event,
		_container
	) {
		event.factorButtonMove  = true
		event.factorButtonIndex = index - 1
		setTimeout(() => {
			const [factorRankingLogic, logicUtils] =
				      container.getSync(FACTOR_RANKING_LOGIC, LOGIC_UTILS)
			factorRankingLogic.move(index - 1, {y: 100}, logicUtils)
			factorRankingLogic.move(index, {y: -100}, logicUtils)
		}, 100)
	}

	function singleFactorChange(
		absDx,
		absDy,
		addOrRemove,
		dx,
		dy,
		index,
		originalIndex,
		upButtonClickMove,
		solution,
		solutionFactors,
		factorRankingLogic,
		logicUtils
	) {
		if (!addOrRemove && absDx < 10 && absDy < 10) {
			changeFactorPosition(solutionFactors, index, factorRankingLogic)
		}
		// Change to 1 factor only
		else if (addOrRemove || absDx - 10 > absDy) {
			if (!addOrRemove) {
				addOrRemove = dx > 0 ? 'add' : 'remove'
			}
			handleMoveEffects(factorRankingLogic.addOrRemoveAFactor(
				solutionFactors, index, addOrRemove,
				solution, logicUtils))
			// if (addOrRemove === 'add') {
			// 	setTimeout(() => {
			// 		move(index, {x: -200, duration: 700})
			// 	})
			// }
		} else if (absDy >= 10 && absDx * 2 < absDy) {
			const index = factorRankingLogic.getAlternateIndex(
				absDy, dy, originalIndex, !!solutionFactors[2].outcome)
			if (index !== originalIndex) {
				multiFactorChange(absDx, absDy, dy, index,
					originalIndex, upButtonClickMove, solution, solutionFactors,
					factorRankingLogic, logicUtils)
			}
			// Else a no-op
		}
		// Else a no-op
	}

	function multiFactorChange(
		absDx,
		absDy,
		dy,
		index,
		originalIndex,
		upButtonClickMove,
		solution,
		solutionFactors,
		factorRankingLogic,
		logicUtils
	) {
		// Change across multiple items
		if (upButtonClickMove || absDy - 10 > absDx) {
			if (!solutionFactors[originalIndex].outcome
				|| !solutionFactors[index].outcome) {
				return
			}
			// Move items
			if (upButtonClickMove || dy > 0) {
				handleMoveEffects({
					numMoved: factorRankingLogic.moveFactorDown(
						solutionFactors, solution, originalIndex, index, logicUtils)
				})
			} else {
				handleMoveEffects({
					numMoved: factorRankingLogic.moveFactorUp(
						solutionFactors, solution, originalIndex, index, logicUtils)
				})
			}
		}
		/* Not implemented
		else if (moveCoords.moveY) {
			// Add or remove items
			if (moveCoords.yBy <= 0) {
				removeFactors(solutionFactors, this)
			} else {
				addFactors(solutionFactors, lastMoveStart.index, index, this)
			}
		}
		*/
		// Else a no-op
	}

	function changeFactorPosition(
		solutionFactors,
		index,
		factorRankingLogic
	) {
		if (!solutionFactors[index].outcome) {
			// If the factor isn't shown don't change position
			return
		}
		let outcome = 'B'
		if (solutionFactors[index].outcome === 'B') {
			outcome = 'A'
		}
		const lastTimeoutHandle = timeoutHandle
		if (lastTimeoutHandle) {
			clearTimeout(lastTimeoutHandle)
		}
		switchingOutcome = true
		setTimeout(() => {
			solution.changeMillis = 1000
			factorRankingLogic.setOutcome(solutionFactors, index, outcome
				// , true
			)
			timeoutHandle = setTimeout(() => {
				switchingOutcome = false
			}, 1000)
			dispatch('rankingAdjusted')
		})
	}

	function onFactorMove(
		event // event
	) {
		const touches = event.touches

		// Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
		if (!TOUCH || !(touches && touches.length > 1)) {
			try {
				event.preventDefault()
			} catch (error) {
				// console.log(error)
			}

			let position = touches ? touches[0] : event
			// Get touch co-ords
			// ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
			// dispatch 'move-viewport' event
			positionMovingSolutionFactor(movingSolutionFactor, position)

			// If the user is swiping in the factor
			if (movingSolutionFactor.moving && !movingSolutionFactor.outcome
				&& movingSolutionFactor.originalX - movingSolutionFactor.pageX < -10) {
				stopMoveEventListening(
					// movingSolutionFactor
				)
				// stopping movement before adding factor to get the slide in animation
				stopSolutionFactorMovement(movingSolutionFactor)
				setTimeout(() => {
					// Proactively swipe in the factor
					const [factorRankingLogic, logicUtils] =
						      container.getSync(FACTOR_RANKING_LOGIC, LOGIC_UTILS)
					handleMoveEffects(
						factorRankingLogic.addOrRemoveAFactor(
							solutionFactors, movingSolutionFactor.index, 1, solution, logicUtils
						))
				})
			}
			incMovingDelta()
		}
	}

	function handleMoveEffects(
		results
	) {
		const {
			      numMoved,
			      placeholder
		      } = results
		if (numMoved) {
			pauseRotation()
			factorOrderDelta = factorOrderDelta + 1
			dispatch('rankingAdjusted')
		}
		if (placeholder) {
			scheduleFactorPlaceholder()
		}
	}

	function stopMoveEventListening(
		// movingSolutionFactor
	) {
		document.removeEventListener('mousemove', onFactorMove)
		document.removeEventListener('touchmove', onFactorMove)
	}

	function stopSolutionFactorMovement(
		movingSolutionFactor
	) {
		if (movingSolutionFactor) {
			movingSolutionFactor.moving = false
		}
		movingSolutionFactor = null
		incMovingDelta()
	}

	function positionMovingSolutionFactor(
		movingSolutionFactor,
		position
	) {
		movingSolutionFactor.pageX = position.pageX
		movingSolutionFactor.pageY = position.pageY
	}

	function scheduleFactorPlaceholder() {
		removeCount = removeCount + 1
		setTimeout(() => {
			removeDoneCount = removeDoneCount + 1
		}, 701)
	}

	function pauseRotation() {
		showTransition = false
		setTimeout(() => {
			showTransition = true
		}, 701)
	}

	function incMovingDelta() {
		movingSolutionFactorDelta = movingSolutionFactorDelta + 1
		setTimeout(() => {
			movingSolutionFactorDelta = movingSolutionFactorDelta + 1
			setTimeout(() => {
				movingSolutionFactorDelta = movingSolutionFactorDelta + 1
			}, 100)
		})
	}

</script>

<style>

	@media (min-width: 321px) {
		header + p {
			font-size: 1.1em;
			line-height: 1.1em;
		}
	}

	@media (min-width: 376px) {
		header + p {
			font-size: 1.15em !important;
			line-height: 1.15em !important;
		}
	}

	figure {
		height: 100px;
		position: relative;
		transform-style: preserve-3d;
	}

	/*	footer {
			bottom: 0px;
		}*/

	/*footer,*/
	header {
		color: #fff;
		background-color: #000;
		font-size: 1.2em;
		font-weight: 500;
		line-height: 1.2em;
		overflow: hidden;
		position: absolute;
		text-align: center;
		text-overflow: ellipsis;
		width: 100%;
		white-space: nowrap;
	}

	header {
		top: 0px
	}

	header + p {
		margin: 0px;
		padding: 3px;
		position: absolute;
		top: 21px;
		word-break: break-word;
	}

	p {
		color: #000;
		font-size: 1.05em;
		line-height: 1.05em;
		margin-block-start: 0em;
		margin-block-end: 0em;
		padding: 7px 5px 14px 5px;
	}

	section {
		height: 100px;
	}

	var {
		border-radius: 5px;
		height: 100px;
		position: absolute;
		width: 100%;
	}

	var.factor {
		border: 3px solid gray;
	}

	var.factor.highlighted {
		border: 5px dashed red;
	}

	var.placeholder {
		border: 1px dotted gray;
	}

	.A {
		transform: translateZ(5px);
	}

	.B {
		transform: rotateY(180deg) translateZ(5px);
	}

	.factorFigure {
		left: 0px;
	}

	.isB {
		transform: rotateY(180deg);
	}

	.removingFactor {
		opacity: 0;
		left: -400px;
	}

</style>

{#if situation}
{#each solutionFactors as solutionFactor, i}
<section
		on:mousedown="{(event) => moveStart(solutionFactors, i, event)}"
		on:mouseup="{(event) => moveEnd(movingSolutionFactor, solution, solutionFactors, i, event)}"
		on:touchend="{(event) => moveEnd(movingSolutionFactor, solution, solutionFactors, i, event)}"
		on:touchstart="{(event) => touchStart(solutionFactors, i, event)}"
		id="factorPlace_{i}"
>
	{#if showPosition(solutionFactor, movingSolutionFactor, movingSolutionFactorDelta)}
	<figure
			class="factorFigure"
			class:isB="{isB(solutionFactor, delta)}"
			class:removingFactor="{removeCount && !solutionFactor.outcome}"
			id="factor_{i}"
			style="{factorPosition($windowWidth, solutionFactor, movingSolutionFactorDelta)}
					 {transitionStyle(showTransition)}"
			in:fly='{{x: flyX(solutionFactor), duration: 700}}'
	>
		<!--
			transition:fade
			-->
		{#if sideMatch(solutionFactor, 'A', switchingOutcome)}
		<var
				class="factor A
					{factorHighlight(movingSolutionFactor, i, movingSolutionFactorDelta, container)}"
				style="background-color: #{getColor(situation.factors[solutionFactor.factorNumber].color, container, delta)};"
		>
			<!--
				id="factor_{i}_A"
				-->
			<!-- TODO: if the default starting value becomes dynamic change this -->
			<header>
				<CharacterButton
						character="A"
						fontSize={20}
						fontX={12}
						fontY={19}
						size={24}
						strokeWidth={1}
						styles="left: 1px; position: absolute; top: -1px;"
				></CharacterButton>
				{situation.factors[solutionFactor.factorNumber].name}
				{#if canRemove(solutionFactors, i, delta)}
				<MoveButton
						on:selectStart="{(event) => addOrRemove('remove', event)}"
						classes="right"
						size={19}
						styles="left: 24px; position: absolute; top: -1.5px"
				></MoveButton>
				{/if}
				{#if i}
				<MoveButton
						on:selectStart="{(event) => upStart(i, event, container)}"
						classes="up"
						size={19}
						styles="right: 24px; position: absolute; top: -2px"
				></MoveButton>
				{/if}
			</header>
			<p
					style="color: #{getTextColor(situation.factors[solutionFactor.factorNumber].color, container, delta)};"
			>
				{situation.factors[solutionFactor.factorNumber].positions.A.name}
			</p>
		</var>
		{/if}
		{#if sideMatch(solutionFactor, 'B', switchingOutcome)}
		<!--
		transition:fly='{x: -200, duration: 1000}'
		-->
		<var
				class="factor B
					{factorHighlight(movingSolutionFactor, i, movingSolutionFactorDelta)}"
				style="background-color: #{getColor(situation.factors[solutionFactor.factorNumber].color, container, delta)};"
		>
			<!--
				id="factor_{i}_B"
				-->
			<header>
				{situation.factors[solutionFactor.factorNumber].name}
				<CharacterButton
						character="B"
						fontSize={20}
						fontX={12}
						fontY={19}
						size={24}
						strokeWidth={1}
						styles="right: 1px; position: absolute; top: -1px;"
				></CharacterButton>
				{#if canRemove(solutionFactors, i, delta)}
				<MoveButton
						on:selectStart="{(event) => addOrRemove('remove', event)}"
						classes="right"
						size={19}
						styles="left: 24px; position: absolute; top: -1.5px"
				></MoveButton>
				{/if}
				{#if i}
				<MoveButton
						on:selectStart="{(event) => upStart(i, event, container)}"
						classes="up"
						size={19}
						styles="right: 24px; position: absolute; top: -2px"
				></MoveButton>
				{/if}
			</header>
			<p
					style="color: #{getTextColor(situation.factors[solutionFactor.factorNumber].color, container, delta)};"
			>
				{situation.factors[solutionFactor.factorNumber].positions.B.name}
			</p>
		</var>
		{/if}
	</figure>
	{:else if showPlaceholder(removeCount, removeDoneCount)}
	<var
			class="placeholder"
	>

		<MoveButton
				on:selectStart="{(event) => addOrRemove('add', event)}"
				size={19}
				styles="left: 32px; position: absolute; top: 42px"
		></MoveButton>
	</var>
	{/if}
	{#if showMovePlaceholder(movingSolutionFactor, i, movingSolutionFactorDelta)}
	<figure>
		<var
				class="placeholder"
		>
		</var>
	</figure>
	{/if}
</section>
{/each}
{/if}
