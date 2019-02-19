import {DI}              from '@votecube/di'
import {ILabel}          from '@votecube/model'
import {In}              from '../../core/In'
import {Out}             from '../../core/Out'
import {AJAX_Z_LABEL}    from '../../tokens'
import {Mode}            from '../core/Mode'
import {ModelSerializer} from '../core/ModelSerializer'

export class LabelSerializer
	extends ModelSerializer<ILabel> {

	serializeRecord(
		model: ILabel,
		out: Out
	): void {
		out.str(model.description)
		out.str(model.name)
	}

	deserialize(
		mode: Mode,
		bin: In
	): ILabel {
		return undefined
	}

}

DI.set(AJAX_Z_LABEL, LabelSerializer)
