import { IModel } from '@votecube/model';
export interface IObjectStore<Entity> {
    add(record: Entity, skipExistingServerRecord?: boolean, skipExistingAirRecord?: boolean): Promise<void>;
}
export declare class ObjectStore<Entity extends IModel> {
    private store;
    constructor(store: IDBObjectStore);
    add(record: Entity, skipExistingServerRecord?: boolean, skipExistingAirRecord?: boolean): Promise<void>;
}
