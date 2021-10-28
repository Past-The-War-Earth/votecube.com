<script lang="ts">
	import { DI } from "@airport/di";
	import { AUTH, text } from "@votecube/vc-logic";
	import { createEventDispatcher, onDestroy, onMount } from "svelte";
	import { get } from "svelte/store";
	import EnterButton from "../common/control/button/EnterButton.svelte";
	import SaveButton from "../common/control/button/SaveButton.svelte";
	// import * as forms                     from '../form/forms'
	import Text from "../common/field/Text.svelte";
	import MonthYearPicker from "../common/field/MonthYearPicker.svelte";
	import ActionPopover from "../common/shell/ActionPopover.svelte";
	import { loadForms } from "../libs/forms";
	import { loadLocations as loadLocText } from "../libs/text/locations";
	import { loadLocations } from "../libs/locations";
	import AutoComplete from "../common/field/AutoComplete.svelte";

	let container;
	let error;
	let signInForm;
	let signInMode = true;
	let signUpForm;

	const dispatch = createEventDispatcher();

	onMount(async () => {
		const [formFactory, _, locationsData] = await Promise.all([
			loadForms(),
			loadLocText("en-us"),
			loadLocations(),
		]);

		const theText: any = get(text);

		signInForm = formFactory.group(
			"SignIn",
			{
				email: formFactory.field(
					[
						formFactory.validators.required(),
						formFactory.validators.email(),
					],
					{ maxLength: 64 }
				),
			},
			[formFactory.validators.required()],
			theText.UI.Account,
			"SignIn"
		);

		locationsData.countries.sort((a, b) => {
			var nameA = a.text.toUpperCase(); // ignore upper and lowercase
			var nameB = b.text.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			// names must be equal
			return 0;
		});

		signUpForm = formFactory.group(
			"SignUp",
			{
				userName: formFactory.field(
					[
						formFactory.validators.required(),
						formFactory.validators.minLength(3),
					],
					{ maxLength: 32 }
				),
				email: formFactory.field(
					[
						formFactory.validators.required(),
						formFactory.validators.email(),
					],
					{ maxLength: 64 }
				),
				birthMonth: formFactory.monthYear([
					formFactory.validators.required(),
				]),
				country: formFactory.options(
					[formFactory.validators.required()],
					locationsData.countries
				),
				// passwordCheck: formFactory.field([
				// 	formFactory.validators.required(),
				// 	formFactory.validators.minLength(8), formFactory.validators.custom('passwordMismatch', (
				// 		field
				// 	) => {
				// 		const passwordValue = field.group.fields.password.value
				// 		const value         = field.value
				// 		if (value !== passwordValue) {
				// 			return {
				// 				key: 'passwordMismatch'
				// 			}
				// 		}
				// 	}),
				// ], {maxLength: 64}),
			},
			[formFactory.validators.required()],
			theText.UI.Account,
			"SignUp"
		);

		container = DI.ui("SignIn");
	});

	onDestroy(() => DI.remove(container));

	function signIn() {
		if (!signInForm.valid) {
			return;
		}
		doSignIn(signInForm.value.email, signInForm).then((success) => {
			if (success) {
				dispatch("closed");
			}
		});
	}

	function setSignIn(signInVal) {
		signInMode = signInVal;
	}

	function signUp() {
		if (!signUpForm.valid) {
			return;
		}
		const value = signUpForm.value
		doSignUp(value.country.id, value.birthMonth.getTime(), value.email, value.userName).then(
			(success) => {
				if (success) {
					dispatch("closed");
				}
			}
		);
	}

	async function doSignIn(userName, password) {
		const auth = await container.get(AUTH);
		const errorObject = await auth.signIn(userName, password);
		if (!errorObject) {
			return true;
		}
		switch (errorObject.code) {
			case "NotFound":
				error = "E-mail not found.";
				break;
			case "WrongPassword":
				error = "Wrong password.";
				break;
			case "TooManyTries":
				error = "Too many Sign In requests, please try later.";
				break;
			default:
				error =
					"Error Signing In.  Please check your network connection and try again.";
				break;
		}
		return false;
	}

	async function doSignUp(countryId, birthMonth, email, username) {
		const auth = await container.get(AUTH);
		const result = await auth.signUp(countryId, email, birthMonth, username);
		if (result.received && !result.error) {
			return true;
		}
		switch (result.error) {
			case "EMAIL_TAKEN":
				error = "Email already taken.";
				break;
			case "INVALID_BIRTH_MONTH":
				error = "Invalid Birth Month.";
				break;
			case "INVALID_COUNTRY":
				error = "Invalid country.";
				break;
			case "INVALID_EMAIL":
				error = "Invalid Email.";
				break;
			case "INVALID_USERNAME":
				error = "Invalid username.";
				break;
			case "USERNAME_TAKEN":
				error = "Username already taken.";
				break;
			default:
				error =
					"Error Signing Up.  Please check your network connection and try again.";
				break;
		}
		return false;
	}
</script>

<ActionPopover
	maxWidth="400px"
	width="400px"
	on:cancel={() => dispatch("closed")}
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
			New Users: <button on:click={() => setSignIn(false)}>
				Sign Up
			</button>
		{:else}
			Existing Users: <button on:click={() => setSignIn(true)}>
				Sign In
			</button>
		{/if}
		<br />
		{#if error}
			<div class="error">
				{error}
			</div>
		{/if}
		{#if signInForm}
			<form>
				{#if signInMode}
					<!--			<legend>Create Poll</legend>-->
					<Text field={signInForm.fields.email} />
				{:else}
					<Text field={signUpForm.fields.userName} />
					<Text field={signUpForm.fields.email} />
					<MonthYearPicker field={signUpForm.fields.birthMonth} />
					<AutoComplete field={signUpForm.fields.country} />
					<!--
					<div class="pure-control-group">
					</div>
					-->
				{/if}
				<br />
			</form>
		{/if}
		<br />
	</div>
	<div slot="actions">
		{#if signInMode}
			<EnterButton on:click={signIn} />
		{:else}
			<SaveButton on:click={signUp} />
		{/if}
	</div>
</ActionPopover>

<style>
	button {
		background: none !important;
		border: none;
		padding: 0 !important;
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
