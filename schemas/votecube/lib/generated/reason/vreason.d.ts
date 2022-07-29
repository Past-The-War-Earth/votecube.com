import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { FactorVDescriptor } from '../factor/vfactor';
import { Factor } from '../../ddl/factor/Factor';
import { PositionVDescriptor } from '../factor/vposition';
import { Position } from '../../ddl/factor/Position';
export interface ReasonVDescriptor<T> extends AirEntityVDescriptor<T> {
    factor?: FactorVDescriptor<Factor>;
    position?: PositionVDescriptor<Position>;
}
//# sourceMappingURL=vreason.d.ts.map