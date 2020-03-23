<script>
	import {createEventDispatcher} from 'svelte'
	import {currentPage, user} from '@votecube/vc-logic'

	export let menuItem

	let theCurrentPage = currentPage

	const dispatch = createEventDispatcher()

	$: selectedClass = $theCurrentPage && menuItem.key === $theCurrentPage.key ? 'pure-menu-selected' : ''

	function click() {
		dispatch('select', menuItem)
	}

	function getLink(menuItem) {
		return menuItem.path ? menuItem.path : menuItem.key
	}

</script>

{#if !menuItem.auth || $user}
<li
		class="pure-menu-item {selectedClass}"
		on:click="{click}"
>
	<a
			href="{getLink(menuItem)}"
			class="pure-menu-link"
	>
		{menuItem.name}
	</a>
</li>
{/if}
