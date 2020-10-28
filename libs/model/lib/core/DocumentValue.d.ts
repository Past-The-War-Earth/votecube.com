import { AgeSuitability } from '@votecube/ecclesia';
import { DocStatus, IsDelta, IsDoc } from './common';
export declare type DocumentValue_Delta = number;
export interface IDocumentValue<T> {
    v: T;
    d: DocumentValue_Delta;
}
export interface ICoreAgeSuitabilityTracked<Doc extends DocStatus> {
    ageSuitability: Doc extends IsDoc ? IDocumentValue<AgeSuitability> : Doc extends IsDelta ? boolean : AgeSuitability;
}
//# sourceMappingURL=DocumentValue.d.ts.map