import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_LABEL, AJAX_Z_POLL_LABEL } from '../../tokens';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollLabelSerializer extends ModelSerializer {
    constructor() {
        super(EntityType.PLL_LBL);
    }
    async serializeRecord(model, out, tempRecordIds) {
        const labelZ = await DI.get(AJAX_Z_LABEL);
        await labelZ.serialize(model.label, out, tempRecordIds);
    }
    deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_POLL_LABEL, PollLabelSerializer);
//# sourceMappingURL=PollLabel.js.map