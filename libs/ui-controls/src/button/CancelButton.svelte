<script>

	export let classes        = ''
	export let highlightColor = '000'
	export let size           = 50

	$: viewBox = size === 50 ? '' : '0 0 50 50'

</script>

<svg
		class="{classes}"
		height="{size}"
		on:click
		viewBox="{viewBox}"
		width="{size}"
>
	<g>
		<circle
				cx="25"
				cy="25"
				fill="none"
				r="23"
				stroke="#{highlightColor}"
				stroke-width="3"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="5"
				x1="15"
				x2="35"
				y1="35"
				y2="15"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="5"
				x1="15"
				x2="35"
				y1="15"
				y2="35"
		/>
	</g>
</svg>
