import { IPollRevision } from './pollrevision';
export interface IOutcome {
    id: number;
    parent?: IOutcome;
    children?: IOutcome[];
    pollRevisionsA?: IPollRevision[];
    pollRevisionsB?: IPollRevision[];
}
