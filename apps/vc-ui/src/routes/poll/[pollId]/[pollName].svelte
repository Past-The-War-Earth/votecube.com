<script context="module">
	import {retrieveOpinions}         from '../../../shared/dataApi'
	import {readIdAndCreateEsRecords} from '../../../shared/deserializer'

	export async function preload(
		{params, query}
	) {
		let pollId     = parseInt(params.pollId, 36)
		const response = await this.fetch(`/get/poll/${pollId}`)

		let opinionsResult = {
			records: [],
			nextIndex: 0
		}
		if (isSSR()) {
			opinionsResult = await loadOpinions(pollId, this)
		}

		if (response.status === 200) {
			const poll = await response.json()
			return {
				nextIndex: opinionsResult.nextIndex,
				opinions: opinionsResult.records,
				poll,
				pollId
			}
		} else {
			this.error(response.status, response.text())
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

	async function loadOpinions(
		pollId,
		ctx
	) {
		const threadData   = await Promise.all([
			ctx.fetch(`/get/thread/${pollId}`),
			ctx.fetch(`/list/opinions/${pollId}/0/0`)
		])
		let threadFragment = await threadData[0].text()

		let previousOpinions = []
		if (threadFragment.length) {
			previousOpinions = JSON.parse(`[${threadFragment}]`)
		}

		const opinionIds = readIdAndCreateEsRecords(await threadData[1].arrayBuffer())

		const opinionsResult = await retrieveOpinions(opinionIds, 0, 10, ctx, pollId)

		// for (const opinion of opinions.records) {
		// 	console.log(opinion)
		// }
		return {
			nextIndex: opinionsResult.nextIndex,
			opinionIds,
			records: [...previousOpinions, ...opinionsResult.records]
		}
	}
</script>

<script>
	import {stores}                  from '@sapper/app'
	import ProgressiveList           from '@votecube/svelte-progressive-list'
	import {onMount}                 from 'svelte'
	import {readIdAndCreateEsRecord} from '../../../shared/deserializer'

	export let moreOpinions = []
	export let nextIndex    = 0
	export let opinionIds   = []
	export let opinions     = []
	export let poll
	export let pollId

	const {preloading} = stores()
	let newOpinion     = ''

	onMount(() => postLoad().then())

	async function postLoad() {
		if (isSSR()) {
			return
		}
		const opinionsResult = await loadOpinions(pollId, window)
		opinionIds           = opinionsResult.opinionIds
		opinions             = opinionsResult.records
		nextIndex            = opinionsResult.nextIndex
	}

	function onValueInput(event) {
		newOpinion = event.target.value
	}

	function addOpinion() {
		let opinion = {
			text: newOpinion
		}

		const xhr = new XMLHttpRequest()
		xhr.open('PUT', '/put/opinion/' + poll.id, true)
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
		const results = await retrieveOpinions(opinionIds, nextIndex, 10, window, pollId)
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
