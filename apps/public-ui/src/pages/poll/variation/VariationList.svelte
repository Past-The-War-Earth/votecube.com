<script>
	import {DI}              from '@airport/di'
	import {
		LOGIC_UTILS,
		navigateToPage,
		pageTitle,
		POLL_MAIN,
		POLL_MANAGER,
		RELEASE_PLAN,
		routeParams,
		text
	}                        from '@votecube/public-logic'
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
	import VariationListFab
	                         from '../../../components/poll/variation/VariationListFab.svelte'
	import * as forms        from '../../../form/forms'
	import {loadForms}       from '../../../libs/forms'
	import VariationListItem from './VariationListItem.svelte'

	let action
	let childVariations
	let container
	let currentVariation
	let delta      = 0
	let error      = ''
	let form
	let isOriginal = true
	let isValid    = false
	let logicUtils
	let mode       = 'factors'
	let navList
	let switching
	let switchedToKey

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
		container = DI.ui('VariationList')

		const {pollKey, pollVariationKey} = get(routeParams)
		let results                       = await getListingsAndOther(
			pollKey,
			pollVariationKey,
			loadForms(),
			container
		)

		currentVariation = results[0]
		childVariations  = results[1]
		let formFactory  = results[2]

		form = formFactory.group('List', {
			search: formFactory.field([])
		}, [], get(text).UI.Poll)


		navList = {
			direction: 0,
			isTarget: true,
			previous: null,
			variation: currentVariation,
		}

		logicUtils = await container.get(LOGIC_UTILS)

		forms.ensureForm(form, formHandle)

		pageTitle.set('Poll Variations')
	})

	onDestroy(() => {
		forms.clearForm(form)
	})

	function switchToClasses(
		switching,
		switchedToKey,
		currentVariation
	) {
		if (!switching) {
			return ''
		}
		const switchedToItem = switchedToKey === currentVariation.key
		if (switching === 1) {
			return switchedToItem ? '' : 'closing'
		} else if (switching === 2) {
			return switchedToItem ? '' : 'closed'
		}
	}

	function goTo(
		pollKey,
		pollVariationKey
	) {
		// FIXME: need a new mode, something like 'view' - since you can't vote on a variation
		navigateToPage(POLL_MAIN, {
			mode: 'vote',
			pollKey,
			pollVariationKey,
		})
	}

	function goToReleasePlan() {
		navigateToPage(RELEASE_PLAN)
	}

	function moveDownHierarchy(
		childVariations,
		moveToVariation,
		navList
	) {
		doMoveDown(moveToVariation, navList, childVariations.length)
	}

	function moveUpHierarchy(
		childVariations,
		moveToVariation,
		navList,
	) {
		doMoveUp(moveToVariation, navList, childVariations.length)
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
		pollKey,
		pollVariationKey,
		otherPromise,
		container
	) {
		const pollManager = await container.get(POLL_MANAGER)
		let [
			    currentVariation,
			    childVariations,
			    otherResult
		    ]             = await Promise.all([
			pollManager.getVariationListing(pollKey, pollVariationKey),
			pollManager.getChildVariationListings(pollKey, pollVariationKey),
			otherPromise,
		])

		return [
			currentVariation,
			childVariations,
			otherResult
		]
	}

	function doMoveDown(
		moveToVariation,
		navList,
		numChildren
	) {
		switching     = 1
		switchedToKey = moveToVariation.key

		setTimeout(() => {
			switching = 2
			getDataAndMoveDown(
				moveToVariation,
				navList,
				numChildren
			).then()
		}, 10)
	}

	function doMoveUp(
		moveToVariation,
		navList,
		numChildren
	) {
		switching     = 1
		switchedToKey = moveToVariation.key

		setTimeout(() => {
			switching = 2
			getDataAndMoveUp(
				moveToVariation,
				navList,
				numChildren
			).then()
		}, 10)
	}

	async function getDataAndMoveDown(
		moveToVariation,
		navList,
		numChildren
	) {
		const {
			      currentVariation,
			      childVariations,
		      } = await getSwitchData(
			moveToVariation.pollKey,
			moveToVariation.key,
			numChildren
		)

		if ([0, 1].indexOf(navList.direction) > -1
			&& navList.variation.key !== moveToVariation.key) {
			navList = {
				direction: 1,
				isTarget: false,
				previous: navList,
				variation: moveToVariation,
			}
		} else if (navList.direction === -1) {
			if (navList.variation.key === moveToVariation.key) {
				navList = navList.previous
			} else {
				navList = {
					direction: 1,
					isTarget: false,
					previous: navList,
					variation: moveToVariation,
				}
			}
		}

		finishSwitching(childVariations, currentVariation, navList)
	}

	async function getDataAndMoveUp(
		moveToVariation,
		navList,
		numChildren
	) {
		const {
			      currentVariation,
			      childVariations,
		      } = await getSwitchData(
			moveToVariation.pollKey,
			moveToVariation.parent.key,
			numChildren
		)

		if (navList.direction === -1) {
			navList = {
				direction: -1,
				isTarget: false,
				previous: navList,
				variation: currentVariation,
			}
		} else if (navList.direction === 0
			&& moveToVariation.key !== navList.variation.key) {
			navList = {
				direction: -1,
				isTarget: false,
				previous: navList,
				variation: moveToVariation,
			}
		} else if (navList.direction === 1) {
			navList = navList.previous
		}

		finishSwitching(childVariations, currentVariation, navList)
	}

	async function getSwitchData(
		pollKey,
		key,
		numChildren
	) {
		let [
			    currentVariation,
			    childVariations,
			    _
		    ] = await getListingsAndOther(
			pollKey,
			key,
			new Promise(
				resolve => {
					setTimeout(() => {
						resolve()
					}, numChildren ? 1500 : 0)
				}),
			container
		)

		return {
			currentVariation,
			childVariations,
		}
	}

	function finishSwitching(
		newChildVariations,
		newCurrentVariation,
		newNavList
	) {
		childVariations  = newChildVariations
		currentVariation = newCurrentVariation
		navList          = newNavList

		setTimeout(() => {
			switching = 1
			setTimeout(() => {
				switching = 0
			}, childVariations.length ? 1500 : 0)
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

	.noChildVariations {
		padding: 15px;
		text-align: center;
		width: 100%;
	}

</style>

<article
		transition:fade="{{duration: 700}}"
>
	{#if logicUtils && currentVariation && form}
	<!--
	<form>
		<Text
				field="{form.fields.search}"
		></Text>
	</form>
	-->

	{#if currentVariation.depth - 1}
	<nav>
		<div>
			<RightButton
					styles="transform: rotate(-90deg);"
					on:click="{() => moveUpHierarchy(childVariations, currentVariation, navList)}"
					size="25"
			></RightButton>
		</div>
		<var>
			&nbsp;&nbsp;{currentVariation.depth - 1}
		</var>
	</nav>
	{/if}
	<VariationListItem
			childMode="{false}"
			classes="{switchToClasses(switching, switchedToKey, currentVariation)}"
			logicUtils="{logicUtils}"
			mode="{mode}"
			navList="{navList}"
			on:click="{() => goTo(currentVariation.pollKey, currentVariation.key)}"
			variation="{currentVariation}"
	></VariationListItem>
	<div
			class="divider"
	></div>
	{#each childVariations as variation}
	<VariationListItem
			classes="{switchToClasses(switching, switchedToKey, variation)}"
			logicUtils="{logicUtils}"
			mode="{mode}"
			navList="{navList}"
			on:moveDownHierarchy="{() => moveDownHierarchy(childVariations, variation, navList)}"
			on:click="{() => goTo(variation.pollKey, variation.key)}"
			variation="{variation}"
	></VariationListItem>
	{/each}
	{#if !childVariations.length}
	<div
			class="noChildVariations"
	>
		No child variations exist yet.
	</div>
	{/if}
	<VariationListFab
			on:factors="{showFactors}"
			on:sort="{() => setAction('sort')}"
			on:filter="{() => setAction('filter')}"
			on:outcomes="{showOutcomes}"
	></VariationListFab>
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
