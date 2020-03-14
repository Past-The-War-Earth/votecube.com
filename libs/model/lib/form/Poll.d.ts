import { Outcome_Name, PollRevisionTranslation_Name } from '@votecube/relational-db';
import { IFactorForm } from './Factor';
import { IThemeForm } from './Theme';
export interface IPollForm {
    factors: IPollFactorsForm;
    name: PollRevisionTranslation_Name;
    outcomes: IPollOutcomesForm;
    theme: IThemeForm;
}
export interface IPollFactorsForm {
    1: IFactorForm;
    2: IFactorForm;
    3: IFactorForm;
}
export interface IPollOutcomesForm {
    A: Outcome_Name;
    B: Outcome_Name;
}
