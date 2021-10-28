import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_FACTOR, AJAX_Z_FACTOR_POSITION, AJAX_Z_POSITION } from '../tokens';
import { ModelSerializer } from './core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class FactorPositionSerializer extends ModelSerializer {
    constructor() {
        super(EntityType.DIM_DIR);
    }
    async serializeRecord(model, out, tempRecordIds) {
        const [factorZ, positionZ] = await DI.get(AJAX_Z_FACTOR, AJAX_Z_POSITION);
        await factorZ.serialize(model.factor, out, tempRecordIds);
        await positionZ.serialize(model.position, out, tempRecordIds);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_FACTOR_POSITION, FactorPositionSerializer);
//# sourceMappingURL=FactorPosition.js.map