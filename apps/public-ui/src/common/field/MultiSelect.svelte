<svelte:options immutable />

<script lang="ts">
	import store from '@votecube/vc-logic'
	import {OPTIONS} from '../../form/forms'
	import {
		removeWatch,
		watchMultilineField
	} from '../../watch'
	import ClearIcon from '../icon/ClearIcon.svelte'
	import InfoIcon from '../icon/InfoIcon.svelte'
	import UndoIcon from '../icon/UndoIcon.svelte'

export let field: IOptionsField;

	let delta = 0
	let filter = ''
	let activeOptionIndex = 0

let formHandle: any = {
	setDelta(newDelta) {
		delta = newDelta;
	},
	setIsValid(newIsValid) {
		isValid = newIsValid;
	},
	setIsOriginal(newIsOriginal) {
		isOriginal = newIsOriginal;
	},
};

	$: errors = v(field.errors, delta);
	$: label = v(field.label, delta);
	$: modified = v(!errors.length && field.rules.trackOriginal && !field.theIsOriginal, delta)
	$: options = v(filter
				? field.filteredOptions
					.filter(option =>
						option.text.toLowerCase().indexOf(filter.toLowerCase()) > -1)
				: field.filteredOptions, delta)
	$: requiredInvalid = v(field.validatorMap.required && errors.length, delta)
	$: requiredValid = v(!modified && field.validatorMap.required && !errors.length, delta)
	$: selections = v(field.value, delta)
	$: touched = v(field.touched, delta)
	$: trackOriginal = v(field.rules.trackOriginal, delta)

	function v<T>(val: T, _delta: number): T {
		return val
	}

	function hideOptions() {
		showOptions = false
	}
	function clear() {
				this.get().field.clear()
				this.refs.filter.value = ''
			}
			function help() {
				const text = this.get().field.text
				this.store.setTextToast(text.info, text.infoSeconds)
			}
			function hideOptions() {
				this.set({showOptions: false})
			}
			function onDocumentClick(event) {
				this.hideOptions()
			}
			function onDocumentKeydown(event) {
				OPTIONS.handleKeydown(this, true, event)
			}
			function revert() {
				this.get().field.revert()
				this.refs.filter.value = ''
			}
			function select(option) {
				this.get().field.select(option)
				this.hideOptions()
				this.set({filter: ''})
			}
			function showOptions(
				element,
				event
			) {
				OPTIONS.showFiltered(this, element, event
					// , true
				)
			}
			function unselect(
				option,
				event
			) {
				this.get().field.unselect(option)
				event.stopPropagation()
				this.set({filter: ''})
			}


			onMount(() => {
			field.setAsField(formHandle)
			watchMultilineField(this, this.refs.field
			});
	onDestroy(() => {
		field.removeComponent(formHandle)
			removeWatch(this)
	});

</script>

<svelte:window
		on:click="{onDocumentClick}"
		on:keydown="{onDocumentKeydown}"
></svelte:window>

{#if $forms}
<div
		class="multiSelect"
>
	<label
			class="field-label"
			use:for="{id}"
	>
		{label}
	</label>
	<section
			class="dropdownAnchor field fieldBox"
			class:invalid="touched && errors.length"
			class:modified="modified"
			class:requiredInvalid="requiredInvalid"
			class:requiredValid="requiredValid"
			on:click="showOptions(this, event)"
			ref:field
	>
		<div
				class="selections"
		>
			<!--
					<div
							class="selectionSizer"
							ref:selectionSizer
					>
-->
			{#each selections as selection}
			<section
					class="selection"
			>
				<div
						class="selection-contents"
				>
					{selection.text}
				</div>
				<span
						class="unselect"
						on:click="unselect(selection, event)"
				>
                        <s class="bar"></s>
                        <s class="bar"></s>
                    </span>
			</section>
			{/each}
			<input
					autocomplete="off"
					bind:value="filter"
					ref:filter
					type="text"
					use:id="{id}"
			>
			<!--
	</div>
	-->
		</div>
		<div
				class="icons"
		>
			<div
					class="multiRowIconsCenter"
			>
				{#if trackOriginal}
				<UndoIcon
						multiLine="y"
						on:select="revert()"
				></UndoIcon>
				{:else}
				<ClearIcon
						multiLine="y"
						on:select="clear()"
				></ClearIcon>
				{/if}
				<InfoIcon
						multiLine="y"
						on:select="help()"
				></InfoIcon>
			</div>
		</div>
	</section>
	{#if showOptions && options.length}
	<ul
			class="dropdown"
			style="
            top: {dropdownTopPx}px;
        "
	>
		{#each options as option, index}
		<li
				class="option"
				class:activeOption="index === activeOptionIndex"
				on:click="select(option)"
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
		width: 50px;
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
		top: 0px;
	}

	.multiSelect {
		position: relative;
	}

	.selection {
		/*background-color: #808080;*/
		/*border: 1px solid #777;*/
		background-color: #ccc;
		border: 1px solid #222;
		border-radius: 3px;
		color: #333;
		/*color: #fff;*/
		display: inline-block;
		font-weight: 600;
		margin: 6px 0 0 6px;
		padding-left: 8px;
	}

	.selection-contents {
		float: left;
		padding: 8px 2px 0 0;
	}

	.selections {
		display: inline-block;
		width: calc(100% - 70px);
	}

	/*
			.selectionSizer {
					display: inline-block;
			}*/

	.unselect {
		display: inline-block;
		height: 26px;
		margin-top: 4px;
		position: relative;
		width: 30px;
	}

	.unselect .bar {
		/*background-color: #fff;*/
		background-color: #222;
		display: block;
		height: 3px;
		width: 16px;
		position: absolute;
		right: 8px;
		top: 12px;
	}

	.unselect .bar:first-child {
		transform: rotate(-45deg);
	}

	.unselect .bar:last-child {
		transform: rotate(45deg);
	}

</style>
