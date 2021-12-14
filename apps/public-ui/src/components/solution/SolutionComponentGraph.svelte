<script lang="ts">
	import { DI } from "@airport/di";
	import type {
		ITweenSolutionFactor,
		IUiColor,
		IUiSituation,
		IUiSolution,
	} from "@votecube/model";
	import { cardMove } from "@votecube/ui-logic";
	import { ILogicUtils, LOGIC_UTILS } from "@votecube/vc-logic";
	import {
		createEventDispatcher,
		onDestroy,
		onMount,
	} from "svelte";
	import { fade, fly } from "svelte/transition";
	import CharacterButton from "@votecube/ui-controls/src/button/CharacterButton.svelte";
	import ShieldButton from "@votecube/ui-controls/src/button/ShieldButton.svelte";
	import CubeMiniature from "../situation/CubeMiniature.svelte";

	export let classes = '';
	export let cubeSides;
	export let cubeView;
	export let delta: number;
	// export let moveType
	export let situation: IUiSituation;
	// export let positionMode
	export let tweenDelta;
	// export let verticalLayout
	export let solution: IUiSolution;
	export let solutionFactors: ITweenSolutionFactor[] = [];

	let cardMoveUnsubscribe;
	let container;
	let logicUtils;

	const dispatch = createEventDispatcher();

	$: ageSuitability = f(() => {
		if (!situation) {
			return "?";
		}
		switch (situation.ageSuitability) {
			case 0:
			case 7:
			case 13:
			case 18:
				return situation.ageSuitability + "+";
			default:
				return "?";
		}
	}, delta);
	$: signedTotal = f(() => {
		if (!solutionFactors) {
			return 0;
		}
		return solutionFactors.reduce(
			(total, solutionFactor) =>
				total +
				solutionFactor.tweenValue *
					(solutionFactor.tweenOutcome === "A" ? 1 : -1),
			0
		);
	}, tweenDelta);
	$: outcome = f(() => {
		if (signedTotal === 0) {
			return " ";
		}
		return signedTotal > 0 ? "A" : "B";
	}, tweenDelta);
	$: total = v(Math.abs(signedTotal), tweenDelta);
	// outcomeFontY: ({outcome}) => outcome === 'B' ? 21 : 21

	onMount(async () => {
		container = DI.ui("SolutionComponentGraph");
		logicUtils = await container.get(LOGIC_UTILS);

		cardMoveUnsubscribe = cardMove.subscribe((cardMoveValue) => {
			if (!cardMoveValue || cubeView) {
				return;
			}
			const { move, moved } = cardMoveValue;

			if (moved.length === 3) {
				const options = {
					duration: 300,
					y: 26,
				};
				setTimeout(() => {
					logicUtils.transition("bar_" + 0, fly, options);
					logicUtils.transition("bar_" + 1, fly, options);
					logicUtils.transition("bar_" + 2, fly, {
						duration: 700,
						y: -56,
					});
				});
				return;
			}

			let has0 = moved.indexOf(0) >= 0;
			let has1 = moved.indexOf(1) >= 0;

			const options = moved.map((index) => {
				const y = getMoveY(index, has0, has1);
				return {
					duration: move === 1 ? 300 : 900,
					y,
				};
			});

			setTimeout(() => {
				logicUtils.transition("bar_" + moved[0], fly, options[0]);
				logicUtils.transition("bar_" + moved[1], fly, options[1]);
			});
		});
	});

	onDestroy(async () => {
		cardMoveUnsubscribe();
		DI.remove(container);
	});

	function f<T>(func: () => T, _delta: number) {
		return func();
	}

	function v<T>(val: T, _delta: number) {
		return val;
	}

	function aClass(
		tweenSolutionFactor: ITweenSolutionFactor,
		_tweenDelta: number
	) {
		return tweenSolutionFactor.tweenOutcome === "A" ? "leftDirection" : "";
	}

	function bClass(
		tweenSolutionFactor: ITweenSolutionFactor,
		_tweenDelta: number
	) {
		return tweenSolutionFactor.tweenOutcome === "B" ? "rightDirection" : "";
	}

	function tweenOutcome(
		tweenSolutionFactor: ITweenSolutionFactor,
		_tweenDelta: number
	) {
		return tweenSolutionFactor.tweenOutcome;
	}

	function factorMiniLeft(
		tweenSolutionFactor: ITweenSolutionFactor,
		_tweenDelta: number
	) {
		return tweenSolutionFactor.tweenOutcome === "A" ? 0 : 19;
	}

	function tweenValue(tweenSolutionFactor: ITweenSolutionFactor, _tweenDelta: number) {
		return tweenSolutionFactor.tweenValue;
	}

	function getColor(
		color: IUiColor,
		logicUtils: ILogicUtils,
		_delta: number
	) {
		if (!logicUtils) {
			return "FFF";
		}
		return logicUtils.getColor(color);
	}

	function getWidth(tweenSolutionFactor: ITweenSolutionFactor, _tweenDelta: number) {
		return tweenSolutionFactor.tweenValue;
	}

	function haveWidth(
		tweenSolutionFactor: ITweenSolutionFactor,
		outcome: string,
		_tweenDelta: number
	) {
		return tweenSolutionFactor.tweenOutcome === outcome;
	}

	function showPosition(
		tweenSolutionFactor: ITweenSolutionFactor,
		_tweenDelta: number
	) {
		return tweenSolutionFactor.value || tweenSolutionFactor.tweenValue;
	}

	function onClick() {
		dispatch("toggleView");
	}

	function getMoveY(index, has0, has1) {
		switch (index) {
			case 0:
				return has1 ? 26 : 52;
			case 1:
				return has0 ? -26 : 26;
			case 2:
				return has1 ? -26 : -52;
		}
	}
</script>

{#if situation && solution}
	<table class={classes}>
		{#each solutionFactors as tweenSolutionFactor, i}
			<tr>
				<td class="ranking" on:click={onClick}>
					{#if !i && !cubeView}
						<CubeMiniature {cubeSides} {delta} solution={solution} />
					{:else if cubeView && showPosition(tweenSolutionFactor, tweenDelta)}
						<figure
							style="background-color: #{getColor(
								situation.factors[
									tweenSolutionFactor.factorNumber
								].color,
								logicUtils,
								delta
							)};"
							transition:fly={{ x: -50, duration: 700 }}
						>
							<header />
							<CharacterButton
								character={tweenOutcome(
									tweenSolutionFactor,
									tweenDelta
								)}
								fontSize={20}
								fontX={12}
								fontY={19}
								size={24}
								strokeWidth={1}
								styles="left: {factorMiniLeft(
									tweenSolutionFactor,
									tweenDelta
								)}px; position: absolute; top: 1px;"
							/>
						</figure>
					{/if}
				</td>
				<td class="chart" on:click={() => dispatch("toggleChart")}>
					<table>
						<tr>
							<td class="a">
								{#if haveWidth(tweenSolutionFactor, "A", tweenDelta)}
									<div
										class="bar {aClass(
											tweenSolutionFactor,
											tweenDelta
										)}"
										id="bar_{i}"
										style="
        background-color: #{getColor(
											situation.factors[
												tweenSolutionFactor.factorNumber
											].color,
											logicUtils,
											delta
										)};
        width: {getWidth(tweenSolutionFactor, tweenDelta)}%;
            "
									/>
								{/if}
							</td>
							<td class="b">
								{#if haveWidth(tweenSolutionFactor, "B", tweenDelta)}
									<div
										class="bar {bClass(
											tweenSolutionFactor,
											tweenDelta
										)}"
										id="bar_{i}"
										style="
        background-color: #{getColor(
											situation.factors[
												tweenSolutionFactor.factorNumber
											].color,
											logicUtils,
											delta
										)};
        width: {getWidth(tweenSolutionFactor, tweenDelta)}%;
            "
									/>
								{/if}
							</td>
						</tr>
					</table>
				</td>
				<td
					class="percent"
					on:click={(event) => dispatch("togglePercent", event)}
				>
					{#if showPosition(tweenSolutionFactor, tweenDelta)}
						<!--
			<CharacterButton
					character="{tweenOutcome(tweenSolutionFactor)}"
					fontSize="20"
					fontX="12"
					fontY="19"
					size="24"
					strokeWidth="1"
					styles="left: 3px; position: absolute; top: 3px;"
			></CharacterButton>
			-->
						<span class="value" in:fade
							>{tweenValue(tweenSolutionFactor, tweenDelta)}</span
						>
						<span class="sign" in:fade>%</span>
					{/if}
				</td>
			</tr>
		{/each}
		<tr>
			<td style="position: relative">
				<div class="ageSuitabilityDash">
					<var>
						<ShieldButton
							styles="left: 0px; position: absolute; top: 1px;"
							viewBox="0 0 100 100"
						/>
						<span class="ageSuitability">{ageSuitability}</span>
					</var>
				</div>
			</td>
			<td>
				<table>
					<tr>
						<td style="width: 50%">
							<div class="spacer" />
							<div class="aAxisLabel">A</div>
							<div class="zeroAxisLabel">0</div>
						</td>
						<td style="width: 50%">
							<div class="spacer" />
							<div class="bAxisLabel">B</div>
						</td>
					</tr>
				</table>
			</td>
			<td class="overall">
				<div class="totals">
					<summary>
						<div class="label">Net:</div>
						<CharacterButton
							character={outcome}
							fontSize={22}
							fontX={13}
							fontY={21}
							size={26}
							strokeWidth={1}
							styles="left: 7px; position: absolute; top: 1px;"
						/>
						<span class="value">{total}</span>
						<span class="sign">%</span>
					</summary>
				</div>
			</td>
		</tr>
	</table>
{/if}

<style>
	@media (min-width: 321px) {
		.bAxisLabel {
			display: block !important;
		}

		.totals {
			top: 30px !important;
		}

		.ageSuitabilityDash {
			top: 30px !important;
		}
	}

	div.bar {
		height: 23px;
		margin-top: 3px;
	}

	div.spacer {
		height: 1px;
		width: 100%;
		border-right: 1px solid white;
	}

	figure {
		width: 45px;
		height: 25px;
		position: relative;
		border: 1px solid gray;
		border-radius: 3px;
	}

	header {
		background-color: black;
		height: 5px;
		position: absolute;
		top: 0px;
		width: 100%;
	}

	span {
		display: inline-block;
		font-family: "Lucida Console";
		font-size: 1.4em;
		height: 29px;
		line-height: 33px;
		position: absolute;
		top: 0px;
		vertical-align: center;
	}

	summary,
	var {
		position: relative;
	}

	summary .label {
		position: absolute;
		top: 4px;
		left: -25px;
	}

	summary .sign {
		font-size: 1em;
		font-weight: 100;
		position: absolute;
		right: 9px;
		top: 0px;
	}

	summary .value {
		left: 28px;
		position: absolute;
		text-align: right;
		top: -1px;
		width: 50px;
	}

	table {
		width: 100%;
	}

	td {
		/*padding-top: 1px;*/
		position: relative;
	}

	td.ranking {
		width: 80px;
	}

	.a {
		border-right: 1px solid black;
	}

	.a,
	.b {
		height: 26px;
		width: 50%;
	}

	.a div {
		float: right;
	}

	.aAxisLabel {
		bottom: -20px;
		/*left: -20px;*/
		left: -4px;
		position: absolute;
	}

	.ageSuitability {
		position: absolute;
		left: 30px;
		top: -1px;
	}

	.ageSuitabilityDash {
		color: black;
		left: 5px;
		position: absolute;
		top: 4px;
	}

	.bAxisLabel {
		bottom: -20px;
		display: none;
		position: absolute;
		right: -5px;
		/*right: -25px;*/
	}

	.chart {
		border-left: 1px solid gray;
		border-right: 1px solid gray;
		height: 26px;
	}

	.leftDirection {
		border-left: 2px solid black;
	}

	.percent {
		color: #606060;
		position: relative;
		width: 80px;
	}

	.percent .sign {
		font-size: 1em;
		font-weight: 100;
		position: absolute;
		right: 10px;
		top: 1px;
	}

	.percent .value {
		left: 12px;
		position: absolute;
		text-align: right;
		width: 45px;
	}

	.rightDirection {
		border-right: 2px solid black;
	}

	.totals {
		top: 4px;
		color: black;
		left: -21px;
		position: absolute;
		width: 100px;
	}

	.totals .value {
		font-size: 1.5em;
	}

	/*
		.minus td {
			vertical-align: top;
		}*/

	/*
	.pageFigure td,
	.pageTable td {

		padding: 5px;
		vertical-align: middle;
	}
	*/

	/*	.plus div {
			margin-bottom: 0px;
		}*/

	.zeroAxisLabel {
		bottom: -20px;
		position: absolute;
		right: -5.5px;
		/*right: -7px;*/
	}
</style>
