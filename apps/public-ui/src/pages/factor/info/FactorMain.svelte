<script lang="ts">
	import {
		pageTitle,
		SITUATION_FORM,
		routeParams
	}                      from '@votecube/vc-logic'
	import {
		onDestroy,
		onMount
	}                      from 'svelte'
	import CharacterButton from '../../../common/control/button/CharacterButton.svelte'
	import SaveButton      from '../../../common/control/button/SaveButton.svelte'
	import ColorPicker     from '../../../common/field/ColorPicker.svelte'
	import Text            from '../../../common/field/Text.svelte'
	import TextArea        from '../../../common/field/TextArea.svelte'
	import {savePollForm}  from '../../../form/cache'
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
		savePollForm(interFormNavigation).then()

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
					fontSize="20"
					fontX="12"
					fontY="19"
					size="24"
					strokeWidth="1"
			></CharacterButton>
			<TextArea
					field="{form.fields.positions.fields.A}"
					mid="{true}"
			></TextArea>
		</div>
		<div
				class="B"
		>
			<CharacterButton
					character="B"
					fontSize="20"
					fontX="12"
					fontY="19"
					size="24"
					strokeWidth="1"
			></CharacterButton>
			<TextArea
					field="{form.fields.positions.fields.B}"
					mid="{true}"
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
