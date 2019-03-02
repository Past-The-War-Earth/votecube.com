import {IModel} from '@votecube/model'
import {In}     from '../../core/In'
import {Out}    from '../../core/Out'
import {Mode}   from './Mode'

export const MODE_CREATE    = 0x00
export const MODE_REFERENCE = 0x01
export const MODE_RECORD    = 0x02

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export interface IModelSerializer<M extends IModel> {

	serialize(
		model: M,
		out: Out
	): void

	serializeArray(
		models: M[],
		out: Out
	): void

	serializeRecord(
		model: M,
		out: Out
	): void

	deserialize(
		mode: Mode,
		bin: In
	): M

}

export abstract class ModelSerializer<M extends IModel>
	implements IModelSerializer<M> {

	tempMap: Map<number, M> = new Map()
	lastTempId: number      = 0

	serialize(
		model: M,
		out: Out
	): void {
		if (!model) {
			out.nil()
			return
		}

		let id = model.id
		if (id) {
			out.byte(Mode.REFERENCE)
			out.num(id)
		} else {
			id       = --this.lastTempId
			model.id = id
			out.byte(Mode.RECORD)
			out.num(-id)
			this.serializeRecord(model, out)
		}
	}

	serializeArray(
		models: M[],
		out: Out
	): void {
		out.num(models.length)
		for (const model of models) {
			this.serialize(model, out)
		}
	}

	abstract serializeRecord(
		model: M,
		out: Out
	): void;

	abstract deserialize(
		mode: Mode,
		bin: In
	): M;

}
