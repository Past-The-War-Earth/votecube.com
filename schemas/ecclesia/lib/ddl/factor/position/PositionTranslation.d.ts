import { PositionTranslation_Id, PositionTranslation_Name } from '../../../types/factor/position/PositionTranslation';
import { Language } from '../../infrastructure/Language';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { Position } from './Position';
export declare class PositionTranslation extends ImmutableActorRow {
    id: PositionTranslation_Id;
    name: PositionTranslation_Name;
    position: Position;
    language: Language;
    parent: PositionTranslation;
    children: PositionTranslation[];
}
//# sourceMappingURL=PositionTranslation.d.ts.map