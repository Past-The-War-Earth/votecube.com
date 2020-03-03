import { FactorSkin_BackgroundColor, FactorSkin_Id, FactorSkin_TextColor } from '../../types/factor/FactorSkin';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
import { PollRevision } from '../poll/revision/PollRevision';
import { Factor } from './Factor';
export declare class FactorSkin extends ImmutableActorRow {
    id: FactorSkin_Id;
    backgroundColor: FactorSkin_BackgroundColor;
    textColor: FactorSkin_TextColor;
    pollRevision: PollRevision;
    factor: Factor;
    parent: FactorSkin;
    children: FactorSkin[];
}
