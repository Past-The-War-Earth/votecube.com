import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_POLL_STATE } from '../../tokens';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollStateSerializer extends ModelSerializer {
    constructor() {
        super(EntityType.PLL_STT);
    }
    async serializeRecord(model, out, tempRecordIds) {
        out.num(model.state.id);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_POLL_STATE, PollStateSerializer);
//# sourceMappingURL=PollState.js.map