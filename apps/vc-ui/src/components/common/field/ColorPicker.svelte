<script>
	import {DI}            from '@airport/di'
	import {
		forms,
		LOGIC_UTILS
	}   from '@votecube/public-logic'
	import {
		onDestroy,
		onMount
	}                      from 'svelte'
	import {
		getColorKey,
		getColors
	}                      from '../../../libs/colors'
	import AddRemoveButton from '../control/button/AddRemoveButton.svelte'
	import UndoIcon        from '../icon/UndoIcon.svelte'

	export let field

	let blueSlider
	let color
	let colorMap
	let colors
	let container
	let delta       = 0
	let greenSlider
	let isOriginal  = true
	let isValid     = false
	let logicUtils
	let minusStyles = 'display: inline-block; position: absolute; left: 0px; top: 5.5px;'
	let plusStyles  = 'display: inline-block; position: absolute; right: 0px; top: 5.5px;'
	let redSlider
	let select

	let formHandle = {
		setDelta(newDelta) {
			delta = newDelta
		},
		setIsValid(newIsValid) {
			isValid = newIsValid
		},
		setIsOriginal(newIsOriginal) {
			isOriginal = newIsOriginal
		}
	}

	$: errors = v(field.errors, delta)
	$: modified = v(
		!errors.length && field.rules.trackOriginal && !field.theIsOriginal, delta)
	$: requiredInvalid = v(
		field.validatorMap.required && errors.length, delta)
	$: requiredValid = v(
		!modified && field.validatorMap.required && !errors.length, delta)
	$: trackOriginal = v(field.rules.trackOriginal, delta)

	onMount(async () => {
		container          = DI.ui('ColorPicker')
		const colorsResult = await getColors()
		colorMap           = colorsResult.colorMap
		colors             = colorsResult.colors

		color = field.value
			? field.value
			: copyColor(colors[132])

		logicUtils = await container.get(LOGIC_UTILS)

		field.setAsField(formHandle)

		if (!field.value) {
			field.value = color
		}
		field.validate()

		matchColor(color, colorMap, select)
	})

	onDestroy(() => {
		field.removeComponent(formHandle)
		DI.remove(container)
	})

	function v(val) {
		return val
	}

	function getTextColor(
		color
	) {
		if (!logicUtils) {
			return '000'
		}
		return logicUtils.getTextColor(color)
	}

	function change(
		primary,
		value
	) {
		const exitingPrimary = parseInt(color[primary])

		if (exitingPrimary + value > 255) {
			return
		} else if (exitingPrimary + value < 0) {
			return
		}
		color[primary] = exitingPrimary + value
		color[primary] = color[primary].toString()
		setColor(color, field)
	}

	function revert() {
		field.revert()

		color = field.value
		matchColor(color, colorMap, select)
	}

	function selectColor() {
		color    = copyColor(colors[select.selectedIndex])
		setColor(color, field, this)
	}

	function syncInput() {
		color.red                      = redSlider.value
		color.green                    = greenSlider.value
		color.blue                     = blueSlider.value

		matchColor(color, colorMap, select)

		field.validate()
	}

	function matchColor(
		color,
		colorMap,
		select
	) {
		const colorKey     = getColorKey(color)
		const matchedColor = colorMap[colorKey]
		let selectedIndex  = 132
		if (matchedColor) {
			selectedIndex = matchedColor.index
		}
		setTimeout(() => {
			select.selectedIndex = selectedIndex
		})
	}

	function copyColor(
		color
	) {
		return {
			name: color.name,
			...color
		}
	}

	function setColor(
		color,
		field
	) {
		field.value = color
		field.validate()
	}

</script>

<style>
	input {
		-webkit-appearance: none; /* Override default CSS styles */
		appearance: none;
		background: #aaa;
		height: 5px;
		left: 37px;
		outline: none; /* Remove outline */
		position: absolute;
		top: 20px;
		width: calc(100% - 75px); /* Full-width */
	}

	input::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		border: 3px groove gray;
		border-radius: 3px;
		cursor: pointer; /* Cursor on hover */
		height: 35px; /* Slider handle height */
		width: 35px; /* Set a specific slider handle width */
	}

	input::-moz-range-thumb {
		border: 3px groove gray;
		border-radius: 3px;
		cursor: pointer; /* Cursor on hover */
		display: inline-block;
		height: 35px; /* Slider handle height */
		width: 35px; /* Set a specific slider handle width */
	}

	select {
		display: block;
		margin: auto;
	}

	figure {
		border: 4px groove gray;
		border-radius: 4px;
		font-size: 2.3em;
		height: 55px;
		margin: auto;
		width: 55px;
	}

	section {
		position: relative;
		text-align: center;
	}

	section > div {
		margin-top: -5px;
	}

	select {
		width: 150px;
	}

	table {
		margin-top: 20px;
		width: 100%;
	}

	td {
		height: 65px;
	}

	td > div {
		position: relative;
		height: 100%;
	}

	var {
		/*height: 30px;*/
		/*left: -15px;*/
		float: top;
		left: calc(50% - 20px);
		position: absolute;
		top: -19px;
		width: 40px;
	}

	.redSlider::-webkit-slider-thumb {
		background: #f22;
	}

	.redSlider::-moz-range-thumb {
		background: #f22;
	}

	.greenSlider::-webkit-slider-thumb {
		background: #2f2;
	}

	.greenSlider::-moz-range-thumb {
		background: #2f2;
	}

	.blueSlider::-webkit-slider-thumb {
		background: #22f;
	}

	.blueSlider::-moz-range-thumb {
		background: #22f;
	}

</style>

{#if $forms && colors}
<section>

	<table
			class="sliders"
	>
		<tr>
			<td>
				<div>
					<AddRemoveButton
							add="{false}"
							on:select="{() => change('red', -1)}"
							size="35"
							styles="{minusStyles}"
					></AddRemoveButton>
					<input
							class="redSlider"
							max="255"
							min="0"
							on:input="{syncInput}"
							bind:this={redSlider}
							type="range"
							value="{color.red}"
					>
					<AddRemoveButton
							add="{true}"
							on:select="{() => change('red', 1)}"
							size="35"
							styles="{plusStyles}"
					></AddRemoveButton>
					<var>
						{color.red}
					</var>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div>
					<AddRemoveButton
							add="{false}"
							on:select="{() => change('green', -1)}"
							size="35"
							styles="{minusStyles}"
					></AddRemoveButton>
					<input
							class="greenSlider"
							max="255"
							min="0"
							on:input="{syncInput}"
							bind:this={greenSlider}
							type="range"
							value="{color.green}"
					>
					<AddRemoveButton
							add="{true}"
							on:select="{() => change('green', 1)}"
							size="35"
							styles="{plusStyles}"
					></AddRemoveButton>
					<var>
						{color.green}
					</var>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div>
					<AddRemoveButton
							add="{false}"
							on:select="{() => change('blue', -1)}"
							size="35"
							styles="{minusStyles}"
					></AddRemoveButton>
					<input
							class="blueSlider"
							max="255"
							min="0"
							on:input="{syncInput}"
							bind:this={blueSlider}
							type="range"
							value="{color.blue}"
					>
					<AddRemoveButton
							add="{true}"
							on:select="{() => change('blue', 1)}"
							size="35"
							styles="{plusStyles}"
					></AddRemoveButton>
					<var>
						{color.blue}
					</var>
				</div>
			</td>
		</tr>
	</table>
	<div>
		<select
				on:input="{selectColor}"
				bind:this={select}
		>
			{#each colors as color, index}
			<option
					value="{index}"
			>
				{color.name}
			</option>
			{/each}
		</select>
		{#if trackOriginal}
		<UndoIcon
				multiLine="y"
				on:select="{revert}"
		></UndoIcon>
		{/if}
		<br>
		<figure
				style="background-color: rgb({color.red}, {color.green}, {color.blue});
							 color: #{getTextColor(color)};"
		>
			T
		</figure>
	</div>
</section>
{/if}
