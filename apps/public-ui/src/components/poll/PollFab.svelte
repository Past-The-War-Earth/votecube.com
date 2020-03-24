<script>
	import {createEventDispatcher} from 'svelte'

	import AlignmentButton   from '../../common/control/button/AlignmentButton.svelte'
	import BellCurveButton   from '../../common/control/button/BellCurveButton.svelte'
	import BuildButton       from '../../common/control/button/BuildButton.svelte'
	import DescribedButton   from '../../common/control/button/DescribedButton.svelte'
	import EditButton        from '../../common/control/button/EditButton.svelte'
	import ManualOverwriteButton
	                         from '../../common/control/button/ManualOverwriteButton.svelte'
	import OpinionButton     from '../../common/control/button/OpinionButton.svelte'
	import OutcomeButton     from '../../common/control/button/OutcomeButton.svelte'
	import RankingsButton    from '../../common/control/button/RankingsButton.svelte'
	import ShieldButton      from '../../common/control/button/ShieldButton.svelte'
	import UndescribedButton from '../../common/control/button/UndescribedButton.svelte'
	import RevisionTreeButton
	                         from '../../common/control/button/RevisionTreeButton.svelte'
	import VoteButton        from '../../common/control/button/VoteButton.svelte'
	import Fab               from '../../common/control/Fab.svelte'

	export let mode

	let alignmentMode = false
	let opened      = false

	const dispatch = createEventDispatcher()

	$: previewMode = mode === 'build' || mode === 'alter'
	$: editPollLabel = mode === 'build' ? 'Edit Poll' : 'Improve Poll'

	function run(
		action
	) {
		opened = false
		dispatch(action)
	}

	function position(
		newAlignmentMode,
		previewMode
	) {
		if (!previewMode) {
			run('manuallyOverwrite')
			return
		}
		alignmentMode = !newAlignmentMode
		run('position')
	}

</script>

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

<Fab
		bind:opened
>
	<div
			slot="up5"
	>
		<DescribedButton
				bind:opened
				label="Set Age Suitability"
				on:click="{() => run('ageSuitability')}"
		>
			<ShieldButton
			></ShieldButton>
		</DescribedButton>
	</div>
	<div
			slot="up4"
	>
		<DescribedButton
				bind:opened
				label="View Outcomes"
				on:click="{() => run('outcomes')}"
		>
			<OutcomeButton
			></OutcomeButton>
		</DescribedButton>
	</div>
	<div
			slot="up3"
	>
		<DescribedButton
				bind:opened
				label="{previewMode ? (alignmentMode ? 'Hide Alignment' : 'Set Alignment') : 'Manually Override'}"
				on:click="{() => position(alignmentMode, previewMode)}"
		>
			{#if previewMode}
			<AlignmentButton
					alignmentMode="{alignmentMode}"
			></AlignmentButton>
			{:else}
			<ManualOverwriteButton
			></ManualOverwriteButton>
			{/if}
		</DescribedButton>
	</div>
	<div
			slot="up2"
	>
		<DescribedButton
				bind:opened
				label="{editPollLabel}"
				on:click="{() => run('edit')}"
		>
			<EditButton
			></EditButton>
		</DescribedButton>
	</div>
	<div
			slot="up1"
	>
		<DescribedButton
				bind:opened
				label="{previewMode ? 'Build Poll' : 'Submit Vote'}"
				on:click="{() => run(previewMode ? 'build' : 'confirmVote')}"
		>
			{#if previewMode}
			<BuildButton
			></BuildButton>
			{:else}
			<VoteButton
			></VoteButton>
			{/if}
		</DescribedButton>
	</div>
	<div
			slot="left1"
	>
		<UndescribedButton>
			<RevisionTreeButton
					on:click="{() => run('revisions')}"
					styles="position: absolute; right: 0px; top: 0px;"
			></RevisionTreeButton>
		</UndescribedButton>
	</div>
	<div
			slot="left2"
	>
		<UndescribedButton>
			<OpinionButton
					on:click="{() => run('opinions')}"
					styles="position: absolute; right: 0px; top: 0px;"
			></OpinionButton>
		</UndescribedButton>
	</div>
	<div
			slot="left3"
	>
		<UndescribedButton>
			<BellCurveButton
					on:click="{() => run('stats')}"
					styles="position: absolute; right: 0px; top: 0px;"
			></BellCurveButton>
		</UndescribedButton>
	</div>
	<div
			slot="left4"
	>
		<UndescribedButton>
			<RankingsButton
					on:click="{() => run('rankings')}"
					styles="position: absolute; right: 0px; top: 0px;"
			></RankingsButton>
		</UndescribedButton>
	</div>
</Fab>
