import { ITown } from '@votecube/model';
import { In } from '../../core/In';
import { Out } from '../../core/Out';
import { Mode } from '../core/Mode';
import { ITempRecordId, ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export declare class TownSerializer extends ModelSerializer<ITown> {
    constructor();
    serializeRecord(model: ITown, out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    deserialize(mode: Mode, bin: In): Promise<ITown>;
}
//# sourceMappingURL=Town.d.ts.map