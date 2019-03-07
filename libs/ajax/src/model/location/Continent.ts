import {DI}                     from '@votecube/di'
import {EntityType, IContinent} from '@votecube/model'
import {In}                     from '../../core/In'
import {Out}                    from '../../core/Out'
import {AJAX_Z_CONTINENT}       from '../../tokens'
import {Mode}                   from '../core/Mode'
import {ModelSerializer}        from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class ContinentSerializer
	extends ModelSerializer<IContinent> {

	constructor() {
		super(EntityType.CNTNNT)
	}

	serializeRecord(
		model: IContinent,
		out: Out
	): void {
	}

	deserialize(
		mode: Mode,
		bin: In
	): IContinent {
		return undefined
	}

}

DI.set(AJAX_Z_CONTINENT, ContinentSerializer)
