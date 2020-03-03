import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_POLL_COUNTY } from '../../tokens';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollCountySerializer extends ModelSerializer {
    constructor() {
        super(EntityType.PLL_CNTY);
    }
    async serializeRecord(model, out, tempRecordIds) {
        out.num(model.county.id);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_POLL_COUNTY, PollCountySerializer);
//# sourceMappingURL=PollCounty.js.map