<script lang="ts">
	import {
		createEventDispatcher
	}                      from 'svelte'

	export let classes = ''
	export let highlightColor = 'B0B0B0'
	// export let strokeWidth = 3
	export let size = 20
	export let styles = ''

	const dispatch = createEventDispatcher()

	$: viewBox = size === 20 ? '' : '0 0 30 30'
</script>

<style>
	svg.right {
		transform: rotate(180deg);
	}

	svg.up {
		transform: rotate(-90deg);
	}
</style>

<svg
		class="{classes}"
		height="{size}"
		on:click="{(event) => dispatch('select', event)}"
		on:mousedown="{(event) => dispatch('selectStart', event)}"
		on:touchend="{(event) => dispatch('select', event)}"
		on:touchstart="{(event) => dispatch('selectStart', event)}"
		style="{styles}"
		viewBox="{viewBox}"
		width="{size}"
>
	<g class="layer">
		<line
				stroke="#{highlightColor}"
				stroke-width="4"
				x1="11"
				x2="19"
				y1="0"
				y2="11"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="4"
				x1="1"
				x2="9"
				y1="0"
				y2="11"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="4"
				x1="11"
				x2="19"
				y1="20"
				y2="9"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="4"
				x1="1"
				x2="9"
				y1="20"
				y2="9"
		/>
	</g>
</svg>
