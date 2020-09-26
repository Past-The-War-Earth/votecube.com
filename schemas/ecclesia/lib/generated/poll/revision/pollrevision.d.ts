import { IAgeSuitableRow } from '../../infrastructure/row/agesuitablerow';
import { IPoll } from '../poll';
import { IPollRun } from '../run/pollrun';
import { IOutcome } from './outcome';
import { IPollRevisionTranslation } from './translation/pollrevisiontranslation';
import { IPollRevisionRating } from '../rating/pollrevisionrating';
import { IPollRevisionFactorPosition } from './pollrevisionfactorposition';
import { IPollRevisionOpinion } from '../../opinion/pollrevisionopinion';
export interface IPollRevision extends IAgeSuitableRow {
    id: number;
    depth?: number;
    poll?: IPoll;
    createdAtRun?: IPollRun;
    outcomeVersionA?: IOutcome;
    outcomeVersionB?: IOutcome;
    parent?: IPollRevision;
    parentTranslation?: IPollRevisionTranslation;
    children?: IPollRevision[];
    ratings?: IPollRevisionRating[];
    factorPositions?: IPollRevisionFactorPosition[];
    allTranslations?: IPollRevisionTranslation[];
    opinions?: IPollRevisionOpinion[];
}
//# sourceMappingURL=pollrevision.d.ts.map