export async function retrieveOpinions(
	ids,
	startingIndex,
	numToRetrieve,
	ctx,
	pollId
) {
	return await retrieveRecords(
		ids,
		startingIndex,
		numToRetrieve,
		ctx,
		(id) => `/get/opinion/${pollId}/${getDate(id.createEs)}/${id.createEs}/${id.id}`
	)
}

export async function retrievePolls(
	ids,
	startingIndex,
	numToRetrieve,
	ctx
) {
	return await retrieveRecords(
		ids,
		startingIndex,
		numToRetrieve,
		ctx,
		(id) => `/get/poll/${id}`
	)
}

function getDate(
	createEs
) {
	const date = new Date(createEs * 1000)

	return `${date.getUTCFullYear()}${zeroPad(date.getUTCMonth() + 1)}${zeroPad(date.getUTCDate())}`
}

function zeroPad(
	number
) {
	if (number < 10) {
		return `0${number}`
	}
	return `${number}`
}

async function retrieveRecords(
	ids,
	startingIndex,
	numToRetrieve,
	ctx,
	getUrl
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
		let url = getUrl(ids[startingIndex + i])
		// console.log(url)
		dataPromises.push(ctx.fetch(url))
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
