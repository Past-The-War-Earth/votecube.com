<script>
	import {pageTitle} from '@votecube/vc-logic'

	let thePageTitle = pageTitle

	$: title = $thePageTitle ? $thePageTitle : 'Votecube'

</script>

<div class="pure-menu custom-menu custom-menu-top">
	<nav
			class="pure-menu-heading custom-menu-brand"
	>
		{title}
	</nav>
	<!--
	<TopMenuToggle></TopMenuToggle>
	-->
</div>
