import { IPollFactorPosition } from '@votecube/model';
import { In } from '../../core/In';
import { Out } from '../../core/Out';
import { Mode } from '../core/Mode';
import { ITempRecordId, ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export declare class PollFactorPositionSerializer extends ModelSerializer<IPollFactorPosition> {
    constructor();
    serializeRecord(model: IPollFactorPosition, out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    deserialize(mode: Mode, bin: In): Promise<IPollFactorPosition>;
    getAxisByte(axis: any): 0 | 1 | 2;
}
//# sourceMappingURL=PollFactorPosition.d.ts.map