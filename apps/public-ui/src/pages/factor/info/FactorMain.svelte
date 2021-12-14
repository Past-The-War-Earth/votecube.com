<script lang="ts">
	import {
		pageTitle,
		routeParams
	}                      from '@votecube/ui-logic'
	import {
		SITUATION_FORM
	}                      from '@votecube/vc-logic'
	import {
		onDestroy,
		onMount
	}                      from 'svelte'
	import CharacterButton from '@votecube/ui-controls/src/button/CharacterButton.svelte'
	import SaveButton      from '@votecube/ui-controls/src/button/SaveButton.svelte'
	import ColorPicker     from '@votecube/ui-components/src/ColorPicker.svelte'
	import Text            from '@votecube/ui-controls/src/field/Text.svelte'
	import TextArea        from '@votecube/ui-controls/src/field/TextArea.svelte'
	import {saveSituationForm}  from '../../../form/cache'
	import {
		CREATE_FACTOR,
		ensureTopForm,
		navigateOnValid
	}                      from '../../../form/forms'

	let delta      = 0
	let form
	let interFormNavigation
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

	$: color = form
		? form.fields.color
		: null
	$: submitHighlight = isValid
		? '0b0'
		: 'b00'

	onMount(async () => {
		form = ensureTopForm(
			CREATE_FACTOR,
			formHandle, SITUATION_FORM)
		pageTitle.set('Factor Info')
	})

	onDestroy(() => {
		saveSituationForm(interFormNavigation).then()

		form && form.clearComponents()
	})

	function select(
		$routeParams
	) {
		interFormNavigation = true
		navigateOnValid(form, SITUATION_FORM, $routeParams)
	}

</script>

<style>

	.A, .B {
		flex-basis: 100%;
		text-align: center;
	}

	.B {
		margin-left: 0.4em;
	}

	.positions {
		display: flex;
		margin-top: 10px;
		width: 100%;
	}

</style>

{#if form}
<form>
	<div class="pure-control-group">
		<Text
				field="{form.fields.name}"
				floatLabel={false}
		></Text>
	</div>
	<div
			class="positions"
	>
		<div
				class="A"
		>
			<CharacterButton
					character="A"
					fontSize={20}
					fontX={12}
					fontY={19}
					size={24}
					strokeWidth={1}
			></CharacterButton>
			<TextArea
					field="{form.fields.positions.fields.A}"
					floatLabel={false}
					mid={true}
			></TextArea>
		</div>
		<div
				class="B"
		>
			<CharacterButton
					character="B"
					fontSize={20}
					fontX={12}
					fontY={19}
					size={24}
					strokeWidth={1}
			></CharacterButton>
			<TextArea
					field="{form.fields.positions.fields.B}"
					floatLabel={false}
					mid={true}
			></TextArea>
		</div>
	</div>
	<div class="pure-control-group">
		<ColorPicker
				field="{form.fields.color}"
		></ColorPicker>
	</div>

	<nav class="pure-controls">
		<SaveButton
				classes="submitButton"
				highlightColor="{submitHighlight}"
				on:click="{() => select($routeParams)}"
		></SaveButton>
	</nav>
</form>
{/if}
