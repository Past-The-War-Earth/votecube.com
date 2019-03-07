import {DI}                              from '@votecube/di'
import {EntityType, IPollLabel}          from '@votecube/model'
import {In}                              from '../../core/In'
import {Out}                             from '../../core/Out'
import {AJAX_Z_LABEL, AJAX_Z_POLL_LABEL} from '../../tokens'
import {Mode}                            from '../core/Mode'
import {ITempRecordId, ModelSerializer}  from '../core/ModelSerializer'
import {LabelSerializer}                 from './Label'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollLabelSerializer
	extends ModelSerializer<IPollLabel> {

	labelZ: LabelSerializer

	constructor() {
		super(EntityType.PLL_LBL)
		DI.get(
			di => {
				[this.labelZ] = di
			}, AJAX_Z_LABEL)
	}

	serializeRecord(
		model: IPollLabel,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): void {
		this.labelZ.serialize(model.label, out, tempRecordIds)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPollLabel {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_LABEL, PollLabelSerializer)
