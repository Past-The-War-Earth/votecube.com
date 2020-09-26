import { Town_Id, TownName } from '../../types/location/Town';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
import { County } from './County';
export declare class Town extends SystemGeneratedRow {
    id: Town_Id;
    county: County;
    name: TownName;
}
//# sourceMappingURL=Town.d.ts.map