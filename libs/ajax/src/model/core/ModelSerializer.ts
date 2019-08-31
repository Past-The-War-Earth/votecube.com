import {EntityType, Id, IModel} from '@votecube/model'
import {In}                     from '../../core/In'
import {Out}                    from '../../core/Out'
import {Mode}                   from './Mode'

export const MODE_CREATE    = 0x00
export const MODE_REFERENCE = 0x01
export const MODE_RECORD    = 0x02

export interface ITempRecordId {
	tempId: Id
	type: EntityType,
}

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export interface IModelSerializer<M extends IModel> {

	serialize(
		model: M,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void>

	serializeArray(
		models: M[],
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void>

	serializeRecord(
		model: M,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void>

	deserialize(
		mode: Mode,
		bin: In
	): Promise<M>

}

export abstract class ModelSerializer<M extends IModel>
	implements IModelSerializer<M> {

	lastTempId: Id          = 0

	constructor(
		private entityType: EntityType
	) {
	}

	async serialize(
		model: M,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		if (!model) {
			out.nil()
			return
		}

		const id = model.id
		if (id) {
			out.byte(Mode.REFERENCE)
			out.num(id)
		} else {
			const tempId = --this.lastTempId
			out.byte(Mode.RECORD)
			tempRecordIds.push({
				tempId: --this.lastTempId,
				type: this.entityType,
			})
			this.serializeRecord(model, out, tempRecordIds)
		}
	}

	async serializeArray(
		models: M[],
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		out.num(models.length)
		for (const model of models) {
			await this.serialize(model, out, tempRecordIds)
		}
	}

	abstract serializeRecord(
		model: M,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void>;

	abstract deserialize(
		mode: Mode,
		bin: In
	): Promise<M>;

}
