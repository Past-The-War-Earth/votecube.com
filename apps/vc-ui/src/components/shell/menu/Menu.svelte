<script>
	import {DI} from '@airport/di'
	import {
		ABOUT,
		AUTH,
		emInPx,
		FEEDBACK,
		navigateToPage,
		POLL_FORM,
		POLL_LIST,
		RELEASE_PLAN,
		showMainMenu,
		showSignIn,
		user
	}           from '@votecube/public-logic'
	import {
		createEventDispatcher,
		onMount
	}           from 'svelte'
	import MenuItem         from './MenuItem.svelte'

	export let active

	let container
	const dispatch = createEventDispatcher()

	let menuItems = [{
		key: POLL_LIST,
		name: 'Polls'
	}, {
		auth: true,
		key: POLL_FORM,
		path: POLL_FORM.replace(':mode', 'build'),
		name: 'Create Poll',
	}, {
		key: ABOUT,
		name: 'About Us'
	}, {
		key: RELEASE_PLAN,
		name: 'Release Plan'
	}, {
		key: FEEDBACK,
		name: 'Feedback'
	}]

	onMount(async (
		comp
	) => {
		emInPx.set(getEmInPx())
		container = DI.ui('Menu')
	})

	function getEmInPx() {
		const div        = document.getElementById('sizer')
		div.style.height = '1em'
		return div.offsetHeight
	}

	function selectMenu(menuItem) {
		dispatch('selected', menuItem)
	}

	function signIn() {
		showSignIn.set(true)
		showMainMenu.toggle()
	}

	function signOut() {
		(async () => {
			const auth = await container.get(AUTH)
			await auth.signOut()
			showMainMenu.toggle()
		})().then()
	}
</script>

<style>
	section {
		margin-top: 44px;
	}
</style>

<nav
		class:active="{active}"
		id="menu"
>
	<section
			class="pure-menu"
	>
		<ul class="pure-menu-list">
			{#each menuItems as menuItem}
			<MenuItem
					menuItem="{menuItem}"
					on:select="{() => selectMenu(menuItem)}"
			></MenuItem>
			{/each}

			{#if $user}
			<li
					class="pure-menu-item"
					on:click="{signOut}"
			>
				<div
						class="pure-menu-link"
				>
					Sign Out
				</div>
			</li>
			{:else}
			<li
					class="pure-menu-item"
					on:click="{signIn}"
			>
				<div
						class="pure-menu-link"
				>
					Sign In
				</div>
			</li>
			{/if}
		</ul>
	</section>
	<div
			id="sizer"
	></div>

</nav>
