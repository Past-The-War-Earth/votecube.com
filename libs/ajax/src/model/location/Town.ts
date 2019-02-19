import {DI}              from '@votecube/di'
import {ITown}           from '@votecube/model'
import {In}              from '../../core/In'
import {Out}             from '../../core/Out'
import {AJAX_Z_TOWN}     from '../../tokens'
import {Mode}            from '../core/Mode'
import {ModelSerializer} from '../core/ModelSerializer'

export class TownSerializer
	extends ModelSerializer<ITown> {

	serializeRecord(
		model: ITown,
		out: Out
	): void {
	}

	deserialize(
		mode: Mode,
		bin: In
	): ITown {
		return undefined
	}

}

DI.set(AJAX_Z_TOWN, TownSerializer)
