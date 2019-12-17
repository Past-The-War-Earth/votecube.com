<script>
	import {createEventDispatcher} from 'svelte'
	import DescribedButton         from '../../common/control/button/DescribedButton.svelte'
	import FactorButton            from '../../common/control/button/FactorButton.svelte'
	import FilterButton            from '../../common/control/button/FilterButton.svelte'
	import OutcomeButton           from '../../common/control/button/OutcomeButton.svelte'
	import SortButton              from '../../common/control/button/SortButton.svelte'
	import Fab                     from '../../common/control/Fab.svelte'

	export let entityNames

	let closed     = false
	let closing    = false
	let expanded   = false
	let factorMode = true

	const dispatch = createEventDispatcher()

	function open(
		action
	) {
		closed = true
		dispatch(action)
	}

	function setOpened(
		opened
	) {
		setTimeout(() => {
			closed   = !opened
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

	function toggleFactorMode() {
		factorMode = !factorMode
		this.open(factorMode ? 'factors' : 'outcomes')
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
		on:opened="{setOpened}"
		closed="{closed}"
>
	<div
			slot="up3"
	>
		<DescribedButton
				expanded="{expanded}"
				closing="{closing}"
				label="Sort {entityNames}"
				on:click="{() => open('sort')}"
		>
			<SortButton
			></SortButton>
		</DescribedButton>
	</div>
	<div
			slot="up2"
	>
		<DescribedButton
				expanded="{expanded}"
				closing="{closing}"
				label="Filter {entityNames}"
				on:click="{() => open('filter')}"
		>
			<FilterButton
			></FilterButton>
		</DescribedButton>
	</div>
	<div
			slot="up1"
	>
		<DescribedButton
				expanded="{expanded}"
				closing="{closing}"
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
