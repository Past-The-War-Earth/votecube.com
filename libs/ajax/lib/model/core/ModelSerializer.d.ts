import { EntityType, Id, IModel } from '@votecube/model';
import { In } from '../../core/In';
import { Out } from '../../core/Out';
import { Mode } from './Mode';
export declare const MODE_CREATE = 0;
export declare const MODE_REFERENCE = 1;
export declare const MODE_RECORD = 2;
export interface ITempRecordId {
    tempId: Id;
    type: EntityType;
}
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export interface IModelSerializer<M extends IModel> {
    serialize(model: M, out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    serializeArray(models: M[], out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    serializeRecord(model: M, out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    deserialize(mode: Mode, bin: In): Promise<M>;
}
export declare abstract class ModelSerializer<M extends IModel> implements IModelSerializer<M> {
    private entityType;
    lastTempId: Id;
    constructor(entityType: EntityType);
    serialize(model: M, out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    serializeArray(models: M[], out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    abstract serializeRecord(model: M, out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    abstract deserialize(mode: Mode, bin: In): Promise<M>;
}
