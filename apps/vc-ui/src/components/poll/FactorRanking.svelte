<script>
	import {DI}            from '@airport/di'
	import {TOUCH}         from '@votecube/cube-logic'
	import {
		FACTOR_RANKING_LOGIC,
		LOGIC_UTILS,
		windowWidth
	}                      from '@votecube/public-logic'
	import {
		createEventDispatcher,
		onDestroy,
		onMount
	}                      from 'svelte'
	import {fly}           from 'svelte/transition'
	import CharacterButton from '../common/control/button/CharacterButton.svelte'
	import MoveButton      from '../common/control/button/MoveButton.svelte'

	export let delta
	export let poll
	// export let verticalLayout
	export let vote
	export let voteFactors = []

	let container
	let factorOrderDelta      = 0
	let lastMoveStart
	let movingVoteFactor
	let movingVoteFactorDelta = 0
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
		voteFactors,
		index
	) {
		return index ? true : voteFactors[1].outcome
	}

	function factorHighlight(
		movingVoteFactor,
		index,
		movingVoteFactorDelta
	) {
		if (!movingVoteFactor || index === movingVoteFactor.index || !container) {
			return ''
		}

		const factorInfo = container.getSync(FACTOR_RANKING_LOGIC).getFactorInfoAtCoords(
			movingVoteFactor.originalX, movingVoteFactor.pageY, movingVoteFactor.index)

		return factorInfo && factorInfo.factorNumber === index ? 'highlighted' : ''
	}

	function factorPosition(
		$windowWidth,
		movingVoteFactor
	) {
		if (!movingVoteFactor.moving || !movingVoteFactor.outcome) {
			return ''
		}
		// let left = Math.ceil(movingVoteFactor.offset.topLeft.x)
		// let left = movingVoteFactor.pageX
		let top = movingVoteFactor.pageY
		if (movingVoteFactor.offset) {
			// left -= movingVoteFactor.offset.x
			top -= movingVoteFactor.offset.y
		}
		const xChange    = movingVoteFactor.originalX - movingVoteFactor.pageX
		const absXChange = Math.abs(xChange)
		const absYChange = Math.abs(movingVoteFactor.originalY - movingVoteFactor.pageY)

		if (movingVoteFactor.index > 0
			&& xChange > 0
			&& absXChange > absYChange
		) {
			if (movingVoteFactor.originalTopLeftY) {
				top = movingVoteFactor.originalTopLeftY
			}
		}
		const topOffset = $windowWidth > 320 ? 189 : 153

		// left: ${left}px;
		return `position: absolute;
					top: ${top - topOffset}px;
					width: ${movingVoteFactor.width}px;
					z-index: 5000`
	}

	function flyX(
		voteFactor,
		// cubeTransition
	) {
		return voteFactor.outcome === 'A' ? -200 : 200
	}

	// cubeTransition ? 0 : voteFactor.outcome === 'A' ? -200 : 200,
	function getColor(
		color
	) {
		if (!container) {
			return 'FFF'
		}
		return container.getSync(LOGIC_UTILS).getColor(color)
	}

	function getTextColor(
		color
	) {
		if (!container) {
			return '000'
		}
		return container.getSync(LOGIC_UTILS).getTextColor(color)
	}

	function isB(
		voteFactor
	) {
		return voteFactor.outcome === 'B'
	}

	function showPlaceholder(
		removeCount,
		removeDoneCount
	) {
		return removeCount === removeDoneCount
	}

	function showMovePlaceholder(
		movingVoteFactor,
		index,
		movingVoteFactorDelta
	) {
		return movingVoteFactor && movingVoteFactor.moving
			&& index === movingVoteFactor.index
	}

	function showPosition(
		voteFactor
	) {
		return voteFactor.value
	}

	function sideMatch(
		voteFactor,
		outcome,
		switchingOutcome
	) {
		return switchingOutcome || outcome === voteFactor.outcome
	}

	function transitionStyle(
		showTransition
		// ) => showTransition ? 'transition: transform 1000ms linear;' : ''
	) {
		return 'transition: left 700ms, opacity 700ms'
			+ (showTransition ? ', transform 1000ms linear;' : ';')
	}

	function moveEnd(
		movingVoteFactor,
		vote,
		voteFactors,
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
				!movingVoteFactor) {
				return
			}

			const usefulEvent                      = event.changedTouches && event.changedTouches[0]
				? event.changedTouches[0] : event
			const [factorRankingLogic, logicUtils] =
				      container.getSync(FACTOR_RANKING_LOGIC, LOGIC_UTILS)
			const factorInfo                       = factorRankingLogic
				.getFactorInfoAtCoords(voteFactors[index].originalX, usefulEvent.pageY, index)
			if (factorInfo && factorInfo.factorNumber >= 0) {
				index = factorInfo.factorNumber
			}

			let dx      = movingVoteFactor.pageX - movingVoteFactor.originalX
			let dy      = movingVoteFactor.pageY - movingVoteFactor.originalY
			const absDx = Math.abs(dx)
			const absDy = Math.abs(dy)

			// console.log('moving: ' + index)
			// console.log(event)

			const originalIndex     = lastMoveStart.index
			const upButtonClickMove = lastMoveStart.move
			const addOrRemove       = lastMoveStart.addOrRemove

			if (!upButtonClickMove && originalIndex === index) {
				singleFactorChange(absDx, absDy, addOrRemove, dx, dy, index,
					originalIndex, upButtonClickMove, vote,
					voteFactors, factorRankingLogic, logicUtils)
			} else {
				multiFactorChange(absDx, absDy, dy, index,
					originalIndex, upButtonClickMove, vote,
					voteFactors, factorRankingLogic, logicUtils)
			}
		} finally {
			stopVoteFactorMovement(movingVoteFactor)
		}
	}

	function moveStart(
		voteFactors,
		index,
		event
	) {
		let time         = new Date().getTime()
		movingVoteFactor = voteFactors[index]

		const usefulEvent       = event.touches ? event.touches[0] : event
		movingVoteFactor.index  = index
		// Offset is only recorded once
		movingVoteFactor.offset = container.getSync(FACTOR_RANKING_LOGIC)
			.getInElementOffset(usefulEvent)
		positionMovingVoteFactor(movingVoteFactor, usefulEvent)
		movingVoteFactor.originalX = movingVoteFactor.pageX
		movingVoteFactor.originalY = movingVoteFactor.pageY

		const move        = event.factorButtonMove
		const addOrRemove = event.factorButtonAddOrRemove
		if (addOrRemove || move) {
			movingVoteFactor.moving = true
		}
		movingVoteFactor.width = document.getElementById('factorPlace_' + index).clientWidth

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
			voteFactors[index].moving = true
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
		voteFactors,
		index,
		event,
	) {
		// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
		event.preventDefault()
		moveStart(voteFactors, index, event)
	}

	function upStart(
		index,
		event
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
		vote,
		voteFactors,
		factorRankingLogic,
		logicUtils
	) {
		if (!addOrRemove && absDx < 10 && absDy < 10) {
			changeFactorPosition(voteFactors, index, factorRankingLogic)
		}
		// Change to 1 factor only
		else if (addOrRemove || absDx - 10 > absDy) {
			if (!addOrRemove) {
				addOrRemove = dx > 0 ? 'add' : 'remove'
			}
			handleMoveEffects(factorRankingLogic.addOrRemoveAFactor(
				voteFactors, index, addOrRemove,
				vote, logicUtils))
			// if (addOrRemove === 'add') {
			// 	setTimeout(() => {
			// 		move(index, {x: -200, duration: 700})
			// 	})
			// }
		} else if (absDy >= 10 && absDx * 2 < absDy) {
			const index = factorRankingLogic.getAlternateIndex(
				absDy, dy, originalIndex, !!voteFactors[2].outcome)
			if (index !== originalIndex) {
				multiFactorChange(absDx, absDy, dy, index,
					originalIndex, upButtonClickMove, vote, voteFactors,
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
		vote,
		voteFactors,
		factorRankingLogic,
		logicUtils
	) {
		// Change across multiple items
		if (upButtonClickMove || absDy - 10 > absDx) {
			if (!voteFactors[originalIndex].outcome
				|| !voteFactors[index].outcome) {
				return
			}
			// Move items
			if (upButtonClickMove || dy > 0) {
				handleMoveEffects({
					numMoved: factorRankingLogic.moveFactorDown(
						voteFactors, vote, originalIndex, index, logicUtils)
				})
			} else {
				handleMoveEffects({
					numMoved: factorRankingLogic.moveFactorUp(
						voteFactors, vote, originalIndex, index, logicUtils)
				})
			}
		}
		/* Not implemented
		else if (moveCoords.moveY) {
			// Add or remove items
			if (moveCoords.yBy <= 0) {
				removeFactors(voteFactors, this)
			} else {
				addFactors(voteFactors, lastMoveStart.index, index, this)
			}
		}
		*/
		// Else a no-op
	}

	function changeFactorPosition(
		voteFactors,
		index,
		factorRankingLogic
	) {
		if (!voteFactors[index].outcome) {
			// If the factor isn't shown don't change position
			return
		}
		let outcome = 'B'
		if (voteFactors[index].outcome === 'B') {
			outcome = 'A'
		}
		const lastTimeoutHandle = timeoutHandle
		if (lastTimeoutHandle) {
			clearTimeout(lastTimeoutHandle)
		}
		switchingOutcome = true
		setTimeout(() => {
			vote.changeMillis = 1000
			factorRankingLogic.setOutcome(voteFactors, index, outcome
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
			positionMovingVoteFactor(movingVoteFactor, position)

			// If the user is swiping in the factor
			if (movingVoteFactor.moving && !movingVoteFactor.outcome
				&& movingVoteFactor.originalX - movingVoteFactor.pageX < -10) {
				stopMoveEventListening(
					// movingVoteFactor
				)
				// stopping movement before adding factor to get the slide in animation
				stopVoteFactorMovement(movingVoteFactor)
				setTimeout(() => {
					// Proactively swipe in the factor
					const [factorRankingLogic, logicUtils] =
						      container.getSync(FACTOR_RANKING_LOGIC, LOGIC_UTILS)
					handleMoveEffects(
						factorRankingLogic.addOrRemoveAFactor(
							voteFactors, movingVoteFactor.index, 1, vote, logicUtils
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
		// movingVoteFactor
	) {
		document.removeEventListener('mousemove', onFactorMove)
		document.removeEventListener('touchmove', onFactorMove)
	}

	function stopVoteFactorMovement(
		movingVoteFactor
	) {
		if (movingVoteFactor) {
			movingVoteFactor.moving = false
		}
		movingVoteFactor = null
		incMovingDelta()
	}

	function positionMovingVoteFactor(
		movingVoteFactor,
		position
	) {
		movingVoteFactor.pageX = position.pageX
		movingVoteFactor.pageY = position.pageY
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
		movingVoteFactorDelta = movingVoteFactorDelta + 1
		setTimeout(() => {
			movingVoteFactorDelta = movingVoteFactorDelta + 1
			setTimeout(() => {
				movingVoteFactorDelta = movingVoteFactorDelta + 1
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

{#if poll}
{#each voteFactors as voteFactor, i}
<section
		on:mousedown="{(event) => moveStart(voteFactors, i, event)}"
		on:mouseup="{(event) => moveEnd(movingVoteFactor, vote, voteFactors, i, event)}"
		on:touchend="{(event) => moveEnd(movingVoteFactor, vote, voteFactors, i, event)}"
		on:touchstart="{(event) => touchStart(voteFactors, i, event)}"
		id="factorPlace_{i}"
>
	{#if showPosition(voteFactor, movingVoteFactor, movingVoteFactorDelta)}
	<figure
			class="factorFigure"
			class:isB="{isB(voteFactor, delta)}"
			class:removingFactor="{removeCount && !voteFactor.outcome}"
			factorNumber="{i}"
			id="factor_{i}"
			style="{factorPosition($windowWidth, voteFactor, movingVoteFactorDelta)}
					 {transitionStyle(showTransition)}"
			in:fly='{{x: flyX(voteFactor), duration: 700}}'
	>
		<!--
			transition:fade
			-->
		{#if sideMatch(voteFactor, 'A', switchingOutcome)}
		<var
				class="factor A
					{factorHighlight(movingVoteFactor, i, movingVoteFactorDelta, container)}"
				style="background-color: #{getColor(poll.factors[voteFactor.factorNumber].color, container, delta)};"
		>
			<!--
				id="factor_{i}_A"
				-->
			<!-- TODO: if the default starting value becomes dynamic change this -->
			<header>
				<CharacterButton
						character="A"
						fontSize="20"
						fontX="12"
						fontY="19"
						size="24"
						strokeWidth="1"
						styles="left: 1px; position: absolute; top: -1px;"
				></CharacterButton>
				{poll.factors[voteFactor.factorNumber].name}
				{#if canRemove(voteFactors, i, delta)}
				<MoveButton
						on:selectStart="{(event) => addOrRemove('remove', event)}"
						classes="right"
						size="19"
						styles="left: 24px; position: absolute; top: -1.5px"
				></MoveButton>
				{/if}
				{#if i}
				<MoveButton
						on:selectStart="{(event) => upStart(i, event, container)}"
						classes="up"
						size="19"
						styles="right: 24px; position: absolute; top: -2px"
				></MoveButton>
				{/if}
			</header>
			<p
					style="color: #{getTextColor(poll.factors[voteFactor.factorNumber].color, container, delta)};"
			>
				{poll.factors[voteFactor.factorNumber].positions.A.name}
			</p>
		</var>
		{/if}
		{#if sideMatch(voteFactor, 'B', switchingOutcome)}
		<!--
		transition:fly='{x: -200, duration: 1000}'
		-->
		<var
				class="factor B
					{factorHighlight(movingVoteFactor, i, movingVoteFactorDelta)}"
				style="background-color: #{getColor(poll.factors[voteFactor.factorNumber].color, container, delta)};"
		>
			<!--
				id="factor_{i}_B"
				-->
			<header>
				{poll.factors[voteFactor.factorNumber].name}
				<CharacterButton
						character="B"
						fontSize="20"
						fontX="12"
						fontY="19"
						size="24"
						strokeWidth="1"
						styles="right: 1px; position: absolute; top: -1px;"
				></CharacterButton>
				{#if canRemove(voteFactors, i, delta)}
				<MoveButton
						on:selectStart="{(event) => addOrRemove('remove', event)}"
						classes="right"
						size="19"
						styles="left: 24px; position: absolute; top: -1.5px"
				></MoveButton>
				{/if}
				{#if i}
				<MoveButton
						on:selectStart="{(event) => upStart(i, event, container)}"
						classes="up"
						size="19"
						styles="right: 24px; position: absolute; top: -2px"
				></MoveButton>
				{/if}
			</header>
			<p
					style="color: #{getTextColor(poll.factors[voteFactor.factorNumber].color, container, delta)};"
			>
				{poll.factors[voteFactor.factorNumber].positions.B.name}
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
				size="19"
				styles="left: 32px; position: absolute; top: 42px"
		></MoveButton>
	</var>
	{/if}
	{#if showMovePlaceholder(movingVoteFactor, i, movingVoteFactorDelta)}
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
