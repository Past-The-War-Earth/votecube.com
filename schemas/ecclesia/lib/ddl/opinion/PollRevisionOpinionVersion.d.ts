import { PollRevisionOpinionVersion_Id } from '../../types/opinion/PollRevisionOpinionVersion';
import { ImmutableRow } from '../infrastructure/row/ImmutableRow';
import { PollRevisionOpinion } from './PollRevisionOpinion';
import { PollRevisionOpinionVersionTranslation } from './translation/PollRevisionOpinionVersionTranslation';
/**
 * This the computed translation (based on most pinned factor revision).
 *
 * This record is mutable, it's only got IDs so that's OK.
 *
 * Belongs to PollRevisionOpinion - does not need user tracking
 */
export declare class PollRevisionOpinionVersion extends ImmutableRow {
    id: PollRevisionOpinionVersion_Id;
    pollRevisionOpinion: PollRevisionOpinion;
    parent: PollRevisionOpinionVersion;
    children: PollRevisionOpinionVersion[];
    translations: PollRevisionOpinionVersionTranslation[];
}
//# sourceMappingURL=PollRevisionOpinionVersion.d.ts.map