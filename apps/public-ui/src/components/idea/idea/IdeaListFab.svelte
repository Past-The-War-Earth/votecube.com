<script>
	import {createEventDispatcher} from 'svelte'

	import DescribedButton from '@votecube/ui-controls/src/button/DescribedButton.svelte'
	import FactorButton    from '../../factor/FactorButton.svelte'
	import FilterButton    from '@votecube/ui-controls/src/button/FilterButton.svelte'
	import OutcomeButton   from '@votecube/ui-controls/src/button/OutcomeButton.svelte'
	import SortButton      from '@votecube/ui-controls/src/button/SortButton.svelte'
	import Fab             from '@votecube/ui-components/src/Fab.svelte'

	let factorMode = true
	let opened     = false

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
				label="Sort Ideas"
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
				label="Filter Ideas"
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
				on:click="{toggleFactorMode}"
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
