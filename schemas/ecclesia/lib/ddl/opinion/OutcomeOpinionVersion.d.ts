import { OutcomeOpinionVersion_Id } from '../../types/opinion/OutcomeOpinionVersion';
import { Outcome } from '../poll/revision/Outcome';
import { PollRevisionOpinion } from './PollRevisionOpinion';
import { OutcomeOpinionVersionTranslation } from './translation/OutcomeOpinionVersionTranslation';
export declare class OutcomeOpinionVersion {
    id: OutcomeOpinionVersion_Id;
    pollRevisionOpinion: PollRevisionOpinion;
    outcome: Outcome;
    parent: OutcomeOpinionVersion;
    children: OutcomeOpinionVersion[];
    translations: OutcomeOpinionVersionTranslation[];
}
//# sourceMappingURL=OutcomeOpinionVersion.d.ts.map