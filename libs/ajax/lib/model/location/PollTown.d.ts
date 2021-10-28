import { IPollTown } from '@votecube/model';
import { In } from '../../core/In';
import { Out } from '../../core/Out';
import { Mode } from '../core/Mode';
import { ITempRecordId, ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export declare class PollTownSerializer extends ModelSerializer<IPollTown> {
    constructor();
    serializeRecord(model: IPollTown, out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    deserialize(mode: Mode, bin: In): Promise<IPollTown>;
}
//# sourceMappingURL=PollTown.d.ts.map