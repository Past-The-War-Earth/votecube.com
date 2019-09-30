<svelte:window on:resize="handleResize(event)"/>
<article
		class="{activeClass}"
		class:noOverflow="$noOverflow"
		class:cube="$cube"
		id="layout"
>
	<!-- Menu toggle -->
	<TopBar
			mainMenuActive={isMenuActive}
			on:setViewType="setViewType(event)"
	></TopBar>

	{#if showLogo}
	<div>
		VOTECUBE
	</div>
	{/if}

	<nav
			class="menu-link {activeClass}"
			id="menuLink"
			on:click="toggleMenu()"
	>
		<!--Hamburger icon -->
		<span></span>
	</nav>
	<Menu
			active="{$showMainMenu}"
			on:selected="selectMenu"
	></Menu>
	<section
			id="main"
			on:click="clickMain()"
	>
		<svelte:component this="{PageComp}"/>
	</section>
</article>
{#if showTextToast}
<TextToast
		text="{$textToast.text}"
></TextToast>
{/if}

<style>
	@media (min-width: 62em) {
		#main {
			margin: 1em 23%;
			width: 54%;
		}
	}

	div {
		color: white;
		background: #191818;
		height: 44px;
		line-height: 44px;
		position: fixed;
		text-align: center;
		top: 0px;
		vertical-align: middle;
		width: 160px;
		z-index: 1200;
	}

	article {
		overflow-y: auto;
		overflow-x: hidden;
	}

	article.noOverflow {
		overflow: initial;
	}

	nav {
		z-index: 1100;
	}

	#sizer {
		height: 0;
		width: 0;
		outline: none;
		border: none;
		padding: none;
		margin: none;
	}
</style>

<script>
	import {resized}             from '@votecube/public-logic/src'
	import {onMount}             from 'svelte'
	import { get }               from 'svelte/store';
	import {init}                from '@votecube/public-logic/src/database'
	import {loadUi}              from './libs/text/ui'
	import FactorInfoMain        from './pages/factor/info/Main.html'
	import FactorPickColor       from './pages/factor/PickColor.html'
	import FactorSearchList      from './pages/factor/search/List.html'
	import PollInfoChart         from './pages/poll/info/Chart.html'
	import PollInfoCommonTopMenu from './pages/poll/info/Common.top.menu.html'
	import PollInfoCube          from './pages/poll/info/Cube.html'
	import PollInfoMain          from './pages/poll/info/Main.html'
	import PollLocations         from './pages/poll/Locations.html'
	import PollSearchList        from './pages/poll/search/List.html'
	import PollSearchListTopMenu from './pages/poll/search/List.top.menu.html'
	import PollTimeframe         from './pages/poll/Timeframe.html'

	import PositionInfoMain from './pages/position/info/Main.html'
	import {
		startResizeInterval
	}                       from '@votecube/public-logic'
	import * as routes      from './routes'
	import {
		setupRoutes
	}                       from './routes.js'
	import store            from './store.js'

	const pageMap = {
		[routes.POSITION_INFO_MAIN]: PositionInfoMain,
		[routes.FACTOR_INFO_MAIN]: FactorInfoMain,
		[routes.FACTOR_SEARCH_LIST]: FactorSearchList,
		[routes.FACTOR_PICK_COLOR]: FactorPickColor,
		[routes.POLL_INFO_CHART]: PollInfoChart,
		[routes.POLL_SEARCH_LIST]: PollSearchList,
		[routes.POLL_INFO_MAIN]: PollInfoMain,
		[routes.POLL_INFO_CUBE]: PollInfoCube,
		[routes.POLL_LOCATIONS]: PollLocations,
		[routes.POLL_TIMEFRAME]: PollTimeframe,
	}

	const topMenuMap = {
		[routes.POLL_INFO_CHART]: PollInfoCommonTopMenu,
		[routes.POLL_INFO_CUBE]: PollInfoCommonTopMenu,
		[routes.POLL_SEARCH_LIST]: PollSearchListTopMenu
	}

	$: activeClass = ({$showMainMenu}) => $showMainMenu ? 'active' : ''

	$: showLogo = ({$isDesktop, $showMainMenu}) => $isDesktop || $showMainMenu

	let PageComp      = null
	let showTextToast = false

	function clickMain() {
		// if (DOM_API.e(menuElementIdSelector)
		//   .className
		//   .indexOf('active') !== -1) {
		if (store.get().showMainMenu) {
			toggleMenu()
		}
	}

	function handleResize(
		event
	) {
		resized.set(true)
	}

	function selectMenu(
		menuItem
	) {
		navigateToPage(menuItem.key, menuItem.params)
		store.toggleMainMenu()
	}

	function toggleMenu() {
		if (get(store).confirm) {
			return
		}
		store.toggleMainMenu()
	}

	function toggleSurface(
		factor
	) {
		$mutationApi.toggleSurface(factor)
	}

	function setPageComp(
		PageComp
	) {
		this.set({PageComp})
	}

	function setViewType(
		view
	) {
		navigateToPage(view.type, view.params)
	}

	onMount(() => {
		loadUi(store, 'en-us').then()
		init().then()

		setupRoutes(this, pageMap, topMenuMap)

		startResizeInterval()

		this.store.on('setTextToast', ({textToast}) => {
			this.set({lastTextToast: textToast, showTextToast: true})
			setTimeout(() => {
				let now             = new Date().getTime()
				let {lastTextToast} = this.get()
				if (now - lastTextToast.seconds * 1000 >= lastTextToast.time) {
					this.set({showTextToast: false})
				}
			}, textToast.seconds * 1000)
		})
	})
</script>
