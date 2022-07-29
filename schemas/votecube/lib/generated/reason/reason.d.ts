import { IAirEntity } from '@airport/holding-pattern';
import { IFactor } from '../factor/factor';
import { IPosition } from '../factor/position';
export interface IReason extends IAirEntity {
    factor?: IFactor;
    position?: IPosition;
}
//# sourceMappingURL=reason.d.ts.map