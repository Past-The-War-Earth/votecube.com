<script>
	import {DI}        from '@airport/di'
	import {
		LOGIC_UTILS,
		navigateToPage,
		pageTitle,
		SITUATION_MAIN,
		SITUATION_MANAGER,
		text
	}                    from '@votecube/vc-logic'
	import {
		onDestroy,
		onMount
	}                    from 'svelte'
	import {get}         from 'svelte/store'
	import {fade}        from 'svelte/transition'
	import CancelButton  from '../../../common/control/button/CancelButton.svelte'
	import AutoComplete  from '../../../common/field/AutoComplete.svelte'
	// import VirtualList from '@sveltejs/svelte-virtual-list';
	import ActionPopover from '../../../common/shell/ActionPopover.svelte'
	import PollListFab   from '../../../components/poll/PollListFab.svelte'
	import * as forms    from '../../../form/forms'
	import {loadForms}   from '../../../libs/forms'
	import PollListItem  from './PollListItem.svelte'

	let action
	let container
	let delta
	let form
	let isOriginal
	let isValid
	let load = new Promise((resolve) => {
		setTimeout(() => {
			resolve(initPage())
		}, 1)
	})
	let logicUtils
	let mode = 'factors'
	let situations

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
		container                          = DI.ui('SituationList')
		logicUtils = await container.get(LOGIC_UTILS)
	})

	onDestroy(() => {
		forms.clearForm(form)
		DI.remove(container)
	})

	function getError(
		error
	) {
		console.log(error)

		return error
	}

	function goTo(
			pollId,
			pollRevisionId
	) {
		navigateToPage(SITUATION_MAIN, {
			mode: 'vote',
			pollId,
			pollRevisionId,
		})
	}

	function setAction(
		theAction
	) {
		action = theAction
	}

	function showFactors() {
		mode = 'factors'
	}

	function showOutcomes() {
		mode = 'outcomes'
	}

	async function initPage() {
		const situationManager = await container.get(SITUATION_MANAGER)
		const [
			      formFactory,
			      originalPolls
		      ]                            = await Promise.all([
			loadForms(),
			findSituations(null, situationManager)
		])
		situations                              = originalPolls


		const category = formFactory.options([], [{
			id: 1,
			text: 'Politics'
		}, {
			id: 2,
			text: 'Culture'
		}, {
			id: 3,
			text: 'Technology'
		}, {
			id: 4,
			text: 'Space'
		}, {
			id: 5,
			text: 'Security'
		}])

		category.onChange((aCategory) => {
			findSituations(aCategory, situationManager).then(
				theSituations => {
					situations = theSituations
				})
		})

		form = formFactory.group('List', {
			category
		}, [], get(text).UI.Poll)

		forms.ensureForm(form, formHandle)

		pageTitle.set('Situations')
	}

	async function findSituations(
		category,
		situationManager
	) {
		if (!category) {
			return situationManager.getAllSituations()
		} else {
			return situationManager.getSituationsForCategory(category)
		}
	}
</script>

<style>

	article {
		height: initial;
		position: relative;
		max-width: 420px;
		width: 100%;
	}

	table {
		width: 100%;
	}

</style>
{#await load}
<!-- nothing to show, yet -->
{:then}
<article
		transition:fade="{{duration: 700}}"
>
	{#if form}
	<form>
		<AutoComplete
				field="{form.fields.category}"
		></AutoComplete>
	</form>
	<table>
		{#each situations as situation}
		<PollListItem
				logicUtils="{logicUtils}"
				mode="{mode}"
				on:click="{() => goTo(situation.id, situation.rootRevisionId)}"
				poll="{situation}"
		></PollListItem>
		{/each}
	</table>
	<PollListFab
			on:factors="{showFactors}"
			on:sort="{() => setAction('sort')}"
			on:filter="{() => setAction('filter')}"
			on:outcomes="{showOutcomes}"
	></PollListFab>
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
				Please see the <a
					href="/releasePlan"
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
{:catch error}
{getError(error)}
{/await}
