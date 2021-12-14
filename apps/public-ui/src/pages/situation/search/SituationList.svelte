<script lang="ts">
	import { DI } from "@airport/di";
	import type { IUiLabel, IUiSituation } from "@votecube/model";
	import {
		navigateToPage,
		pageTitle,
		text
	} from "@votecube/ui-logic";
	import {
		ISituationManager,
		LOGIC_UTILS,
		SITUATION_MAIN,
		SITUATION_MANAGER
	} from "@votecube/vc-logic";
	import { onDestroy, onMount } from "svelte";
	import { get } from "svelte/store";
	import { fade } from "svelte/transition";
	import CancelButton from "@votecube/ui-controls/src/button/CancelButton.svelte";
	import AutoComplete from "@votecube/ui-controls/src/field/AutoComplete.svelte";
	// import VirtualList from '@sveltejs/svelte-virtual-list';
	import ActionPopover from "@votecube/ui-controls/src/shell/ActionPopover.svelte";
	import SituationListFab from "../../../components/situation/SituationListFab.svelte";
	import * as forms from "../../../form/forms";
	import { loadForms } from "../../../libs/forms";
	import SituationListItem from "./SituationListItem.svelte";

	let action;
	let container;
	let delta: number;
	let form;
	let isOriginal: boolean;
	let isValid: boolean;
	let load = new Promise((resolve) => {
		setTimeout(() => {
			resolve(initPage());
		}, 1);
	});
	let logicUtils;
	let mode = "factors";
	let situations: IUiSituation[];

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
		container = DI.ui("SituationList");
		logicUtils = await container.get(LOGIC_UTILS);
	});

	onDestroy(() => {
		forms.clearForm(form);
		DI.remove(container);
	});

	function getError(error) {
		console.log(error);

		return error;
	}

	function goTo(repositoryUuId: string) {
		navigateToPage(SITUATION_MAIN, {
			mode: "solution",
			repositoryUuId: repositoryUuId,
		});
	}

	function setAction(theAction) {
		action = theAction;
	}

	function showFactors() {
		mode = "factors";
	}

	function showOutcomes() {
		mode = "outcomes";
	}

	async function initPage() {
		const situationManager = await container.get(SITUATION_MANAGER);
		const [formFactory, originalSituations] = await Promise.all([
			loadForms(),
			findSituations(null, situationManager),
		]);
		situations = originalSituations;

		const category = formFactory.options(
			[],
			[
				{
					id: 1,
					text: "Politics",
				},
				{
					id: 2,
					text: "Culture",
				},
				{
					id: 3,
					text: "Technology",
				},
				{
					id: 4,
					text: "Space",
				},
				{
					id: 5,
					text: "Security",
				},
			]
		);

		category.onChange((aCategory) => {
			findSituations(aCategory, situationManager).then(
				(theSituations) => {
					situations = theSituations;
				}
			);
		});

		form = formFactory.group(
			"List",
			{
				category,
			},
			[],
			get(text).UI.Situation
		);

		forms.ensureForm(form, formHandle);

		pageTitle.set("Situations");
	}

	async function findSituations(
		category: IUiLabel,
		situationManager: ISituationManager
	) {
		if (!category) {
			return situationManager.getAllSituations();
		} else {
			return situationManager.getSituationsForCategory(category);
		}
	}
</script>

{#await load}
	<!-- nothing to show, yet -->
{:then}
	<article transition:fade={{ duration: 700 }}>
		{#if form}
			<form>
				<AutoComplete field={form.fields.category} />
			</form>
			<table>
				{#each situations as situation}
					<SituationListItem
						{logicUtils}
						{mode}
						on:click={() => goTo(situation.repositoryUuId)}
						{situation}
					/>
				{/each}
			</table>
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
								Ability filter Situations is coming right after
								Opinions and will be released mid-Alpha.
							{:else if action === "sort"}
								Ability sort Situations is at the same time as
								the ability to filter and will be released
								mid-Alpha.
							{/if}
							<br />
							<br />
							Please see the
							<a href="/releasePlan">Release Plan</a> for details.
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
{:catch error}
	{getError(error)}
{/await}

<style>
	article {
		height: initial;
		position: relative;
		max-width: 420px;
		width: 100%;
	}

	table {
		width: 100%;
	}
</style>
