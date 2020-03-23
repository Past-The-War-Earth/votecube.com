"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addString(str, bytes, cursor) {
    const strBytes = strToUtf8Bytes(str);
    addBigArray(bytes, strBytes, cursor);
}
exports.addString = addString;
function addNum(num, bytes, cursor) {
    const numBytes = naturalNumToBytes(num);
    addArray(bytes, numBytes, cursor);
}
exports.addNum = addNum;
function addDate(date, bytes, cursor) {
    addNum(date.getTime(), bytes, cursor);
}
exports.addDate = addDate;
function addBool(bool, bytes, cursor) {
    bytes[cursor.pos++] = bool ? 1 : 0;
}
exports.addBool = addBool;
function addBigArray(bytes, bigArray, cursor) {
    const bigArrayLengthBytes = naturalNumToBytes(bigArray.length);
    if (bigArrayLengthBytes.length) {
        bytes[cursor.pos++] = naturalNumToBytes(bigArrayLengthBytes.length)[0];
        bytes.set(bigArrayLengthBytes, cursor.pos);
        cursor.pos += bigArrayLengthBytes.length;
        bytes.set(bigArray, cursor.pos);
        cursor.pos += bigArray.length;
    }
    else {
        bytes[cursor.pos++] = 0;
    }
}
function addArray(bytes, array, cursor) {
    let arrayLengthBytes = naturalNumToBytes(array.length);
    if (arrayLengthBytes.length) {
        bytes[cursor.pos++] = arrayLengthBytes[0];
        bytes.set(array, cursor.pos);
        cursor.pos += array.length;
    }
    else {
        bytes[cursor.pos++] = 0;
    }
}
function naturalNumToBytes(naturalNumber) {
    // we want to represent the input as a 8-bytes array
    const byteArray = [];
    while (naturalNumber > 0) {
        const byte = naturalNumber & 0xff;
        byteArray.push(byte);
        naturalNumber = (naturalNumber - byte) / 256;
    }
    return byteArray;
}
/**
 * https://stackoverflow.com/questions/6226189/how-to-convert-a-string-to-bytearray
 *
 * Convert a string to a unicode byte array
 * @param {string} str
 * @return {Array} of bytes
 */
function strToUtf8Bytes(str) {
    const utf8 = [];
    for (let ii = 0; ii < str.length; ii++) {
        let charCode = str.charCodeAt(ii);
        if (charCode < 0x80) {
            utf8.push(charCode);
        }
        else if (charCode < 0x800) {
            utf8.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
        }
        else if (charCode < 0xd800 || charCode >= 0xe000) {
            utf8.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
        }
        else {
            ii++;
            // Surrogate pair:
            // UTF-16 encodes 0x10000-0x10FFFF by subtracting 0x10000 and
            // splitting the 20 bits of 0x0-0xFFFFF into two halves
            charCode = 0x10000 + (((charCode & 0x3ff) << 10) | (str.charCodeAt(ii) & 0x3ff));
            utf8.push(0xf0 | (charCode >> 18), 0x80 | ((charCode >> 12) & 0x3f), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
        }
    }
    return utf8;
}
//# sourceMappingURL=serializer.js.map