import { IPosition } from '@votecube/model';
import { In } from '../core/In';
import { Out } from '../core/Out';
import { Mode } from './core/Mode';
import { ITempRecordId, ModelSerializer } from './core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export declare class PositionSerializer extends ModelSerializer<IPosition> {
    constructor();
    serializeRecord(model: IPosition, out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    deserialize(mode: Mode, bin: In): Promise<IPosition>;
}
