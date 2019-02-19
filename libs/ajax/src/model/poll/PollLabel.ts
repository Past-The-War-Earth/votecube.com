import {DI}                              from '@votecube/di'
import {IPollLabel}                      from '@votecube/model'
import {In}                              from '../../core/In'
import {Out}                             from '../../core/Out'
import {AJAX_Z_LABEL, AJAX_Z_POLL_LABEL} from '../../tokens'
import {Mode}                            from '../core/Mode'
import {ModelSerializer}                 from '../core/ModelSerializer'
import {LabelSerializer}                 from './Label'

export class PollLabelSerializer
	extends ModelSerializer<IPollLabel> {

	labelZ: LabelSerializer

	constructor() {
		super()
		DI.get(
			di => {
				[this.labelZ] = di
			}, AJAX_Z_LABEL)
	}

	serializeRecord(
		model: IPollLabel,
		out: Out
	): void {
		this.labelZ.serialize(model.label, out)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPollLabel {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_LABEL, PollLabelSerializer)
