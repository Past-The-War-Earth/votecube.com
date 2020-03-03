import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_COUNTY } from '../../tokens';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class CountySerializer extends ModelSerializer {
    constructor() {
        super(EntityType.CNTY);
    }
    async serializeRecord(model, out, tempRecordIds) {
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_COUNTY, CountySerializer);
//# sourceMappingURL=County.js.map