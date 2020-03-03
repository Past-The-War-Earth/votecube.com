import { IImmutableActorRow } from '../infrastructure/row/immutableactorrow';
import { IPollRevision } from '../poll/revision/pollrevision';
import { IFactor } from './factor';
export interface IFactorSkin extends IImmutableActorRow {
    id: number;
    backgroundColor?: number;
    textColor?: number;
    pollRevision?: IPollRevision;
    factor?: IFactor;
    parent?: IFactorSkin;
    children?: IFactorSkin[];
}
