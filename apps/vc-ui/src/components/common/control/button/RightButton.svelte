<script>

	export let classes        = ''
	export let circleRadius   = 23
	export let fillColor      = 'fff'
	export let highlightColor = '000'
	export let size           = 50
	export let strokeWidth    = 3
	export let styles         = ''

	$: viewBox = size === 50 ? '' : '0 0 50 50'

</script>

<svg
		class="{classes}"
		height="{size}"
		on:click
		style="{styles}"
		viewBox="{viewBox}"
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
				x1="20"
				x2="34"
				y1="13"
				y2="27"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="5"
				x1="20"
				x2="34"
				y1="37"
				y2="24"
		/>
	</g>
</svg>
