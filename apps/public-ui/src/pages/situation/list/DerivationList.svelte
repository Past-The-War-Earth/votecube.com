<script lang="ts">
	import { DI } from "@airport/di";
	import {
		LOGIC_UTILS,
		navigateToPage,
		pageTitle,
		SITUATION_MAIN,
		SITUATION_MANAGER,
		RELEASE_PLAN,
		routeParams,
		text,
		ILogicUtils,
	} from "@votecube/vc-logic";
	import { onDestroy, onMount } from "svelte";
	import { get } from "svelte/store";
	import { fade } from "svelte/transition";
	import type { INavList, IUiSituation } from "@votecube/model";
	import CancelButton from "../../../common/control/button/CancelButton.svelte";
	import RightButton from "../../../common/control/button/RightButton.svelte";
	// import VirtualList from '@sveltejs/svelte-virtual-list';
	import ActionPopover from "../../../common/shell/ActionPopover.svelte";
	import SituationListFab from "../../../components/situation/situation/SituationListFab.svelte";
	import * as forms from "../../../form/forms";
	import { loadForms } from "../../../libs/forms";
	import SituationListItem from "./SituationListItem.svelte";
	import type { IFieldGroup } from "@votecube/forms";

	let action;
	let leafSituations: IUiSituation[];
	let container;
	let currentSituation: IUiSituation;
	let delta = 0;
	let error = "";
	let form: IFieldGroup;
	let isOriginal = true;
	let isValid = false;
	let logicUtils: ILogicUtils;
	let mode = "factors";
	let navList: INavList;
	let switching: 0 | 1 | 2;
	let switchedToRepositoryUuId: string;

	let formHandle = {
		setDelta(newDelta) {
			delta = newDelta;
		},
		setIsValid(newIsValid) {
			isValid = newIsValid;
		},
		setIsOriginal(newIsOriginal) {
			isOriginal = newIsOriginal;
		},
	};

	onMount(async () => {
		container = DI.ui("DerivationList");

		const { repositoryUuId } = get(routeParams);
		let results = await getListingsAndOther(
			repositoryUuId,
			loadForms(),
			container
		);

		let stemSituation = results[0];
		leafSituations = results[1];
		let formFactory = results[2];

		form = formFactory.group(
			"List",
			{
				search: formFactory.field([]),
			},
			[],
			get(text).UI.Situation
		);

		navList = {
			direction: 0,
			isTarget: true,
			previous: null,
			situation: stemSituation,
		};

		logicUtils = await container.get(LOGIC_UTILS);

		forms.ensureForm(form, formHandle);

		pageTitle.set("Situations");
	});

	onDestroy(() => {
		forms.clearForm(form);
	});

	function switchToClasses(
		switching: 0 | 1 | 2,
		switchedToRepositoryUuId: string,
		currentSituation: IUiSituation
	) {
		if (!switching) {
			return "";
		}
		const switchedToItem =
			switchedToRepositoryUuId === currentSituation.repositoryUuId;
		if (switching === 1) {
			return switchedToItem ? "" : "closing";
		} else if (switching === 2) {
			return switchedToItem ? "" : "closed";
		}
	}

	function goTo(repositoryUuId) {
		navigateToPage(SITUATION_MAIN, {
			mode: "solution",
			repositoryUuId: repositoryUuId,
		});
	}

	function goToReleasePlan() {
		navigateToPage(RELEASE_PLAN);
	}

	function moveDownHierarchy(leafSituations, moveToSituation, navList) {
		doMoveDown(moveToSituation, navList, leafSituations.length);
	}

	function moveUpHierarchy(leafSituations, moveToSituation, navList) {
		doMoveUp(moveToSituation, navList, leafSituations.length);
	}

	function setAction(theAction) {
		action = theAction;
		error = "";
	}

	function showFactors() {
		mode = "factors";
	}

	function showOutcomes() {
		mode = "outcomes";
	}

	async function getListingsAndOther(
		repositoryUuId: string,
		otherPromise: Promise<any>,
		container
	) {
		const situationManager = await container.get(SITUATION_MANAGER);
		let [stemSituation, leafSituations, otherResult] = await Promise.all([
			situationManager.getSituation(repositoryUuId),
			situationManager.getLeafSituations(repositoryUuId),
			otherPromise,
		]);

		return [stemSituation, leafSituations, otherResult];
	}

	function doMoveDown(
		moveToSituation: IUiSituation,
		navList: INavList,
		numLeafs: number
	) {
		switching = 1;
		switchedToRepositoryUuId = moveToSituation.repositoryUuId;

		setTimeout(() => {
			switching = 2;
			getDataAndMoveDown(moveToSituation, navList, numLeafs).then();
		}, 10);
	}

	function doMoveUp(
		moveToSituation: IUiSituation,
		navList: INavList,
		numLeafs: number
	) {
		switching = 1;
		switchedToRepositoryUuId = moveToSituation.repositoryUuId;

		setTimeout(() => {
			switching = 2;
			getDataAndMoveUp(moveToSituation, navList, numLeafs).then();
		}, 10);
	}

	async function getDataAndMoveDown(
		moveToSituation: IUiSituation,
		navList: INavList,
		numLeafs: number
	) {
		const { stemSituation, leafSituations } = await getSwitchData(
			moveToSituation.repositoryUuId,
			numLeafs
		);

		if (
			[0, 1].indexOf(navList.direction) > -1 &&
			navList.situation.repositoryUuId !== moveToSituation.repositoryUuId
		) {
			navList = {
				direction: 1,
				isTarget: false,
				previous: navList,
				situation: moveToSituation,
			};
		} else if (navList.direction === -1) {
			if (
				navList.situation.repositoryUuId ===
				moveToSituation.repositoryUuId
			) {
				navList = navList.previous;
			} else {
				navList = {
					direction: 1,
					isTarget: false,
					previous: navList,
					situation: moveToSituation,
				};
			}
		}

		finishSwitching(leafSituations, stemSituation, navList);
	}

	async function getDataAndMoveUp(
		moveToSituation: IUiSituation,
		navList: INavList,
		numLeafs: number
	) {
		const { stemSituation, leafSituations } = await getSwitchData(
			moveToSituation.parent.repositoryUuId,
			numLeafs
		);

		if (navList.direction === -1) {
			navList = {
				direction: -1,
				isTarget: false,
				previous: navList,
				situation: stemSituation,
			};
		} else if (
			navList.direction === 0 &&
			moveToSituation.repositoryUuId !== navList.situation.repositoryUuId
		) {
			navList = {
				direction: -1,
				isTarget: false,
				previous: navList,
				situation: moveToSituation,
			};
		} else if (navList.direction === 1) {
			navList = navList.previous;
		}

		finishSwitching(leafSituations, stemSituation, navList);
	}

	async function getSwitchData(repositoryUuId: string, numLeafs: number) {
		let [stemSituation, leafSituations, _] = await getListingsAndOther(
			repositoryUuId,
			new Promise<void>((resolve) => {
				setTimeout(
					() => {
						resolve();
					},
					numLeafs ? 1500 : 0
				);
			}),
			container
		);

		return {
			stemSituation,
			leafSituations,
		};
	}

	function finishSwitching(
		newLeafSituations: IUiSituation[],
		newCurrentSituation: IUiSituation,
		newNavList: INavList
	) {
		leafSituations = newLeafSituations;
		currentSituation = newCurrentSituation;
		navList = newNavList;

		setTimeout(() => {
			switching = 1;
			setTimeout(
				() => {
					switching = 0;
				},
				leafSituations.length ? 1500 : 0
			);
		}, 10);
	}
</script>

<article transition:fade={{ duration: 700 }}>
	{#if logicUtils && currentSituation && form}
		<!--
	<form>
		<Text
				field="{form.fields.search}"
		></Text>
	</form>
	-->

		<nav>
			<div>
				<RightButton
					styles="transform: rotate(-90deg);"
					on:click={() =>
						moveUpHierarchy(
							leafSituations,
							currentSituation,
							navList
						)}
					size={25}
				/>
			</div>
			<var> &nbsp;&nbsp;Go to stem Situation </var>
		</nav>
		<SituationListItem
			childMode={false}
			classes={switchToClasses(
				switching,
				switchedToRepositoryUuId,
				currentSituation
			)}
			{logicUtils}
			{mode}
			{navList}
			on:click={() => goTo(currentSituation.repositoryUuId)}
			situation={currentSituation}
		/>
		<div class="divider" />
		{#each leafSituations as situation}
			<SituationListItem
				classes={switchToClasses(
					switching,
					switchedToRepositoryUuId,
					situation
				)}
				{logicUtils}
				{mode}
				{navList}
				on:moveDownHierarchy={() =>
					moveDownHierarchy(leafSituations, situation, navList)}
				on:click={() => goTo(situation.repositoryUuId)}
				{situation}
			/>
		{/each}
		{#if !leafSituations.length}
			<div class="noLeafSituations">No derived Situations exist yet.</div>
		{/if}
		<SituationListFab
			on:factors={showFactors}
			on:sort={() => setAction("sort")}
			on:filter={() => setAction("filter")}
			on:outcomes={showOutcomes}
		/>
		<!--
	<VirtualList items={factors} component={ListItem} />
	-->
		{#if ["filter", "sort"].indexOf(action) > -1}
			<!--			contentClass="smallPadding"-->
			<ActionPopover
				customCancel={true}
				on:cancel={() => setAction("none")}
			>
				<div slot="header">
					{#if action === "filter"}
						Coming soon - Filtering
					{:else if action === "sort"}
						Coming soon - Sorting
					{/if}
				</div>
				<div slot="content">
					<br />
					<h3>
						{#if action === "filter"}
							Ability filter Situation results is coming right
							after Opinions and will be released mid-Alpha.
						{:else if action === "sort"}
							Ability sort Situation results is at the same time
							as the ability to filter and will be released
							mid-Alpha.
						{/if}
						<br />
						<br />
						Please see the <a href="/releasePlan">Release Plan</a> for
						details.
					</h3>
					<br />
				</div>
				<!--
		<div slot="actions">
			<SolutionButton
					on:select="solve()"
			></SolutionButton>
		</div>
	-->
				<div slot="cancel">
					<CancelButton on:click={() => setAction("none")} />
				</div>
			</ActionPopover>
		{/if}
	{/if}
</article>

<style>
	article {
		height: initial;
		max-width: 420px;
		position: relative;
		width: 100%;
	}

	nav {
		display: flex;
		text-align: center;
		width: 100%;
	}

	nav > div {
		flex-basis: 100%;
		text-align: right;
	}

	nav > var {
		color: black;
		flex-basis: 100%;
		text-align: left;
		line-height: 27px;
		vertical-align: middle;
	}

	.divider {
		height: 3px;
		background-color: black;
		margin: 2px 10px 2px 10px;
		max-width: 100%;
	}

	.noLeafSituations {
		padding: 15px;
		text-align: center;
		width: 100%;
	}
</style>
