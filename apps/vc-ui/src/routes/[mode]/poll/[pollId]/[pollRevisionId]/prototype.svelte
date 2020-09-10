<script context="module">
	import {retrieveRootOpinions} from '../../../../../libs/shared/dataApi'
	import {readRootOpinionIds}   from '../../../../../libs/shared/deserializer'

	export async function preload(
		{params, query}
	) {
		let pollId = parseInt(params.pollId, 36)

		console.log(`Get poll: /get/poll/${pollId}`)

		const responses            = await Promise.all([
			this.fetch(`/get/poll/${pollId}`),
			this.fetch(`/list/rootOpinions/${pollId}`),
		])
		let pollResponse           = responses[0]
		let rootOpinionIdsResponse = responses[1]

		if (pollResponse.status !== 200) {
			this.error(pollResponse.status, pollResponse.text())
			return
		} else if (rootOpinionIdsResponse.status !== 200) {
			this.error(rootOpinionIdsResponse.status, rootOpinionIdsResponse.text())
			return
		}

		const rootOpinionIds = readRootOpinionIds(await rootOpinionIdsResponse.arrayBuffer())

		let opinionsResult = {
			records: [],
			nextIndex: 0
		}
		if (isSSR()) {
			opinionsResult = await loadRootOpinions(rootOpinionIds, this)
		}

		const poll = await pollResponse.json()
		return {
			nextIndex: opinionsResult.nextIndex,
			// TODO: implement nested opinions
			opinions: opinionsResult.records.map(rootOpinionList => rootOpinionList[0]),
			poll,
			pollId,
			rootOpinionIds
		}
	}

	function isSSR() {
		try {
			window
		} catch (_) {
			return true
		}
		return false
	}

	async function loadRootOpinions(
		rootOpinionIds,
		ctx
	) {
		const opinionsResult = await retrieveRootOpinions(rootOpinionIds, 0, 10, ctx)

		return {
			...opinionsResult,
			rootOpinionIds,
		}
	}
</script>

<script>
	import {stores}                  from '@sapper/app'
	import ProgressiveList           from '@votecube/svelte-progressive-list'
	import {onMount}                 from 'svelte'
	import {readIdAndCreateEsRecord} from '../../../../../libs/shared/deserializer'

	export let moreOpinions   = []
	export let nextIndex      = 0
	export let rootOpinionIds = []
	export let opinions       = []
	export let poll
	export let pollId

	const {preloading} = stores()
	let newOpinion     = ''

	onMount(() => postLoad().then())

	async function postLoad() {
		if (isSSR()) {
			return
		}
		const opinionsResult = await loadRootOpinions(pollId, window)
		rootOpinionIds       = opinionsResult.opinionIds
		// TODO: implement nested opinions
		opinions             = opinionsResult.records.map(rootOpinionList => rootOpinionList[0])
		nextIndex            = opinionsResult.nextIndex
	}

	function onValueInput(event) {
		newOpinion = event.target.value
	}

	function addOpinion() {
		let opinion = {
			text: newOpinion,
			pollId,
            userId: 1,
		}

		const xhr = new XMLHttpRequest()
		xhr.open('PUT', '/add/opinion/1/1', true)
		xhr.responseType = 'arraybuffer'

		xhr.onload = function (_) {
			if (xhr.status === 201) {
				const arrayBuffer = xhr.response // Note: not oReq.responseText
				if (arrayBuffer) {
					const bytes = new Uint8Array(arrayBuffer)

					const {record} = readIdAndCreateEsRecord(
						bytes,
						0
					)
					moreOpinions   = [{
						...opinion,
						...record,
						pollId: poll.id
					}]
				}
			}
		}

		xhr.send(JSON.stringify(opinion))
	}

	function loadMoreOpinions() {
		doLoadMoreOpinions().then()
	}

	async function doLoadMoreOpinions() {
		const results = await retrieveRootOpinions(rootOpinionIds, nextIndex, 10, window, pollId)
		nextIndex     = results.nextIndex
		if (results.records.length) {
			moreOpinions = results.records
		}
	}
</script>

<style>
</style>

<svelte:head>
    <title>Poll {poll.title}</title>
</svelte:head>

<h1>Poll {poll.title}</h1>

<br>
{poll.contents}

<br>
Add Opinion:
<br>
<textarea
        maxlength="2000"
        on:input="{onValueInput}"
        value="{newOpinion}"
></textarea>

<br>
<button
        on:click="{addOpinion}"
>Create
</button>

<br>
<h2>Opinions</h2>
<br>
<div
        style="min-height: 200px; height: calc(100vh - 25em);"
>
    <ProgressiveList
            items="{opinions}"
            additionalItems="{moreOpinions}"
            {preloading}
            let:item
            on:more="{loadMoreOpinions}"
    >
        <p>{item.text}</p>
    </ProgressiveList>
</div>
