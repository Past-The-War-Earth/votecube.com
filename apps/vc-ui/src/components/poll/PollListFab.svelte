<script>
	import {createEventDispatcher} from 'svelte'
	import DescribedButton         from '../common/control/button/DescribedButton.svelte'
	import FactorButton            from '../common/control/button/FactorButton.svelte'
	import FilterButton            from '../common/control/button/FilterButton.svelte'
	import OutcomeButton           from '../common/control/button/OutcomeButton.svelte'
	import SortButton              from '../common/control/button/SortButton.svelte'
	import Fab                     from '../common/control/Fab.svelte'

	let factorMode = true
	let opened      = false

	const dispatch = createEventDispatcher()

	function run(
		action
	) {
		opened = false
		dispatch(action)
	}

	function toggleFactorMode() {
		factorMode = !factorMode
		run(factorMode ? 'factors' : 'outcomes')
	}

</script>

<style>
	div[slot^="up"] {
		position: absolute;
		right: 10px;
		top: 5px;
	}
</style>

<Fab
		bind:opened
>
	<div
			slot="up3"
	>
		<DescribedButton
				bind:opened
				label="Sort Polls"
				on:click="{() => run('sort')}"
		>
			<SortButton
			></SortButton>
		</DescribedButton>
	</div>
	<div
			slot="up2"
	>
		<DescribedButton
				bind:opened
				label="Filter Polls"
				on:click="{() => run('filter')}"
		>
			<FilterButton
			></FilterButton>
		</DescribedButton>
	</div>
	<div
			slot="up1"
	>
		<DescribedButton
				bind:opened
				label="{factorMode ? 'Show Factors' : 'Show Outcomes'}"
				on:click="{() => toggleFactorMode()}"
		>
			{#if factorMode}
			<OutcomeButton
			></OutcomeButton>
			{:else}
			<FactorButton
			></FactorButton>
			{/if}
		</DescribedButton>
	</div>
</Fab>
