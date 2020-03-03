import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IFactor } from '../factor';
import { IPosition } from './position';
export interface IFactorPosition extends IImmutableActorRow {
    id: number;
    factor?: IFactor;
    position?: IPosition;
}
