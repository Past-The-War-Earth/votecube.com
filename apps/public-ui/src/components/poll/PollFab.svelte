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
	import VariationTreeButton
	                         from '../../common/control/button/VariationTreeButton.svelte'
	import VoteButton        from '../../common/control/button/VoteButton.svelte'
	import Fab               from '../../common/control/Fab.svelte'

	export let mode

	let alignmentMode = false
	let closed        = false
	let closing       = false
	let expanded      = false

	const dispatch = createEventDispatcher()

	$: previewMode = mode === 'build' || mode === 'alter'
	$: editPollLabel = mode === 'build' ? 'Edit Poll' : 'Improve Poll'

	function open(
		action
	) {
		closed = true
		dispatch(action)
	}

	function position(
		newAlignmentMode,
		previewMode
	) {
		if (!previewMode) {
			open('manuallyOverwrite')
			return
		}
		alignmentMode = !newAlignmentMode
		open('position')
	}

	function setOpened(
		opened
	) {
		setTimeout(() => {
			closed = !opened
			expanded = opened
			if (!opened) {
				closing = true
				setTimeout(() => {
					closing = false
				}, 201)
			} else {
				closing = false
			}
		}, 1)
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
		on:opened="{setOpened}"
		closed="{closed}"
>
	<div
			slot="up5"
	>
		<DescribedButton
				expanded="{expanded}"
				closing="{closing}"
				label="Set Age Suitability"
				on:click="{() => open('ageSuitability')}"
		>
			<ShieldButton
			></ShieldButton>
		</DescribedButton>
	</div>
	<div
			slot="up4"
	>
		<DescribedButton
				expanded="{expanded}"
				closing="{closing}"
				label="View Outcomes"
				on:click="{() => open('outcomes')}"
		>
			<OutcomeButton
			></OutcomeButton>
		</DescribedButton>
	</div>
	<div
			slot="up3"
	>
		<DescribedButton
				expanded="{expanded}"
				closing="{closing}"
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
				expanded="{expanded}"
				closing="{closing}"
				label="{editPollLabel}"
				on:click="{() => open('edit')}"
		>
			<EditButton
			></EditButton>
		</DescribedButton>
	</div>
	<div
			slot="up1"
	>
		<DescribedButton
				expanded="{expanded}"
				closing="{closing}"
				label="{previewMode ? 'Build Poll' : 'Submit Vote'}"
				on:click="{() => open(previewMode ? 'build' : 'confirmVote')}"
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
			<VariationTreeButton
					on:click="{() => open('variations')}"
					styles="position: absolute; right: 0px; top: 0px;"
			></VariationTreeButton>
		</UndescribedButton>
	</div>
	<div
			slot="left2"
	>
		<UndescribedButton>
			<OpinionButton
					on:click="{() => open('opinions')}"
					styles="position: absolute; right: 0px; top: 0px;"
			></OpinionButton>
		</UndescribedButton>
	</div>
	<div
			slot="left3"
	>
		<UndescribedButton>
			<BellCurveButton
					on:click="{() => open('stats')}"
					styles="position: absolute; right: 0px; top: 0px;"
			></BellCurveButton>
		</UndescribedButton>
	</div>
	<div
			slot="left4"
	>
		<UndescribedButton>
			<RankingsButton
					on:click="{() => open('rankings')}"
					styles="position: absolute; right: 0px; top: 0px;"
			></RankingsButton>
		</UndescribedButton>
	</div>
</Fab>
