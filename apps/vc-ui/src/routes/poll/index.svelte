<script context="module">
	import {retrievePolls} from '../../libs/shared/dataApi'
	import {readIdRecords} from '../../libs/shared/deserializer'

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

	export let morePolls = []
	export let nextIndex = 0
	export let pollIds   = []
	export let polls     = []

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

	function onItemClick(item) {
		console.log(item)
	}

	function itemLink(item) {
		const pollId   = item.id.toString(36)
		const urlTitle = item.title.toLowerCase().replace(' ', '_').substr(0, 40)
		return `poll/${pollId}/${urlTitle}`
	}
</script>
<style>
    .item {
        display: block;
        max-height: 200px;
        min-height: 220px;
        text-decoration: none;
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
        <a
                class="item"
                href="{itemLink(item)}"
                rel="prefetch"
        >
            <header>{item.title}</header>
            <p>{item.contents}</p>
        </a>
    </ProgressiveList>
</div>
