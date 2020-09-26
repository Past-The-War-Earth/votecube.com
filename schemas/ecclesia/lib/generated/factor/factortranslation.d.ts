import { IImmutableActorRow } from '../infrastructure/row/immutableactorrow';
import { IFactor } from './factor';
import { ILanguage } from '../infrastructure/language';
export interface IFactorTranslation extends IImmutableActorRow {
    id: number;
    name?: string;
    factor?: IFactor;
    language?: ILanguage;
    parent?: IFactorTranslation;
    children?: IFactorTranslation[];
    childFactors?: IFactor[];
}
//# sourceMappingURL=factortranslation.d.ts.map