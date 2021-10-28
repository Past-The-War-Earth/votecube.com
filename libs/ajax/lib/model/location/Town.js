import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_TOWN } from '../../tokens';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class TownSerializer extends ModelSerializer {
    constructor() {
        super(EntityType.TWN);
    }
    async serializeRecord(model, out, tempRecordIds) {
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_TOWN, TownSerializer);
//# sourceMappingURL=Town.js.map