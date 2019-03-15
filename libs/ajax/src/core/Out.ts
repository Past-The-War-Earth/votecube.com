import {IModel}                              from '@votecube/model'
import {Mode}                                from '../model/core/Mode'
import {ICursor}                             from './Cursor'
import {addBool, addDate, addNum, addString} from './serializer'

export class Out {

	byteArray: ArrayBuffer
	byteView: Uint8Array
	cursor: ICursor

	constructor(
		byteLength = 128000
	) {
		this.byteArray = new ArrayBuffer(byteLength)
		this.byteView  = new Uint8Array(this.byteArray)
		this.cursor    = {
			pos: 0
		}
	}

	arrayLen(
		array: any[]
	): void {
		addNum(array.length, this.byteView, this.cursor)
	}

	bool(
		bool: boolean
	): void {
		addBool(bool, this.byteView, this.cursor)
	}

	byte(
		byte: number
	): void {
		this.byteView[this.cursor.pos++] = byte
	}

	date(
		date: Date
	): void {
		addDate(date, this.byteView, this.cursor)
	}

	idArray<M extends IModel>(
		models: M[]
	): void {
		this.arrayLen(models)
		for (const model of models) {
			addNum(model.id, this.byteView, this.cursor)
		}
	}

	nil(): void {
		this.byte(Mode.NULL)
	}

	num(
		num: number
	): void {
		addNum(num, this.byteView, this.cursor)
	}

	str(
		str: string
	): void {
		addString(str, this.byteView, this.cursor)
	}

	toData(): ArrayBuffer {
		return this.byteArray.slice(0, this.cursor.pos)
	}

}
