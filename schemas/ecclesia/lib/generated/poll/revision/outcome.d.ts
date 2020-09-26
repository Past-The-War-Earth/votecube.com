import { IAgeSuitableRow } from '../../infrastructure/row/agesuitablerow';
import { IOutcomeTranslation } from './translation/outcometranslation';
import { IPollRevision } from './pollrevision';
export interface IOutcome extends IAgeSuitableRow {
    id: number;
    parentTranslation?: IOutcomeTranslation;
    parent?: IOutcome;
    children?: IOutcome[];
    pollRevisionsA?: IPollRevision[];
    pollRevisionsB?: IPollRevision[];
}
//# sourceMappingURL=outcome.d.ts.map