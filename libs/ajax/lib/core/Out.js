import { Mode } from '../model/core/Mode';
import { addBool, addDate, addNum, addString } from './serializer';
export class Out {
    constructor(byteLength = 128000) {
        this.byteArray = new ArrayBuffer(byteLength);
        this.byteView = new Uint8Array(this.byteArray);
        this.cursor = {
            pos: 0
        };
    }
    arrayLen(array) {
        addNum(array.length, this.byteView, this.cursor);
    }
    bool(bool) {
        addBool(bool, this.byteView, this.cursor);
    }
    byte(byte) {
        this.byteView[this.cursor.pos++] = byte;
    }
    date(date) {
        addDate(date, this.byteView, this.cursor);
    }
    idArray(models) {
        this.arrayLen(models);
        for (const model of models) {
            addNum(model.id, this.byteView, this.cursor);
        }
    }
    nil() {
        this.byte(Mode.NULL);
    }
    num(num) {
        addNum(num, this.byteView, this.cursor);
    }
    str(str) {
        addString(str, this.byteView, this.cursor);
    }
    toData() {
        return this.byteArray.slice(0, this.cursor.pos);
    }
}
//# sourceMappingURL=Out.js.map