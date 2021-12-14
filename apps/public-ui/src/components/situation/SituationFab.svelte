<script lang="ts">
	import { createEventDispatcher } from "svelte";

	import BellCurveButton from "@votecube/ui-controls/src/button/BellCurveButton.svelte";
	import BuildButton from "@votecube/ui-controls/src/button/BuildButton.svelte";
	import DescribedButton from "@votecube/ui-controls/src/button/DescribedButton.svelte";
	import EditButton from "@votecube/ui-controls/src/button/EditButton.svelte";
	import OpinionButton from "@votecube/ui-controls/src/button/OpinionButton.svelte";
	import OutcomeButton from "@votecube/ui-controls/src/button/OutcomeButton.svelte";
	import RankingsButton from "@votecube/ui-controls/src/button/RankingsButton.svelte";
	import ShieldButton from "@votecube/ui-controls/src/button/ShieldButton.svelte";
	import UndescribedButton from "@votecube/ui-controls/src/button/UndescribedButton.svelte";
	import SituationTreeButton from "@votecube/ui-controls/src/button/SituationTreeButton.svelte";
	import SolutionButton from "@votecube/ui-controls/src/button/SolutionButton.svelte";
	import Fab from "@votecube/ui-components/src/Fab.svelte";

	export let mode: string;

	let opened = false;

	const dispatch = createEventDispatcher();

	$: previewMode = mode === "build" || mode === "alter";
	$: editSituationLabel =
		mode === "build" ? "Edit Situation" : "Alter Situation";

	function run(action) {
		opened = false;
		dispatch(action);
	}
</script>

<Fab bind:opened>
	<div slot="up4">
		<DescribedButton
			bind:opened
			label="Set Age Suitability"
			on:click={() => run("ageSuitability")}
		>
			<ShieldButton />
		</DescribedButton>
	</div>
	<div slot="up3">
		<DescribedButton
			bind:opened
			label="View Outcomes"
			on:click={() => run("outcomes")}
		>
			<OutcomeButton />
		</DescribedButton>
	</div>
	<div slot="up2">
		<DescribedButton
			bind:opened
			label={editSituationLabel}
			on:click={() => run("edit")}
		>
			<EditButton />
		</DescribedButton>
	</div>
	<div slot="up1">
		<DescribedButton
			bind:opened
			label={previewMode ? "Define Situation" : "Solve"}
			on:click={() => run(previewMode ? "build" : "confirmSolution")}
		>
			{#if previewMode}
				<BuildButton />
			{:else}
				<SolutionButton />
			{/if}
		</DescribedButton>
	</div>
	<div slot="left1">
		<UndescribedButton>
			<SituationTreeButton
				on:click={() => run("derivations")}
				styles="position: absolute; right: 0px; top: 0px;"
			/>
		</UndescribedButton>
	</div>
	<div slot="left2">
		<UndescribedButton>
			<OpinionButton
				on:click={() => run("opinions")}
				styles="position: absolute; right: 0px; top: 0px;"
			/>
		</UndescribedButton>
	</div>
	<div slot="left3">
		<UndescribedButton>
			<BellCurveButton
				on:click={() => run("stats")}
				styles="position: absolute; right: 0px; top: 0px;"
			/>
		</UndescribedButton>
	</div>
	<div slot="left4">
		<UndescribedButton>
			<RankingsButton
				on:click={() => run("rankings")}
				styles="position: absolute; right: 0px; top: 0px;"
			/>
		</UndescribedButton>
	</div>
</Fab>

<style>
	div[slot^="up"] {
		position: absolute;
		right: 10px;
		top: 5px;
	}

	div[slot^="left"] {
		position: absolute;
		right: 10px;
		top: 5px;
	}
</style>
