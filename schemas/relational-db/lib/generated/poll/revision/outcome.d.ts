import { IOutcomeTranslation } from './translation/outcometranslation';
import { IPollRevision } from './pollrevision';
export interface IOutcome {
    id: number;
    key?: string;
    name?: string;
    parentTranslation?: IOutcomeTranslation;
    parent?: IOutcome;
    children?: IOutcome[];
    pollRevisionsA?: IPollRevision[];
    pollRevisionsB?: IPollRevision[];
}
