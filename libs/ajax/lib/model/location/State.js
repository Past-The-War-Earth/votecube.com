import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_STATE } from '../../tokens';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class StateSerializer extends ModelSerializer {
    constructor() {
        super(EntityType.STT);
    }
    async serializeRecord(model, out, tempRecordIds) {
    }
    deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_STATE, StateSerializer);
//# sourceMappingURL=State.js.map