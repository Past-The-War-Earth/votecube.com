import { DI } from '@airport/di';
import { EntityType } from '@votecube/model';
import { AJAX_Z_POSITION } from '../tokens';
import { ModelSerializer } from './core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PositionSerializer extends ModelSerializer {
    constructor() {
        super(EntityType.DIR);
    }
    async serializeRecord(model, out, tempRecordIds) {
        // out.nil() // emoji
        // out.nil() // design pattern
        out.str(model.name);
        await this.serialize(model.parent, out, tempRecordIds);
    }
    async deserialize(mode, bin) {
        return undefined;
    }
}
DI.set(AJAX_Z_POSITION, PositionSerializer);
//# sourceMappingURL=Position.js.map