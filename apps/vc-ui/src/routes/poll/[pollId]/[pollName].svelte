<script context="module">
	export async function preload({params, query}) {
		console.log(`poll id:   ${params.pollId}`)
		console.log(`poll name: ${params.pollName}`)

		let pollId     = parseInt(params.pollId, 36)
		const response = await this.fetch(`/get/poll/${pollId}`)

		if (response.status === 200) {
			const poll = await response.json()
			return {poll}
		} else {
			this.error(response.status, response.text())
		}
	}
</script>

<script>
	export let poll = {
		title: 'hello',
		contents: 'world'
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
