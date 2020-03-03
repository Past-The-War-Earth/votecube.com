import { Factor_Id, IFactorDoc, IFactorPollDoc, IFactorPositionDoc, Poll_Id, Position_Id } from '@votecube/model';
import { ICollection, ISchema } from './common';
import { IVCDocumentReference } from './DocRef';
import { RootCollection } from './RootCollection';
export interface IFactorsCollection extends ICollection<Factor_Id, IFactorDoc> {
    factorPolls(keyOrReference: Factor_Id | IVCDocumentReference<Factor_Id, IFactorDoc>): ICollection<Poll_Id, IFactorPollDoc, Factor_Id, IFactorDoc>;
    factorPositions(keyOrReference: Factor_Id | IVCDocumentReference<Factor_Id, IFactorDoc>): ICollection<Position_Id, IFactorPositionDoc, Factor_Id, IFactorDoc>;
}
export declare class FactorsCollection extends RootCollection<Factor_Id, IFactorDoc> implements IFactorsCollection {
    constructor(schema: ISchema);
    factorPolls(keyOrReference: Factor_Id | IVCDocumentReference<Factor_Id, IFactorDoc>): ICollection<Poll_Id, IFactorPollDoc, Factor_Id, IFactorDoc>;
    factorPositions(keyOrReference: Factor_Id | IVCDocumentReference<Factor_Id, IFactorDoc>): ICollection<Position_Id, IFactorPositionDoc, Factor_Id, IFactorDoc>;
}
