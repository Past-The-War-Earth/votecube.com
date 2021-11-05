<script>
	import {DI}              from '@airport/di'
	import {
		LOGIC_UTILS,
		navigateToPage,
		pageTitle,
		SITUATION_MAIN,
		SITUATION_MANAGER,
		RELEASE_PLAN,
		routeParams,
		text
	}                        from '@votecube/vc-logic'
	import {
		onDestroy,
		onMount
	}                        from 'svelte'
	import {get}             from 'svelte/store'
	import {fade}            from 'svelte/transition'
	import CancelButton      from '../../../common/control/button/CancelButton.svelte'
	import RightButton       from '../../../common/control/button/RightButton.svelte'
	// import VirtualList from '@sveltejs/svelte-virtual-list';
	import ActionPopover     from '../../../common/shell/ActionPopover.svelte'
	import RevisionListFab
	                         from '../../../components/poll/revision/RevisionListFab.svelte'
	import * as forms        from '../../../form/forms'
	import {loadForms}       from '../../../libs/forms'
	import RevisionListItem from './RevisionListItem.svelte'

	let action
	let childRevisions
	let container
	let currentRevision
	let delta      = 0
	let error      = ''
	let form
	let isOriginal = true
	let isValid    = false
	let logicUtils
	let mode       = 'factors'
	let navList
	let switching
	let switchedToId

	let formHandle = {
		setDelta(newDelta) {
			delta = newDelta
		},
		setIsValid(newIsValid) {
			isValid = newIsValid
		},
		setIsOriginal(newIsOriginal) {
			isOriginal = newIsOriginal
		}
	}

	onMount(async () => {
		container = DI.ui('RevisionList')

		const {pollId, pollRevisionId} = get(routeParams)
		let results                       = await getListingsAndOther(
			pollId,
			pollRevisionId,
			loadForms(),
			container
		)

		currentRevision = results[0]
		childRevisions  = results[1]
		let formFactory  = results[2]

		form = formFactory.group('List', {
			search: formFactory.field([])
		}, [], get(text).UI.Poll)


		navList = {
			direction: 0,
			isTarget: true,
			previous: null,
			revision: currentRevision,
		}

		logicUtils = await container.get(LOGIC_UTILS)

		forms.ensureForm(form, formHandle)

		pageTitle.set('Poll Revisions')
	})

	onDestroy(() => {
		forms.clearForm(form)
	})

	function switchToClasses(
		switching,
		switchedToId,
		currentRevision
	) {
		if (!switching) {
			return ''
		}
		const switchedToItem = switchedToId === currentRevision.id
		if (switching === 1) {
			return switchedToItem ? '' : 'closing'
		} else if (switching === 2) {
			return switchedToItem ? '' : 'closed'
		}
	}

	function goTo(
			pollId,
			pollRevisionId
	) {
		// FIXME: need a new mode, something like 'view' - since you can't vote on a revision
		navigateToPage(SITUATION_MAIN, {
			mode: 'vote',
			pollId,
			pollRevisionId,
		})
	}

	function goToReleasePlan() {
		navigateToPage(RELEASE_PLAN)
	}

	function moveDownHierarchy(
		childRevisions,
		moveToRevision,
		navList
	) {
		doMoveDown(moveToRevision, navList, childRevisions.length)
	}

	function moveUpHierarchy(
		childRevisions,
		moveToRevision,
		navList,
	) {
		doMoveUp(moveToRevision, navList, childRevisions.length)
	}

	function setAction(
		theAction
	) {
		action = theAction
		error  = ''
	}

	function showFactors() {
		mode = 'factors'
	}

	function showOutcomes() {
		mode = 'outcomes'
	}

	async function getListingsAndOther(
		pollId,
		pollRevisionId,
		otherPromise,
		container
	) {
		const pollManager = await container.get(SITUATION_MANAGER)
		let [
			    currentRevision,
			    childRevisions,
			    otherResult
		    ]             = await Promise.all([
			pollManager.getRevisionListing(pollId, pollRevisionId),
			pollManager.getChildRevisionListings(pollId, pollRevisionId),
			otherPromise,
		])

		return [
			currentRevision,
			childRevisions,
			otherResult
		]
	}

	function doMoveDown(
		moveToRevision,
		navList,
		numChildren
	) {
		switching    = 1
		switchedToId = moveToRevision.id

		setTimeout(() => {
			switching = 2
			getDataAndMoveDown(
				moveToRevision,
				navList,
				numChildren
			).then()
		}, 10)
	}

	function doMoveUp(
		moveToRevision,
		navList,
		numChildren
	) {
		switching    = 1
		switchedToId = moveToRevision.Id

		setTimeout(() => {
			switching = 2
			getDataAndMoveUp(
				moveToRevision,
				navList,
				numChildren
			).then()
		}, 10)
	}

	async function getDataAndMoveDown(
		moveToRevision,
		navList,
		numChildren
	) {
		const {
			      currentRevision,
			      childRevisions,
		      } = await getSwitchData(
			moveToRevision.pollId,
			moveToRevision.id,
			numChildren
		)

		if ([0, 1].indexOf(navList.direction) > -1
			&& navList.revision.id !== moveToRevision.id) {
			navList = {
				direction: 1,
				isTarget: false,
				previous: navList,
				revision: moveToRevision,
			}
		} else if (navList.direction === -1) {
			if (navList.revision.id === moveToRevision.id) {
				navList = navList.previous
			} else {
				navList = {
					direction: 1,
					isTarget: false,
					previous: navList,
					revision: moveToRevision,
				}
			}
		}

		finishSwitching(childRevisions, currentRevision, navList)
	}

	async function getDataAndMoveUp(
		moveToRevision,
		navList,
		numChildren
	) {
		const {
			      currentRevision,
			      childRevisions,
		      } = await getSwitchData(
			moveToRevision.pollId,
			moveToRevision.parent.id,
			numChildren
		)

		if (navList.direction === -1) {
			navList = {
				direction: -1,
				isTarget: false,
				previous: navList,
				revision: currentRevision,
			}
		} else if (navList.direction === 0
			&& moveToRevision.id !== navList.revision.id) {
			navList = {
				direction: -1,
				isTarget: false,
				previous: navList,
				revision: moveToRevision,
			}
		} else if (navList.direction === 1) {
			navList = navList.previous
		}

		finishSwitching(childRevisions, currentRevision, navList)
	}

	async function getSwitchData(
		pollId,
		id,
		numChildren
	) {
		let [
			    currentRevision,
			    childRevisions,
			    _
		    ] = await getListingsAndOther(
			pollId,
			id,
			new Promise(
				resolve => {
					setTimeout(() => {
						resolve()
					}, numChildren ? 1500 : 0)
				}),
			container
		)

		return {
			currentRevision,
			childRevisions,
		}
	}

	function finishSwitching(
		newChildRevisions,
		newCurrentRevision,
		newNavList
	) {
		childRevisions  = newChildRevisions
		currentRevision = newCurrentRevision
		navList          = newNavList

		setTimeout(() => {
			switching = 1
			setTimeout(() => {
				switching = 0
			}, childRevisions.length ? 1500 : 0)
		}, 10)
	}

</script>

<style>
	article {
		height: initial;
		max-width: 420px;
		position: relative;
		width: 100%;
	}

	nav {
		display: flex;
		text-align: center;
		width: 100%;
	}

	nav > div {
		flex-basis: 100%;
		text-align: right;
	}

	nav > var {
		color: black;
		flex-basis: 100%;
		text-align: left;
		line-height: 27px;
		vertical-align: middle;
	}

	.divider {
		height: 3px;
		background-color: black;
		margin: 2px 10px 2px 10px;
		max-width: 100%;
	}

	.noChildRevisions {
		padding: 15px;
		text-align: center;
		width: 100%;
	}

</style>

<article
		transition:fade="{{duration: 700}}"
>
	{#if logicUtils && currentRevision && form}
	<!--
	<form>
		<Text
				field="{form.fields.search}"
		></Text>
	</form>
	-->

	{#if currentRevision.depth - 1}
	<nav>
		<div>
			<RightButton
					styles="transform: rotate(-90deg);"
					on:click="{() => moveUpHierarchy(childRevisions, currentRevision, navList)}"
					size="25"
			></RightButton>
		</div>
		<var>
			&nbsp;&nbsp;{currentRevision.depth - 1}
		</var>
	</nav>
	{/if}
	<RevisionListItem
			childMode="{false}"
			classes="{switchToClasses(switching, switchedToId, currentRevision)}"
			logicUtils="{logicUtils}"
			mode="{mode}"
			navList="{navList}"
			on:click="{() => goTo(currentRevision.pollId, currentRevision.id)}"
			revision="{currentRevision}"
	></RevisionListItem>
	<div
			class="divider"
	></div>
	{#each childRevisions as revision}
	<RevisionListItem
			classes="{switchToClasses(switching, switchedToId, revision)}"
			logicUtils="{logicUtils}"
			mode="{mode}"
			navList="{navList}"
			on:moveDownHierarchy="{() => moveDownHierarchy(childRevisions, revision, navList)}"
			on:click="{() => goTo(revision.pollId, revision.id)}"
			revision="{revision}"
	></RevisionListItem>
	{/each}
	{#if !childRevisions.length}
	<div
			class="noChildRevisions"
	>
		No child revisions exist yet.
	</div>
	{/if}
	<RevisionListFab
			on:factors="{showFactors}"
			on:sort="{() => setAction('sort')}"
			on:filter="{() => setAction('filter')}"
			on:outcomes="{showOutcomes}"
	></RevisionListFab>
	<!--
	<VirtualList items={factors} component={ListItem} />
	-->
	{#if ['filter', 'sort'].indexOf(action) > -1}
	<!--			contentClass="smallPadding"-->
	<ActionPopover
			customCancel="{true}"
			on:cancel="{() => setAction('none')}"
	>
		<div slot="header">
			{#if action === 'filter'}
			Coming soon - Filtering
			{:else if action === 'sort'}
			Coming soon - Sorting
			{/if}
		</div>
		<div slot="content">
			<br>
			<h3>
				{#if action === 'filter'}
				Ability filter Poll results is coming right after Opinions and will be
				released mid-Alpha.
				{:else if action === 'sort'}
				Ability sort Poll results is at the same time as the ability to filter
				and will be released mid-Alpha.
				{/if}
				<br>
				<br>
				Please see the <a href="/releasePlan"
			>Release Plan</a> for details.
			</h3>
			<br>
		</div>
		<!--
		<div slot="actions">
			<VoteButton
					on:select="vote()"
			></VoteButton>
		</div>
	-->
		<div slot="cancel">
			<CancelButton
					on:click="{() => setAction('none')}"
			></CancelButton>
		</div>
	</ActionPopover>
	{/if}

	{/if}
</article>
