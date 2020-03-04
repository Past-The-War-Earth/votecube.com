import { IImmutableActorRow } from '../../../infrastructure/row/immutableactorrow';
import { IOutcome } from '../outcome';
import { ILanguage } from '../../../infrastructure/language';
import { ITranslationType } from '../../../infrastructure/translationtype';
export interface IOutcomeTranslation extends IImmutableActorRow {
    id: number;
    name?: string;
    outcomeVersion?: IOutcome;
    language?: ILanguage;
    type?: ITranslationType;
    parent?: IOutcomeTranslation;
    children?: IOutcomeTranslation[];
}
