import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IPoll } from '../poll';
import { IPollRun } from '../run/pollrun';
import { IOutcome } from './outcome';
import { IPollRevisionRating } from '../rating/pollrevisionrating';
import { IPollRevisionFactorPosition } from './pollrevisionfactorposition';
import { IPollRevisionTranslation } from './translation/pollrevisiontranslation';
import { IPollRevisionOpinion } from '../../opinion/pollrevisionopinion';
export interface IPollRevision extends IImmutableActorRow {
    id: number;
    ageSuitability?: number;
    depth?: number;
    poll?: IPoll;
    createdAtRun?: IPollRun;
    outcomeVersionA?: IOutcome;
    outcomeVersionB?: IOutcome;
    parent?: IPollRevision;
    children?: IPollRevision[];
    ratings?: IPollRevisionRating[];
    factorPositions?: IPollRevisionFactorPosition[];
    allTranslations?: IPollRevisionTranslation[];
    opinions?: IPollRevisionOpinion[];
}
