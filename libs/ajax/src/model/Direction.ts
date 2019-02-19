import {DI}               from '@votecube/di'
import {IDirection}       from '@votecube/model'
import {In}               from '../core/In'
import {Out}              from '../core/Out'
import {AJAX_Z_DIRECTION} from '../tokens'
import {Mode}             from './core/Mode'
import {ModelSerializer}  from './core/ModelSerializer'

export class DirectionSerializer
	extends ModelSerializer<IDirection> {

	serializeRecord(
		model: IDirection,
		out: Out
	): void {
		out.nil() // emoji
		out.nil() // design pattern
		out.str(model.name)
		this.serialize(model.parent, out)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IDirection {
		return undefined
	}

}

DI.set(AJAX_Z_DIRECTION, DirectionSerializer)
