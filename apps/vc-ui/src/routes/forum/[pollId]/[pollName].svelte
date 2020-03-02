<script context="module">
	import {readIdAndCreateEsRecord} from '../../../libs/shared/deserializer'

	export async function preload({params, query}) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		console.log(`poll id: ${params.pollId}`)
		console.log(`poll name: ${params.pollName}`)

		const now            = new Date()
		const todayStart     = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
		const yesterdayStart = new Date(todayStart.getTime())
		yesterdayStart.setDate(yesterdayStart.getDate() - 1)
		const todayStartSecond     = yesterdayDate.getTime() / 1000
		const yesterdayStartSecond = yesterdayDate.getTime() / 1000

		const todayDate     = todayStart.toISOString().split('T')[0]
		const yesterdayDate = yesterdayStart.toISOString().split('T')[0]

		let pollId              = parseInt(params.pollId, 36)
		const response          = await Promise.all([
			this.fetch(`http://localhost:8553/get/thread/${pollId}`),
			this.fetch(`http://localhost:8553/get/opinionIds/${pollId}/${todayDate}/0`)
		])
		const threadOpinionText = await response[0].text()
		const threadOpinions    = JSON.parse(`[${threadOpinionText}]`)
		for (const opinion of threadOpinions) {

		}

		const newOpinionIdsArrayBuffer = await response[1].arrayBuffer()
		const opinionIds               = []
		let newOpinionPromises         = []

		// If there are opinions
		if (newOpinionIdsArrayBuffer) {
			const uint8Array    = new Uint8Array(newOpinionIdsArrayBuffer)
			let haveMoreRecords = uint8Array.byteLength
			let currentIndex    = 0
			while (haveMoreRecords) {
				const {record, nextRecordIndex} = readIdAndCreateEsRecord(
					uint8Array,
					currentIndex
				)
				newOpinionPromises.push(this.fetch(`get/opinion/${pollId}/${todayDate}/${record.createEs}/${record.id}`))

				haveMoreRecords = nextRecordIndex > uint8Array.byteLength
				currentIndex    = nextRecordIndex
			}
		}

		for (const opinionId of opinionIds) {
			// TODO: compute the DATE based on createEs
		}

		if (newOpinionPromises.length) {
			const opinionResponses = await Promise.all(newOpinionPromises)

			for (const opinionResponse of opinionResponses) {
				let opinionData = opinionResponse.json()
			}
		}

		// from node_modules/sapper/dist/export.js
		// .arrayBuffer()
		// .blob()
		// .buffer() // This is the raw type

		if (res.status === 200) {
			return {post: data}
		} else {
			this.error(res.status, data.message)
		}
	}
</script>

<script>
	export let post

	let value

	function onInput(event) {
		value = event.target.value
	}

	function addOpinion() {
		console.log('Hello addOpinion')
		console.log(`Value: ${value}`)
	}
</script>

<style>
    .content :global(h2) {
        font-size: 1.4em;
        font-weight: 500;
    }

    .content :global(pre) {
        background-color: #f9f9f9;
        box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
        padding: 0.5em;
        border-radius: 2px;
        overflow-x: auto;
    }

    .content :global(pre) :global(code) {
        background-color: transparent;
        padding: 0;
    }

    .content :global(ul) {
        line-height: 1.5;
    }

    .content :global(li) {
        margin: 0 0 0.5em 0;
    }
</style>

<svelte:head>
    <title>Forum {post.title}</title>
</svelte:head>

<h1>Forum {post.title}</h1>

<div class='content'>
    {@html post.html}
</div>

<br>
Add Opinion:
<br>
<textarea
        maxlength="2000"
        on:input="{onInput}"
        value="{value}"
></textarea>

<br>
<button
        on:click="{addOpinion}"
>Add
</button>
