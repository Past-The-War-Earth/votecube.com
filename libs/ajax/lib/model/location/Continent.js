import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_CONTINENT } from '../../tokens';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class ContinentSerializer extends ModelSerializer {
    constructor() {
        super(EntityType.CNTNNT);
    }
    async serializeRecord(model, out) {
        // TODO: implement
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_CONTINENT, ContinentSerializer);
//# sourceMappingURL=Continent.js.map