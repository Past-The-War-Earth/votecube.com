import { IUiRepositoryRecord } from './common';
import { IUiFactor } from './UiFactor';
import { IUiOutcome } from './UiOutcome';
import { IUiCategory } from './UiCategory';
export interface IUiSituation extends IUiRepositoryRecord {
    category: IUiCategory;
    factors: {
        1: IUiFactor;
        2: IUiFactor;
        3: IUiFactor;
    };
    name: string;
    outcomes: {
        A: IUiOutcome;
        B: IUiOutcome;
    };
}
//# sourceMappingURL=UiSituation.d.ts.map