import { PositionTranslation_Description, PositionTranslation_Id } from '../../../types/factor/position/PositionTranslation';
import { Language } from '../../infrastructure/Language';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { Position } from './Position';
export declare class PositionTranslation extends ImmutableActorRow {
    id: PositionTranslation_Id;
    description: PositionTranslation_Description;
    position: Position;
    language: Language;
    parent: PositionTranslation;
    children: PositionTranslation[];
}
