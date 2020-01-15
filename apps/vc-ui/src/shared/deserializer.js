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
	      } = read2Ids(
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

export function readIdPairRecord(
	uint8Array,
	index
) {
	const byteMask = uint8Array[index]

	const singleRecord = byteMask & 64
	const numId1Bytes  = byteMask % 8 + 1

	if (singleRecord) {
		const id1ByteIndex    = index + 1
		const nextRecordIndex    = id1ByteIndex + numId1Bytes

		const id1 = readId(id1ByteIndex, nextRecordIndex, uint8Array)

		return {
			id1,
			nextRecordIndex
		}
	}

	const numId2Bytes = (byteMask % 64 >> 3) + 1
	return read2Ids(index, numId1Bytes, numId2Bytes, uint8Array)
}

function read2Ids(
	index,
	numId1Bytes,
	numId2Bytes,
	uint8Array
) {
	const id1ByteIndex    = index + 1
	const id2ByteIndex    = id1ByteIndex + numId1Bytes
	const nextRecordIndex = id2ByteIndex + numId2Bytes

	const id1 = readId(id1ByteIndex, id2ByteIndex, uint8Array)
	const id2 = readId(id2ByteIndex, nextRecordIndex, uint8Array)

	return {
		id1,
		id2,
		nextRecordIndex
	}
}

function readId(
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
