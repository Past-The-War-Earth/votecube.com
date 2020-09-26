import { IPollRevisionOpinion } from './pollrevisionopinion';
import { IFactor } from '../factor/factor';
import { IFactorOpinionVersionTranslation } from './translation/factoropinionversiontranslation';
export interface IFactorOpinionVersion {
    id: number;
    pollRevisionOpinion?: IPollRevisionOpinion;
    factor?: IFactor;
    parent?: IFactorOpinionVersion;
    children?: IFactorOpinionVersion[];
    translations?: IFactorOpinionVersionTranslation[];
}
//# sourceMappingURL=factoropinionversion.d.ts.map