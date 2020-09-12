import { IAgeSuitableRow } from '../infrastructure/row/agesuitablerow';
import { IPollRevision } from '../poll/revision/pollrevision';
import { IFactorTranslation } from './factortranslation';
import { IFactorPosition } from './position/factorposition';
export interface IFactor extends IAgeSuitableRow {
    id: number;
    createdAtPollRevision?: IPollRevision;
    parentTranslation?: IFactorTranslation;
    parent?: IFactor;
    children?: IFactor[];
    factorPositions?: IFactorPosition[];
    translations?: IFactorTranslation[];
}
