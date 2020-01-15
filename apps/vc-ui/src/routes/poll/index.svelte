<script context="module">
	import {readIdPairRecord} from '../../shared/deserializer'

	export async function preload({params, query}) {
		const response = await this.fetch(`../list/polls/recent`)

		if (response.status === 200) {
			const pollIdsArrayBuffer = await response.arrayBuffer()

			let polls   = []
			let pollIds = []

			let numPollsToRetrieve = 10
			let pollPromises       = []

			// If there are polls
			if (pollIdsArrayBuffer) {
				const uint8Array    = new Uint8Array(pollIdsArrayBuffer)
				let haveMoreRecords = uint8Array.byteLength
				let currentIndex    = 0
				while (haveMoreRecords) {
					const {
						      id1,
						      id2,
						      nextRecordIndex
					      } = readIdPairRecord(
						uint8Array,
						currentIndex
					)
					pollIds.push(id1)
					if (numPollsToRetrieve) {
						numPollsToRetrieve--
						pollPromises.push(this.fetch(`../get/poll/${id1}`))
					}
					if (id2) {
						pollIds.push(id2)
						if (numPollsToRetrieve) {
							numPollsToRetrieve--
							pollPromises.push(this.fetch(`../get/poll/${id2}`))
						}
					}

					haveMoreRecords = nextRecordIndex < uint8Array.byteLength
					currentIndex    = nextRecordIndex
				}

				if (pollPromises.length) {
					const pollResponses = await Promise.all(pollPromises)

					for (const pollResponse of pollResponses) {
						polls.push(await pollResponse.json())
					}
				}
			}

			console.log(polls)

			return {
				pollIds,
				polls
			}
		} else {
			console.log('error')
			this.error(response.status, response.text())
		}
	}

</script>

<script>
	import ProgressiveList from '@votecube/svelte-progressive-list'

	export let polls    = []
	export let pollIds  = []
	export let stubItem = {
		title: '',
		contents: ''
	}

	function loadMorePolls() {
		console.log('loading more polls...')
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
            {stubItem}
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
