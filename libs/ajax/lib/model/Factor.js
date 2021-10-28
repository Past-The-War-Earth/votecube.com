import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_FACTOR } from '../tokens';
import { ModelSerializer } from './core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class FactorSerializer extends ModelSerializer {
    constructor() {
        super(EntityType.DIM);
    }
    async serializeRecord(model, out, tempRecordIds) {
        // out.num(model.color.id)
        // out.str(model.description)
        out.str(model.name);
        await this.serialize(model.parent, out, tempRecordIds);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_FACTOR, FactorSerializer);
//# sourceMappingURL=Factor.js.map