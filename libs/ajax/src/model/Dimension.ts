import {DI}               from '@votecube/di'
import {IDimension}       from '@votecube/model'
import {In}               from '../core/In'
import {Out}              from '../core/Out'
import {AJAX_Z_DIMENSION} from '../tokens'
import {Mode}             from './core/Mode'
import {ModelSerializer}  from './core/ModelSerializer'

export class DimensionSerializer
	extends ModelSerializer<IDimension> {

	serializeRecord(
		model: IDimension,
		out: Out
	): void {
		out.num(model.color.id)
		out.str(model.description)
		out.str(model.name)
		this.serialize(model.parent, out)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IDimension {
		return undefined
	}

}

DI.set(AJAX_Z_DIMENSION, DimensionSerializer)
