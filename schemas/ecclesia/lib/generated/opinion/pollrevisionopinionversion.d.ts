import { IImmutableRow } from '../infrastructure/row/immutablerow';
import { IPollRevisionOpinion } from './pollrevisionopinion';
import { IPollRevisionOpinionVersionTranslation } from './translation/pollrevisionopinionversiontranslation';
export interface IPollRevisionOpinionVersion extends IImmutableRow {
    id: number;
    pollRevisionOpinion?: IPollRevisionOpinion;
    parent?: IPollRevisionOpinionVersion;
    children?: IPollRevisionOpinionVersion[];
    translations?: IPollRevisionOpinionVersionTranslation[];
}
//# sourceMappingURL=pollrevisionopinionversion.d.ts.map