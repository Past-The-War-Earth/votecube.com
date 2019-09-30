<script>
	import {showFiltered} from '@votecube/public-logic/src'
	import {
		onDestroy,
		onMount
	}                     from 'svelte'
	import ClearIcon      from '../icon/ClearIcon.html'
	import InfoIcon       from '../icon/InfoIcon.html'
	import UndoIcon       from '../icon/UndoIcon.html'

	ClearIcon || InfoIcon || UndoIcon

	let activeOptionIndex = 0
	let field
	let fieldElem
	let filter            = ''
	let filterElem
	let isShowOptions

	$: errors = field.errors
	$: label = field.label
	$: modified =
		!errors.length && field.rules.trackOriginal && !field.theIsOriginal
	$: options = (filter
		? field.filteredOptions
			.filter(
				option =>
					option.text.toLowerCase().indexOf(filter.toLowerCase()) > -1)
		: field.filteredOptions)
	$: requiredInvalid =
		field.validatorMap.required && errors.length
	$: requiredValid =
		!modified && field.validatorMap.required && !errors.length
	$: touched = field.touched
	$: trackOriginal = field.rules.trackOriginal


	function forr(
		node,
		id
	) {
		if (id) {
			node.id = id
		}
	}

	function id(
		node,
		id
	) {
		if (id) {
			node.id = id
		}
	}

	function blur() {
		field.touch()
		field.detect()
	}

	function checkValue(event) {
		showFiltered(event, isShowOptions, fieldElem, field, filterElem)
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
		this.refs.filter.value = ''
	}

	function help() {
		const text = field.text
		this.store.setTextToast(text.info, text.infoSeconds)
	}

	function hideOptions() {
		isShowOptions = false
	}

	function onDocumentClick(event) {
		hideOptions()
	}

	function onDocumentKeydown(event) {
		OPTIONS.handleKeydown(this)
	}

	function revert() {
		const {field} = this.get()
		field.revert()
		const value = field.theValue
		if (value) {
			this.refs.filter.value = value.text
		} else {
			this.refs.filter.value = ''
		}
	}

	function select(option) {
		field.select(option)
		this.refs.filter.value = option.text
		this.hideOptions()
	}

	function showOptions(
		element,
		event
	) {
		OPTIONS.showFiltered(this, element
			// , true
		)
	}

	onMount(() => {
		const {field} = this.get()
		field.setAsField(this)
		const value = field.value
		if (value) {
			this.set({filter: value.text})
		}
	})
	onDestroy(() => {
		this.get().field.removeComponent(this)
	})
</script>

<svelte:options
		immutable
/>
<svelte:document
		on:click={onDocumentClick}
		on:keydown={onDocumentKeydown}
></svelte:document>
{#if $forms}
<div
		class="autoComplete"
>
	<label
			class="field-label"
			use:forr={id}
	>
		{label}
	</label>
	<section
			class="dropdownAnchor field fieldBox"
			class:invalid={touched && errors.length}
			class:modified={modified}
			class:requiredInvalid={requiredInvalid}
			class:requiredValid={requiredValid}
			on:click="{() => showOptions(this, event)}"
			bind:this={fieldElem}
	>
		<div
				class="selection"
		>
			<input
					autocomplete="off"
					bind:value={filter}
					on:blur={blur}
					on:input={checkValue}
					bind:this={filterElem}
					type="text"
					use:id={id}
			>
		</div>
		<div
				class="icons"
		>
			<div>
				{#if trackOriginal}
				<UndoIcon
						multiLine="y"
						on:select={revert}
				></UndoIcon>
				{:else}
				<ClearIcon
						multiLine="y"
						on:select={clear}
				></ClearIcon>
				{/if}
				<InfoIcon
						on:select={help}
				></InfoIcon>
			</div>
		</div>
	</section>
	{#if isShowOptions && options.length}
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

