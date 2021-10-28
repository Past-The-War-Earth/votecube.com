import { IPollContinent } from '@votecube/model';
import { In } from '../../core/In';
import { Out } from '../../core/Out';
import { Mode } from '../core/Mode';
import { ITempRecordId, ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export declare class PollContinentSerializer extends ModelSerializer<IPollContinent> {
    constructor();
    serializeRecord(model: IPollContinent, out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    deserialize(mode: Mode, bin: In): Promise<IPollContinent>;
}
//# sourceMappingURL=PollContinent.d.ts.map