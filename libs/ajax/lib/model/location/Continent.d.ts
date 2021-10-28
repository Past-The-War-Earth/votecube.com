import { IContinent } from '@votecube/model';
import { In } from '../../core/In';
import { Out } from '../../core/Out';
import { Mode } from '../core/Mode';
import { ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export declare class ContinentSerializer extends ModelSerializer<IContinent> {
    constructor();
    serializeRecord(model: IContinent, out: Out): Promise<void>;
    deserialize(mode: Mode, bin: In): Promise<IContinent>;
}
//# sourceMappingURL=Continent.d.ts.map