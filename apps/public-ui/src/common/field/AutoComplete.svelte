<svelte:options immutable/>

<script>
	import {
		forms,
		textToast
	} from '@votecube/vc-logic'
	import {
		onDestroy,
		onMount
	}                  from 'svelte'
	import {OPTIONS}   from '../../form/forms'
	import ClearIcon from '../icon/ClearIcon.svelte'
	import InfoIcon  from '../icon/InfoIcon.svelte'
	import UndoIcon  from '../icon/UndoIcon.svelte'

	export let doShowOptions = false
	export let field
	export let filter        = ''
	export let filterInput = null
	export let fieldSection = null
	export let options       = []

	export let activeOptionIndex = 0
	let delta                    = 0
	let dropdownTopPx            = 0
	let isOriginal               = true
	let isValid                  = false

	let formHandle = {
		get activeOptionIndex() {
			return activeOptionIndex
		},
		set activeOptionIndex(
			newActiveOptionIndex
		) {
			activeOptionIndex = newActiveOptionIndex
		},
		get dropdownTopPx() {
			return dropdownTopPx
		},
		set dropdownTopPx(
			newDropdownTopPx
		) {
			dropdownTopPx = newDropdownTopPx
		},
		get field() {
			return field
		},
		get filterInput() {
			return filterInput
		},
		get filter() {
			return filter
		},
		set filter(
			newFilter
		) {
			filter = newFilter
		},
		get options() {
			return options
		},
		get showOptions() {
			return doShowOptions
		},
		set showOptions(
			newShowOptions
		) {
			doShowOptions = newShowOptions
		},
		hideOptions() {
			hideOptions()
		},
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
	$: label = v(field.label, delta)
	// $: label = v(field.unlinkLabel, delta)
	$: modified = v(!errors.length && field.rules.trackOriginal && !field.theIsOriginal,
		delta)
	$: options = v(filter
		? field.filteredOptions
			.filter(option =>
				option.text.toLowerCase().indexOf(filter.toLowerCase()) > -1)
		: field.filteredOptions, delta)
	$: requiredInvalid = v(field.validatorMap.required && errors.length, delta)
	$: requiredValid = v(
		!modified && field.validatorMap.required && !errors.length, delta)
	$: touched = v(field.touched, delta)
	$: trackOriginal = v(field.rules.trackOriginal, delta)
	
	onMount(() => field.setAsField(formHandle))
	onDestroy(() => field.removeComponent(formHandle))

	function v(val) {
		return val
	}

	function blur() {
		field.touch()
		field.detect()
	}

	function checkValue(event) {
		OPTIONS.showFiltered(formHandle, fieldSection, event)
		if (field.value
			&& field.value.text.toLowerCase() !== filter.toLowerCase()) {
			field.unselect()
			return
		}
		if (options.length !== 1) {
			return
		}
		const theOption = options[0]
		if (filter.toLowerCase() === theOption.text.toLowerCase()) {
			field.select(theOption)
		}
	}

	function clear() {
		field.clear()
		filterInput.value = ''
	}

	function help() {
		const text = field.text
		textToast.toggle(text.info, text.infoSeconds)
	}

	export function hideOptions() {
		doShowOptions = false
	}

	function onDocumentClick(event) {
		hideOptions()
	}

	function onDocumentKeydown(event) {
		OPTIONS.handleKeydown(formHandle, false, event)
	}

	function revert() {
		field.revert()
		const value = field.theValue
		if (value) {
			filterInput.value = value.text
		} else {
			filterInput.value = ''
		}
	}

	function select(option) {
		field.select(option)
		filterInput.value = option.text
		hideOptions()
	}

	function showOptions(
		event
	) {
		OPTIONS.showFiltered(formHandle, event.currentTarget, event
			// , true
		)
	}

</script>

<style>

	input[type="text"] {
		border: 0;
		box-shadow: none;
		color: #222;
		display: inline-block;
		font-weight: 600;
		margin: 0;
		margin-top: 8px;
		padding-left: 5px;
		vertical-align: text-bottom;
		width: 100%;
	}

	li {
		font-weight: 600;
		list-style: none;
		padding: 10px;
	}

	li + li {
		border-top: 1px solid #f8f8f8;
	}

	li:hover {
		background-color: #eee;
	}

	ul {
		max-height: 300px;
		padding: 0;
		width: 100%;
	}

	.autoComplete {
		position: relative;
	}

	.activeOption {
		background-color: #eee;
	}

	.fieldBox {
		background-color: white;
		min-height: 2.25em;
		padding-bottom: 5px;
		position: relative;
		width: 100%;
	}

	.icons {
		display: inline-block;
		height: 100%;
		position: absolute;
		right: 0px;
		top: 1px;
	}

	.selection {
		display: inline-block;
		width: calc(100% - 70px);
	}

</style>

<svelte:window
		on:click="{onDocumentClick}"
		on:keydown="{onDocumentKeydown}"
></svelte:window>
{#if $forms}
<div
		class="autoComplete"
>
	<label
			class="field-label"
			for="{field.id}"
	>
		{label}
	</label>
	<section
			class="dropdownAnchor field fieldBox"
			class:invalid="{touched && errors.length}"
			class:modified="{modified}"
			class:requiredInvalid="{requiredInvalid}"
			class:requiredValid="{requiredValid}"
			on:click="{showOptions}"
			bind:this={fieldSection}
	>
		<div
				class="selection"
		>
			<input
					autocomplete="off"
					bind:value="{filter}"
					bind:this={filterInput}
					id="{field.id}"
					on:blur="{blur}"
					on:input="{checkValue}"
					type="text"
			>
		</div>
		<div
				class="icons"
		>
			<div>
				{#if trackOriginal}
				<UndoIcon
						multiLine="y"
						on:click="{revert}"
				></UndoIcon>
				{:else}
				<ClearIcon
						multiLine="y"
						on:click="{clear}"
				></ClearIcon>
				{/if}
				<InfoIcon
						on:click="{help}"
				></InfoIcon>
			</div>
		</div>
	</section>
	{#if doShowOptions && options.length}
	<ul
			class="dropdown"
			style="
            top: {dropdownTopPx}px;
        "
	>
		{#each options as option, index}
		<li
				class="option"
				class:activeOption="{index === activeOptionIndex}"
				on:click="{() => select(option)}"
		>
			{option.text}
		</li>
		{/each}
	</ul>
	{/if}
	{#if touched}
	{#each errors as error}
	<span class="pure-form-message error">{error.message}</span>
	{/each}
	{/if}
</div>
{/if}
