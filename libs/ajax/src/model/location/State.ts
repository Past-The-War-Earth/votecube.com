import {DI}              from '@votecube/di'
import {IState}          from '@votecube/model'
import {In}              from '../../core/In'
import {Out}             from '../../core/Out'
import {AJAX_Z_STATE}    from '../../tokens'
import {Mode}            from '../core/Mode'
import {ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class StateSerializer
	extends ModelSerializer<IState> {

	serializeRecord(
		model: IState,
		out: Out
	): void {
	}

	deserialize(
		mode: Mode,
		bin: In
	): IState {
		return undefined
	}

}

DI.set(AJAX_Z_STATE, StateSerializer)
