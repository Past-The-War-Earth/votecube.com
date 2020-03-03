import { IPositionDoc, IPositionPollDoc, Poll_Id, Position_Id } from '@votecube/model';
import { ICollection, ISchema } from './common';
import { IVCDocumentReference } from './DocRef';
import { RootCollection } from './RootCollection';
export interface IPositionsCollection extends ICollection<Position_Id, IPositionDoc> {
    positionPolls(keyOrReference: Position_Id | IVCDocumentReference<Position_Id, IPositionDoc>): ICollection<Poll_Id, IPositionPollDoc, Position_Id, IPositionDoc>;
}
export declare class PositionsCollection extends RootCollection<Position_Id, IPositionDoc> implements IPositionsCollection {
    constructor(schema: ISchema);
    positionPolls(keyOrReference: Position_Id | IVCDocumentReference<Position_Id, IPositionDoc>): ICollection<Poll_Id, IPositionPollDoc, Position_Id, IPositionDoc>;
}
