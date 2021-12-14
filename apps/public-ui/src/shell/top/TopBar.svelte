<script>
	import {showTopMenu} from '@votecube/ui-logic'
	import TopBarHeader  from './TopBarHeader.svelte'

	let theShowTopMenu = showTopMenu

	$: wrapperMarginBottom = $theShowTopMenu ? 2.5 : 0
</script>

<style>
	div {
		z-index: 1100;
	}
</style>

<div
				class="custom-menu-wrapper"
				style="margin-bottom: {wrapperMarginBottom}em"
>
	<TopBarHeader></TopBarHeader>
	<!--
	<TopMenu
					on:setViewType
	></TopMenu>
	-->
</div>
