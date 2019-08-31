import {DI}   from '@airport/di'
import {
	EntityType,
	IPollLabel
}             from '@votecube/model'
import {In}   from '../../core/In'
import {Out}  from '../../core/Out'
import {
	AJAX_Z_LABEL,
	AJAX_Z_POLL_LABEL
}             from '../../tokens'
import {Mode} from '../core/Mode'
import {
	ITempRecordId,
	ModelSerializer
}             from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollLabelSerializer
	extends ModelSerializer<IPollLabel> {

	constructor() {
		super(EntityType.PLL_LBL)
	}

	async serializeRecord(
		model: IPollLabel,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		const labelZ = await DI.get(AJAX_Z_LABEL)

		await labelZ.serialize(model.label, out, tempRecordIds)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPollLabel {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_LABEL, PollLabelSerializer)
