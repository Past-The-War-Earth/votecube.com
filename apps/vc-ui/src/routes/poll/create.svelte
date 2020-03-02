<script>
	import {readIdAndCreateEsRecord} from '../../libs/shared/deserializer'

	let title    = ''
	let contents = ''

	function onTitleInput(event) {
		title = event.target.value
	}

	function onValueInput(event) {
		contents = event.target.value
	}

	function createPoll() {
		const poll = {
			contents,
			title,
			userId: 1,
		}

		const xhr = new XMLHttpRequest()
		xhr.open('PUT', '/add/poll/1/1', true)
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
					/*
                    console.log('')
                    console.log(`id:       ${record.id}`)
                    console.log(`createEs: ${record.createEs}`)
                    let byteOutput = ''
                    for (let i = 0; i < bytes.byteLength; i++) {
                        byteOutput += `${bytes[i]} `
                    }
                    console.log(byteOutput)
                    */
				}
			}
		}

		xhr.send(JSON.stringify(poll))
	}
</script>

<svelte:head>
    <title>Create New Poll</title>
</svelte:head>


<h1>Create New Poll</h1>
Poll Name:
<br>
<input
        type="text"
        maxlength="100"
        on:input="{onTitleInput}"
        value="{title}"
>
<br>
Contents:
<br>
<textarea
        maxlength="2000"
        on:input="{onValueInput}"
        value="{contents}"
></textarea>

<br>
<button
        on:click="{createPoll}"
>Create
</button>
