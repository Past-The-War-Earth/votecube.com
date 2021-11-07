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
	import ClearIcon from '../icon/ClearIcon.svelte'
	import InfoIcon  from '../icon/InfoIcon.svelte'
	import UndoIcon  from '../icon/UndoIcon.svelte'

	export let field
	export let mid  = false
	export let mini = false

	let delta       = 0
	let floatLabel  = true
	let isOriginal               = true
	let isValid                  = false

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

	$: charCount = f(() => {
		const separator = mid || mini ? '/' : ' / '
		return field.rules.maxLength
			? `${field.value ? field.value.length : 0}${separator}${field.rules.maxLength}`
			: ''
	}, delta)
	$: errors = v(field.errors, delta)
	$: label = v(field.label, delta)
	$: displayMatches = v(field.displayMatches(), delta)
	$: matches = v(field.matches, delta)
	$: modified = v(
		!errors.length && field.rules.trackOriginal && !field.theIsOriginal, delta)
	$: placeholder = v(field.placeholder, delta)
	$: requiredInvalid = v(field.validatorMap.required && errors.length, delta)
	$: requiredValid = v(!modified && field.validatorMap.required && !errors.length, delta)
	$: touched = v(field.touched, delta)
	$: trackOriginal = v(field.rules.trackOriginal, delta)
	$: value = v(field.displayValue, delta)

	onMount(() => field.setAsField(formHandle))
	onDestroy(() => field.removeComponent(formHandle))

	function f(func) {
		return func()
	}

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
		field.value = event.target.value
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

	table {
		width: 100%;
	}

	td:first-child {
		width: calc(100% - 80px);
	}

	td:first-child.mid,
	td:first-child.mini {
		width: calc(100% - 50px);
	}

	td:last-child {
		padding: 5px;
		width: 80px;
	}

	td:last-child.mid,
	td:last-child.mini {
		padding: 3px;
		width: 50px;
	}

	textarea {
		border: 0;
		box-shadow: none;
		display: inline-block;
		margin: 0;
		margin-top: 8px;
		padding-left: 5px;
		mini-align: text-bottom;
		width: 100%;
	}

	textarea.mini {
		height: 85px;
	}

	textarea.mid {
		height: 162px;
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

	.icons.mid,
	.icons.mini {
		width: 30px;
	}

	.text {
		display: inline-block;
		width: calc(100% - 70px);
	}

	.text.mid,
	.text.mini {
		width: calc(100% - 30px);
	}

	.textArea {
		position: relative;
		text-align: left;
	}

</style>

{#if $forms}
<div
		class="textArea"
>
	{#if floatLabel}
	<label
			class="field-label"
			for="{field.id}"
	>
		{label}
	</label>
	{/if}
	{#if displayMatches}
	<a href="/#">{matches.length} matches</a>
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
				class:mid="{mid}"
				class:mini="{mini}"
		>
			<!--		            use:id="{id}"-->
			<textarea
					class:mid="{mid}"
					class:mini="{mini}"
					id="{field.id}"
					on:blur="{onBlur}"
					on:input="{onInput}"
					placeholder="{placeholder}"
					type="text"
					maxlength="{field.rules.maxLength}"
					rows="5"
					value="{value}"
			/>
		</div>
		<div
				class="icons"
				class:mid="{mid}"
				class:mini="{mini}"
		>
			<div
					class="multiRowIconsCenter"
			>
				{#if trackOriginal}
				<UndoIcon
						on:click="{revert}"
						multiLine="y"
				></UndoIcon>
				{:else}
				<ClearIcon
						on:click="{clear}"
						multiLine="y"
				></ClearIcon>
				{/if}
				<InfoIcon
						on:click="{help}"
						multiLine="y"
				></InfoIcon>
			</div>
		</div>
	</section>
	<table>
		<tr>
			<td>
				{#if touched}
				{#each errors as error}
				<span class="pure-form-message error">{error.message}</span>
				{/each}
				{/if}
			</td>
			<td
					class:mid="{mid}"
					class:mini="{mini}"
			>
				{charCount}
			</td>
		</tr>
	</table>
</div>
{/if}
