export async function retrievePolls(
	ids,
	startingIndex,
	numToRetrieve,
	ctx
) {
	if (startingIndex < 0) {
		return {
			nextIndex: -1,
			records: []
		}
	}
	let dataPromises         = []
	let numRecordsToRetrieve = ids.length - startingIndex > numToRetrieve
		? numToRetrieve
		: ids.length - startingIndex

	for (let i = 0; i < numRecordsToRetrieve; i++) {
		dataPromises.push(ctx.fetch(`/get/poll/${ids[startingIndex + i]}`))
	}

	if (!dataPromises.length) {
		return {
			nextIndex: -1,
			records: []
		}
	}
	const responses = await Promise.all(dataPromises)

	const dataRequests = []
	for (const response of responses) {
		dataRequests.push(response.json())
	}

	const records = await Promise.all(dataRequests)
	let nextIndex = records.length + startingIndex
	if (nextIndex >= ids.length) {
		nextIndex = -1
	}

	return {
		nextIndex,
		records
	}
}
