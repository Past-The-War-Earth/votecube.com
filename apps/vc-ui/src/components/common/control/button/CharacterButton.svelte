<script>

	export let character = null
	export let classes        = ''
	export let fillColor      = 'fff'
	export let fontSize       = 45
	export let fontX          = 25
	export let fontY          = 42
	export let highlightColor = '000'
	export let size           = 50
	export let strokeWidth    = 3
	export let styles = null

</script>

<svg
		class="{classes}"
		height="{size}"
		style="{styles}"
		on:click
		width="{size}"
>
	<g class="layer">
		<circle
				cx="{size / 2}"
				cy="{size / 2}"
				fill="#{fillColor}"
				r="{size / 2 - 2}"
				stroke="#{highlightColor}"
				stroke-width="{strokeWidth}"
		/>
		<text
				fill="#000"
				font-family="Dosis"
				font-size="{fontSize}"
				font-weight="bold"
				stroke-width="0"
				stroke="#000"
				text-anchor="middle"
				x="{fontX}"
				y="{fontY}"
		>
			{character}
		</text>
	</g>
</svg>
