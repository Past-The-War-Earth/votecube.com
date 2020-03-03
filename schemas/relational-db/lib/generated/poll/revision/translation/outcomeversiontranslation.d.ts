import { IImmutableActorRow } from '../../../infrastructure/row/immutableactorrow';
import { IOutcomeVersion } from '../outcomeversion';
import { ILanguage } from '../../../infrastructure/language';
import { ITranslationType } from '../../../infrastructure/translationtype';
export interface IOutcomeVersionTranslation extends IImmutableActorRow {
    id: number;
    name?: string;
    outcomeVersion?: IOutcomeVersion;
    language?: ILanguage;
    type?: ITranslationType;
    parent?: IOutcomeVersionTranslation;
    children?: IOutcomeVersionTranslation[];
}
