import { IPollRevisionOpinion } from './pollrevisionopinion';
import { IOutcome } from '../poll/revision/outcome';
import { IOutcomeOpinionVersionTranslation } from './translation/outcomeopinionversiontranslation';
export interface IOutcomeOpinionVersion {
    id: number;
    pollRevisionOpinion?: IPollRevisionOpinion;
    outcome?: IOutcome;
    parent?: IOutcomeOpinionVersion;
    children?: IOutcomeOpinionVersion[];
    translations?: IOutcomeOpinionVersionTranslation[];
}
