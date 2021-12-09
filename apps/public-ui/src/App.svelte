<script lang="ts">
	import {
		ABOUT,
		APP_CONTAINER,
		AUTH,
		authChecked,
		CARD_CLIMATE_CHANGE,
		cube,
		currentPage,
		FACTOR_INFO_MAIN,
		FACTOR_LIST,
		FEEDBACK,
		isDesktop,
		navigateToPage,
		noOverflow,
		SITUATION_FORM,
		SITUATION_LIST,
		SITUATION_LOCATIONS,
		SITUATION_MAIN,
		SITUATION_TIME_FRAME,
		RELEASE_PLAN,
		ROUTES,
		scheduleToResize,
		showConfirm,
		showMainMenu,
		showSignIn,
		startResizeInterval,
		textToast,
		user,
		DERIVATION_LIST,
	} from "@votecube/vc-logic";
	import { onDestroy, onMount } from "svelte";
	import { get } from "svelte/store";
	import { loadUi } from "./libs/text/ui";
	import TextToast from "./common/shell/TextToast.svelte";
	import Menu from "./shell/menu/Menu.svelte";
	import TopBar from "./shell/top/TopBar.svelte";
	import SignIn from "./shell/SignIn.svelte";
	import AboutUs from "./pages/AboutUs.svelte";
	import FactorMain from "./pages/factor/info/FactorMain.svelte";
	// import FactorList      from './pages/factor/search/FactorList.html'
	import Feedback from "./pages/feedback/FeedbackForm.svelte";
	import SituationForm from "./pages/situation/info/SituationForm.svelte";
	import SituationInfoMain from "./pages/situation/info/SituationMain.svelte";
	// import SituationLocations   from './pages/situation/Locations.html'
	import SituationList from "./pages/situation/search/SituationList.svelte";
	// import SituationTimeframe   from './pages/situation/Timeframe.html'
	import DerivationList from "./pages/situation/list/DerivationList.svelte";
	import ReleasePlan from "./pages/ReleasePlan.svelte";
	import type { IUiCustomEvent, IUiMenuItem } from "@votecube/model";
import { IOC } from "@airport/di";

	// let topMenuMap
	let appShowMainMenu = showMainMenu;
	let appIsDesktop = isDesktop;
	let lastTextToast = {};
	let PageComp = null;
	let pageMap;
	let showTextToast = false;
	let textToastUnsubscribe;

	$: activeClass = $appShowMainMenu ? "active" : "";

	$: showLogo = $appIsDesktop || $appShowMainMenu;

	function clickMain() {
		// if (DOM_API.e(menuElementIdSelector)
		//   .className
		//   .indexOf('active') !== -1) {
		if (get(showMainMenu)) {
			toggleMenu();
		}
	}

	function closeSignIn() {
		showSignIn.set(false);
	}

	function handleResize(event) {
		scheduleToResize();
	}

	function selectMenu(menuItemEvent: IUiCustomEvent<IUiMenuItem>) {
		// navigateToPage(menuItem.id, menuItem.params)
		showMainMenu.toggle();
		setTimeout(() => {
			IOC.getSync(ROUTES).postLocationToAIRport()
		})
	}

	function toggleMenu() {
		if (get(showConfirm)) {
			return;
		}
		showMainMenu.toggle();
	}

	function setPageComp(pageComp) {
		PageComp = pageComp;
	}

	function setViewType(view) {
		navigateToPage(view.type, view.params);
	}

	onMount(async () => {
		const routes = await APP_CONTAINER.get(ROUTES);

		pageMap = {
			[ABOUT]: AboutUs,
			[CARD_CLIMATE_CHANGE]: SituationInfoMain,
			[FACTOR_INFO_MAIN]: FactorMain,
			// [FACTOR_LIST]: FactorList,
			[FEEDBACK]: Feedback,
			[SITUATION_FORM]: SituationForm,
			[SITUATION_LIST]: SituationList,
			// [SITUATION_LOCATIONS]: SituationLocations,
			[SITUATION_MAIN]: SituationInfoMain,
			// [SITUATION_TIME_FRAME]: SituationTimeframe,
			[RELEASE_PLAN]: ReleasePlan,
			[DERIVATION_LIST]: DerivationList,
		};
		/*		topMenuMap = {
					[routes.SITUATION_MAIN]: SituationInfoCommonTopMenu,
					[routes.SITUATION_LIST]: SituationListTopMenu
				}*/

		routes.configPages([
			[ABOUT, false, false],
			[CARD_CLIMATE_CHANGE, false, false],
			[FACTOR_INFO_MAIN, false, false],
			[FACTOR_LIST, false, true],
			[FEEDBACK, false, false],
			[SITUATION_FORM, true, false],
			[SITUATION_LIST, false, true],
			[SITUATION_LOCATIONS, true, false],
			[SITUATION_MAIN, false, true],
			[SITUATION_TIME_FRAME, true, false],
			[RELEASE_PLAN, false, false],
			[DERIVATION_LIST, false, true],
		]);

		routes.setupRoutes(pageMap, setPageComp, ABOUT, SITUATION_LIST);

		startResizeInterval();

		textToastUnsubscribe = textToast.subscribe((value) => {
			lastTextToast = value;
			showTextToast = true;
			setTimeout(() => {
				showTextToast = false;
			}, value.seconds * 1000);
		});

		const [auth, _] = await Promise.all([
			APP_CONTAINER.get(AUTH),
			loadUi("en-us"),
			// init()
		]);
		user.set(auth.getUser());

		const userChanges$ = await auth.reactToUser();

		userChanges$.subscribe((authUser) => {
			const theCurrentPage = get(currentPage);
			if (!authUser && theCurrentPage && theCurrentPage.authenticated) {
				// navigateToPage(SITUATION_LIST);
			}

			user.set(authUser);
			authChecked.set(true);
		});
	});

	onDestroy(() => {
		textToastUnsubscribe();
	});
</script>

<svelte:window on:resize={handleResize} />
<article
	class="{activeClass} wrapper"
	class:noOverflow={$noOverflow}
	class:cube={$cube}
	id="layout"
>
	<!-- Menu toggle -->
	<TopBar />
	{#if showLogo}
		<div>TrumentBox</div>
	{/if}

	<nav class="menu-link {activeClass}" id="menuLink" on:click={toggleMenu}>
		<!--Hamburger icon -->
		<span />
	</nav>
	<Menu active={$showMainMenu} on:selected={selectMenu} />
	<section id="main" on:click={clickMain}>
		<svelte:component this={PageComp} />
	</section>
</article>
{#if showTextToast}
	<TextToast text={$textToast.text} />
{/if}
{#if $showSignIn}
	<SignIn on:closed={closeSignIn} />
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
</style>
