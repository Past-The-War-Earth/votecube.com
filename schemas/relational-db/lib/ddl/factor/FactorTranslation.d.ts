import { FactorTranslation_Description, FactorTranslation_Id, FactorTranslation_Name } from '../../types/factor/FactorTranslation';
import { Language } from '../infrastructure/Language';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
import { Factor } from './Factor';
export declare class FactorTranslation extends ImmutableActorRow {
    id: FactorTranslation_Id;
    name: FactorTranslation_Name;
    description: FactorTranslation_Description;
    factor: Factor;
    language: Language;
    parent: FactorTranslation;
    children: FactorTranslation[];
    childFactors: Factor[];
}
