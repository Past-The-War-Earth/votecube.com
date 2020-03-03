import { IPollRevision } from './pollrevision';
export interface IOutcomeVersion {
    id: number;
    parent?: IOutcomeVersion;
    children?: IOutcomeVersion[];
    pollRevisionsA?: IPollRevision[];
    pollRevisionsB?: IPollRevision[];
}
