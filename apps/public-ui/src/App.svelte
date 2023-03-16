<script lang="ts">
	import { IOC } from "@airport/direction-indicator";
	import ForumThread from "@votecube/forum-ui/src/ForumThread.svelte";
	import type {
		IUiCustomEvent,
		IUiMenuItem,
		IUiIdea,
	} from "@votecube/model";
	import {
		Auth,
		authChecked,
		cube,
		currentPage,
		isDesktop,
		navigateToPage,
		noOverflow,
		routeParams,
		Routes,
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
		IDEA_FORM,
		IDEA_FORUM,
		IDEA_LIST,
		IDEA_LOCATIONS,
		IDEA_MAIN,
		IDEA_TIME_FRAME,
		RELEASE_PLAN,
		scheduleToResize,
		idea,
		ideaActions,
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
	import IdeaForm from "./pages/idea/info/IdeaForm.svelte";
	import IdeaForum from "./pages/idea/info/IdeaForum.svelte";
	import IdeaInfoMain from "./pages/idea/info/IdeaMain.svelte";
	// import IdeaLocations   from './pages/idea/Locations.html'
	import IdeaList from "./pages/idea/search/IdeaList.svelte";
	// import IdeaTimeframe   from './pages/idea/Timeframe.html'
	import DerivationList from "./pages/idea/list/DerivationList.svelte";
	import ReleasePlan from "./pages/ReleasePlan.svelte";
	import Outcomes from "./components/idea/Outcomes.svelte";
	import IdeaFab from "./components/idea/IdeaFab.svelte";

	let action;
	let mode;
	let ageSuitabilityVisible;
	let appShowMainMenu = showMainMenu;
	let appIsDesktop = isDesktop;
	let inIdea = false;
	let lastTextToast = {};
	let outcomesVisible = false;
	let PageComp = null;
	let pageMap;
	let showTextToast = false;
	let textToastUnsubscribe;
	let uiIdea: IUiIdea;

	$: activeClass = $appShowMainMenu ? "active" : "";
	$: showLogo = $appIsDesktop || $appShowMainMenu;
	$: {
		mode = $routeParams ? $routeParams.mode : "none";
	}
	$: {
		uiIdea = $idea;
		inIdea = !!uiIdea;
	}
	$: if (inIdea && $ideaActions.showOutcomes) {
		ideaActions.set({});
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
		ideaActions.set({
			ageSuitabilitySave: true,
		});
	}

	function goToDerivations() {
		const { repositoryGUID } = get(routeParams);
		navigateToPage(DERIVATION_LIST, { repositoryGUID });
	}

	function confirmAgreement() {
		ideaActions.set({
			confirmAgreement: true,
		});
	}

	function alter() {
		ideaActions.set({
			ideaAlter: true,
		});
	}

	function goToOpinions() {
		navigateToPage(IDEA_FORUM, currentRouteParams);
	}

	function setAction(newAction) {
		action = newAction;
	}

	function checkBuild() {
		ideaActions.set({
			checkBuild: true,
		});
	}

	function closeConfirm() {
		setAction("none");
	}

	onMount(async () => {
		const routes = await APP_CONTAINER.get(Routes);

		pageMap = {
			[ABOUT]: AboutUs,
			[CARD_CLIMATE_CHANGE]: IdeaInfoMain,
			[FACTOR_INFO_MAIN]: FactorMain,
			// [FACTOR_LIST]: FactorList,
			[FEEDBACK]: Feedback,
			[IDEA_FORM]: IdeaForm,
			[IDEA_FORUM]: IdeaForum,
			[IDEA_LIST]: IdeaList,
			// [IDEA_LOCATIONS]: IdeaLocations,
			[IDEA_MAIN]: IdeaInfoMain,
			// [IDEA_TIME_FRAME]: IdeaTimeframe,
			[RELEASE_PLAN]: ReleasePlan,
			[DERIVATION_LIST]: DerivationList,
		};
		/*		topMenuMap = {
					[routes.IDEA_MAIN]: IdeaInfoCommonTopMenu,
					[routes.IDEA_LIST]: IdeaListTopMenu
				}*/

		routes.configPages([
			[ABOUT, false, false],
			[CARD_CLIMATE_CHANGE, false, false],
			[FACTOR_INFO_MAIN, false, false],
			[FACTOR_LIST, false, true],
			[FEEDBACK, false, false],
			[IDEA_FORM, true, false],
			[IDEA_FORUM, true, false],
			[IDEA_LIST, false, true],
			[IDEA_LOCATIONS, true, false],
			[IDEA_MAIN, false, true],
			[IDEA_TIME_FRAME, true, false],
			[RELEASE_PLAN, false, false],
			[DERIVATION_LIST, false, true],
		]);

		routes.setupRoutes(pageMap, setPageComp, ABOUT, IDEA_LIST);

		startResizeInterval();

		textToastUnsubscribe = textToast.subscribe((value) => {
			lastTextToast = value;
			showTextToast = true;
			setTimeout(() => {
				showTextToast = false;
			}, value.seconds * 1000);
		});

		const [auth, _] = await Promise.all([
			APP_CONTAINER.get(Auth),
			loadUi("en-us"),
			// init()
		]);
		user.set(auth.getUser());

		const userChanges$ = await auth.reactToUser();

		userChanges$.subscribe((authUser) => {
			const theCurrentPage = get(currentPage);
			if (!authUser && theCurrentPage && theCurrentPage.authenticated) {
				// navigateToPage(IDEA_LIST);
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
{#if inIdea}
	<IdeaFab
		on:ageSuitability={() => showAgeSuitability(true)}
		on:build={checkBuild}
		on:confirmAgreement={confirmAgreement}
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
			idea={uiIdea}
		/>
	{/if}
	{#if outcomesVisible}
		<ActionPopover customCancel={true} infoOnly={true}>
			<div slot="header">
				{$idea.name}
			</div>
			<div slot="content">
				<Outcomes idea={$idea} />
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
					Coming soon - Idea Rankings
				{:else if action === "stats"}
					Coming in Beta - Idea Statistics
				{/if}
			</div>
			<div slot="content">
				<!--
			<div>
				{idea.name}
			</div>
			-->
				<!--
			<AgreementComponentSummary
					bind:delta
					bind:idea
					verticalLayout="Y"
					bind:agreement
					maxBarSize="{120}"
					mode="confirm"
					agreementFactors="{agreementFactors}"
			></AgreementComponentSummary>
			-->
				<br />
				<h3>
					{#if action === "rankings"}
						We'll start providing basic Idea Rankings at the
						end of Alpha testing period. More will be added in
						subsequent releases.
					{:else if action === "stats"}
						Basic Idea Statistics will be available in Beta
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
			<AgreementButton
					on:select="submitAgreement()"
			></AgreementButton>
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
