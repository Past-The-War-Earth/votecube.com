/**
 * https://stackoverflow.com/questions/8482309/converting-javascript-integer-to-byte-array-and-back
 *
 * MODIFIED
 */
import {ICursor} from './Cursor'

export function bytesToNaturalNum(
	bytes: Uint8Array,
	cursor: ICursor,
	length: number
): number {
	let value = 0
	for (let i = length - 1; i >= 0; i--) {
		value = (value * 256) + bytes[cursor.pos + i]
	}

	cursor.pos += length

	return value
}

const charCache      = new Array(128)  // Preallocate the cache for the common single byte chars
const charFromCodePt = String.fromCodePoint || String.fromCharCode

/**
 * https://stackoverflow.com/questions/8936984/uint8array-to-string-in-javascript
 */
export function utf8BytesToStr(
	bytes: Uint8Array,
	length: number
) {
	let byte1: number, codePt: number

	const result: string[] = []
	for (let i = 0; i < length;) {
		byte1 = bytes[i++]
		switch (byte1 >> 4) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				// 0xxxxxxx
				codePt = byte1
				break
			case 12:
			case 13:
				// 110x xxxx   10xx xxxx
				codePt = ((byte1 & 0x1F) << 6) | (bytes[i++] & 0x3F)
				break
			case 14:
				// 1110 xxxx  10xx xxxx  10xx xxxx
				codePt = ((byte1 & 0x0F) << 12) | ((bytes[i++] & 0x3F) << 6) | (bytes[i++] & 0x3F)
				break
			default:
				// 1111 xxxx  10xx xxxx  10xx xxxx  10xx xxxx
				if (String.fromCodePoint) {
					codePt = ((byte1 & 0x07) << 18) | ((bytes[i++] & 0x3F) << 12) | ((bytes[i++] & 0x3F) << 6) | (bytes[i++] & 0x3F)
				} else {
					codePt = 63    // Cannot convert four byte code points, so use "?" instead
					i += 3
				}
				break
		}
		result.push(charCache[codePt] || (charCache[codePt] = charFromCodePt(codePt)))
	}

	return result.join('')
}
