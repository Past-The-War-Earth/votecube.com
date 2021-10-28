<svelte:options immutable />

<script type="ts">
	import type { IOptionsField } from "@votecube/forms";
	import { forms } from "@votecube/vc-logic";
	import { onDestroy, onMount } from "svelte";

	export let field: IOptionsField;

	let delta = 0;
	let isOriginal = true;
	let isValid = false;

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
	$: modified = v(
		!errors.length && field.rules.trackOriginal && !field.theIsOriginal,
		delta
	);
	$: placeholder = v(field.placeholder, delta);
	$: requiredInvalid = v(field.validatorMap.required && errors.length, delta);
	$: requiredValid = v(
		!modified && field.validatorMap.required && !errors.length,
		delta
	);
	$: touched = v(field.touched, delta);
	$: value = v(field.value, delta);

	onMount(() => field.setAsField(formHandle));
	onDestroy(() => field.removeComponent(formHandle));

	function v<T>(val: T, delta): T {
		return val;
	}

	function onBlur(event) {
		field.onBlur();
	}

	function onInput(event) {
		field.value = event.target.value;
		field.onInput();
	}
</script>

{#if $forms}
	<label class="field-label" for="country">Country</label>
	<select id="country">
		<option> Canada </option>
	</select>
	{#if touched}
		{#each errors as error}
			<span class="pure-form-message error">{error.message}</span>
		{/each}
	{/if}
{/if}

<style>
	select {
		width: 100%;
	}
</style>
