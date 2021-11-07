<script lang="ts">
	import { forms } from "@votecube/vc-logic";
	import { createEventDispatcher, onDestroy, onMount } from "svelte";

	export let customError;
	export let fieldGroup;

	let delta = 0;
	let isOriginal = true;
	let isValid = false;

	let formHandle = {
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

	const dispatch = createEventDispatcher();

	$: error = v(
		fieldGroup.error
			? customError
				? customError
				: fieldGroup.error
			: null,
		delta
	);
	$: label = v(fieldGroup.label, delta);
	$: modified = v(
		!error && fieldGroup.rules.trackOriginal && !fieldGroup.theIsOriginal,
		delta
	);
	$: requiredInvalid = v(fieldGroup.isRequired && error, delta);
	$: requiredValid = v(!modified && fieldGroup.isRequired && !error, delta);
	$: touched = v(fieldGroup.touched, delta);
	$: trackOriginal = v(fieldGroup.rules.trackOriginal, delta);

	onMount(() => fieldGroup.setAsField(formHandle));
	onDestroy(() => fieldGroup.removeComponent(formHandle));

	function v<T>(val: T, _delta: number): T {
		return val;
	}

	function onBlur(event) {
		fieldGroup.onBlur();
	}

	function select() {
		fieldGroup.touch(true);
		dispatch("select");
	}
</script>

{#if $forms}
	<div
		class="field"
		class:invalid={touched && error}
		class:modified
		class:requiredInvalid
		class:requiredValid
		id={fieldGroup.name}
		on:click={select}
	>
		<slot name="content" />
	</div>
	{#if touched && error}
		<span class="pure-form-message error">
			{error.message}
		</span>
	{/if}
{/if}

<style>
	div {
		border: 1px solid #aaa;
		border-bottom-right-radius: 2px;
		border-top-right-radius: 2px;
		color: #555;
		cursor: pointer;
		display: block;
		margin: 5px 0;
		padding: 0.5em 0.5em 0.5em 0.3em;
		text-align: center;
		vertical-align: middle;
		white-space: normal;
		width: 100%;
	}
</style>
