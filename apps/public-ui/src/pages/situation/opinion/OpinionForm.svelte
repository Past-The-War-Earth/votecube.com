<script>
	import {
		navigateToPage,
		text,
		user
	}                  from '@votecube/vc-logic'
	import {
		SITUATION_LIST
	}                  from '@votecube/vc-logic'
	import {
		onDestroy,
		onMount
	}                  from 'svelte'
	import {get}       from 'svelte/store'
	import SaveButton   from '@votecube/ui-controls/src/button/SaveButton.svelte'
	import AutoComplete from '@votecube/ui-controls/src/field/AutoComplete.svelte'
	import TextArea     from '@votecube/ui-controls/src/field/TextArea.svelte'
	import {loadForms} from '../../libs/forms'

	let delta      = 0
	let error      = ''
	let isOriginal = true
	let isValid    = false
	let form

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

	$: submitHighlight = !isValid ? 'b00' : '0b0'

	onMount(async () => {
		const [
			      formFactory,
			      // locations,
			      // _,
		      ] = await Promise.all([
			loadForms(),
			// loadLocations(),
			// loadLocText(page.store, 'en-us'),
		])

		const theForm = formFactory.group('Feedback', {
			category: formFactory.options([
				formFactory.validators.required()
			], [{
				id: 1,
				text: 'Feature Request'
			}, {
				id: 2,
				text: 'Bug Report'
			}, {
				id: 3,
				text: 'Suggestion'
			}, {
				id: 4,
				text: 'Question'
			}, {
				id: 5,
				text: 'Other'
			}]),
			comment: formFactory.field([
				formFactory.validators.minLength(3),
				formFactory.validators.required()
			], {maxLength: 2500})
		}, [formFactory.validators.required()], get(text).UI)

		theForm.addComponent(formHandle)
		theForm.validate()

		form = theForm
	})

	onDestroy(() => form.clearComponents())

	function submit() {
		form.touch()

		if (!form.valid) {
			return
		}
		saveFeedback(form.value).then(
			success => {
				if (success) {
					navigateToPage(SITUATION_LIST)
				} else {
					error = 'Error saving feedback, please check your network connection'
				}
			})
	}

	async function saveFeedback(
		formValue
	) {
		const db          = window.db
		const feedbackRef = db.collection('feedback').doc()

		let userId

		const userInfo = get(user)

		if (userInfo) {
			userId = userInfo.id
		} else {
			userId = null
		}
		try {
			await feedbackRef.set({
				...formValue,
				userId
			})
			return true
		} catch (error) {
			return false
		}
	}

</script>

<style>
	.error {
		color: red;
		text-align: center;
		width: 100%;
	}
</style>

{#if form}
<form>
	<legend>Submit Feedback</legend>
	<AutoComplete
			field="{form.fields.category}"
	></AutoComplete>
	<TextArea
			field="{form.fields.comment}"
	></TextArea>
	<nav class="pure-controls">
		{#if error}
		<div
				class="error"
		>
			{error}
		</div>
		<br>
		<br>
		{/if}
		<SaveButton
				classes="submitButton"
				highlightColor="{submitHighlight}"
				on:select="{submit}"
		></SaveButton>
	</nav>
</form>
{/if}
