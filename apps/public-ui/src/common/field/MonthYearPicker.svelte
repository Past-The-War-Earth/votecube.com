<svelte:options immutable />

<script type="ts">
	import type { IMonthYearField } from "@votecube/forms";
	import type { Month } from "@votecube/forms/lib/field/date/types";
	import { forms } from "@votecube/vc-logic";
	import { onDestroy, onMount } from "svelte";
	import ClearIcon from "../icon/ClearIcon.svelte";

	export let field: IMonthYearField;
	export let focused = false;
	let delta = 0;
	let monthInput;
	let yearInput;
	let isOriginal = true;
	let isValid = false;
	let month: Month;
	let year: number;

	const MAX_YEAR: number = new Date().getFullYear();
	const MONTHS = [
		{ value: 0, text: `January` },
		{ value: 1, text: `February` },
		{ value: 2, text: `March` },
		{ value: 3, text: `April` },
		{ value: 4, text: `May` },
		{ value: 5, text: `June` },
		{ value: 6, text: `July` },
		{ value: 7, text: `August` },
		{ value: 8, text: `September` },
		{ value: 9, text: `October` },
		{ value: 10, text: `November` },
		{ value: 11, text: `December` },
	];

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
	$: requiredInvalid = v(field.validatorMap.required && errors.length, delta);
	$: requiredValid = v(
		!modified && field.validatorMap.required && !errors.length,
		delta
	);
	$: touched = v(field.touched, delta);

	onMount(() => {
		field.setAsField(formHandle);
	});
	onDestroy(() => {
		field.removeComponent(formHandle);
	});

	function checkFocus() {
		focused = false;
		setTimeout(() => {
			if (field && !focused) {
				field.onBlur();
			}
		});
	}

	function onDocumentClick(event) {
		field.reset();
	}

	function onKeydown() {
		field.setState(month, year);
	}

	function setFocus() {
		focused = true;
	}

	function onInput() {
		field.setState(month, year);
	}

	function v<T>(val: T, delta?): T {
		return val;
	}
</script>

{#if $forms}
	<div class="date-picker">
		<label class="field-label" for={field.id}>
			{label}
		</label>
		<section
			class="field"
			class:invalid={touched && errors.length}
			class:modified
			class:requiredInvalid
			class:requiredValid
		>
			<select bind:value={month} on:change={onInput}>
				{#each MONTHS as aMonth}
					<option value={aMonth.value}>
						{aMonth.text}
					</option>
				{/each}
			</select>
			<input
				autocomplete="off"
				bind:this={yearInput}
				bind:value={year}
				class="year"
				max="{MAX_YEAR}"
				maxlength="4"
				min="1900"
				on:blur={checkFocus}
				on:focus={setFocus}
				on:input={onInput}
				on:keydown={onKeydown}
				type="number"
			/>
		</section>
		{#if touched}
			{#each errors as error}
				<span class="pure-form-message error">
					{error.message}
				</span>
			{/each}
		{/if}
	</div>
{/if}

<style>
	input[type="number"] {
		/* border: 0; */
		box-shadow: none;
		color: #222;
		display: inline-block;
		/*font-weight: 600;*/
		height: 30px;
		margin: 0;
		padding: 8px 0 6px;
		text-align: center;
		width: 49%;
	}

	select {
		color: #222;
		display: inline-block;
		height: 31px;
		margin: 0;
		text-align: center;
		width: 49%;
	}

	.field {
		padding: 0px;
	}
</style>
