import { OutcomeOpinionVersion_Id } from '../../types/opinion/OutcomeOpinionVersion';
import { PollRevisionOpinionVersion } from './PollRevisionOpinionVersion';
import { OutcomeOpinionVersionTranslation } from './translation/OutcomeOpinionVersionTranslation';
export declare class OutcomeOpinionVersion {
    id: OutcomeOpinionVersion_Id;
    pollRevisionOpinionVersion: PollRevisionOpinionVersion;
    translations: OutcomeOpinionVersionTranslation[];
}
