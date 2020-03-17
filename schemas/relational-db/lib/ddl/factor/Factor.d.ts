import { Factor_Id } from '../../types/factor/Factor';
import { AgeSuitableRow } from '../infrastructure/row/AgeSuitableRow';
import { PollRevision } from '../poll/revision/PollRevision';
import { FactorTranslation } from './FactorTranslation';
import { FactorPosition } from './position/FactorPosition';
export declare class Factor extends AgeSuitableRow {
    id: Factor_Id;
    createdAtPollRevision: PollRevision;
    parentTranslation: FactorTranslation;
    parent: Factor;
    children: Factor[];
    factorPositions: FactorPosition[];
}
