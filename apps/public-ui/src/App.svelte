<script lang="ts">
	import { IOC } from "@airport/di";
	import ForumThread from "@votecube/forum-ui/src/ForumThread.svelte";
	import type {
		IUiCustomEvent,
		IUiMenuItem,
		IUiSituation,
	} from "@votecube/model";
	import {
		AUTH,
		authChecked,
		cube,
		currentPage,
		isDesktop,
		navigateToPage,
		noOverflow,
		routeParams,
		ROUTES,
		showConfirm,
		showMainMenu,
		showSignIn,
		textToast,
		user,
	} from "@votecube/ui-logic";
	import {
		ABOUT,
		APP_CONTAINER,
		CARD_CLIMATE_CHANGE,
		DERIVATION_LIST,
		FACTOR_INFO_MAIN,
		FACTOR_LIST,
		FEEDBACK,
		SITUATION_FORM,
		SITUATION_FORUM,
		SITUATION_LIST,
		SITUATION_LOCATIONS,
		SITUATION_MAIN,
		SITUATION_TIME_FRAME,
		RELEASE_PLAN,
		scheduleToResize,
		situation,
		situationActions,
		startResizeInterval,
	} from "@votecube/vc-logic";
	import ActionPopover from "@votecube/ui-controls/src/shell/ActionPopover.svelte";
	import AgeSuitability from "@votecube/ui-controls/src/AgeSuitability.svelte";
	import CancelButton from "@votecube/ui-controls/src/button/CancelButton.svelte";
	import OutcomeButton from "@votecube/ui-controls/src/button/OutcomeButton.svelte";
	import TextToast from "@votecube/ui-controls/src/shell/TextToast.svelte";
	import { onDestroy, onMount } from "svelte";
	import { get } from "svelte/store";
	import { loadUi } from "./libs/text/ui";
	import Menu from "./shell/menu/Menu.svelte";
	import TopBar from "./shell/top/TopBar.svelte";
	import SignIn from "./shell/SignIn.svelte";
	import AboutUs from "./pages/AboutUs.svelte";
	import FactorMain from "./pages/factor/info/FactorMain.svelte";
	// import FactorList      from './pages/factor/search/FactorList.html'
	import Feedback from "./pages/feedback/FeedbackForm.svelte";
	import SituationForm from "./pages/situation/info/SituationForm.svelte";
	import SituationForum from "./pages/situation/info/SituationForum.svelte";
	import SituationInfoMain from "./pages/situation/info/SituationMain.svelte";
	// import SituationLocations   from './pages/situation/Locations.html'
	import SituationList from "./pages/situation/search/SituationList.svelte";
	// import SituationTimeframe   from './pages/situation/Timeframe.html'
	import DerivationList from "./pages/situation/list/DerivationList.svelte";
	import ReleasePlan from "./pages/ReleasePlan.svelte";
	import Outcomes from "./components/situation/Outcomes.svelte";
	import SituationFab from "./components/situation/SituationFab.svelte";

	let action;
	let mode;
	let ageSuitabilityVisible;
	let appShowMainMenu = showMainMenu;
	let appIsDesktop = isDesktop;
	let inSituation = false;
	let lastTextToast = {};
	let outcomesVisible = false;
	let PageComp = null;
	let pageMap;
	let showTextToast = false;
	let textToastUnsubscribe;
	let uiSituation: IUiSituation;

	$: activeClass = $appShowMainMenu ? "active" : "";
	$: showLogo = $appIsDesktop || $appShowMainMenu;
	$: {
		mode = $routeParams ? $routeParams.mode : "none";
	}
	$: {
		uiSituation = $situation;
		inSituation = !!uiSituation;
	}
	$: if (inSituation && $situationActions.showOutcomes) {
		situationActions.set({});
		showOutcomes(true);
	}

	$: currentRouteParams = $routeParams

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
			IOC.getSync(ROUTES).postLocationToAIRport();
		});
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

	function showAgeSuitability(newAgeSuitabilityVisible) {
		ageSuitabilityVisible = newAgeSuitabilityVisible;
	}

	function showOutcomes(newOutcomesVisible) {
		outcomesVisible = newOutcomesVisible;
	}

	function onAgeSuitabilitySave() {
		situationActions.set({
			ageSuitabilitySave: true,
		});
	}

	function goToDerivations() {
		const { repositoryUuId } = get(routeParams);
		navigateToPage(DERIVATION_LIST, { repositoryUuId });
	}

	function confirmSolution() {
		situationActions.set({
			confirmSolution: true,
		});
	}

	function alter() {
		situationActions.set({
			situationAlter: true,
		});
	}

	function goToOpinions() {
		navigateToPage(SITUATION_FORUM, currentRouteParams);
	}

	function setAction(newAction) {
		action = newAction;
	}

	function checkBuild() {
		situationActions.set({
			checkBuild: true,
		});
	}

	function closeConfirm() {
		setAction("none");
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
			[SITUATION_FORUM]: SituationForum,
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
			[SITUATION_FORUM, true, false],
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
{#if inSituation}
	<SituationFab
		on:ageSuitability={() => showAgeSuitability(true)}
		on:build={checkBuild}
		on:confirmSolution={confirmSolution}
		on:edit={() => alter()}
		on:outcomes={() => showOutcomes(true)}
		on:opinions={goToOpinions}
		on:rankings={() => setAction("rankings")}
		on:stats={() => setAction("stats")}
		on:derivations={goToDerivations}
		{mode}
	/>
	{#if ageSuitabilityVisible}
		<AgeSuitability
			on:cancel={() => showAgeSuitability(false)}
			on:save={onAgeSuitabilitySave}
			situation={uiSituation}
		/>
	{/if}
	{#if outcomesVisible}
		<ActionPopover customCancel={true} infoOnly={true}>
			<div slot="header">
				{$situation.name}
			</div>
			<div slot="content">
				<Outcomes situation={$situation} />
			</div>
			<div slot="cancel">
				<OutcomeButton on:click={() => showOutcomes(false)} />
			</div>
		</ActionPopover>
	{/if}
	{#if ["stats", "rankings"].indexOf(action) > -1}
		<!--			contentClass="smallPadding"-->
		<ActionPopover customCancel={true} on:cancel={closeConfirm}>
			<div slot="header">
				{#if action === "rankings"}
					Coming soon - Situation Rankings
				{:else if action === "stats"}
					Coming in Beta - Situation Statistics
				{/if}
			</div>
			<div slot="content">
				<!--
			<div>
				{situation.name}
			</div>
			-->
				<!--
			<SolutionComponentSummary
					bind:delta
					bind:situation
					verticalLayout="Y"
					bind:solution
					maxBarSize="{120}"
					mode="confirm"
					solutionFactors="{solutionFactors}"
			></SolutionComponentSummary>
			-->
				<br />
				<h3>
					{#if action === "rankings"}
						We'll start providing basic Situation Rankings at the
						end of Alpha testing period. More will be added in
						subsequent releases.
					{:else if action === "stats"}
						Basic Situation Statistics will be available in Beta
						release. More advanced stats will be provided in version
						1.
					{/if}
					<br />
					<br />
					Please see the <a href="/releasePlan">Release Plan</a> for details.
				</h3>
				<br />
			</div>
			<!--
		<div slot="actions">
			<SolutionButton
					on:select="submitSolution()"
			></SolutionButton>
		</div>
-->
			<div slot="cancel">
				<CancelButton on:click={closeConfirm} />
			</div>
		</ActionPopover>
	{/if}
{/if}
<!--
-->
<ForumThread />

<style>
	@media (min-width: 62em) {
		#main {
			margin: 1em 23%;
			width: 54%;
		}
	}

	.logo {
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
