<script>
	export let multiLine = false
</script>

<i
				class:fieldAid="{!multiLine}"
				style="
        vertical-align: top;
    "
				on:click|stopPropagation
>
	<svg
					height="33"
					width="33"
	>
		<g>
			<line
							stroke="#aaa"
							stroke-width="3"
							x1="9"
							x2="24"
							y2="24"
							y1="9"
			/>
			<line
							stroke="#aaa"
							stroke-width="3"
							x1="24"
							x2="9"
							y2="24"
							y1="9"
			/>
		</g>
	</svg>
</i>
