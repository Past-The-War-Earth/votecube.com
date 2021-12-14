<script>

	export let classes        = ''
	export let circleRadius   = 23
	export let fillColor      = 'fff'
	export let highlightColor = '000'
	export let strokeWidth    = 3

</script>

<style>
	.switchPosition {
		position: absolute;
	}
</style>

<svg
		class="{classes}"
		height="50"
		on:click
		width="50"
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
				x1="9"
				x2="22"
				y1="27"
				y2="14"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="5"
				x1="22"
				x2="9"
				y1="37"
				y2="24"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="5"
				x1="27"
				x2="41"
				y1="13"
				y2="27"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="5"
				x1="27"
				x2="41"
				y1="37"
				y2="24"
		/>
	</g>
</svg>
