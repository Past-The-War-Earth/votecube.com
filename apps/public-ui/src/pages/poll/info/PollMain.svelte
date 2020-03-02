<script>
	import {DI}            from '@airport/di'
	import {
		CUBE_EVENT_LISTENER,
		MUTATION_API
	}                      from '@votecube/cube-logic'
	import {VOTE_DAO}      from '@votecube/public-db'
	import {
		cardMove,
		cube,
		CUBE_LOGIC,
		DETAILED_CUBE_LOGIC,
		LOGIC_UTILS,
		mode,
		navigateToPage,
		noOverflow,
		POLL_FORM,
		POLL_LIST,
		POLL_MAIN_LOGIC,
		POLL_MANAGER,
		RELEASE_PLAN,
		routeParams,
		setResizeCllBck,
		user,
		VARIATION_LIST
	}                      from '@votecube/public-logic'
	import {
		beforeUpdate,
		onDestroy,
		onMount
	}                      from 'svelte'
	import {get}           from 'svelte/store'
	import BuildButton        from '../../../common/control/button/BuildButton.svelte'
	import CancelButton       from '../../../common/control/button/CancelButton.svelte'
	import OutcomeButton      from '../../../common/control/button/OutcomeButton.svelte'
	import PercentPicker      from '../../../common/control/PercentPicker.svelte'
	import ActionPopover      from '../../../common/shell/ActionPopover.svelte'
	import AgeSuitability     from '../../../components/AgeSuitability.svelte'
	import DetailedCube       from '../../../components/poll/DetailedCube.svelte'
	import FactorRanking      from '../../../components/poll/FactorRanking.svelte'
	import Outcomes           from '../../../components/poll/Outcomes.svelte'
	import PollFab            from '../../../components/poll/PollFab.svelte'
	import VoteComponentGraph from '../../../components/vote/VoteComponentGraph.svelte'
	import {setupCubeView} from '../../../database'
	// import VoteComponentSummary from '../../../components/vote/VoteComponentSummary.html'

	let action
	let ageSuitabilityVisible
	let beforeCardView        = false
	let beforeCubeView        = false
	let changed               = {}
	let confirm
	let container
	let cubeSideMap
	let cubeSides
	let cubeView              = false
	// cubeTransition: false,
	let currentVote           = {
		1: {
			outcome: null,
			value: 0
		},
		2: {
			outcome: null,
			value: 0
		},
		3: {
			outcome: null,
			value: 0
		}
	}
	let delta                 = 0
	let effectiveCubeView
	let error
	let loaded
	let logicUtils
	let moveDelta             = 0
	let moveType
	let manualControlsOn      = true
	let mutationApi
	let outcomesVisible       = false
	let percentMode           = false
	let poll                  = null
	let positionChanges       = {
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5
	}
	let positionMode = false
	let previous              = {
		delta: 0
	}
	let saving                = false
	let savingMessage
	let theCurrentVoteFactors = []
	let theVoteFactors        = []
	let tweenDelta            = 0 // Only for the factor cubes
	let verticalLayout        = true
	let vote
	let zoomFactor            = 0.65

	$: currentVoteFactors = f(() => {
		if (logicUtils && currentVote) {
			theCurrentVoteFactors = logicUtils.getVoteFactorNodesInValueOrder(currentVote)
		}

		return theCurrentVoteFactors
	}, delta)
	$: dynamicDelta = effectiveCubeView ? delta : tweenDelta
	$: dynamicVote = effectiveCubeView ? vote : currentVote
	$: effectiveCubeView = cubeView && !beforeCubeView
	$: horizontalLayout = !verticalLayout
	$: transformScale = effectiveCubeView ? `transform: scale(${zoomFactor}, ${zoomFactor});` : ''
	$: voteFactors = f(() => {
		if (logicUtils && vote) {
			theVoteFactors = logicUtils.getVoteFactorNodesInValueOrder(vote)
		}

		return theVoteFactors
	}, delta)

	onMount(async () => {
		cardMove.set(null)
		container = DI.ui('PollMain')

		let {pollId, pollVariationId} = get(routeParams)

		resize()
		if (window.location.href.indexOf('card/ClimateChange') > 0) {
			pollId          = '7U2Z2ItoJVTnpZwZdjrg'
			pollVariationId = 'NFKgyOxEfT8RlqBBwEf2'
		}
		cube.set(true)
		noOverflow.set(true)

		const cubeLogicModule = await import('@votecube/cube-logic')

		const [
			      cubeEventListener,
			      cubeLogic,
			      detailedCubeLogic,
			      theLogicUtils
		      ] = await container.get(
			cubeLogicModule.CUBE_EVENT_LISTENER, CUBE_LOGIC,
			DETAILED_CUBE_LOGIC, LOGIC_UTILS
		)

		cubeLogic.setCubeViewPort(
			cubeEventListener,
			(
				theMutationApi
			) => {
				mutationApi = theMutationApi
			}, () => {
				/*
				if (percentMode) {
					TODO: implement correct card and graph animations for the PercentPicker, IF NEEDED
				}
				*/
				delta       = delta + 1
// 				percentMode = false
			}
		)

		const cubeViewResult = await setupCubeView(pollId, pollVariationId,
			cubeLogic, cubeEventListener, container)

		poll        = cubeViewResult.poll

		const cubeSideResult = await detailedCubeLogic.getCubeSides(poll, container)

		await doToggleView(!cubeView, cubeView)

		vote        = cubeViewResult.vote
		cubeSideMap = cubeSideResult.cubeSideMap
		cubeSides   = cubeSideResult.cubeSides
		loaded      = true
		logicUtils  = theLogicUtils
	})

	onDestroy(async () => {
		setResizeCllBck(null)

		const [cubeEventListener, cubeLogic]
			      = await container.get(CUBE_EVENT_LISTENER, CUBE_LOGIC)

		cubeLogic.shutDownCubeListener(cubeEventListener)
		mutationApi = null
		cube.set(false)
		noOverflow.set(false)

		DI.remove(container)
	})

	beforeUpdate(async () => {
		changed.delta = delta !== previous.delta;
		previous.delta = delta;
		if (!changed.delta
			|| !vote) {
			return
		}

		const logic = await container.get(POLL_MAIN_LOGIC)

		if (logic.votesEqual(currentVote, vote)) {
			return
		}

		let lastVote = currentVote
		currentVote  = logic.copyVoteToTween(vote, lastVote)

		// Not needed, current vote is always set
		// if (!lastVote) {
		// 	this.set({currentVote})
		// 	return
		// }

		// if (current.currentVoteInterval) {
		// 	clearInterval(current.currentVoteInterval)
		// }

		logic.scheduleFactorTweens(
			lastVote,
			currentVote,
			vote.changeMillis ? vote.changeMillis : 400,
		).subscribe(
			newVote => {
				tweenDelta = tweenDelta + 1
			})
	})

	function f(func) {
		return func()
	}

	function alter($routeParams) {
		let mode = $routeParams.mode
		if (mode === 'vote') {
			mode = 'alter'
		}
		// confirmAlter.set(false)
		navigateToPage(POLL_FORM, {
			...$routeParams,
			mode
		})
	}

	// confirmAlter(event) {
	// 	confirmAlter.set(true)
	// },
	// doNotAlter() {
	// 	confirmAlter.set(false)
	// },
	function build($user) {
		save($user)
	}

	function checkBuild(
		poll
	) {
		if (!poll.ageSuitability && poll.ageSuitability !== 0) {
			ageSuitabilityVisible = true
			saving                = true
			return
		}
		setAction('confirm')
	}

	function closeConfirm() {
		// setCubeAdjustment(true).then(() => {
		setAction('none')
		// })
	}

	function confirmVote() {
		setCubeAdjustment(false).then(() => {
			setAction('vote')
		})
	}

	function goToReleasePlan() {
		navigateToPage(RELEASE_PLAN)
	}

	function goToVariations() {
		const {pollId, pollVariationId} = get(routeParams)
		navigateToPage(VARIATION_LIST, {pollId, pollVariationId})
	}

	function onAgeSuitabilitySave(
		saving
	) {
		if (saving) {
			setTimeout(() => {
				setAction('confirm')
			})
		}
		ageSuitabilityVisible = false
		delta                 = delta + 1
	}

	function setAction(
		newAction
	) {
		action = newAction
		error  = ''
	}

	function pollAltered(
		newCubeSides
	) {
		if (!newCubeSides) {
			newCubeSides = cubeSides
		}
		cubeSides = newCubeSides
		delta     = delta + 1
		moveDelta = moveDelta + 1
	}

	function pollAdjusted() {
		pollAltered()
		container.get(MUTATION_API).then(
			mutationApi => {
				mutationApi.recompute()
			})
	}

	function move(
		event
	) {
		percentMode = true
		container.get(MUTATION_API).then(
			mutationApi => {
				mutationApi.move(
					event.detail.factorNumber,
					event.detail.outcome,
					event.detail.percentChange
				)
			})
	}

	function moveToValue(
		event
	) {
		percentMode = true
		container.get(MUTATION_API).then(
			mutationApi => {
				mutationApi.moveToValue(event.detail.factorNumber, event.detail.value)
			})
	}

	function showAgeSuitability(
		newAgeSuitabilityVisible
	) {
		ageSuitabilityVisible = newAgeSuitabilityVisible
	}

	function showOutcomes(
		newOutcomesVisible
	) {
		outcomesVisible = newOutcomesVisible
	}

	function togglePercentPicker() {
		let newPercentMode = !percentMode
		setCubeAdjustment(!percentMode).then(() => {
			if (newPercentMode) {
				cubeView = true
			}
			percentMode = newPercentMode
		})
	}

	function togglePositionMode() {
		positionMode = !positionMode
		cubeView     = positionMode ? true : cubeView
	}

	function toggleSurface(
		factorNumber
	) {
		let originalMoveType = moveType
		moveType = 'toggle'
		setTimeout(() => {
			container.get(MUTATION_API).then(
				mutationApi => {
					mutationApi.toggleSurface(factorNumber)
					delta = delta + 1
					setTimeout(() => {
						moveType = originalMoveType
					}, 500)
				})
		}, 1)
	}

	function toggleView(
		currentlyInCubeView,
		forCubeView,
	) {
		doToggleView(currentlyInCubeView, forCubeView).then()
	}

	function toPollForm(
		$routeParams
	) {
		navigateToPage(POLL_FORM, $routeParams)
	}

	function submitVote() {
		confirm = false
		// doSubmitVote()
	}

	async function setCubeAdjustment(
		enableCubeAdjustment
	) {
		const [cubeEventListener, cubeLogic] =
			      await container.get(CUBE_EVENT_LISTENER, CUBE_LOGIC)

		cubeLogic.setCubeAdjustment(cubeEventListener, enableCubeAdjustment)
	}

	async function doToggleView(
		currentlyInCubeView,
		forCubeView
	) {

		const cubeEventListener = await container.get(CUBE_EVENT_LISTENER)

		if (forCubeView) {
			if (!currentlyInCubeView) {
				// Animate Factor Rankings out of the view
				beforeCubeView = true

				cubeEventListener.resumeInteraction()

				cubeView = forCubeView
				setTimeout(() => {
					beforeCubeView = false
				}, 5)
			}
		} else {
			if (currentlyInCubeView) {
				// Animate Factor Rankings out of the view
				beforeCardView = true

				cubeEventListener.suspendInteraction()

				cubeView = forCubeView
				setTimeout(() => {
					beforeCardView = false
				}, 701)
			}
		}
	}

	function resize() {
		setResizeCllBck((
			portalHeight,
			windowWidth
		) => {
			const figureHeight = portalHeight * 0.55 + 95

			const cubeAreaLeastFactor = windowWidth < figureHeight
				? windowWidth
				: figureHeight

			zoomFactor = (Math.sqrt(cubeAreaLeastFactor) * 3) / 100
		})
	}

	async function save(
		$user
	) {
		savingMessage     = 'Saving ...'
		const pollManager = await container.get(POLL_MANAGER)
		try {
			await pollManager.saveCurrentVariation($user)
			confirm = false
			navigateToPage(POLL_LIST)
		} catch (theError) {
			error         = theError
			savingMessage = 'Error'
		}
	}

	async function doSubmitVote() {
		// confirm = false
		const voteDao = await container.get(VOTE_DAO)
		try {
			await voteDao.save(poll)
			confirm = false
			navigateToPage(POLL_LIST)
		} catch (theError) {
			error         = theError
			savingMessage = 'Error'
		}
	}

</script>

<style>
	article {
		max-width: 420px;
	}

	@media (min-width: 321px) {
		section.card {
			top: 145px !important;
		}

		section.cube {
			top: 56% !important;
		}
	}

	#viewport {
		height: 100%;
		perspective: 900px; /* FIXME: make the cube more approachable 1500px ~ 2500px;*/
		/* 1500 increases range from 11% to 9%, 2500 increases to 6% */
		perspective-origin: 50% 160px; /* 670px; */
		/*transform: scale(0.75,0.75);*/
		width: 100%;
	}

	div[slot="cancel"] {
		text-align: center;
	}

	section.card {
		left: 0px;
		position: absolute;
		top: 110px;
		width: 100%;
	}

	section.cube {
		left: 50%;
		margin-right: -50%;
		position: absolute;
		top: 56%;
		transform: translate(-50%, -50%);
	}

	/*	.ranking {
			top: 275px;
		}*/

</style>

<article>
	<!-- for toggling the view -->
	<!--
	<nav>
	</nav>
	should clicking on non-buttons cause the view to change - probably not,
	the interface should be simple and orthogonal, only the buttons toggle,
	not free floating icons.

	And all buttons are always behind the Fab

	Fab has all of the actions related to that screen, system wide
	actions are in ?top menu?

	for example for the poll screens Fab shows the:

	vertical - on screen actions
	horizontal - related views

	?but what if you have to navigate to an unrelated view?  some views
	are accessible from anywhere, like:
		create new poll
		poll listings (there is only one with filters)
		favorites (like bookmarks of saved listing filters) - post beta launch
		about (mission statement and the team)

	so a top level menu seems appropriate, BUT we can hide it until
	you click on the Fab.  But in that case, where does the poll title
	go - probably just across the screen on the top, without a menu.
	That leaves more space for the title (of poll or just screen,
	if needed)

	how important are animations

	for ranking view it is important that:

		using it is intuitive
		the information on it ties in with the rest the cube and the percentages

	general UI automation:

		while it is very important it is not essential for the initial launch

	to a certain degree transition between the default ranking screen and the
	cube screen is important, we should tie in the main ranking with the miniature
	cube speaks for itself

	clicking:

	All clickable buttons are round, so the individual dimension buttons are
	also round.  To make them toggle up and down images are used (for lack of
	a better known way).

	10/6/2019 - The miniatures are also clickable to give the users a quick access
	point.  They do not have equivalents in the Fab so the interface is orthogonal.
	The chart miniature brings up the percentage view.
	-->
<!--			moveType="{moveType}"-->
<!--			positionMode="{positionMode}"-->
<!--			verticalLayout="{verticalLayout}"-->
	<VoteComponentGraph
			cubeSides="{cubeSides}"
			cubeView="{effectiveCubeView}"
			delta="{delta}"
			on:toggleView="{() => toggleView(cubeView, !cubeView)}"
			on:togglePercent="{togglePercentPicker}"
			on:toggleChart="{() => showOutcomes(true)}"
			poll="{poll}"
			tweenDelta="{tweenDelta}"
			vote="{vote}"
			voteFactors="{currentVoteFactors}"
	></VoteComponentGraph>
	<!-- the main view -->
	<!--			class:ranking="!effectiveCubeView"-->
	<section
			class:cube="{effectiveCubeView}"
			class:card="{!effectiveCubeView}"
			colspan="4"
	>
		<main>
			<section
					id="viewport"
					class:leftViewport="{horizontalLayout}"
					style="{transformScale}"
			>
				{#if effectiveCubeView}
<!--						cubeView="{effectiveCubeView}"-->
<!--						delta="{delta}"-->
<!--						moveType="{moveType}"-->
				<DetailedCube
						cubeSideMap="{cubeSideMap}"
						cubeSides="{cubeSides}"
						on:cubeAltered="{pollAltered}"
						poll="{poll}"
						positionMode="{positionMode}"
						verticalLayout="{verticalLayout}"
						vote="{vote}"
				></DetailedCube>
				{:else}
<!--						verticalLayout="{verticalLayout}"-->
				<FactorRanking
						delta="{delta}"
						on:rankingAdjusted="{pollAdjusted}"
						poll="{poll}"
						vote="{vote}"
						voteFactors="{voteFactors}"
				></FactorRanking>
				{/if}
			</section>
		</main>
	</section>
	{#if vote}
	{#if percentMode}
	<PercentPicker
			delta="{delta}"
			on:close="{togglePercentPicker}"
			on:move="{move}"
			on:moveToValue="{moveToValue}"
			poll="{poll}"
			vote="{vote}"
			voteFactors="{voteFactors}"
	></PercentPicker>
	{/if}
	<PollFab
			on:ageSuitability="{() => showAgeSuitability(true)}"
			on:build="{() => checkBuild(poll)}"
			on:confirmVote="{() => confirmVote()}"
			on:edit="{() => alter($routeParams)}"
			on:manuallyOverwrite="{togglePercentPicker}"
			on:outcomes="{() => showOutcomes(true)}"
			on:opinions="{() => setAction('opinions')}"
			on:position="{togglePositionMode}"
			on:rankings="{() => setAction('rankings')}"
			on:stats="{() => setAction('stats')}"
			on:variations="{goToVariations}"
			mode="{$mode}"
	>
	</PollFab>
	{#if ageSuitabilityVisible}
	<AgeSuitability
			saving="{saving}"
			on:cancel="{() => showAgeSuitability(false)}"
			on:save="{() => onAgeSuitabilitySave(saving)}"
			poll="{poll}"
	></AgeSuitability>
	{/if}
	{#if outcomesVisible}
	<ActionPopover
			customCancel="{true}"
			infoOnly="true"
	>
		<div slot="header">
			{poll.name}
		</div>
		<div slot="content">
			<Outcomes
				final="{loaded}"
				poll="{poll}"
				>
			</Outcomes>
		</div>
		<div slot="cancel">
			<OutcomeButton
					on:click="{() => showOutcomes(false)}"
			></OutcomeButton>
		</div>
	</ActionPopover>
	{/if}
	{#if action === 'save'}
	<ActionPopover
			on:cancel="{closeConfirm}"
			viewOnly="{!error}"
			infoOnly="{error}"
	>
		<div slot="header">
			{savingMessage}
		</div>
		<div slot="content">
			{error}
		</div>
	</ActionPopover>
	{:else if ['vote', 'stats', 'rankings', 'opinions'].indexOf(action) > -1}
	<!--			contentClass="smallPadding"-->
	<ActionPopover
			customCancel="{true}"
			on:cancel="{closeConfirm}"
	>
		<div slot="header">
			{#if action === 'opinions'}
			Almost Here - Poll Opinions
			{:else if action === 'vote'}
			Coming soon - Confirm Vote
			{:else if action === 'rankings'}
			Coming soon - Poll Rankings
			{:else if action === 'stats'}
			Coming in Beta - Poll Statistics
			{/if}
		</div>
		<div slot="content">
			<!--
			<div>
				{poll.name}
			</div>
			-->
			<!--
			<VoteComponentSummary
					bind:delta
					bind:poll
					verticalLayout="Y"
					bind:vote
					maxBarSize="{120}"
					mode="confirm"
					voteFactors="{voteFactors}"
			></VoteComponentSummary>
			-->
			<br>
			<h3>
				{#if action === 'opinions'}
				Ability to post your opinions about Polls is coming next!
				{:else if action === 'vote'}
				Voting is scheduled to be released at the end of Alpha testing period.
				{:else if action === 'rankings'}
				We'll start providing basic Poll Rankings at the end of Alpha testing period. More
				will
				be added in subsequent releases.
				{:else if action === 'stats'}
				Basic Poll Statistics will be available in Beta release. More advanced stats
				will be provided in version 1.
				{/if}
				<br>
				<br>
				Please see
				the <a
					href="/releasePlan"
			>Release Plan</a> for details.
			</h3>
			<br>
		</div>
		<!--
		<div slot="actions">
			<VoteButton
					on:select="submitVote()"
			></VoteButton>
		</div>
-->
		<div slot="cancel">
			<CancelButton
					on:click="{closeConfirm}"
			></CancelButton>
		</div>
	</ActionPopover>
	{:else if action === 'confirm'}
	<ActionPopover
			on:cancel="{closeConfirm}"
	>
		<div slot="header">
			Please Confirm
		</div>
		<div slot="content">
			Create the "{poll.name}" poll?
			<br>
			Theme: {poll.theme.name}
			<br>
			Age Suitability: {poll.ageSuitability}+
		</div>
		<div slot="actions">
			<BuildButton
					on:click="{() => build($user)}"
			></BuildButton>
		</div>
	</ActionPopover>
	{/if}
	{/if}
	<!--	{#if $confirmAlter}
		<ActionPopover
				on:cancel="doNotAlter()"
		>
			<div slot="header">
				Alter Poll
			</div>
			<div slot="content">
				Alter this poll?
			</div>
			<div slot="actions">
				<AlterButton
						on:click="alter($routeParams)"
				></AlterButton>
			</div>
		</ActionPopover>
		{/if}-->
</article>
