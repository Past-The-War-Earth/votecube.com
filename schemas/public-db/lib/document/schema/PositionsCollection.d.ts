import { IPositionDoc, IPositionPollDoc, Poll_Key, Position_Key } from '@votecube/model';
import { ICollection, ISchema } from './common';
import { IVCDocumentReference } from './DocRef';
import { RootCollection } from './RootCollection';
export interface IPositionsCollection extends ICollection<Position_Key, IPositionDoc> {
    positionPolls(keyOrReference: Position_Key | IVCDocumentReference<Position_Key, IPositionDoc>): ICollection<Poll_Key, IPositionPollDoc, Position_Key, IPositionDoc>;
}
export declare class PositionsCollection extends RootCollection<Position_Key, IPositionDoc> implements IPositionsCollection {
    constructor(schema: ISchema);
    positionPolls(keyOrReference: Position_Key | IVCDocumentReference<Position_Key, IPositionDoc>): ICollection<Poll_Key, IPositionPollDoc, Position_Key, IPositionDoc>;
}
