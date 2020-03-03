import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IPosition } from './position';
import { ILanguage } from '../../infrastructure/language';
export interface IPositionTranslation extends IImmutableActorRow {
    id: number;
    description?: string;
    position?: IPosition;
    language?: ILanguage;
    parent?: IPositionTranslation;
    children?: IPositionTranslation[];
}
