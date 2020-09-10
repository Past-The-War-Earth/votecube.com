<script>
	import {DI}                           from '@airport/di'
	import {
		AUTH,
		text
	}                         from '@votecube/vc-logic'
	import {
		createEventDispatcher,
		onDestroy,
		onMount
	}                                     from 'svelte'
	import {get}                          from 'svelte/store'
	import EnterButton                    from '../common/control/button/EnterButton.svelte'
	import SaveButton                     from '../common/control/button/SaveButton.svelte'
	// import * as forms                     from '../form/forms'
	import Text                           from '../common/field/Text.svelte'
	import ActionPopover                  from '../common/shell/ActionPopover.svelte'
	import {loadForms}                    from '../libs/forms'
	import {loadLocations as loadLocText} from '../libs/text/locations'

	let container
	let error
	let signInForm
	let signInMode = true
	let signUpForm

	const dispatch = createEventDispatcher()

	onMount(async () => {
		const [
			      formFactory,
			      _
		      ] = await Promise.all([
			loadForms(),
			loadLocText('en-us')
		])

		const theText = get(text)

		signInForm = formFactory.group('SignIn', {
			userName: formFactory.field([
				formFactory.validators.required(),
			], {maxLength: 64}),
			password: formFactory.field([
				formFactory.validators.required(),
				formFactory.validators.minLength(8),
			], {maxLength: 64})
		}, [formFactory.validators.required()], theText.UI.SignIn, 'SignUp')

		signUpForm = formFactory.group('SignUp', {
			userName: formFactory.field([
				formFactory.validators.required(),
			], {maxLength: 64}),
			password: formFactory.field([
				formFactory.validators.required(),
				formFactory.validators.minLength(8),
			], {maxLength: 64}),
			passwordCheck: formFactory.field([
				formFactory.validators.required(),
				formFactory.validators.minLength(8), formFactory.validators.custom('passwordMismatch', (
					field
				) => {
					const passwordValue = field.group.fields.password.value
					const value         = field.value
					if (value !== passwordValue) {
						return {
							key: 'passwordMismatch'
						}
					}
				}),
			], {maxLength: 64}),
		}, [formFactory.validators.required()], theText.UI.SignIn)

		container = DI.ui('SignIn')
	})

	onDestroy(() => DI.remove(container))

	function signIn() {
		if (!signInForm.valid) {
			return
		}
		doSignIn(signInForm.value.username, signInForm.value.password).then(
			success => {
				if (success) {
					dispatch('closed')
				}
			})
	}

	function setSignIn(signInVal) {
		signInMode = signInVal
	}

	function signUp() {
		if (!signUpForm.valid) {
			return
		}
		doSignUp(signUpForm.value.username, signUpForm.value.password).then(
			success => {
				if (success) {
					dispatch('closed')
				}
			})
	}

	async function doSignIn(
		username,
		password
	) {
		const auth  = await container.get(AUTH)
		const errorObject = await auth.signIn(username, password)
		if (!errorObject) {
			return true
		}
		switch (errorObject.code) {
			case 'NotFound':
				error = 'E-mail not found.'
				break
			case 'WrongPassword':
				error = 'Wrong password.'
				break
			case 'TooManyTries':
				error = 'Too many Sign In requests, please try later.'
				break
			default:
				error = 'Error Signing In.  Please check your network connection and try again.'
				break
		}
		return false
	}


	async function doSignUp(
		userName,
		password
	) {
		const auth  = await container.get(AUTH)
		const errorObject = await auth.signUp(userName, password)
		if (!errorObject) {
			return true
		}
		switch (errorObject.code) {
			case 'InUse':
				error = 'E-mail already taken.'
				break
			case 'Invalid':
				error = 'Invalid username.'
				break
			default:
				error = 'Error Signing Up.  Please check your network connection and try again.'
				break
		}
		return false
	}

</script>

<style>

	button {
		background: none!important;
		border: none;
		padding: 0!important;
		font-family: arial, sans-serif;
		color: #069;
		text-decoration: underline;
		cursor: pointer;
	}

	.error {
		padding: 5px;
		text-align: center;
	}

</style>

<ActionPopover
		maxWidth="400px"
		on:cancel="{() => dispatch('closed')}"
>
	<div slot="header">
		{#if signInMode}
		Sign In
		{:else}
		Sign Up
		{/if}
	</div>
	<div slot="content">
		{#if signInMode}
		New Users: <button
			on:click="{() => setSignIn(false)}"
	>
		Sign Up
	</button>
		{:else}
		Existing Users: <button
			on:click="{() => setSignIn(true)}"
	>
		Sign In
	</button>
		{/if}
		<br>
		{#if error}
		<div
				class="error"
		>
			{error}
		</div>
		{/if}
		{#if signInForm}
		<form>
			{#if signInMode}
			<!--			<legend>Create Poll</legend>-->
			<Text
					field="{signInForm.fields.userName}"
			></Text>
			<Text
					field="{signInForm.fields.password}"
					type="password"
			></Text>
			{:else}
			<Text
					field="{signUpForm.fields.userName}"
			></Text>
			<div class="pure-control-group">
				<Text
						field="{signUpForm.fields.password}"
						type="password"
				></Text>
			</div>
			<div class="pure-control-group">
				<Text
						field="{signUpForm.fields.passwordCheck}"
						type="password"
				></Text>
			</div>
			{/if}
			<br>
		</form>
		{/if}
		<br>
	</div>
	<div slot="actions">
		{#if signInMode}
		<EnterButton
				on:click="{signIn}"
		></EnterButton>
		{:else}
		<SaveButton
				on:click="{signUp}"
		></SaveButton>
		{/if}
	</div>
</ActionPopover>
