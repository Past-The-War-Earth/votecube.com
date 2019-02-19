/**
 * https://stackoverflow.com/questions/8482309/converting-javascript-integer-to-byte-array-and-back
 *
 * MODIFIED
 */
import {ICursor} from './Cursor'

export function addString(
	str: string,
	bytes: Uint8Array,
	cursor: ICursor
): void {
	const strBytes = strToUtf8Bytes(str)

	addBigArray(bytes, strBytes, cursor)
}

export function addNum(
	num: number,
	bytes: Uint8Array,
	cursor: ICursor
): void {
	const numBytes = naturalNumToBytes(num)

	addArray(bytes, numBytes, cursor)
}

export function addDate(
	date: Date,
	bytes: Uint8Array,
	cursor: ICursor
): void {
	addNum(date.getTime(), bytes, cursor)
}

export function addBool(
	bool: boolean,
	bytes: Uint8Array,
	cursor: ICursor
): void {
	bytes[cursor.pos++] = bool ? 1 : 0
}

function addBigArray(
	bytes: Uint8Array,
	bigArray: number[],
	cursor: ICursor
): void {
	const bigArrayLengthBytes = naturalNumToBytes(bigArray.length)
	bytes[cursor.pos++]       = naturalNumToBytes(bigArrayLengthBytes.length)[0]
	bytes.set(bigArrayLengthBytes, cursor.pos)
	cursor.pos += bigArrayLengthBytes.length
	bytes.set(bigArray, cursor.pos)
	cursor.pos += bigArray.length
}

function addArray(
	bytes: Uint8Array,
	array: number[],
	cursor: ICursor
): void {
	bytes[cursor.pos++] = naturalNumToBytes(array.length)[0]
	bytes.set(array, cursor.pos)
	cursor.pos += array.length
}

function naturalNumToBytes(
	naturalNumber: number
): number[] {
	// we want to represent the input as a 8-bytes array
	const byteArray: number[] = []

	while (naturalNumber > 0) {
		const byte = naturalNumber & 0xff
		byteArray.push(byte)
		naturalNumber = (naturalNumber - byte) / 256

	}

	return byteArray
}

/**
 * https://stackoverflow.com/questions/6226189/how-to-convert-a-string-to-bytearray
 *
 * Convert a string to a unicode byte array
 * @param {string} str
 * @return {Array} of bytes
 */
function strToUtf8Bytes(
	str: string
): number[] {
	const utf8: number[] = []
	for (let ii = 0; ii < str.length; ii++) {
		let charCode = str.charCodeAt(ii)
		if (charCode < 0x80) {
			utf8.push(charCode)
		} else if (charCode < 0x800) {
			utf8.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f))
		} else if (charCode < 0xd800 || charCode >= 0xe000) {
			utf8.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f))
		} else {
			ii++
			// Surrogate pair:
			// UTF-16 encodes 0x10000-0x10FFFF by subtracting 0x10000 and
			// splitting the 20 bits of 0x0-0xFFFFF into two halves
			charCode = 0x10000 + (((charCode & 0x3ff) << 10) | (str.charCodeAt(ii) & 0x3ff))
			utf8.push(
				0xf0 | (charCode >> 18),
				0x80 | ((charCode >> 12) & 0x3f),
				0x80 | ((charCode >> 6) & 0x3f),
				0x80 | (charCode & 0x3f),
			)
		}
	}

	return utf8
}
