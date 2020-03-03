import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_LABEL } from '../../tokens';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class LabelSerializer extends ModelSerializer {
    constructor() {
        super(EntityType.LBL);
    }
    async serializeRecord(model, out, tempRecordIds) {
        out.str(model.description);
        out.str(model.name);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_LABEL, LabelSerializer);
//# sourceMappingURL=Label.js.map