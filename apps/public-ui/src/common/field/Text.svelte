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
	import ClearIcon   from '../icon/ClearIcon.svelte'
	import InfoIcon    from '../icon/InfoIcon.svelte'
	import UndoIcon    from '../icon/UndoIcon.svelte'

	export let field
	export let type = 'text'

	let delta      = 0
	let isOriginal = true
	let isValid    = false

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
	$: label = v(field.label, delta)
	$: matches = v(field.matches, delta)
	$: modified = v(
		!errors.length && field.rules.trackOriginal && !field.theIsOriginal,
		delta)
	$: placeholder = v(field.placeholder, delta)
	$: requiredInvalid = v(
		field.validatorMap.required && errors.length, delta)
	$: requiredValid = v(
		!modified && field.validatorMap.required && !errors.length, delta)
	$: touched = v(field.touched, delta)
	$: trackOriginal = v(field.rules.trackOriginal, delta)
	$: value = v(field.value, delta)

	onMount(() => field.setAsField(formHandle))
	onDestroy(() => field.removeComponent(formHandle))

	function v(val) {
		return val
	}

	function clear() {
		field.clear()
	}

	function help() {
		const text = field.text
		textToast.toggle(text.info, text.infoSeconds)
	}

	function onBlur(event) {
		field.onBlur()
	}

	function onInput(event) {
		field.value   = event.target.value
		field.onInput()
	}

	function revert() {
		field.revert()
	}

</script>

<style>

	a {
		display: inline-block;
		position: absolute;
		right: 10px;
		top: 0px;
	}

	section {
		position: relative;
	}

	input {
		border: 0;
		box-shadow: none;
		display: inline-block;
		margin: 0;
		margin-top: 8px;
		padding-left: 5px;
		vertical-align: text-bottom;
		width: 100%;
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
		right: 1px;
		top: 1px;
	}

	.textField {
		position: relative;
		text-align: left;
	}

	.text {
		display: inline-block;
		width: calc(100% - 70px);
	}

</style>

{#if $forms}
<div
		class="textField"
>
	<label
			class="field-label"
			for="{field.id}"
	>{label}</label>
	{#if matches}
	<a
			href="/#"
	>{matches.length} matches</a>
	{/if}
	<section
			class="field fieldBox"
			class:invalid="{touched && errors.length}"
			class:modified="{modified}"
			class:requiredInvalid="{requiredInvalid}"
			class:requiredValid="{requiredValid}"
	>
		<div
				class="text"
		>
			<input
					id="{field.id}"
					maxlength="{field.rules.maxLength}"
					on:blur="{onBlur}"
					on:input="{onInput}"
					placeholder="{placeholder}"
					type="{type}"
					value="{value}"
			>
		</div>
		<div
				class="icons"
		>
			<div>
				<InfoIcon
						on:click="{help}"
				></InfoIcon>
				{#if trackOriginal}
				<UndoIcon
						on:click="{revert}"
				></UndoIcon>
				{:else}
				<ClearIcon
						on:click="{clear}"
				></ClearIcon>
				{/if}
			</div>
		</div>
	</section>
	{#if touched}
	{#each errors as error}
	<span class="pure-form-message error">{error.message}</span>
	{/each}
	{/if}
</div>
{/if}
