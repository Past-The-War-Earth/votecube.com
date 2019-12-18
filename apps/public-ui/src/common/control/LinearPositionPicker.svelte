<script>
	import {DI}          from '@airport/di'
	import {LOGIC_UTILS} from '@votecube/public-logic'
	import {
		createEventDispatcher,
		onDestroy,
		onMount
	}                    from 'svelte'
	import LeftButton    from './button/LeftButton.svelte'
	import RightButton   from './button/RightButton.svelte'

	export let moveDelta
	export let poll
	export let voteFactor

	let container
	let incrementInterval
	let interval
	let lastNumIncs
	let lastVoteFactor
	let logicUtils
	let numIncs
	let numReIncs
	let outcome
	let percentChange
	let positionInput

	const dispatch = createEventDispatcher()

	// valueBottomBorder: ({moveToValueDelta, value}) => getInputBorder(value),
	$: leftCircleRadius = v(getRadius('A', voteFactor), moveDelta)
	$: rightCircleRadius = v(getRadius('B', voteFactor), moveDelta)
	$: leftStrokeWidth = v(getStrokeWidth('A', voteFactor), moveDelta)
	$: rightStrokeWidth = v(getStrokeWidth('B', voteFactor), moveDelta)
	$: leftHighlightColor = v(getButtonColor(['B', null], voteFactor), moveDelta)
	$: rightHighlightColor = v(getButtonColor(['A', null], voteFactor), moveDelta)
	$: leftFillColor = v(getButtonColor(['A'], voteFactor), moveDelta)
	$: rightFillColor = v(getButtonColor(['B'], voteFactor), moveDelta)
	$: factorColor = v(logicUtils && voteFactor.outcome
		? '#' + logicUtils.getColor(poll.factors[voteFactor.factorNumber].color)
		: 'initial', moveDelta)

	function v(val) {
		return val
	}

	function mouseDown(
		outcome
	) {
		onPress(outcome)
	}

	function mouseUp(
		event
	) {
		event.preventDefault()

		clearIntrvl()
	}

	function moveToValue() {
		dispatch('moveToValue', positionInput.value)
		// this.set({moveToValueDelta: this.get().moveToValueDelta + 1})
	}

	function touchStart(
		outcome,
		event
	) {
		event.preventDefault()
		onPress(outcome)
	}
	onMount(async () => {
		container  = DI.ui('LinearPositionPicker')
		logicUtils = await container.get(LOGIC_UTILS)
	})

	onDestroy(() => {
		// this.refreshListener.cancel()
		DI.remove(container)
	})

	async function initPage() {
		container  = DI.ui('LinearPositionPicker')
		logicUtils = await container.get(LOGIC_UTILS)
	}

	function checkInterval() {
		numIncs       = numIncs - 1
		if (lastVoteFactor !== voteFactor) {
			clearIntrvl()
			numIncs = 0
			return
		}
		dispatch('move', {
			outcome,
			percentChange
		})
		if (!numIncs) {
			clearIntrvl()
			numReIncs = numReIncs - 1
			if (!numReIncs) {
				return
			}
			interval  = interval / 2
			numIncs   = lastNumIncs * 2
			percentChange = percentChange * 2
			lastNumIncs = numIncs
			setIntrvl(interval)
		}
	}

	function setIntrvl(
		interval
	) {
		incrementInterval = setInterval(() => {
			checkInterval()
			dispatch('update')
		}, interval)
	}

	function clearIntrvl() {
		if (incrementInterval) {
			clearInterval(incrementInterval)
		}
	}

	/*    function getInputBorder(
					value
			) {
					return value.valid === undefined
					|| value.valid
							? '0px'
							: '3px solid red'
			}*/

	function getRadius(
		outcome,
		voteFactor
	) {
		return outcome === voteFactor.outcome
			? 24
			: 23
	}

	function getStrokeWidth(
		outcome,
		voteFactor
	) {
		return outcome === voteFactor.outcome
			? 0
			: 3
	}

	function getButtonColor(
		matchingOutcomes,
		voteFactor
	) {
		return matchingOutcomes.indexOf(voteFactor.outcome) > -1
			? '000'
			: 'fff'
	}
/*
	function updateValue() {
		setTimeout(() => {
			positionInput.value = voteFactor.value
		}, 16)
	}*/

	function onPress(
		newOutcome
	) {
		percentChange = 1
		lastNumIncs = 5
		lastVoteFactor = voteFactor

		dispatch('move', {
			outcome: newOutcome,
			percentChange
		})

		interval = 360
		outcome = newOutcome
		numIncs = 8
		numReIncs = 4
		percentChange = 1
		setIntrvl(interval)

		dispatch('update')
	}
</script>

<style>

	div {
		display: inline-block;
		height: 50px;
		position: relative;
		width: 50px;
	}

	figure {
		border-top: 10px solid transparent;
		display: inline-block;
		height: 60px;
		margin: auto;
		position: relative;
		width: 110px;
	}

	input {
		background: transparent;
		border: 0px;
		font-family: "Lucida Console";
		left: 0px;
		margin: 0px;
		padding: 0px 15px 0px 0px;
		position: absolute;
		text-align: right;
		top: 0px;
		width: 85px;
	}

	span {
		font-family: "Lucida Console";
		font-size: 0.7em;
		position: absolute;
		right: 17px;
		top: 9px;
	}

	td {
		font-size: 0.8em;
		width: 33%;
	}

	.factor {
		border: 1px solid black;
		border-radius: 4px;
		border-top: 10px solid;
	}

</style>

<tr>
	<td>
		<div
				on:mousedown="{() => mouseDown('A')}"
				on:mouseup="{mouseUp}"
				on:touchstart="{(event) => touchStart('A', event)}"
				on:touchend="{mouseUp}"
		>
			<LeftButton
					circleRadius="{leftCircleRadius}"
					fillColor="{leftFillColor}"
					highlightColor="{leftHighlightColor}"
					strokeWidth="{leftStrokeWidth}"
					styles="left: 0px; position: absolute; top: 0px;"
			></LeftButton>
		</div>
	</td>
	<td>
		<figure
				class:factor="{voteFactor.value}"
				style="background-color: {factorColor};"
		>

			<input
					maxlength="3"
					on:input="{moveToValue}"
					bind:this="{positionInput}"
					value="{voteFactor.value}"
			>
			<span>%</span>
		</figure>
		<!--
						style="
				border-bottom: {valueBottomBorder};
			"
			-->
	</td>
	<td
	>
		<div
				on:mousedown="{() => mouseDown('B')}"
				on:mouseup="{mouseUp}"
				on:touchstart="{(event) => touchStart('B', event)}"
				on:touchend="{mouseUp}"
		>
			<RightButton
					circleRadius="{rightCircleRadius}"
					fillColor="{rightFillColor}"
					highlightColor="{rightHighlightColor}"
					strokeWidth="{rightStrokeWidth}"
					styles="left: 0px; position: absolute; top: 0px;"
			></RightButton>
		</div>
	</td>
</tr>
