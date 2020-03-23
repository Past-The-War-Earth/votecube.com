"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mode_1 = require("../model/core/Mode");
const serializer_1 = require("./serializer");
class Out {
    constructor(byteLength = 128000) {
        this.byteArray = new ArrayBuffer(byteLength);
        this.byteView = new Uint8Array(this.byteArray);
        this.cursor = {
            pos: 0
        };
    }
    arrayLen(array) {
        serializer_1.addNum(array.length, this.byteView, this.cursor);
    }
    bool(bool) {
        serializer_1.addBool(bool, this.byteView, this.cursor);
    }
    byte(byte) {
        this.byteView[this.cursor.pos++] = byte;
    }
    date(date) {
        serializer_1.addDate(date, this.byteView, this.cursor);
    }
    idArray(models) {
        this.arrayLen(models);
        for (const model of models) {
            serializer_1.addNum(model.id, this.byteView, this.cursor);
        }
    }
    nil() {
        this.byte(Mode_1.Mode.NULL);
    }
    num(num) {
        serializer_1.addNum(num, this.byteView, this.cursor);
    }
    str(str) {
        serializer_1.addString(str, this.byteView, this.cursor);
    }
    toData() {
        return this.byteArray.slice(0, this.cursor.pos);
    }
}
exports.Out = Out;
//# sourceMappingURL=Out.js.map