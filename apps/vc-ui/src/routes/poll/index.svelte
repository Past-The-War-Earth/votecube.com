<script context="module">
	import {retrievePolls} from '../../shared/dataApi'
	import {readIdRecords} from '../../shared/deserializer'

	export async function preload({params, query}) {
		const response = await this.fetch(`/list/polls/recent`)

		if (response.status === 200) {
			const pollIds = readIdRecords(await response.arrayBuffer())

			const {nextIndex, records} = await retrievePolls(pollIds, 0, 10, this)

			return {
				nextIndex,
				pollIds,
				polls: records
			}
		} else {
			this.error(response.status, response.text())
		}
	}
</script>

<script>
	import ProgressiveList from '@votecube/svelte-progressive-list'
	import {stores}        from '@sapper/app'

	const {preloading} = stores()

	export let nextIndex        = 0
	export let morePolls        = []
	export let polls            = []
	export let pollIds          = []

	function loadMorePolls() {
		doLoadMorePolls().then()
	}

	async function doLoadMorePolls() {
		const results = await retrievePolls(pollIds, nextIndex, 10, window)
		nextIndex     = results.nextIndex
		if (results.records.length) {
			morePolls = results.records
		}
	}
</script>
<style>
    .item {
        min-height: 220px;
        max-height: 200px;
    }
</style>

<svelte:head>
    <title>Polls</title>
</svelte:head>

<h1>Polls</h1>

<a rel='prefetch' href='poll/create'>Create New Poll</a>

<div
        style="min-height: 200px; height: calc(100vh - 13em);"
>
    <ProgressiveList
            items="{polls}"
            additionalItems="{morePolls}"
            {preloading}
            let:item
            on:more="{loadMorePolls}"
    >
        <div
                class="item"
        >
            <header>{item.title}</header>
            <p>{item.contents}</p>
        </div>
    </ProgressiveList>
</div>
