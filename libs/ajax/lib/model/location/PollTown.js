import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_POLL_TOWN } from '../../tokens';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollTownSerializer extends ModelSerializer {
    constructor() {
        super(EntityType.PLL_TWN);
    }
    async serializeRecord(model, out, tempRecordIds) {
        out.num(model.town.id);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_POLL_TOWN, PollTownSerializer);
//# sourceMappingURL=PollTown.js.map