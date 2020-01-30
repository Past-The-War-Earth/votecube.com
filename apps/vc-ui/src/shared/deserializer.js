export function readIdAndCreateEsRecords(
	idAndCreateEsArrayBuffer
) {
	if (!idAndCreateEsArrayBuffer) {
		return []
	}

	const uint8Array    = new Uint8Array(idAndCreateEsArrayBuffer)
	let haveMoreRecords = uint8Array.byteLength
	let currentIndex    = 0

	const records = []

	while (haveMoreRecords) {
		const {
			      record,
			      nextRecordIndex
		      } = readIdAndCreateEsRecord(
			uint8Array,
			currentIndex
		)
		records.push(record)

		haveMoreRecords = nextRecordIndex < uint8Array.byteLength
		currentIndex    = nextRecordIndex
	}

	return records
}

export function readRootOpinionIds(
	rootOpinionIdsArrayBuffer
) {
	if (!rootOpinionIdsArrayBuffer) {
		return []
	}

	const uint8Array    = new Uint8Array(rootOpinionIdsArrayBuffer)
	let haveMoreRecords = uint8Array.byteLength
	let currentIndex    = 0

	let records = []

	while (haveMoreRecords) {
		const {
			      ids,
			      nextRecordIndex
		      } = readRootOpinionIdPair(
			uint8Array,
			currentIndex
		)
		records = records.concat(ids)

		haveMoreRecords = nextRecordIndex < uint8Array.byteLength
		currentIndex    = nextRecordIndex
	}

	return records
}

function readRootOpinionIdPair(
	uint8Array,
	index
) {
	const byteMask = uint8Array[index]

	const ids = []
	let result

	let record1ByteMask = byteMask >> 4
	let record2ByteMask = byteMask % 16
	let have2Records    = record1ByteMask > 0
	if (have2Records) {
		result = readRootOpinionId(
			record1ByteMask,
			uint8Array,
			index
		)
		ids.push(result.record)
		result = readRootOpinionId(
			record2ByteMask,
			uint8Array,
			result.nextRecordIndex
		)
		ids.push(result.record)
	} else {
		result = readRootOpinionId(
			record2ByteMask,
			uint8Array,
			index
		)
		ids.push(result.record)
	}

	return {
		ids,
		nextRecordIndex: result.nextRecordIndex,
	}
}

export function readRootOpinionId(
	byteMask,
	uint8Array,
	index
) {
	const numRootOpinionIdBytes = byteMask % 8 + 1
	const numVersionBytes       = (byteMask >> 3) + 3

	const {
		      nextRecordIndex,
		      num1,
		      num2,
	      } = read2Numbers(
		index,
		numVersionBytes,
		numRootOpinionIdBytes,
		uint8Array
	)

	return {
		record: {
			id: num1,
			version: num2,
		},
		nextRecordIndex
	}
}

export function readIdAndCreateEsRecord(
	uint8Array,
	index
) {
	const byteMask = uint8Array[index]

	const numOpinionIdBytes = byteMask % 8 + 1
	const numCreateEsBytes  = (byteMask % 16 >> 3) + 4

	const {
		      id1,
		      id2,
		      nextRecordIndex
	      } = read2Numbers(
		index,
		numOpinionIdBytes,
		numCreateEsBytes,
		uint8Array
	)

	return {
		record: {
			createEs: id2,
			id: id1,
		},
		nextRecordIndex
	}
}

export function readIdRecords(
	idsArrayBuffer
) {
	if (!idsArrayBuffer) {
		return []
	}

	const uint8Array    = new Uint8Array(idsArrayBuffer)
	let haveMoreRecords = uint8Array.byteLength
	let currentIndex    = 0

	const ids = []

	while (haveMoreRecords) {
		const {
			      id1,
			      id2,
			      nextRecordIndex
		      } = readIdPairRecord(
			uint8Array,
			currentIndex
		)
		ids.push(id1)
		if (id2) {
			ids.push(id2)
		}

		haveMoreRecords = nextRecordIndex < uint8Array.byteLength
		currentIndex    = nextRecordIndex
	}

	return ids
}

function readIdPairRecord(
	uint8Array,
	index
) {
	const byteMask = uint8Array[index]

	const singleRecord = byteMask & 64
	const numId1Bytes  = (byteMask % 64 >> 3) + 1

	if (singleRecord) {
		const id1ByteIndex    = index + 1
		const nextRecordIndex = id1ByteIndex + numId1Bytes

		const id1 = readNumber(id1ByteIndex, nextRecordIndex, uint8Array)

		return {
			id1,
			nextRecordIndex
		}
	}

	const numId2Bytes = byteMask % 8 + 1
	return read2Numbers(index, numId1Bytes, numId2Bytes, uint8Array)
}

function read2Numbers(
	index,
	numId1Bytes,
	numId2Bytes,
	uint8Array
) {
	const id1ByteIndex    = index + 1
	const id2ByteIndex    = id1ByteIndex + numId1Bytes
	const nextRecordIndex = id2ByteIndex + numId2Bytes

	const num1 = readNumber(id1ByteIndex, id2ByteIndex, uint8Array)
	const num2 = readNumber(id2ByteIndex, nextRecordIndex, uint8Array)

	return {
		nextRecordIndex,
		num1,
		num2,
	}
}

function readNumber(
	firstIndex,
	lessThanIndex,
	uint8Array
) {
	let shiftMultiplier = 0
	let id              = 0
	for (let i = firstIndex; i < lessThanIndex; i++) {
		id += uint8Array[i] << (shiftMultiplier * 8)
		shiftMultiplier++
	}

	return id
}
