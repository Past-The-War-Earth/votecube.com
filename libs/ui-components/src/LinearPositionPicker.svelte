<script lang="ts">
	import { DI } from "@airport/direction-indicator";
	import type { IUiIdea, IUiAgreementFactor } from "@votecube/model";
	import { ILogicUtils, LOGIC_UTILS } from "@votecube/vc-logic";
	import { createEventDispatcher, onDestroy, onMount } from "svelte";
	import LeftButton from "@votecube/ui-controls/src/button/LeftButton.svelte";
	import RightButton from "@votecube/ui-controls/src/button/RightButton.svelte";

	export let moveDelta: number;
	export let idea: IUiIdea;
	export let agreementFactor: IUiAgreementFactor;

	let container;
	let incrementInterval;
	let interval;
	let lastNumIncs;
	let lastAgreementFactor: IUiAgreementFactor;
	let logicUtils: ILogicUtils;
	let numIncs;
	let numReIncs;
	let outcome;
	let percentChange;
	let positionInput;

	const dispatch = createEventDispatcher();

	// valueBottomBorder: ({moveToValueDelta, value}) => getInputBorder(value),
	$: leftCircleRadius = v(getRadius("A", agreementFactor), moveDelta);
	$: rightCircleRadius = v(getRadius("B", agreementFactor), moveDelta);
	$: leftStrokeWidth = v(getStrokeWidth("A", agreementFactor), moveDelta);
	$: rightStrokeWidth = v(getStrokeWidth("B", agreementFactor), moveDelta);
	$: leftHighlightColor = v(
		getButtonColor(["B", null], agreementFactor),
		moveDelta
	);
	$: rightHighlightColor = v(
		getButtonColor(["A", null], agreementFactor),
		moveDelta
	);
	$: leftFillColor = v(getButtonColor(["A"], agreementFactor), moveDelta);
	$: rightFillColor = v(getButtonColor(["B"], agreementFactor), moveDelta);
	$: factorColor = v(
		logicUtils && agreementFactor.outcome
			? "#" +
					logicUtils.getColor(
						idea.factors[agreementFactor.factorNumber].color
					)
			: "initial",
		moveDelta
	);

	function v<T>(val: T, _delta: number): T {
		return val;
	}

	function mouseDown(outcome) {
		onPress(outcome);
	}

	function mouseUp(event) {
		event.preventDefault();

		clearIntrvl();
	}

	function moveToValue() {
		dispatch("moveToValue", positionInput.value);
		// this.set({moveToValueDelta: this.get().moveToValueDelta + 1})
	}

	function touchStart(outcome, event) {
		event.preventDefault();
		onPress(outcome);
	}
	onMount(async () => {
		container = DI.ui("LinearPositionPicker");
		logicUtils = await container.get(LOGIC_UTILS);
	});

	onDestroy(() => {
		// this.refreshListener.cancel()
		DI.remove(container);
	});

	async function initPage() {
		container = DI.ui("LinearPositionPicker");
		logicUtils = await container.get(LOGIC_UTILS);
	}

	function checkInterval() {
		numIncs = numIncs - 1;
		if (lastAgreementFactor !== agreementFactor) {
			clearIntrvl();
			numIncs = 0;
			return;
		}
		dispatch("move", {
			outcome,
			percentChange,
		});
		if (!numIncs) {
			clearIntrvl();
			numReIncs = numReIncs - 1;
			if (!numReIncs) {
				return;
			}
			interval = interval / 2;
			numIncs = lastNumIncs * 2;
			percentChange = percentChange * 2;
			lastNumIncs = numIncs;
			setIntrvl(interval);
		}
	}

	function setIntrvl(interval) {
		incrementInterval = setInterval(() => {
			checkInterval();
			dispatch("update");
		}, interval);
	}

	function clearIntrvl() {
		if (incrementInterval) {
			clearInterval(incrementInterval);
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

	function getRadius(outcome, agreementFactor: IUiAgreementFactor) {
		return outcome === agreementFactor.outcome ? 24 : 23;
	}

	function getStrokeWidth(outcome, agreementFactor: IUiAgreementFactor) {
		return outcome === agreementFactor.outcome ? 0 : 3;
	}

	function getButtonColor(matchingOutcomes, agreementFactor: IUiAgreementFactor) {
		return matchingOutcomes.indexOf(agreementFactor.outcome) > -1
			? "000"
			: "fff";
	}
	/*
	function updateValue() {
		setTimeout(() => {
			positionInput.value = agreementFactor.value
		}, 16)
	}*/

	function onPress(newOutcome) {
		percentChange = 1;
		lastNumIncs = 5;
		lastAgreementFactor = agreementFactor;

		dispatch("move", {
			outcome: newOutcome,
			percentChange,
		});

		interval = 360;
		outcome = newOutcome;
		numIncs = 8;
		numReIncs = 4;
		percentChange = 1;
		setIntrvl(interval);

		dispatch("update");
	}
</script>

<tr>
	<td>
		<div
			on:mousedown={() => mouseDown("A")}
			on:mouseup={mouseUp}
			on:touchstart={(event) => touchStart("A", event)}
			on:touchend={mouseUp}
		>
			<LeftButton
				circleRadius={leftCircleRadius}
				fillColor={leftFillColor}
				highlightColor={leftHighlightColor}
				strokeWidth={leftStrokeWidth}
				styles="left: 0px; position: absolute; top: 0px;"
			/>
		</div>
	</td>
	<td>
		<figure
			class:factor={agreementFactor.value}
			style="background-color: {factorColor};"
		>
			<input
				maxlength="3"
				on:input={moveToValue}
				bind:this={positionInput}
				value={agreementFactor.value}
			/>
			<span>%</span>
		</figure>
		<!--
						style="
				border-bottom: {valueBottomBorder};
			"
			-->
	</td>
	<td>
		<div
			on:mousedown={() => mouseDown("B")}
			on:mouseup={mouseUp}
			on:touchstart={(event) => touchStart("B", event)}
			on:touchend={mouseUp}
		>
			<RightButton
				circleRadius={rightCircleRadius}
				fillColor={rightFillColor}
				highlightColor={rightHighlightColor}
				strokeWidth={rightStrokeWidth}
				styles="left: 0px; position: absolute; top: 0px;"
			/>
		</div>
	</td>
</tr>

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
