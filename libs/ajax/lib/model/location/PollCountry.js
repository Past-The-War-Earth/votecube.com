import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_POLL_COUNTRY } from '../../tokens';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollCountrySerializer extends ModelSerializer {
    constructor() {
        super(EntityType.PLL_CNTRY);
    }
    async serializeRecord(model, out, tempRecordIds) {
        out.num(model.country.id);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_POLL_COUNTRY, PollCountrySerializer);
//# sourceMappingURL=PollCountry.js.map