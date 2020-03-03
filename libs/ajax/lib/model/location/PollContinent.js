import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_POLL_CONTINENT } from '../../tokens';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollContinentSerializer extends ModelSerializer {
    constructor() {
        super(EntityType.PLL_CNTNNT);
    }
    async serializeRecord(model, out, tempRecordIds) {
        out.num(model.continent.id);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_POLL_CONTINENT, PollContinentSerializer);
//# sourceMappingURL=PollContinent.js.map