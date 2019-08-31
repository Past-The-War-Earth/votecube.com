import {DI}                             from '@airport/di'
import {EntityType, ILabel}             from '@votecube/model'
import {In}                             from '../../core/In'
import {Out}                            from '../../core/Out'
import {AJAX_Z_LABEL}                   from '../../tokens'
import {Mode}                           from '../core/Mode'
import {ITempRecordId, ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class LabelSerializer
	extends ModelSerializer<ILabel> {

	constructor() {
		super(EntityType.LBL);
	}

	async serializeRecord(
		model: ILabel,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		out.str(model.description)
		out.str(model.name)
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<ILabel>  {
		return undefined
	}

}

DI.set(AJAX_Z_LABEL, LabelSerializer)
