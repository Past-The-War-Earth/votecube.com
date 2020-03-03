import { Factor_Id } from '../../types/factor/Factor';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
import { PollRevision } from '../poll/revision/PollRevision';
import { FactorSkin } from './FactorSkin';
import { FactorTranslation } from './FactorTranslation';
import { FactorPosition } from './position/FactorPosition';
export declare class Factor extends ImmutableActorRow {
    id: Factor_Id;
    createdAtPollRevision: PollRevision;
    parentTranslation: FactorTranslation;
    parent: Factor;
    children: Factor[];
    factorPositions: FactorPosition[];
    skins: FactorSkin[];
}
