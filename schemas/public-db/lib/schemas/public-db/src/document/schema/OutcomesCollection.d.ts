import { IOutcomeDoc, IOutcomePollDoc, Outcome_Id, Poll_Id } from '@votecube/model';
import { ICollection, ISchema } from './common';
import { IVCDocumentReference } from './DocRef';
import { RootCollection } from './RootCollection';
export interface IOutcomesCollection extends ICollection<Outcome_Id, IOutcomeDoc> {
    outcomePolls(keyOrReference: Outcome_Id | IVCDocumentReference<Outcome_Id, IOutcomeDoc>): ICollection<Poll_Id, IOutcomePollDoc, Outcome_Id, IOutcomeDoc>;
}
export declare class OutcomesCollection extends RootCollection<Outcome_Id, IOutcomeDoc> implements IOutcomesCollection {
    constructor(schema: ISchema);
    outcomePolls(keyOrReference: Outcome_Id | IVCDocumentReference<Outcome_Id, IOutcomeDoc>): ICollection<Poll_Id, IOutcomePollDoc, Outcome_Id, IOutcomeDoc>;
}
