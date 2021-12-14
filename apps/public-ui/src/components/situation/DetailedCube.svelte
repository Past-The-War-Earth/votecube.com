<script lang="ts">
	import { DI } from "@airport/di";
	import { CUBE_EVENT_LISTENER, MUTATION_API } from "@votecube/cube-logic";
	import type { IUiSituation, IUiSolution } from "@votecube/model";
	import { DETAILED_CUBE_LOGIC, LOGIC_UTILS } from "@votecube/vc-logic";
	import {
		beforeUpdate,
		createEventDispatcher,
		onDestroy,
		onMount,
	} from "svelte";
	import CharacterButton from "@votecube/ui-controls/src/button/CharacterButton.svelte";
	import Positioner from "./create/Positioner.svelte";

	export let cubeSideMap;
	export let cubeSides = [];
	// export let cubeView
	// export let delta
	// export let moveType
	export let situation: IUiSituation;
	export let positionMode;
	export let verticalLayout;
	export let solution: IUiSolution;

	let changed: {
		situation: boolean;
	} = {
		situation: false,
	};
	let container;
	// let factorPositionPlaces = []
	let loading = true;
	let logicUtils;
	let positions = [];
	let previous: {
		situation: IUiSituation;
	} = {
		situation: null,
	};
	let rotating = false;
	let situationSet = false;

	const dispatch = createEventDispatcher();

	$: horizontalLayout = !verticalLayout;

	onMount(async () => {
		ensureContainer();
		const [cubeEventListener, mutationApi] = await container.get(
			CUBE_EVENT_LISTENER,
			MUTATION_API
		);

		cubeEventListener.setView("cube");

		await mutationApi.recompute();

		setTimeout(() => {
			loading = false;
			rotating = true;
			setTimeout(() => {
				rotating = false;
			}, 700);
		}, 1);

		logicUtils = await container.get(LOGIC_UTILS);
	});

	onDestroy(async () => {
		const cubeEventListener = await container.get(CUBE_EVENT_LISTENER);

		cubeEventListener.clearView("cube");
		DI.remove(container);
	});

	beforeUpdate(() => {
		ensureContainer();
		changed.situation = situation !== previous.situation;
		previous.situation = situation;
		if (!situationSet) {
			if (changed.situation && situation) {
				getCubeSides().then();
			}
			if (solution) {
				solution.changeMillis = 128;
				situationSet = true;
			}
		}
	});

	function ensureContainer() {
		if (!container) {
			container = DI.ui("DetailedCube");
		}
	}

	function charButtonAlignment(outcome) {
		return outcome === "A" ? "left" : "right";
	}

	function moveDown(cubeSide, cubeSideMap) {
		move(cubeSideMap, cubeSide, [
			["y", 1], // x+
			["y", 1], // x-
			["x", -1], // y+
			["x", -1], // y-
			["x", -1], // z+
			["x", -1], // z-
		]).then();
	}

	function moveLeft(cubeSide, cubeSideMap) {
		move(cubeSideMap, cubeSide, [
			["z", -1], // x+
			["z", 1], // x-
			["z", -1], // y+
			["z", 1], // y-
			["y", 1], // z+
			["y", -1], // z-
		]).then();
	}

	function moveRight(cubeSide, cubeSideMap) {
		move(cubeSideMap, cubeSide, [
			["z", 1], // x+
			["z", -1], // x-
			["z", 1], // y+
			["z", -1], // y-
			["y", -1], // z+
			["y", 1], // z-
		]).then();
	}

	function switchDir(cubeSide, cubeSideMap) {
		switchPoles(cubeSideMap, cubeSide).then();
	}

	function moveUp(cubeSide, cubeSideMap) {
		move(cubeSideMap, cubeSide, [
			["y", -1], // x+
			["y", -1], // x-
			["x", 1], // y+
			["x", 1], // y-
			["x", 1], // z+
			["x", 1], // z-
		]).then();
	}

	/*			toggleView(
					cubeView,
					event
				) {
					if (!cubeView) {
						this.fire('select', event)
					}
				}*/

	// onstate({changed, current}) {
	// 	if (!current.pFPsByAxisAndDir) {
	// 		return
	// 	}
	//
	// 	// let cubeElement
	// 	// if (changed.cubeView) {
	// 	// 	let options = {
	// 	// 		// x: 400,
	// 	// 		// y: 400,
	// 	// 		// duration: 700
	// 	// 	}
	// 	// 	// cubeElement = document.getElementById('cube')
	// 	// 	// cubeElement.classList.remove('cubeView')
	// 	// 	// if (current.cubeView) {
	// 	// 	// 	cubeElement.classList.add('cubeView')
	// 	// 	// 	// options.x = -options.x
	// 	// 	// 	// options.y = -options.y
	// 	// 	// }
	// 	// 	setTimeout(() => {
	// 	// 		transition('viewport', fade, options)
	// 	// 	})
	// 	// }
	//
	// 	if (changed.moveType) {
	// 		cubeElement = document.getElementById('cube')
	// 		cubeElement.classList.remove('toggle')
	// 		if (current.moveType === 'toggle') {
	// 			cubeElement.classList.add('toggle')
	// 		}
	// 	}
	// }

	async function getCubeSides() {
		const detailedCubeLogic = await container.get(DETAILED_CUBE_LOGIC);

		await doGetCubeSides(detailedCubeLogic);
	}

	async function move(cubeSideMap, cubeSide, switchToDefinitions) {
		const detailedCubeLogic = await container.get(DETAILED_CUBE_LOGIC);
		detailedCubeLogic.move(cubeSideMap, cubeSide, switchToDefinitions);
		const cubeSides = await doGetCubeSides(detailedCubeLogic);
		dispatch("cubeAltered", cubeSides);
	}

	async function switchPoles(cubeSideMap, cubeSide) {
		const detailedCubeLogic = await container.get(DETAILED_CUBE_LOGIC);
		detailedCubeLogic.switchPoles(cubeSideMap, cubeSide);
		const cubeSides = await doGetCubeSides(detailedCubeLogic);
		dispatch("cubeAltered", cubeSides);
	}

	async function doGetCubeSides(detailedCubeLogic) {
		const results = await detailedCubeLogic.getCubeSides(
			situation,
			container
		);

		cubeSideMap = results.cubeSideMap;
		cubeSides = results.cubeSides;

		return cubeSides;
	}
</script>

<figure id="cube">
	<!--			on:click="toggleView(cubeView, event)"-->
	{#each cubeSides as cubeSide, i}
		<div
			class="surface {loading ? 'loading' : ''} {rotating
				? 'rotating'
				: ''}"
			id="s{i}"
			style="
            background-color: #{cubeSide.colorRGB};
              "
		>
			{#if !loading && !rotating}
				<header>
					<CharacterButton
						character={cubeSide.outcome}
						fontSize={23}
						fontX={14.5}
						fontY={23}
						size={30}
						strokeWidth={0}
						styles="{charButtonAlignment(
							cubeSide.outcome
						)}: 1px; position: absolute; top: 0px;"
					/>
					{cubeSide.factor.name}
				</header>
				{#if positionMode}
					<Positioner
						on:moveRight={() => moveRight(cubeSide, cubeSideMap)}
						on:moveDown={() => moveDown(cubeSide, cubeSideMap)}
						on:moveLeft={() => moveLeft(cubeSide, cubeSideMap)}
						on:moveUp={() => moveUp(cubeSide, cubeSideMap)}
						on:switchDir={() => switchDir(cubeSide, cubeSideMap)}
					/>
				{/if}
				<p style="color: #{cubeSide.textColorRGB};">
					{cubeSide.position.name}
				</p>
			{/if}
		</div>
	{/each}
</figure>

<style>
	/*
	@media (min-width: 321px) {

		figure#cube > div {
			font-size: 1.9em;
			line-height: 1.2em;
		}

	}

	@media (min-width: 376px) {
		figure#cube > div {
			font-size: 2.1em !important;
			line-height: 1.3em !important;
		}
	}
	 */

	#cube {
		height: 320px;
		margin: auto;
		position: relative;
		/*transform: rotateX(0deg) rotateY(-90deg);*/
		transform-style: preserve-3d;
		/*top: 50%;*/
		width: 320px;
	}

	#cube > div {
		/*border: 5px groove gray;*/
		border: 5px solid gray;
		border-radius: 10px;
		color: #000;
		/*font-size: 2.0em;*/
		font-size: 1.7em;
		font-weight: bold;
		/*height: 320px;*/
		height: 311px;
		/*line-height: 2.0em;*/
		line-height: 1.2em;
		position: absolute;
		/*width: 320px;*/
		width: 311px;
		/*
		height: 360px;
		width: 360px;
		padding: 20px;
		font-size: 1.8em;
		line-height: 2em;
		*/
	}

	#s0 {
		/*background: hsla(  0, 100%, 50%, 0.95);*/
		transform: rotateX(90deg) translateZ(160px) /*translateZ(200px)*/;
	}

	#s1 {
		transform: translateZ(160px) /*translateZ(200px)*/;
	}

	#s2 {
		transform: rotateY(90deg) translateZ(160px) /*translateZ(200px)*/;
	}

	#s3 {
		transform: rotateY(180deg) translateZ(160px) /*translateZ(200px)*/;
	}

	#s4 {
		transform: rotateY(-90deg) translateZ(160px) /*translateZ(200px)*/;
	}

	#s5 {
		transform: rotateX(-90deg) rotate(180deg) translateZ(160px)
			/*translateZ(200px)*/;
	}

	div {
		transition: width 700ms, height 700ms, transform 700ms;
		transition-timing-function: ease-out;
	}

	div.rotating {
		transform: rotateX(180deg) rotateY(180deg) !important;
	}

	div.loading {
		width: 1px !important;
		height: 1px !important;
	}

	/*footer,*/
	header {
		color: #fff;
		background-color: #000;
		font-size: 0.8em;
		font-weight: 500;
		height: 30px;
		line-height: 1em;
		overflow: hidden;
		position: relative;
		text-align: center;
		text-overflow: ellipsis;
		width: 100%;
		white-space: nowrap;
	}

	header {
		top: 0px;
	}

	/*	footer {
			bottom: 0px;
			position: absolute;
		}*/

	p {
		margin: 0;
		margin-block-start: 0em;
		margin-block-end: 0em;
		padding: 0 10px;
		word-break: break-word;
	}

	/*	span {
			position: absolute;
			left: 55px;
			top: 7px;
		}

		span {
			display: inline-block;
		}*/

	.surface {
		position: relative;
	}
</style>
