<script type="ts">
	import {
		createEventDispatcher
	}                      from 'svelte'
	import {
		fade
	}                      from 'svelte/transition'

	export let add            = true
	export let classes        = ''
	export let circleRadius   = 23
	export let fillColor      = 'fff'
	export let highlightColor = '000'
	export let reversible       = false
	export let reversed       = false
	export let strokeWidth    = 3
	export let styles
	export let size           = 50

	const dispatch = createEventDispatcher()

	function viewBox(size) {
		return size === 50 ? '' : '0 0 50 50'
	}

	function press(
		reversible,
		newReversed
	) {
		if (reversible) {
			reversed = newReversed
		}
		dispatch('select')
	}
</script>

<style>
	svg {
		border-radius: 100px;
		-webkit-transition: .4s;
		transition: .4s;
	}

	svg.reversed {
		transform: rotate(180deg);
	}
</style>

<svg
		class="{classes} {reversed ? 'reversed' : ''}"
		height="{size}"
		on:click="{() => press(reversible, reversed)}"
		style="{styles}"
		viewBox="{viewBox(size)}"
		width="{size}"
>
	<g class="layer">
		<circle
				cx="25"
				cy="25"
				fill="#{fillColor}"
				r="{circleRadius}"
				stroke="#{highlightColor}"
				stroke-width="{strokeWidth}"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="5"
				x1="14"
				x2="36"
				y1="25"
				y2="25"
		/>
		{#if add}
		{#if reversible}
		<line
				stroke="#{highlightColor}"
				stroke-width="5"
				transition:fade
				x1="25"
				x2="25"
				y1="14"
				y2="36"
		/>
		{:else}
		<line
				stroke="#{highlightColor}"
				stroke-width="5"
				x1="25"
				x2="25"
				y1="14"
				y2="36"
		/>
		{/if}
		{/if}
	</g>
</svg>
