<script>
	import {pageTitle} from '@votecube/ui-logic'

	let thePageTitle = pageTitle

	$: title = $thePageTitle ? $thePageTitle : 'TrumentBox'

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
